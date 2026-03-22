import React from "react";

export default function Hero({ setPage }) {
    const scrollToContact = () => {
        const section = document.getElementById("contactSection");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white">

            <div className="text-center max-w-3xl px-6">

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Hi, I'm <span className="text-cyan-400">Jebakumar</span>
                </h1>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200">
                    Zoho CRM Developer • React Integration Engineer
                </h2>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                    I design and develop CRM automation systems, Zoho extensions,
                    and React-based business applications. I specialize in workflow
                    automation, API integrations, and enterprise business solutions.
                </p>

                <div className="mt-8 flex justify-center gap-4 flex-wrap">

                    <button
                        onClick={() => setPage("contact")}
                        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Contact Me
                    </button>

                    <a
                        href="https://github.com/JEBA99"
                        target="_blank"
                        className="border border-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition"
                    >
                        View GitHub
                    </a>

                </div>

            </div>
        </section>
    );
}