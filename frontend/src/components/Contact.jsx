import { useState } from 'react';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECEIVER_EMAIL = 'aniket24086@gmail.com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet.',
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: RECEIVER_EMAIL,
            from_name: name,
            from_email: email,
            reply_to: email,
            message,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to send message');
      }

      setName('');
      setEmail('');
      setMessage('');
      setStatus({
        type: 'success',
        message: 'Message sent successfully.',
      });
    } catch (error) {
      const messageText = error.message?.includes('recipients address is empty')
        ? 'EmailJS template is missing the To Email value. Set it in EmailJS dashboard.'
        : error.message || 'Unable to send message right now. Please try again.';

      setStatus({
        type: 'error',
        message: messageText,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-10 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-10">Let’s build something together</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-white/10"
          placeholder="Your Name"
        />
        <input 
          type="email"
          required
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="p-3 rounded bg-slate-900 border border-white/10" 
          placeholder="Your Email" 
        />
        <textarea 
          required
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="p-3 rounded bg-slate-900 border border-white/10" 
          placeholder="Message" 
        />
        {status.message ? (
          <p className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>
            {status.message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={isSending}
          className="bg-linear-to-r from-violet-500 to-fuchsia-500 py-3 rounded font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
