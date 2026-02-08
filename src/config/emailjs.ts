// EmailJS Configuration
// This file contains the EmailJS credentials
// In production, these are loaded from environment variables
// If environment variables are not available, fallback values are used

export const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_e0u21pw',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_31gqx88',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'pW-uWsoTIjOTPs3hp',
};

// Validate configuration
export const isEmailJsConfigured = () => {
    return !!(emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey);
};
