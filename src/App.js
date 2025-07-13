import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "./niyas_profile.jpg";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">

      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Niyas Mohammed Basheer" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Niyas Mohammed Basheer</h1>
        <p className="text-xl font-medium">Java Developer | Python Developer | Django | SQL | Cloud Enthusiast</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3" data-aos="zoom-in">
          {["summary", "education", "skills", "projects", "experience", "certifications", "contact"].map(section => (
            <a key={section} href={`#${section}`} className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-white transition capitalize">
              {section}
            </a>
          ))}
          <a href="/NIYAS_MOHAMMED_BASHEER.pdf" download className="mt-4 inline-block bg-white text-indigo-900 px-6 py-2 rounded-full font-bold shadow-md hover:bg-indigo-100 transition duration-300" data-aos="zoom-in">
            ⬇️ Download Resume
          </a>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">🧾 Summary</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          MCA graduate with strong software engineering foundation. Skilled in Java, Python, and full-stack web development. Passionate about real-world problem solving using technology.
        </p>
      </section>

      {/* Education */}
      <section id="education" data-aos="fade-right" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>
        {[{
          title: "Master of Computer Application",
          desc: "SNGCE, APJ Abdul Kalam Technological University (2023–2025) – CGPA: 7.74",
          color: "from-blue-100 via-white to-blue-50"
        }, {
          title: "Bachelor of Computer Application",
          desc: "SAFI Institute of Advanced Study, University of Calicut (2020–2023) – CGPA: 6.8",
          color: "from-green-100 via-white to-green-50"
        }].map((edu, i) => (
          <div key={i} data-aos="fade-up" className={`bg-gradient-to-br ${edu.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{edu.title}</h3>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section id="skills" data-aos="zoom-in" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Technical Skills</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-purple-800 mb-2">💻 Programming Languages</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Java</li>
              <li>Python</li>
              <li>C / C++</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-pink-800 mb-2">🛢️ Databases</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>SQL</li>
              <li>MySQL</li>
              <li>SQLite</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-green-800 mb-2">🧱 Frameworks</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Django</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">🧰 Tools & IDEs</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>VS Code</li>
              <li>PyCharm</li>
              <li>Eclipse</li>
              <li>Android Studio</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">🔧 Version Control</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </section>
       {/* Projects */}
      <section id="projects" data-aos="fade-up" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>
        {[{
          title: "Water Proofing Management System",
          desc: [
            "Full-stack ERP solution for waterproofing services company.",
            "Designed responsive pages with HTML, managed SQL backend.",
            "Automated service order entries and invoice generation.",
            "Helped streamline customer and operations workflows."
          ]
        }, {
          title: "STU MART",
          desc: [
            "Platform for buying/selling study materials among students.",
            "Built using Django, HTML/CSS, SQLite, Git for version control.",
            "Integrated user registration and authentication.",
            "Created intuitive UI for product browsing and posting."
          ]
        }, {
          title: "Driver Drowsiness and Accident Detection",
          desc: [
            "Used OpenCV and Python for real-time eye-tracking detection.",
            "Triggered alerts on signs of driver fatigue.",
            "Implemented logic to minimize accident risk.",
            "Demonstrated on webcam-based test setup."
          ]
        }].map((project, i) => (
          <div key={i} data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 {project.title}</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {project.desc.map((line, j) => <li key={j}>{line}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section id="experience" data-aos="fade-right" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12 border-b-4 border-red-400 pb-2">💼 Experience</h2>
        {[{
          title: "Java Full Stack Intern – Qspiders Cochin",
          details: [
            "Implemented SQL CRUD operations.",
            "Built full-stack mini projects and practiced MVC design.",
            "Participated in debugging and performance testing sessions."
          ]
        }, {
          title: "Python Full Stack Intern – Maxlore Innovations LLP",
          details: [
            "Created Django-based applications from scratch.",
            "Built backend APIs and handled deployment.",
            "Collaborated using Git and Agile workflow."
          ]
        }, {
          title: "TechSIAS Member – SIAS Vazhayoor",
          details: [
            "Organized 120+ student events including hackathons.",
            "Led team coordination, mentorship, and technical planning."
          ]
        }, {
          title: "Hackathon Coordinator – SAFI Institute",
          details: [
            "Managed 30+ project teams during institute-wide hackathon.",
            "Guided 13 mentors and streamlined communication."
          ]
        }].map((exp, i) => (
          <div key={i} data-aos="fade-up" className="bg-gradient-to-br from-red-100 via-white to-red-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-red-800 mb-2">{exp.title}</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {exp.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section id="certifications" data-aos="zoom-in-up" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 border-b-4 border-teal-400 pb-2">📜 Certifications</h2>
        {["Manual Testing – ACM Kollam (Jan–Feb 2025)",
          "Cloud Computing – IIT Kharagpur (Jul–Oct 2024)",
          "Database Management System – IIT Kharagpur (Jul–Sep 2024)",
          "Basic Python Course – Nexus Technologies (Dec 2022–Mar 2023)",
          "AWS for Beginners – Great Learning Academy"
        ].map((cert, i) => (
          <div key={i} data-aos="fade-up" className="bg-gradient-to-br from-blue-100 via-white to-indigo-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-lg font-semibold">{cert}</h3>
          </div>
        ))}
        <div data-aos="fade-up" className="bg-gradient-to-br from-purple-100 via-white to-indigo-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-lg font-semibold">C# .NET Course – Udemy</h3>
          </ul>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:niyas93official@gmail.com" className="hover:underline text-blue-300">niyas93official@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919995611539" className="hover:underline text-blue-300">+91 99956 11539</a></p>
        <p>📍 Kerala, India</p>
        <div className="flex justify-center gap-6 mt-6" data-aos="zoom-in">
          <a href="https://github.com/Niyas99" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/niyas-mohammed-basheer-0b267232a/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin size={30} /></a>
          <a href="mailto:niyas93official@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:+919995611539" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>
    </main>
  );
}
