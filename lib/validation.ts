import { z } from "zod";

export const companySizeOptions = [
  "1–10",
  "11–50",
  "51–200",
  "201–1,000",
  "1,000+"
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .optional()
    .transform((v) => (v?.trim() ? v.trim() : undefined)),
  companySize: z.enum(companySizeOptions, {
    errorMap: () => ({ message: "Please select a company size." })
  }),
  message: z.string().min(10, "Please add a little more detail (10+ characters).")
});

export type ContactInput = z.infer<typeof contactSchema>;

export function safeParseContact(input: unknown) {
  return contactSchema.safeParse(input);
}

