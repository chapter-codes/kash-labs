"use client";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import type { ContactFormstate } from "../types";
import { LoaderCircle } from "lucide-react";

type ContactFormType = {
  action: (
    prevState: ContactFormstate,
    formData: FormData
  ) => Promise<typeof initialState>;
};

export const initialState: ContactFormstate = {
  success: false,
  error: {},
};

export default function contactForm({
  action: handleContactForm,
}: ContactFormType) {
  const [state, action, pending] = useActionState(
    handleContactForm,
    initialState
  );

  return (
    <form
      action={action}
      className="basis-1/2 flex flex-col gap-5 max-w-[600px]"
      autoComplete="off"
    >
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          className="h-11 w-full border rounded-lg pl-6.5"
          defaultValue={state.name || ""}
          required
        />
        <p className="text-sm text-red-400 py-2">
          {state.error?.name ? state.error?.name + "*" : null}
        </p>
      </label>
      <label htmlFor="email">
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={state.email || ""}
          className="h-11 w-full border rounded-lg pl-6.5"
          required
        />
        <p className="text-sm text-red-400 py-2">
          {state.error?.email ? state.error?.email + "*" : null}
        </p>
      </label>
      <label htmlFor="message">
        <textarea
          name="message"
          id="message"
          className="h-40 w-full border resize-none rounded-lg pl-6.5 pt-5"
          placeholder="Type your message here"
          defaultValue={state.message || ""}
          required
        ></textarea>
        <p className="text-sm text-red-400 py-2">
          {state.error?.message ? state.error?.message + "*" : null}
        </p>
      </label>
      <Button type="submit" className="w-full md:max-w-fit md:self-end">
        {pending ? <LoaderCircle className="animate-spin w-8" /> : "submit"}
      </Button>
    </form>
  );
}
