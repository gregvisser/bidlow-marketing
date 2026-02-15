"use client";

import * as React from "react";
import { useFormState } from "react-dom";

import { submitContact, type ContactActionState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { companySizeOptions } from "@/lib/validation";

const initialState: ContactActionState = { status: "idle" };

function ErrorText({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1 text-sm text-destructive">{children}</p>;
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  const [clientErrors, setClientErrors] = React.useState<Record<string, string>>(
    {}
  );
  const [companySize, setCompanySize] = React.useState<string>("");

  const serverFieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  function validateClient(form: HTMLFormElement) {
    const fd = new FormData(form);
    const next: Record<string, string> = {};

    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const size = String(fd.get("companySize") ?? "").trim();

    if (name.length < 2) next.name = "Please enter your name.";
    if (company.length < 2) next.company = "Please enter your company name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email.";
    if (!size) next.companySize = "Please select a company size.";
    if (message.length < 10)
      next.message = "Please add a little more detail (10+ characters).";

    setClientErrors(next);
    return Object.keys(next).length === 0;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={formAction}
          className="grid gap-5"
          onSubmit={(e) => {
            const ok = validateClient(e.currentTarget);
            if (!ok) e.preventDefault();
          }}
          noValidate
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" autoComplete="name" required />
              <ErrorText>
                {clientErrors.name ??
                  (serverFieldErrors?.name
                    ? serverFieldErrors.name[0]
                    : undefined)}
              </ErrorText>
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" autoComplete="organization" required />
              <ErrorText>
                {clientErrors.company ??
                  (serverFieldErrors?.company
                    ? serverFieldErrors.company[0]
                    : undefined)}
              </ErrorText>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" autoComplete="email" required />
              <ErrorText>
                {clientErrors.email ??
                  (serverFieldErrors?.email
                    ? serverFieldErrors.email[0]
                    : undefined)}
              </ErrorText>
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label>Company size</Label>
              <input type="hidden" name="companySize" value={companySize} />
              <Select value={companySize} onValueChange={setCompanySize}>
                <SelectTrigger aria-label="Select company size">
                  <SelectValue placeholder="Select…" />
                </SelectTrigger>
                <SelectContent>
                  {companySizeOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorText>
                {clientErrors.companySize ??
                  (serverFieldErrors?.companySize
                    ? serverFieldErrors.companySize[0]
                    : undefined)}
              </ErrorText>
            </div>
            <div className="hidden md:block" aria-hidden />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="What are you trying to improve? What’s currently getting in the way?"
            />
            <ErrorText>
              {clientErrors.message ??
                (serverFieldErrors?.message
                  ? serverFieldErrors.message[0]
                  : undefined)}
            </ErrorText>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit">Send message</Button>
            {state.status === "success" ? (
              <p className="text-sm text-muted-foreground">{state.message}</p>
            ) : state.status === "error" ? (
              <p className="text-sm text-destructive">{state.message}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                We’ll reply by email within 1–2 working days.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

