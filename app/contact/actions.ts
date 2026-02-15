"use server";

import { safeParseContact } from "@/lib/validation";

export type ContactActionState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const payload = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    companySize: String(formData.get("companySize") ?? ""),
    message: String(formData.get("message") ?? "")
  };

  const parsed = safeParseContact(payload);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors
    };
  }

  // Placeholder “delivery”: log on the server. Replace with email provider later.
  // Do NOT log secrets. This is only customer-submitted text.
  console.info("[Bidlow contact] New enquiry", {
    ...parsed.data,
    receivedAt: new Date().toISOString()
  });

  return {
    status: "success",
    message:
      "Thanks — your message has been received. We’ll reply by email within 1–2 working days."
  };
}

