import React from "react";

const projects = [
  {
    id: 1,
    title: "Contextflow",
    description: "Integrated Zoho Analytics for territory generation and automated lead conversion paths using custom workflows.",
    category: "CRM Automation"
  },
  {
    id: 2,
    title: "Dark Rhino Security",
    description: "Designed roles/permissions architecture and deployed Zoho Subscriptions syncing from CRM Quote models.",
    category: "System Setup"
  },
  {
    id: 3,
    title: "DCG Tech Limited",
    description: "Developed deep sync pipelines between Zoho CRM, Zoho Books, and Magento for automated order creation.",
    category: "Integration"
  },
  {
    id: 4,
    title: "Drop And Go Floors",
    description: "Ran custom MySQL and Zoho Analytics reports for inventory tracking, order management, and Google Ads expense mapping.",
    category: "Analytics"
  },
  {
    id: 5,
    title: "Echomarine",
    description: "Charted B2B sales processes and configured composite items, batching, and SLA alerts in Zoho Inventory/Projects.",
    category: "Business Logic"
  },
  {
    id: 6,
    title: "Gowthcast",
    description: "Managed Zoho CRM/Books sync for automated subscription/credits lifecycle logging and transaction tracking.",
    category: "Integration"
  },
  {
    id: 7,
    title: "Hello Seen",
    description: "Engineered robust bi-weekly GA4 and Zoho Books revenue dashboards to track top-performing media campaigns.",
    category: "Analytics"
  },
  {
    id: 8,
    title: "Home Stod",
    description: "Constructed detailed Postman API collections to sync Contacts, Accounts, and commission invoices into Zoho Books.",
    category: "API Development"
  },
  {
    id: 9,
    title: "Isaloon",
    description: "Automated bulk subscription lifecycle updates, handling YoY price deposits and sophisticated VAT calculations.",
    category: "Billing Automation"
  },
  {
    id: 10,
    title: "Islandsdottir",
    description: "Built automated Zoho Sign configurations for quotes, and tailored workflows for lead qualification and scheduling.",
    category: "Workflow Automation"
  },
  {
    id: 11,
    title: "Learn Odoo",
    description: "Deployed Odoo 18, explored predictive lead scoring, configured email servers, and established custom QWeb templates.",
    category: "Platform Setup"
  },
  {
    id: 12,
    title: "Medicaid",
    description: "Automated comprehensive onboarding operations using Zoho Sign for service agreements and dynamic task assignments.",
    category: "Workflow Automation"
  },
  {
    id: 13,
    title: "Rasa ChatBot",
    description: "Deployed open-source Rasa Conversational AI utilizing custom endpoints to serve WooCommerce product/order queries.",
    category: "AI Integration"
  },
  {
    id: 14,
    title: "Retirement Capital",
    description: "Developed and ported financial dashboards using Ionic Capacitor with custom color themes to build native Android packages.",
    category: "App Development"
  },
  {
    id: 15,
    title: "Scott One Client",
    description: "Created customized external Zoho Widgets rendering dynamic product addons selection straight within CRM Quotes.",
    category: "Widget Development"
  },
  {
    id: 16,
    title: "Vaqqy",
    description: "Configured Tourism Blueprints with detailed integrations handling flights/hotels inputs, invoicing, and quote discounting checks.",
    category: "CRM Config"
  },
  {
    id: 17,
    title: "Wiseday CC",
    description: "Enforced complex data-sharing rules alongside bespoke client scripts to stream borrower logic inside the CRM Mortgage views.",
    category: "Security Protocol"
  }
];

export default function ServiceProjects() {
  return (
    <section className="bg-gray-900 text-white py-24 px-6 relative overflow-hidden" id="service-projects">
      {/* Background Decorative Rings */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 inline-block mb-6 pb-2">
            Service Projects Highlights
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            A comprehensive track record of client-focused solutions built over the past 4 years. 
            Highlighting integrations, custom automations, and scalable deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-8 rounded-2xl bg-gray-800/40 backdrop-blur-md border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-400/50 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-wide text-indigo-300 bg-indigo-900/30 rounded-full border border-indigo-700/50 group-hover:bg-indigo-800/50 transition-colors">
                  {project.category}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto border-t border-gray-700/50 pt-4 flex gap-2">
                {/* Decorative dots to add to aesthetics */}
                <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-50 group-hover:opacity-100 group-hover:animate-ping transition-all"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 opacity-30 group-hover:opacity-100 group-hover:animate-ping delay-100 transition-all"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-20 group-hover:opacity-100 group-hover:animate-ping delay-200 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
