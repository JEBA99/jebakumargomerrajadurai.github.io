import React from "react";

const skills = [
    { name: "Zoho CRM & Deluge", level: 90 },
    { name: "React JS", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "API Integrations", level: 85 },
    { name: "Workflow Automation", level: 90 },
    { name: "Zoho Books & Subscriptions", level: 85 },
    { name: "Tailwind CSS", level: 70 },
    { name: "SQL & Databases", level: 65 }
];

export default function Skills() {
    return (
        <section className="bg-white py-20 px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                Technical Skills
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-gray-700">{skill.name}</span>
                            <span className="text-gray-600">{skill.level}%</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-blue-600 h-4 rounded-full transition-all duration-700"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}