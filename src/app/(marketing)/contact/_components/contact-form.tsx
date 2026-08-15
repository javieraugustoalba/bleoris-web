"use client";

import { useActionState, useEffect, useRef } from "react";
import type { FormEvent } from "react";

import { submitContactInquiry } from "@/app/(marketing)/contact/actions";
import {
  contactFieldLimits,
  contactInquiryTypes,
} from "@/config/contact";
import type {
  ContactFormErrors,
  ContactFormField,
  ContactFormState,
} from "@/types/contact";

const initialState: ContactFormState = {
  errors: {},
  message: "",
  status: "idle",
  values: {
    company: "",
    email: "",
    inquiryType: "",
    message: "",
    name: "",
  },
};

const inputClasses =
  "min-h-12 w-full rounded-control border border-border-control bg-surface px-4 py-3 text-base text-ink shadow-[0_1px_2px_rgb(11_16_32/0.03)] transition-[border-color,box-shadow,background-color] duration-fast ease-brand placeholder:text-subtle hover:border-ink focus:border-brand-blue focus:bg-white focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--brand-blue)_10%,transparent)]";

interface FieldErrorProps {
  readonly errors: ContactFormErrors;
  readonly field: ContactFormField;
}

function FieldError({ errors, field }: FieldErrorProps) {
  const error = errors[field];

  if (!error) {
    return null;
  }

  return (
    <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-red-700" id={`${field}-error`}>
      <span aria-hidden="true" className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-red-600" />
      {error}
    </p>
  );
}

function describedBy(
  field: ContactFormField,
  errors: ContactFormErrors,
  helpId?: string,
) {
  return [helpId, errors[field] ? `${field}-error` : undefined]
    .filter(Boolean)
    .join(" ") || undefined;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactInquiry,
    initialState,
  );
  const statusRef = useRef<HTMLDivElement>(null);
  const submissionIdRef = useRef<HTMLInputElement>(null);
  const isDeliveryProblem =
    state.status === "delivery_failure" ||
    state.status === "delivery_unavailable";

  useEffect(() => {
    if (state.status !== "idle") {
      statusRef.current?.focus();
    }
  }, [state]);

  const prepareSubmission = (event: FormEvent<HTMLFormElement>) => {
    if (pending) {
      event.preventDefault();
      return;
    }

    if (submissionIdRef.current && !submissionIdRef.current.value) {
      submissionIdRef.current.value = crypto.randomUUID();
    }
  };

  const resetSubmissionId = () => {
    if (!pending && submissionIdRef.current) {
      submissionIdRef.current.value = "";
    }
  };

  if (state.status === "success") {
    return (
      <div
        className="rounded-panel border border-brand-teal/35 bg-brand-teal/[0.055] p-6 shadow-soft sm:p-8"
        ref={statusRef}
        role="status"
        tabIndex={-1}
      >
        <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
          Message sent
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink">
          Thank you for the context.
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      aria-busy={pending}
      aria-describedby="contact-form-intro"
      className="contact-form-field relative overflow-hidden rounded-panel border border-border bg-surface p-5 shadow-soft sm:p-7 lg:p-9"
      id="contact-form"
      onChange={resetSubmissionId}
      onSubmit={prepareSubmission}
    >
      <input name="submissionId" ref={submissionIdRef} type="hidden" />

      <div className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
      </div>

      <div className="border-b border-border pb-7 sm:pb-8">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-accent-blue uppercase">
          01 · Interest
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
          What would you like to discuss?
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted" id="contact-form-intro">
          Choose the closest fit. You can add any nuance in your message.
        </p>
      </div>

      {state.status !== "idle" ? (
        <div
          className={`mt-6 rounded-control border px-4 py-3 text-sm leading-6 ${
            isDeliveryProblem
              ? "border-red-300 bg-red-50 text-red-800"
              : "border-brand-solar/80 bg-brand-solar/15 text-ink"
          }`}
          ref={statusRef}
          role="alert"
          tabIndex={-1}
        >
          <p className="font-semibold">
            {isDeliveryProblem
              ? "Your message was not sent."
              : "Some information needs attention."}
          </p>
          <p className="mt-1">{state.message}</p>
          {state.status === "validation_error" ? (
            <ul className="mt-2 list-disc pl-5">
              {Object.entries(state.errors).map(([field, error]) => (
                <li key={field}>
                  <a className="underline underline-offset-2" href={`#${field}`}>
                    {error}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <fieldset
        aria-describedby={describedBy("inquiryType", state.errors)}
        className="mt-7 sm:mt-8"
        id="inquiryType"
        tabIndex={-1}
      >
        <legend className="text-sm font-semibold text-ink">
          Interest <span className="font-normal text-muted">(required)</span>
        </legend>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {contactInquiryTypes.map((inquiry) => (
            <label
              className="flex min-h-36 cursor-pointer items-start gap-3 rounded-control border border-border-control bg-white p-4 transition-[border-color,background-color,box-shadow,transform] duration-fast ease-brand hover:-translate-y-px hover:border-brand-blue hover:shadow-soft has-checked:border-brand-blue has-checked:bg-brand-blue/[0.045] has-checked:shadow-[0_0_0_1px_color-mix(in_srgb,var(--brand-blue)_18%,transparent)]"
              key={inquiry.value}
            >
              <input
                className="mt-1 size-4 shrink-0 accent-brand-blue"
                defaultChecked={state.values.inquiryType === inquiry.value}
                name="inquiryType"
                required
                type="radio"
                value={inquiry.value}
              />
              <span>
                <span className="block text-xs font-semibold tracking-[0.1em] text-ink uppercase">
                  {inquiry.label}
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted">
                  {inquiry.description}
                </span>
              </span>
            </label>
          ))}
        </div>
        <FieldError errors={state.errors} field="inquiryType" />
      </fieldset>

      <div className="mt-10 border-t border-border pt-7 sm:mt-12 sm:pt-8">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-accent-violet uppercase">
          02 · Context
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
          Tell us what you&apos;re working on.
        </h2>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-7">
          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="name">
              Name <span className="font-normal text-muted">(required)</span>
            </label>
            <input
              aria-describedby={describedBy("name", state.errors)}
              aria-invalid={Boolean(state.errors.name)}
              autoComplete="name"
              className={`${inputClasses} mt-2 ${state.errors.name ? "border-red-400" : ""}`}
              defaultValue={state.values.name}
              id="name"
              maxLength={contactFieldLimits.name}
              name="name"
              required
              type="text"
            />
            <FieldError errors={state.errors} field="name" />
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="email">
              Work email <span className="font-normal text-muted">(required)</span>
            </label>
            <input
              aria-describedby={describedBy("email", state.errors)}
              aria-invalid={Boolean(state.errors.email)}
              autoCapitalize="none"
              autoComplete="email"
              className={`${inputClasses} mt-2 ${state.errors.email ? "border-red-400" : ""}`}
              defaultValue={state.values.email}
              id="email"
              inputMode="email"
              maxLength={contactFieldLimits.email}
              name="email"
              required
              spellCheck={false}
              type="email"
            />
            <FieldError errors={state.errors} field="email" />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-ink" htmlFor="company">
              Company <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              aria-describedby={describedBy("company", state.errors)}
              aria-invalid={Boolean(state.errors.company)}
              autoComplete="organization"
              className={`${inputClasses} mt-2 ${state.errors.company ? "border-red-400" : ""}`}
              defaultValue={state.values.company}
              id="company"
              maxLength={contactFieldLimits.company}
              name="company"
              type="text"
            />
            <FieldError errors={state.errors} field="company" />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-ink" htmlFor="message">
              Message <span className="font-normal text-muted">(required)</span>
            </label>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted" id="message-help">
              Briefly describe the problem, what you want to build or improve,
              relevant systems if any, and where Bleoris may be able to help.
              Include only what is useful.
            </p>
            <textarea
              aria-describedby={describedBy("message", state.errors, "message-help")}
              aria-invalid={Boolean(state.errors.message)}
              className={`${inputClasses} mt-3 min-h-44 resize-y ${state.errors.message ? "border-red-400" : ""}`}
              defaultValue={state.values.message}
              id="message"
              maxLength={contactFieldLimits.message}
              name="message"
              placeholder="What are you trying to build, improve, automate, or understand?"
              required
              rows={7}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <FieldError errors={state.errors} field="message" />
              <p className="mt-2 shrink-0 text-xs text-subtle">
                Up to {contactFieldLimits.message.toLocaleString()} characters
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <button
          className="inline-flex min-h-12 w-full items-center justify-center rounded-pill border border-ink bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition-[color,background-color,border-color,box-shadow,transform] duration-base ease-brand hover:-translate-y-px hover:bg-surface-dark hover:shadow-elevated disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0 sm:w-auto"
          disabled={pending}
          type="submit"
        >
          {pending ? "Sending…" : "Send inquiry"}
        </button>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
          Submit only information you are comfortable sharing for the purpose of
          this conversation.
        </p>
      </div>
    </form>
  );
}
