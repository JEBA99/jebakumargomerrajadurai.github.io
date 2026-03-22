import React from "react";

const projects = [
    {
        title: "AI Email Intelligence for Zoho CRM",
        desc: "AI-powered email generation and reply suggestion system integrated inside Zoho CRM to help users compose professional emails automatically based on CRM records.",
        tech: "React, Zoho CRM Widgets, Deluge, OpenAI API",
        highlight: true
    },
    {
        title: "WordPress CRM Integration Plugin",
        desc: "React-based WordPress plugin automating form-based lead capture into multiple CRMs like Zoho, Salesforce, and Vtiger.",
        tech: "React JS, WordPress",
        highlight: true
    },
    {
        title: "WP Ultimate CSV Importer",
        desc: "Dynamic WordPress plugin built in React for scalable multi-format data migration (CSV, XML, JSON, Google Sheets).",
        tech: "React JS, WordPress Plugin Architecture",
        highlight: true
    },
    {
        title: "Tools Engine AIO Custom Fields",
        desc: "React-based dynamic field builder empowering non-technical users to create flexible, reusable custom fields in WordPress.",
        tech: "React JS, WordPress"
    },
    {
        title: "All-in-One Performance Accelerator",
        desc: "Performance optimization plugin featuring a React frontend dashboard with CDN integration and lazy loading controls.",
        tech: "React JS, WordPress"
    },
    {
        title: "Zoho CRM Automation System",
        desc: "End-to-end CRM automation with custom workflows, email alerts, and multi-condition DRS logic to scale business operations.",
        tech: "Zoho CRM, Deluge, Client Scripts"
    },
    {
        title: "Zoho CRM ↔ Zoho Subscriptions Sync",
        desc: "Seamless synchronization of products, pricing, and addons eliminating duplicate data entry and improving billing accuracy.",
        tech: "Zoho CRM, Zoho Subscriptions, Deluge"
    },
    {
        title: "Sales Order Tracking & Analytics",
        desc: "Real-time KPI dashboard tracking order lifecycle, shipping performance, and operational efficiency for data-driven decisions.",
        tech: "Zoho Analytics"
    },
    {
        title: "Mobile App for Retirement Capital",
        desc: "Hybrid mobile application featuring modern UI components, robust features, and enhanced financial navigation.",
        tech: "Ionic, JavaScript"
    },
    {
        title: "QA & Web App Deployment",
        desc: "Comprehensive functional testing, bug identification, and CI/CD deployment support to ensure flawless application releases.",
        tech: "Web Technologies, Bitbucket"
    },
    {
        title: "DocuSign Vtiger Integration",
        desc: "One-click quote signing extension in Vtiger CRM with automated document workflows for faster deal closures.",
        tech: "PHP, Vtiger CRM, DocuSign API"
    },
    {
        title: "Zoho WorkDrive Integration",
        desc: "Automatically creates folders, uploads and manages files between Zoho CRM and Zoho WorkDrive whenever an account is created.",
        tech: "React, Zoho API, Deluge Script"
    },
    {
        title: "Google Drive Integration for CRM",
        desc: "Two-way file management between Zoho CRM and Google Drive including folder creation, upload, and download directly from CRM records.",
        tech: "React, Google Drive API, OAuth2"
    },
    {
        title: "Quote to Subscription Automation",
        desc: "Automated conversion of closed-won quotes into subscriptions and invoices including billing cycle and addon mapping.",
        tech: "Zoho CRM, Zoho Books, Zoho Subscriptions, Workflow, Blueprint"
    }
];

export default function Projects() {
    return (
        <section className="bg-gray-900 text-white py-24 px-6 relative border-t border-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`p-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col ${project.highlight
                                ? "bg-gradient-to-br from-cyan-900/60 to-blue-900/60 border border-cyan-500/40 hover:shadow-cyan-500/20"
                                : "bg-gray-800 border border-gray-700/50 hover:border-gray-500/50 hover:shadow-lg"
                            }`}
                    >
                        <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-300 mb-8 leading-relaxed text-sm flex-grow">
                            {project.desc}
                        </p>

                        <div className="text-xs sm:text-sm text-cyan-300 font-medium inline-block bg-cyan-950/50 px-3 py-2 rounded-lg border border-cyan-800/50 mt-auto">
                            <span className="text-gray-400 mr-2 border-r border-gray-600 pr-2">Tech</span> 
                            {project.tech}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}