import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const APPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_APPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init({ publicKey: PUBLIC_KEY });

// --- Basic client-side rate limit (1 submission per 30s per form type) ---
const canSubmit = (key, cooldownMs = 30000) => {
  const last = localStorage.getItem(key);
  if (last && Date.now() - Number(last) < cooldownMs) return false;
  localStorage.setItem(key, Date.now().toString());
  return true;
};

export const sendContactEmail = (formEl) => {
  if (!canSubmit("lh_contact_last_sent")) {
    return Promise.reject(new Error("Please wait a moment before sending another message."));
  }
  return emailjs.sendForm(SERVICE_ID, CONTACT_TEMPLATE_ID, formEl, { publicKey: PUBLIC_KEY });
};

export const sendApplicationEmail = (formEl) => {
  if (!canSubmit("lh_apply_last_sent")) {
    return Promise.reject(new Error("Please wait a moment before applying again."));
  }
  return emailjs.sendForm(SERVICE_ID, APPLY_TEMPLATE_ID, formEl, { publicKey: PUBLIC_KEY });
};