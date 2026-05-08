"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

type ContactStatus = {
  state: "idle" | "pending" | "success" | "error";
  message: string;
};

export default function contactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<ContactStatus>({
    state: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.state === "pending") return;

    setStatus({ state: "pending", message: "Sending message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus({
          state: "error",
          message: result.error || "Unable to send message.",
        });
      } else {
        setStatus({ state: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus({
        state: "error",
        message: "Unable to send message. Please try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="email">
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="h-11 w-full border rounded-lg pl-6.5"
          required
        />
      </label>
      <label htmlFor="message">
        <textarea
          name="message"
          id="message"
          className="h-40 w-full border resize-none rounded-lg pl-6.5 pt-5"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      {status.message ? (
        <p
          className={`text-sm ${status.state === "error" ? "text-red-400" : "text-emerald-500"}`}
        >
          {status.message}
        </p>
      ) : null}
      <Button type="submit" className="w-full md:max-w-fit md:self-end">
        {status.state === "pending" ? (
          <LoaderCircle className="animate-spin w-5 h-5" />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
