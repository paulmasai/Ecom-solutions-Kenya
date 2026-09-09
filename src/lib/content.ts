export const packages = [
  {
    slug: "starter",
    name: "AI Starter",
    label: "Start with the essentials",
    price: "8,000",
    audience: "For shops, salons, restaurants and growing small businesses.",
    sessions: "2 × 60-minute sessions",
    support: "Live, one-to-one coaching",
    features: [
      "Customer replies & product descriptions",
      "A repeatable social content workflow",
      "One practical workflow built together",
      "Your session recordings & templates",
    ],
  },
  {
    slug: "growth",
    name: "AI Growth",
    label: "Build your repeatable system",
    price: "25,000",
    audience: "For creators, coaches and consultants ready to grow.",
    sessions: "4 × 60-minute sessions",
    support: "2 weeks of WhatsApp support",
    features: [
      "Your content & lead-generation system",
      "An email follow-up workflow",
      "10 prompts tailored to your brand",
      "A Canva + ChatGPT content workflow",
    ],
  },
  {
    slug: "pro",
    name: "AI Pro VIP",
    label: "Bring your whole team forward",
    price: "60,000",
    audience: "For established businesses, agencies and ambitious teams.",
    sessions: "6 × 60-minute sessions",
    support: "30 days of implementation support",
    features: [
      "A custom AI content & sales system",
      "Three business automations",
      "Practical training for your team",
      "Your own prompt library & SOPs",
    ],
  },
] as const;

export const faqs = [
  {
    question: "Do I need to know anything about AI?",
    answer:
      "No. We start with your business and the tools you already use. You’ll learn step by step, using your own tasks, so the work makes sense from the first session.",
  },
  {
    question: "What will we actually build together?",
    answer:
      "At least one workflow relevant to your business: customer reply templates, a product-to-content system, or a lead follow-up process. We agree on the priority before coaching begins. The number and complexity of automations depend on your package.",
  },
  {
    question: "How are the coaching sessions delivered?",
    answer:
      "Sessions take place online through Google Meet or Zoom. You receive recordings and practical materials to revisit afterwards. AI Growth includes two weeks of WhatsApp support; AI Pro VIP includes 30 days of support.",
  },
  {
    question: "Are AI tool subscriptions included?",
    answer:
      "Package prices cover coaching and the agreed implementation work. Any third-party tool subscriptions, messaging charges or hosting costs are discussed separately before you commit.",
  },
  {
    question: "Can I join from outside Kenya?",
    answer:
      "Yes. Coaching is delivered online, so Kenyan businesses and diaspora clients can join from anywhere. We agree on a suitable time and confirm the scope and currency before payment.",
  },
  {
    question: "How do I choose the right package?",
    answer:
      "Start with a conversation about your business, the work taking up your time and what you want to achieve. We’ll recommend a starting point and confirm the scope and final price before you decide.",
  },
];

export const resources = [
  {
    category: "Customer experience",
    title: "Write better customer replies",
    description:
      "A practical prompt for helpful, consistent replies without losing your voice.",
    href: "/resources/customer-reply-prompts.txt",
    number: "01",
    format: "Prompt template · TXT",
  },
  {
    category: "Content & marketing",
    title: "Plan your next week of content",
    description:
      "Turn one business goal into seven useful posts for your audience.",
    href: "/resources/content-planning-workbook.txt",
    number: "02",
    format: "Mini workbook · TXT",
  },
  {
    category: "Business automation",
    title: "Find your first automation",
    description:
      "A simple checklist to choose a repeatable task that is worth automating.",
    href: "/resources/automation-checklist.txt",
    number: "03",
    format: "Checklist · TXT",
  },
] as const;
