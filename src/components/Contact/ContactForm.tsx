import React, { useState } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    function validate() {
        if (!name.trim()) return "Please enter your name or email.";
        if (!subject.trim()) return "Please enter a subject.";
        if (!message.trim()) return "Please enter a message.";
        return null;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        const v = validate();
        if (v) {
            setError(v);
            return;
        }

        setStatus("sending");

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: name,
                    subject: subject,
                    message: message,
                },
                publicKey
            );

            setStatus("sent");
            setName("");
            setSubject("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus("error");
            setError("Failed to send message.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-black/60 border border-cyan-400/60 rounded-2xl shadow-[0_0_18px_rgba(0,255,255,0.35)] p-8 transition-all"
        >
            {/* Title */}
            <h2
                className="glitch-text mb-6 text-center text-3xl font-semibold md:text-4xl"
                data-text="ESTABLISH_CONNECTION()"
                style={{ fontFamily: "var(--font-title)" }}
            >
                ESTABLISH_CONNECTION()
            </h2>

            {/* Name */}
            <div className="mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name or Email"
                    className="w-full border-b border-[var(--cp-green)] bg-transparent p-3 text-sm text-[var(--cp-white)] outline-none placeholder:text-neutral-500"
                    required
                />
            </div>

            {/* Subject */}
            <div className="mb-4">
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    className="w-full border-b border-[var(--cp-green)] bg-transparent p-3 text-sm text-[var(--cp-white)] outline-none placeholder:text-neutral-500"
                    required
                />
            </div>

            {/* Message */}
            <div className="mb-4">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="w-full border-b border-[var(--cp-green)] bg-transparent p-3 text-sm text-[var(--cp-white)] outline-none placeholder:text-neutral-500 min-h-[140px]"
                    required
                />
            </div>

            {/* Error */}
            {error && (
                <p className="mb-3 text-sm text-[var(--cp-red)]">{error}</p>
            )}

            {/* Button */}
            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full cursor-pointer border border-cyan-400/80 bg-black/70 py-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-100 shadow-[0_0_14px_rgba(0,255,255,0.4)] transition hover:bg-cyan-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
                {status === "sending" ? "Transmitting..." : "[> SEND_PACKET]"}
            </button>

            {/* Status Messages */}
            {status === "sent" && (
                <p className="mt-4 text-center text-sm text-[var(--cp-green)]">
                    Packet delivered.
                </p>
            )}

            {status === "error" && (
                <p className="mt-4 text-center text-sm text-[var(--cp-red)]">
                    Transmission failed.
                </p>
            )}
        </form>
    );
}

export default ContactForm;
