export const packages = [
  {
    slug: "starter",
    name: "AI Starter",
    label: "Get confident with everyday AI",
    price: "8,000",
    audience: "For shop owners, online sellers, salons and restaurants starting with AI.",
    sessions: "2 × 60-minute sessions",
    support: "Live, one-to-one coaching",
    features: [
      "Draft customer replies and product descriptions",
      "Plan social posts using your own business ideas",
      "Build one useful process together, step by step",
      "Keep your session recordings and templates",
    ],
  },
  {
    slug: "growth",
    name: "AI Growth",
    label: "Plan content and follow up",
    price: "25,000",
    audience: "For creators, coaches and consultants juggling content and client enquiries.",
    sessions: "4 × 60-minute sessions",
    support: "2 weeks of WhatsApp support",
    features: [
      "Build a process for content and new enquiries",
      "Set up an email follow-up workflow",
      "Get 10 prompts written for your business",
      "Create content with Canva and ChatGPT",
    ],
  },
  {
    slug: "pro",
    name: "AI Pro VIP",
    label: "Put AI to work across your team",
    price: "60,000",
    audience: "For agencies and established teams ready to connect and document their processes.",
    sessions: "6 × 60-minute sessions",
    support: "30 days of implementation support",
    features: [
      "Build an AI system for your content and sales tasks",
      "Set up three agreed business automations",
      "Train your team using its everyday work",
      "Keep a prompt library and step-by-step guides",
    ],
  },
] as const;

export const faqs = [
  {
    question: "I’ve never used AI. Can I still join?",
    answer:
      "Yes. We start with a task you know well, such as answering a customer or writing a product description. You practise step by step with guidance. No coding or previous AI experience is needed to get started.",
  },
  {
    question: "How can AI help my shop or service business?",
    answer:
      "We can work on replies to price and delivery questions, product descriptions, social posts or following up on enquiries. We agree on one priority and build at least one useful workflow together. The scope depends on your package, and you check AI drafts before using them.",
  },
  {
    question: "How much does AI coaching cost?",
    answer:
      "AI Starter begins at KES 8,000 for two sessions, AI Growth at KES 25,000 for four, and AI Pro VIP at KES 60,000 for six. Each session is 60 minutes. We confirm the work, final price and any separate tool costs before you decide.",
  },
  {
    question: "Where do the sessions take place?",
    answer:
      "Online through Google Meet or Zoom, so you can join from anywhere in Kenya or from abroad. We agree on a suitable time, including your time zone if you’re outside Kenya. You receive recordings and practical materials to revisit after coaching.",
  },
  {
    question: "Are AI tool subscriptions included?",
    answer:
      "No. The package covers coaching and the setup work we agree on. Any paid AI tools, messaging charges or hosting costs are separate. We discuss these costs before you commit so you can plan your budget.",
  },
  {
    question: "What support do I get after a session?",
    answer:
      "You can revisit your recordings and materials to practise. AI Growth also includes two weeks of WhatsApp support, while AI Pro VIP includes 30 days of implementation support. We confirm what that support covers before coaching starts.",
  },
  {
    question: "Do I have to choose a package before getting in touch?",
    answer:
      "No. Tell us what you do and which task takes up too much time. We’ll discuss a suitable starting point and confirm the scope and price before you decide. You can also try the free AI business check to explore a task first.",
  },
];

export const resources = [
  {
    category: "WhatsApp & customer enquiries",
    title: "Reply to price and delivery questions",
    description:
      "Draft clear replies using your actual prices, stock and delivery terms. Includes a worked example to adapt.",
    href: "/resources/customer-reply-prompts.txt",
    number: "01",
    format: "Free prompt template · TXT",
  },
  {
    category: "Content & marketing",
    title: "Plan a week of business content",
    description:
      "Get seven post ideas for WhatsApp Status, Instagram or Facebook, with a clear next step for each.",
    href: "/resources/content-planning-workbook.txt",
    number: "02",
    format: "Free planning workbook · TXT",
  },
  {
    category: "Business automation",
    title: "Choose one task to automate",
    description:
      "Map a repeated task, check where automation could help and decide what to test before paying for tools.",
    href: "/resources/automation-checklist.txt",
    number: "03",
    format: "Free checklist · TXT",
  },
] as const;
