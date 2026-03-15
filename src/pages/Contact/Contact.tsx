import { motion } from "framer-motion";
import { ContactCard } from "../../components/Contact/ContactCard";
import ContactForm from "../../components/Contact/ContactForm";

export function Contact() {
  return (
    <section className="w-full min-h-screen bg-black py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p
            className="mb-1 text-[0.65rem] uppercase tracking-[0.3em] font-heading"
            style={{ color: "var(--cp-green)" }}
          >
            [ OPEN_CHANNEL ]
          </p>
          <div className="inline-block">
            <h2
              className="glitch-text text-4xl font-display md:text-6xl lg:text-7xl"
              data-text="PING ME"
            >
              PING ME
            </h2>
            <motion.div
              className="mt-1 h-px w-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          <p className="font-mono mt-4 max-w-2xl text-xs text-neutral-300 md:text-sm">
            Response time: faster than most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <ContactCard />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
