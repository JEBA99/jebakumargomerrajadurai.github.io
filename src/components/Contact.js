import React from "react";

export default function Contact({ setPage }) {

    // Resume download function
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "Jebakumar_Resume_Latest.pdf"; // Files in the public folder are accessible at the root
        link.download = "Jebakumar_Gomer_Rajadurai_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="bg-black text-white py-20 px-6 text-center">

            {/* Back Button */}
            <div className="mb-8">
                <button
                    onClick={() => setPage("home")}
                    className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg"
                >
                    ← Back to Home
                </button>
            </div>

            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                I am available for freelance projects, Zoho CRM automation,
                integrations, and full-time software development opportunities.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">

                {/* Email */}
                <a
                    href="mailto:jeba992001@gmail.com"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                    Email Me
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/JEBA99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                    GitHub
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/jebakumar-gomer-rajadurai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                    LinkedIn
                </a>

                {/* Resume Download */}
                <button
                    onClick={downloadResume}
                    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                    Download Resume
                </button>

            </div>

            <div className="mt-16 text-gray-400 text-sm">
                © {new Date().getFullYear()} Jebakumar Gomer Rajadurai. All rights reserved.
            </div>

        </section>
    );
}