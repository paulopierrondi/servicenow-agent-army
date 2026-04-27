export const DOMAINS = [
  { id: "itsm", label: "ITSM" },
  { id: "itom", label: "ITOM" },
  { id: "csm", label: "CSM" },
  { id: "hr", label: "HR Service Delivery" },
  { id: "platform", label: "Platform / cross-domain" },
] as const;

export type DomainId = (typeof DOMAINS)[number]["id"];

export function isDomain(value: string): value is DomainId {
  return DOMAINS.some((d) => d.id === value);
}
