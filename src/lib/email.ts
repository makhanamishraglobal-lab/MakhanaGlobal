import emailjs from "@emailjs/browser";

type EmailJsConfig = {
  serviceId: string;
  adminTemplateId: string;
  replyTemplateId: string;
  publicKey: string;
  toEmail: string;
};

type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  requirement: string;
  quantity?: string;
  message?: string;
};

type BulkPayload = {
  fullName: string;
  business?: string;
  gst?: string;
  phone: string;
  email?: string;
  buyerType: string;
  grade: string;
  roast: string;
  quantity: string;
  packaging: string;
  city: string;
  state: string;
  message?: string;
};

function getEmailJsConfig(): EmailJsConfig {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN || "";
  const replyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY || "";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
  const toEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL || "";

  if (!serviceId || !adminTemplateId || !replyTemplateId || !publicKey || !toEmail) {
    throw new Error("EmailJS is not configured");
  }

  return { serviceId, adminTemplateId, replyTemplateId, publicKey, toEmail };
}

async function sendAdminEmail(params: Record<string, string | undefined>) {
  const { serviceId, adminTemplateId, publicKey } = getEmailJsConfig();
  await emailjs.send(serviceId, adminTemplateId, params, { publicKey });
}


export async function sendContactEmail(payload: ContactPayload) {
  await sendAdminEmail({
    to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
    form_type: "Contact",
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    requirement: payload.requirement,
    quantity: payload.quantity,
    message: payload.message,
  });

}

export async function sendBulkEmail(payload: BulkPayload) {
  await sendAdminEmail({
    to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
    form_type: "Bulk",
    full_name: payload.fullName,
    business: payload.business,
    gst: payload.gst,
    phone: payload.phone,
    email: payload.email,
    buyer_type: payload.buyerType,
    grade: payload.grade,
    roast: payload.roast,
    quantity: payload.quantity,
    packaging: payload.packaging,
    city: payload.city,
    state: payload.state,
    message: payload.message,
  });

}
