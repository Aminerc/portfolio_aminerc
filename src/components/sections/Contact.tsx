import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { socials } from "../../constants";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const iconMap = {
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M4.983 3.5a2.5 2.5 0 1 1-.002 5.002 2.5 2.5 0 0 1 .002-5.002Zm-.75 6.75h1.5A.75.75 0 0 1 6.5 11v9.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V11a.75.75 0 0 1 .75-.75Zm5 0h1.44a.75.75 0 0 1 .75.75v.522c.53-.778 1.42-1.522 2.963-1.522 2.308 0 3.807 1.502 3.807 4.62v5.88a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-5.19c0-1.557-.559-2.457-1.674-2.457-1.2 0-1.91.809-1.91 2.457v5.19a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V11a.75.75 0 0 1 .75-.75Z" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.516c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.728-4.043-1.642-4.043-1.642-.546-1.4-1.334-1.773-1.334-1.773-1.09-.76.082-.744.082-.744 1.205.086 1.84 1.253 1.84 1.253 1.07 1.854 2.807 1.319 3.492 1.008.108-.794.417-1.32.76-1.625-2.665-.31-5.466-1.362-5.466-6.06 0-1.34.469-2.438 1.235-3.297-.124-.31-.536-1.564.117-3.26 0 0 1.008-.33 3.301 1.258a11.34 11.34 0 0 1 3.004-.413c1.02.005 2.046.141 3.003.413 2.293-1.588 3.298-1.258 3.298-1.258.655 1.696.243 2.95.119 3.26.77.86 1.233 1.957 1.233 3.297 0 4.71-2.805 5.745-5.476 6.048.429.374.813 1.108.813 2.235 0 1.615-.015 2.92-.015 3.318 0 .323.216.7.826.58C20.565 22.313 24 17.815 24 12.516 24 5.87 18.627.5 12 .5Z" />
    </svg>
  ),
};

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (form: Record<string, string>): { isValid: boolean; error?: string } => {
  if (!form.name || form.name.trim().length < 2) {
    return { isValid: false, error: "Le nom doit contenir au moins 2 caractères." };
  }
  if (!form.email || !validateEmail(form.email)) {
    return { isValid: false, error: "Veuillez entrer une adresse email valide." };
  }
  if (!form.message || form.message.trim().length < 10) {
    return { isValid: false, error: "Le message doit contenir au moins 10 caractères." };
  }
  return { isValid: true };
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm(form);
    if (!validation.isValid) {
      toast.error(validation.error || "Veuillez vérifier les informations saisies.");
      return;
    }

    // Check if EmailJS is configured
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      toast.error("Configuration EmailJS manquante. Veuillez contacter l'administrateur.");
      return;
    }

    setLoading(true);
    setErrors({});

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name.trim(),
          to_name: config.html.fullName,
          from_email: form.email.trim(),
          to_email: config.html.email,
          user_email: form.email.trim(),
          message: form.message.trim(),
        },
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.");
          setForm(INITIAL_STATE);
          formRef.current?.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement par email.");
          // Log error only in development
          if (import.meta.env.DEV) {
            console.error("EmailJS error:", error);
          }
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-6 flex flex-col gap-4">
          <p className="text-sm text-secondary">
            Préférez-vous un contact direct ? Écrivez-moi sur{" "}
            <a
              href={`mailto:${config.html.email}`}
              className="text-white underline underline-offset-4 transition-colors duration-200 hover:text-[#915EFF]"
            >
              {config.html.email}
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={config.html.cvLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#915EFF] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Télécharger mon CV
            </a>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary/30 text-secondary transition-colors duration-200 hover:border-white hover:text-white"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          noValidate
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";
            const inputValue = form[input];
            const hasError = errors[input];

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={inputValue}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  aria-required="true"
                  aria-invalid={hasError ? "true" : "false"}
                  aria-describedby={hasError ? `${input}-error` : undefined}
                  className={`bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none transition-colors ${
                    hasError
                      ? "ring-2 ring-red-500 focus:ring-red-500"
                      : "focus:ring-2 focus:ring-[#915EFF]"
                  }`}
                  {...(input === "message" && { rows: 7 })}
                />
                {hasError && (
                  <span
                    id={`${input}-error`}
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {errors[input]}
                  </span>
                )}
              </label>
            );
          })}
          <button
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-[#915EFF]"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact");
