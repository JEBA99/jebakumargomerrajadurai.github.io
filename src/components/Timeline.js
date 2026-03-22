import React from "react";

const experiences = [
    {
        company: "TechiesAround",
        role: "Zoho CRM Developer",
        period: "Aug 2022 – Present",
        points: [
            "Developed Zoho CRM custom workflows and Blueprints",
            "Built Zoho WorkDrive & Google Drive integrations",
            "Built AI Email Inteligence for Zoho CRM using OpenAI API",
            "Automated quote to subscription & invoice process",
            "Created CRM widgets using React and Deluge",
            "Implemented Zoho Books, Zoho Sign and SalesIQ automation"
        ]
    },
    {
        company: "Blackant Solutions",
        role: "Senior Software Developer",
        period: "Aug 2021 – Aug 2022",
        points: [
            "Customized SuiteCRM customer portal",
            "Built Vtiger CRM DocuSign integration",
            "Developed standalone React applications",
            "Worked with Tailwind CSS, PHP and MySQL"
        ]
    },
    {
        company: "Smackcoders Inc",
        role: "Senior Software Developer",
        period: "Apr 2018 – Jul 2021",
        points: [
            "Developed WordPress plugins UI using React",
            "Worked on CRM Connector Plus & CSV Importer plugin",
            "Integrated WordPress with Salesforce, Zoho & Vtiger",
            "Tested and integrated multiple CRM systems"
        ]
    }
];

export default function Timeline() {
    return (
        <section className="bg-gray-100 py-20 px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Professional Experience
            </h2>

            <div className="max-w-4xl mx-auto relative border-l-4 border-blue-600">

                {experiences.map((exp, index) => (
                    <div key={index} className="mb-12 ml-6">

                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 mt-2"></div>

                        <h3 className="text-2xl font-semibold text-gray-900">
                            {exp.role}
                        </h3>

                        <p className="text-blue-600 font-medium">
                            {exp.company} • {exp.period}
                        </p>

                        <ul className="mt-4 text-gray-700 list-disc ml-6 space-y-2">
                            {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                    </div>
                ))}

            </div>
        </section>
    );
}