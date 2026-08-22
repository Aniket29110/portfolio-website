import { useMemo, useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { contactInfo, personalInfo } from "../data/portfolioData";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ICONS = { Email: "✉️", GitHub: "🐙", LinkedIn: "💼" };

// ─── Split-flap word reveal ───────────────────────────────────────
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

const SplitFlapWord = ({ word, delay = 0 }) => {
  const [displayed, setDisplayed] = useState(
    word.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    word.split("").forEach((char, i) => {
      let iterations = 0;
      const max = 8 + i * 3;
      const interval = setInterval(() => {
        iterations++;
        if (iterations >= max) {
          clearInterval(interval);
          setDisplayed((prev) => {
            const next = [...prev];
            next[i] = char;
            return next;
          });
        } else {
          setDisplayed((prev) => {
            const next = [...prev];
            next[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
            return next;
          });
        }
      }, 40 + delay * 1000 / word.length);
    });
  }, [isInView]);

  return (
    <span ref={ref} className="split-flap-word" aria-label={word}>
      {displayed.map((char, i) => (
        <span key={i} className="split-flap-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// ─── Floating label input ─────────────────────────────────────────
const FloatingField = ({ id, name, label, type = "text", value, onChange, error, rows }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const lifted = focused || hasValue;

  const commonProps = {
    id,
    name,
    value,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: `float-input${focused ? " focused" : ""}`,
  };

  return (
    <div className={`float-field${lifted ? " lifted" : ""}`}>
      {rows ? (
        <textarea {...commonProps} rows={rows} />
      ) : (
        <input {...commonProps} type={type} />
      )}
      <motion.label
        htmlFor={id}
        className="float-label"
        animate={lifted ? { y: -24, scale: 0.8, color: "var(--orange)" } : { y: 0, scale: 1, color: "rgba(255,255,255,0.4)" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.label>
      {error && <span className="field-error">{error}</span>}
    </div>
  );
};

// ─── Contact section ──────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const isConfigured = useMemo(
    () => Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY), []
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
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
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

  const socialLinks = [
    { label: "Email", icon: "✉️", href: `mailto:${personalInfo.email}`, value: personalInfo.email },
    { label: "GitHub", icon: "🐙", href: personalInfo.github, value: "github.com/Aniket291104" },
    { label: "LinkedIn", icon: "💼", href: personalInfo.linkedin, value: "linkedin.com/in/aniket-kumar" },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Heading — split flap */}
        <div className="contact-heading">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            06 / Contact
          </motion.div>
          <div className="split-flap-heading">
            <SplitFlapWord word="LET'S" delay={0} />
            {" "}
            <SplitFlapWord word="WORK" delay={0.3} />
            <br />
            <SplitFlapWord word="TOGETHER" delay={0.6} />
          </div>
          <motion.p
            className="contact-sub"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            You know about me — let's talk about you. Shoot a message and I'll respond within 24 hours.
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* Left: info + social */}
          <div className="contact-info-col">
            {socialLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 6 }}
              >
                <span className="contact-item-icon">{item.icon}</span>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="contact-blurb"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              🚀 Currently open to internships, freelance projects, and collaborative builds. Prefer fast-moving, product-minded teams.
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FloatingField
              id="contact-name" name="name" label="Your Name"
              value={form.name} onChange={handleChange} error={errors.name}
            />
            <FloatingField
              id="contact-email" name="email" label="Your Email" type="email"
              value={form.email} onChange={handleChange} error={errors.email}
            />
            <FloatingField
              id="contact-message" name="message" label="Your Message"
              value={form.message} onChange={handleChange} error={errors.message} rows={5}
            />

            {status.message && (
              <motion.div
                className={`form-status form-status-${status.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status.message}
              </motion.div>
            )}

            {/* Fill animation submit button */}
            <motion.button
              type="submit"
              className="form-submit-btn"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="btn-fill" />
              <span className="btn-text">
                {isSending ? "Sending…" : "Send Message →"}
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
