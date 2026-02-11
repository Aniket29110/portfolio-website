import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-32 px-10 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-10">Let’s build something together</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="p-3 rounded bg-slate-900 border border-white/10" 
          placeholder="Your Email" 
        />
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="p-3 rounded bg-slate-900 border border-white/10" 
          placeholder="Message" 
        />
        <button type="submit" className="bg-linear-to-r from-violet-500 to-fuchsia-500 py-3 rounded font-semibold">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;