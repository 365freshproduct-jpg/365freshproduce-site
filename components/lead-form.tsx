"use client";

import type { FormEvent } from "react";
import { useState, useTransition } from "react";

import type { Locale } from "@/lib/site-data";
import type { SolutionKey } from "@/lib/site-data";

type SystemOption = {
  key: SolutionKey;
  label: string;
  description: string;
};

type LeadFormLabels = {
  width: string;
  length: string;
  name: string;
  phone: string;
  email: string;
  comment: string;
};

type LeadFormProps = {
  locale: Locale;
  areaLabel: string;
  systemsLabel: string;
  submitLabel: string;
  successMessage: string;
  labels: LeadFormLabels;
  systemOptions: SystemOption[];
};

type FormFields = {
  width: string;
  length: string;
  name: string;
  phone: string;
  email: string;
  comment: string;
  systems: SolutionKey[];
};

type FormErrors = Partial<Record<keyof Omit<FormFields, "systems"> | "systems" | "submit", string>>;

const initialFields: FormFields = {
  width: "",
  length: "",
  name: "",
  phone: "",
  email: "",
  comment: "",
  systems: [],
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function LeadForm({
  locale,
  areaLabel,
  systemsLabel,
  submitLabel,
  successMessage,
  labels,
  systemOptions,
}: LeadFormProps) {
  const [isPending, startTransition] = useTransition();
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const width = Number.parseFloat(fields.width);
  const length = Number.parseFloat(fields.length);
  const area = Number.isFinite(width) && Number.isFinite(length) && width > 0 && length > 0 ? width * length : 0;

  function updateField<K extends keyof Omit<FormFields, "systems">>(key: K, value: FormFields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined, submit: undefined }));
    setStatus({ type: "idle", message: "" });
  }

  function toggleSystem(key: SolutionKey) {
    setFields((current) => {
      const exists = current.systems.includes(key);

      return {
        ...current,
        systems: exists ? current.systems.filter((item) => item !== key) : [...current.systems, key],
      };
    });
    setErrors((current) => ({ ...current, systems: undefined, submit: undefined }));
    setStatus({ type: "idle", message: "" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!(width > 0)) {
      nextErrors.width = "Enter a valid greenhouse width.";
    }

    if (!(length > 0)) {
      nextErrors.length = "Enter a valid greenhouse length.";
    }

    if (!fields.name.trim()) {
      nextErrors.name = "Enter your name.";
    }

    if (!fields.phone.trim()) {
      nextErrors.phone = "Enter a phone number.";
    }

    if (!isValidEmail(fields.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (fields.systems.length === 0) {
      nextErrors.systems = "Select at least one system.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: "error", message: "Please complete the required fields." });
      return;
    }

    setErrors({});
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          ...fields,
          area,
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message ?? "Unable to send the request right now.",
        });
        return;
      }

      startTransition(() => {
        setFields(initialFields);
        setStatus({ type: "success", message: result.message ?? successMessage });
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Unable to send the request right now. Please try again later.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="panel-light space-y-8 p-7 sm:p-9" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="width" className="mb-2 block text-sm font-medium text-graphite/80">
            {labels.width}
          </label>
          <input
            id="width"
            type="number"
            min="0"
            step="0.1"
            value={fields.width}
            onChange={(event) => updateField("width", event.target.value)}
            className="input-field"
            placeholder="40"
          />
          {errors.width ? <p className="mt-2 text-sm text-red-600">{errors.width}</p> : null}
        </div>

        <div>
          <label htmlFor="length" className="mb-2 block text-sm font-medium text-graphite/80">
            {labels.length}
          </label>
          <input
            id="length"
            type="number"
            min="0"
            step="0.1"
            value={fields.length}
            onChange={(event) => updateField("length", event.target.value)}
            className="input-field"
            placeholder="120"
          />
          {errors.length ? <p className="mt-2 text-sm text-red-600">{errors.length}</p> : null}
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-canvas/15 bg-[linear-gradient(135deg,rgba(16,129,194,1),rgba(8,95,150,1))] px-5 py-5 text-white">
        <p className="text-xs uppercase tracking-[0.28em] text-white/60">{areaLabel}</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <p className="font-display text-4xl font-semibold sm:text-5xl">
            {area > 0 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(area) : "0"}
          </p>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
            m²
          </span>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-graphite/80">{systemsLabel}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {systemOptions.map((option) => {
            const active = fields.systems.includes(option.key);

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => toggleSystem(option.key)}
                className={`rounded-[1.5rem] border p-4 text-left transition ${
                  active
                    ? "border-canvas bg-canvas text-white shadow-panel"
                    : "border-black/10 bg-white text-graphite hover:border-canvas/40 hover:bg-stone"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">{option.label}</p>
                    <p className={`mt-1 text-sm ${active ? "text-white/70" : "text-graphite/60"}`}>
                      {option.description}
                    </p>
                  </div>
                  <span
                    className={`mt-0.5 inline-flex h-5 w-5 shrink-0 rounded-full border ${
                      active ? "border-white bg-white/10" : "border-black/20"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
        {errors.systems ? <p className="mt-2 text-sm text-red-600">{errors.systems}</p> : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-graphite/80">
            {labels.name}
          </label>
          <input
            id="name"
            type="text"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="input-field"
            placeholder="John Carter"
          />
          {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-graphite/80">
            {labels.phone}
          </label>
          <input
            id="phone"
            type="tel"
            value={fields.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="input-field"
            placeholder="+374 00 000 000"
          />
          {errors.phone ? <p className="mt-2 text-sm text-red-600">{errors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-graphite/80">
          {labels.email}
        </label>
        <input
          id="email"
          type="email"
          value={fields.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="input-field"
          placeholder="john@company.com"
        />
        {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="comment" className="mb-2 block text-sm font-medium text-graphite/80">
          {labels.comment}
        </label>
        <textarea
          id="comment"
          rows={5}
          value={fields.comment}
          onChange={(event) => updateField("comment", event.target.value)}
          className="textarea-field"
          placeholder="Crop type, target launch date, site location, utilities, preferred technologies..."
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-pine px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#6eab1e] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending..." : submitLabel}
        </button>
        <p
          className={`text-sm ${
            status.type === "error" ? "text-red-600" : status.type === "success" ? "text-canvas" : "text-graphite/60"
          }`}
          aria-live="polite"
        >
          {status.message || "Your inquiry will be formatted for the engineering team and sent to company email."}
        </p>
      </div>
    </form>
  );
}
