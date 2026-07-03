import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { contactInfo, personalInfo } from "../data/portfolioData";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ICONS = { Email: "✉️", GitHub: "🐙", LinkedIn: "💼" };

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const isConfigured = useMemo(
    () => Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY),
    []
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please add a message.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    if (!isConfigured) {
      setStatus({ type: "info", message: "EmailJS not configured yet. Please set up your .env file." });
      return;
    }

    setIsSending(true);
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: personalInfo.email },
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Try emailing me directly." });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => { const n = { ...er }; delete n[e.target.name]; return n; });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Ready To Get <span style={{ color: "var(--yellow)" }}>Started?</span>
          </h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.55)", marginInline: "auto", marginTop: "0.75rem" }}>
            You know about me, let's talk about you. Shoot a message and I'll respond within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: contact info */}
          <div className="contact-info">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-item-icon">{ICONS[item.label] || "🔗"}</span>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              </a>
            ))}

            {/* CTA blurb */}
            <div
              style={{
                marginTop: "auto",
                padding: "1.5rem",
                background: "rgba(255,107,44,0.12)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(255,107,44,0.2)",
              }}
            >
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
                🚀 Currently open to internships, freelance projects, and collaborative builds. Prefer fast-moving, product-minded teams.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span style={{ fontSize: "0.78rem", color: "#f87171" }}>{errors.name}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span style={{ fontSize: "0.78rem", color: "#f87171" }}>{errors.email}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span style={{ fontSize: "0.78rem", color: "#f87171" }}>{errors.message}</span>
              )}
            </div>

            {status.message && (
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.85rem",
                  background:
                    status.type === "success"
                      ? "rgba(34,197,94,0.12)"
                      : status.type === "error"
                        ? "rgba(239,68,68,0.12)"
                        : "rgba(255,255,255,0.08)",
                  color:
                    status.type === "success"
                      ? "#4ade80"
                      : status.type === "error"
                        ? "#f87171"
                        : "rgba(255,255,255,0.7)",
                  border: `1px solid ${status.type === "success" ? "rgba(34,197,94,0.25)" : status.type === "error" ? "rgba(239,68,68,0.25)" : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {status.message}
              </div>
            )}

            <button type="submit" className="form-submit" disabled={isSending}>
              {isSending ? "Sending…" : (
                <>
                  Shoot Message <Send size={15} style={{ marginLeft: 6, display: "inline" }} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
