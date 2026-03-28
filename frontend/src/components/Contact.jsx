import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { CheckCircle2, CircleAlert, Mail, Send, Sparkles } from "lucide-react";
import { contactInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECEIVER_EMAIL = "aniket24086@gmail.com";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const isEmailConfigured = useMemo(
    () => Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY),
    []
  );

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please add a short message.";
    } else if (form.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!validate()) return;

    if (!isEmailConfigured) {
      setStatus({
        type: "error",
        message: "Email service is not configured yet. Add your EmailJS environment variables to enable the form.",
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: RECEIVER_EMAIL,
            from_name: form.name.trim(),
            from_email: form.email.trim(),
            reply_to: form.email.trim(),
            message: form.message.trim(),
          },
        }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Unable to send message right now.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent successfully.",
      });
    } catch (error) {
      const message =
        error.message?.includes("recipients address is empty")
          ? "EmailJS template configuration is incomplete. Set the recipient email in EmailJS."
          : error.message || "Unable to send your message right now. Please try again later.";

      setStatus({ type: "error", message });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="content-width space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about building useful software together."
          description="If you are hiring, collaborating, or just want to discuss a project idea, feel free to reach out. I am especially interested in internship and entry-level opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="surface-card p-8"
          >
            <div className="flex items-center gap-3 text-[var(--accent-strong)]">
              <Sparkles size={20} />
              <p className="text-sm font-semibold uppercase tracking-[0.35em]">Reach Out</p>
            </div>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-5 py-4 transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">{item.label}</p>
                  <p className="mt-2 font-medium text-[var(--text-primary)]">{item.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-[var(--border-color)] bg-[var(--surface-subtle)] p-5">
              <div className="flex items-center gap-3 text-[var(--text-primary)]">
                <Mail size={18} />
                <p className="font-semibold">Response-friendly portfolio</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                The form includes validation, loading state feedback, and clear success or failure messaging to keep the experience professional.
              </p>
            </div>
          </Motion.div>

          <Motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="surface-card p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--text-primary)]">Your Name</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent-soft)]"
                />
                {errors.name ? <span className="text-sm text-rose-400">{errors.name}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--text-primary)]">Email Address</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent-soft)]"
                />
                {errors.email ? <span className="text-sm text-rose-400">{errors.email}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--text-primary)]">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, role, or project."
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent-soft)]"
                />
                {errors.message ? <span className="text-sm text-rose-400">{errors.message}</span> : null}
              </label>

              {status.message ? (
                <div
                  className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                      : "border-rose-500/40 bg-rose-500/10 text-rose-300"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle2 size={18} /> : <CircleAlert size={18} />}
                  <span>{status.message}</span>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={17} />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </Motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
