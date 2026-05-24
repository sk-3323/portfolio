/** Country code + number only (no +, spaces, or dashes). Example: 919876543210 */
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "918780361401";

export const WHATSAPP_PREFILL_MESSAGE =
  "Hi! I came across your portfolio and I'm interested in a custom WhatsApp AI agent for my business. Could we discuss requirements and next steps?";

export function getWhatsAppUrl(
  message: string = WHATSAPP_PREFILL_MESSAGE
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
