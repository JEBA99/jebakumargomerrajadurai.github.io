import React from "react";

const mainSkills = [
  { name: "React Js", level: 70 },
  { name: "Javascript", level: 70 },
  { name: "Deluge", level: 80 },
  { name: "Client Script", level: 70 },
  { name: "Zoho CRM", level: 70 },
  { name: "Zoho Books", level: 70 },
  { name: "Zoho Subscriptions", level: 70 },
  { name: "Zoho Projects", level: 70 },
  { name: "Zoho Sign", level: 70 },
  { name: "Zoho Forms", level: 70 },
  { name: "Bootstrap", level: 60 },
  { name: "Tailwind CSS", level: 60 },
  { name: "HTML", level: 60 },
  { name: "CSS", level: 50 },
  { name: "SQL", level: 50 },
  { name: "Zoho Bookings", level: 50 },
  { name: "Zoho Desk", level: 50 },
  { name: "Zoho Campaigns", level: 50 },
  { name: "Zoho SalesIQ", level: 50 },
  { name: "Zoho Analytics", level: 50 },
  { name: "Odoo", level: 50 },
  { name: "Rasa Chatbot", level: 50 },
  { name: "PHP", level: 50 },
  { name: "C / C++", level: 50 },
  { name: "Java", level: 50 },
  { name: "PostgreSQL", level: 50 },
];

const databases = ["MySQL", "PostgreSQL"];
const toolsAndOS = ["Linux", "Git", "Visual Studio Code"];

export default function Skills() {
    return (
        <section className="bg-white py-20 px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                Technical Skills
            </h2>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainSkills.map((skill, index) => (
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

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Databases</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {databases.map(db => (
                                <span key={db} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
                                    {db}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Tools & OS</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {toolsAndOS.map(tool => (
                                <span key={tool} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}