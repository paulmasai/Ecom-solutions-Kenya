export type ServiceId = "automation" | "assistant" | "business-os" | "meta";

export const services: Record<ServiceId, { name: string; description: string }> = {
  automation: {
    name: "Custom automation",
    description: "Discuss a workflow for repeated admin, moving information or following up with leads.",
  },
  assistant: {
    name: "Business AI assistant setup",
    description: "Shape GPT, Claude or Gemini around your business context, tone and everyday tasks.",
  },
  "business-os": {
    name: "Centralized AI business OS",
    description: "Plan how agreed tools, information and AI workflows could work together in one central workspace.",
  },
  meta: {
    name: "Meta AI automation services",
    description: "Discuss support for posts, page management, inbox replies, comments, catalogues and ads setup.",
  },
};

export const needs = [
  { id: "admin", service: "automation", name: "Reduce repetitive admin", description: "Move data, prepare reports and update records." },
  { id: "followups", service: "automation", name: "Follow up consistently", description: "Route leads, send reminders and track next steps." },
  { id: "content", service: "assistant", name: "Create better business content", description: "Draft replies, product descriptions and proposals." },
  { id: "context", service: "assistant", name: "Give AI my business context", description: "Use my tone, product knowledge and team guides." },
  { id: "connect", service: "business-os", name: "Connect my business tools", description: "Bring sales, operations and AI into one workspace." },
  { id: "visibility", service: "business-os", name: "See what is happening", description: "Keep track of work, approvals and team activity." },
  { id: "enquiries", service: "meta", name: "Manage Meta enquiries", description: "Organise inbox replies, comments and handoffs." },
  { id: "meta-content", service: "meta", name: "Improve Meta content & sales", description: "Plan posts, manage pages, catalogues and ads setup." },
] as const satisfies readonly { id: string; service: ServiceId; name: string; description: string }[];

type Option = { id: string; label: string };
export const businessTypes: readonly Option[] = [
  { id: "unspecified", label: "Choose a business type" },
  { id: "shop", label: "Shop or online seller" },
  { id: "service", label: "Service business" },
  { id: "creator", label: "Creator, coach or consultant" },
  { id: "team", label: "Agency or established team" },
  { id: "other", label: "Other business" },
];
export const stages: readonly Option[] = [
  { id: "exploring", label: "Exploring my options" },
  { id: "ready", label: "Ready to discuss a project" },
];
export const platforms: readonly Option[] = [
  { id: "unsure", label: "Help me choose" },
  { id: "gpt", label: "GPT / ChatGPT" },
  { id: "claude", label: "Claude" },
  { id: "gemini", label: "Gemini" },
];
export const metaChannels: readonly Option[] = [
  { id: "facebook", label: "Facebook" },
  { id: "instagram", label: "Instagram" },
  { id: "whatsapp", label: "WhatsApp Business" },
];

export type PlannerInput = {
  needs: readonly string[];
  business?: string;
  stage?: string;
  platform?: string;
  channels?: readonly string[];
};

export type ServicePlan = {
  needs: (typeof needs)[number][];
  serviceIds: ServiceId[];
  primary: ServiceId;
  business: Option;
  stage: Option;
  platform: Option | null;
  channels: Option[];
};

function option(options: readonly Option[], id?: string): Option {
  return options.find((item) => item.id === id) ?? options[0];
}

export function buildServicePlan(input: PlannerInput): ServicePlan | null {
  // Filtering the catalogue both validates and deduplicates untrusted URL choices.
  const selected = needs.filter((need) => input.needs.includes(need.id));
  if (!selected.length) return null;
  const order: ServiceId[] = ["automation", "assistant", "business-os", "meta"];
  const count = (id: ServiceId) => selected.filter((need) => need.service === id).length;
  const serviceIds = order.filter((id) => count(id) > 0).sort((a, b) => {
    if (a === "business-os") return -1;
    if (b === "business-os") return 1;
    return count(b) - count(a) || order.indexOf(a) - order.indexOf(b);
  });
  return {
    needs: selected,
    serviceIds,
    primary: serviceIds[0],
    business: option(businessTypes, input.business),
    stage: option(stages, input.stage),
    platform: serviceIds.some((id) => id === "assistant" || id === "business-os")
      ? option(platforms, input.platform) : null,
    channels: serviceIds.includes("meta")
      ? metaChannels.filter((channel) => input.channels?.includes(channel.id)) : [],
  };
}

export function servicePlanHref(plan: ServicePlan, pathname: "/book" | "/service-planner" = "/book"): string {
  const params = new URLSearchParams({ needs: plan.needs.map((need) => need.id).join(",") });
  if (plan.business.id !== "unspecified") params.set("business", plan.business.id);
  params.set("stage", plan.stage.id);
  if (plan.platform) params.set("platform", plan.platform.id);
  if (plan.channels.length) params.set("channels", plan.channels.map((channel) => channel.id).join(","));
  return `${pathname}?${params.toString()}`;
}

export function servicePlanFromParams(params: { get: (key: string) => string | null }): ServicePlan | null {
  const read = (key: string) => (params.get(key) ?? "").slice(0, 300);
  return buildServicePlan({
    needs: read("needs").split(","),
    business: read("business"),
    stage: read("stage"),
    platform: read("platform"),
    channels: read("channels").split(","),
  });
}

export function servicePlanSummary(plan: ServicePlan): string {
  return [
    "My service plan",
    `Start with: ${services[plan.primary].name}`,
    ...(plan.serviceIds.length > 1 ? [`Also discuss: ${plan.serviceIds.slice(1).map((id) => services[id].name).join("; ")}`] : []),
    "",
    "What I need help with:",
    ...plan.needs.map((need) => `- ${need.name}`),
    "",
    ...(plan.business.id !== "unspecified" ? [`Business type: ${plan.business.label}`] : []),
    `Stage: ${plan.stage.label}`,
    ...(plan.platform ? [`Preferred AI platform: ${plan.platform.label}`] : []),
    ...(plan.serviceIds.includes("meta") ? [`Meta channels: ${plan.channels.length ? plan.channels.map((channel) => channel.label).join(", ") : "To discuss"}`] : []),
    "Please help me confirm the scope, suitable tools and costs.",
  ].join("\n");
}
