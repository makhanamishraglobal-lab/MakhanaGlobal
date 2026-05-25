/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_EMAILJS_SERVICE_ID: string;
	readonly VITE_EMAILJS_TEMPLATE_ADMIN: string;
	readonly VITE_EMAILJS_TEMPLATE_REPLY: string;
	readonly VITE_EMAILJS_PUBLIC_KEY: string;
	readonly VITE_EMAILJS_TO_EMAIL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
