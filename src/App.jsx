import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Link, ChevronsRight } from 'lucide-react';

const ContactItem = ({ Icon, text, link, isLink = false }) => (
  <div className="flex items-center text-gray-700 text-sm">
    <Icon className="w-4 h-4 mr-2 text-indigo-600 flex-shrink-0" />
    {isLink ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors underline truncate">
        {text}
      </a>
    ) : (
      <span className="truncate">{text}</span>
    )}
  </div>
);

const SectionHeading = ({ title }) => (
  <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-1 mb-3 mt-4 uppercase tracking-wider">
    {title}
  </h2>
);

const ProjectItem = ({ title, subInfo, points }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
      {title}
    </h3>
    <p className="text-sm italic text-gray-500 mb-1">{subInfo}</p>
    <ul className="list-none space-y-1 pl-0">
      {points.map((point, index) => (
        <li key={index} className="flex items-start text-sm text-gray-700">
          <ChevronsRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0 mr-2" />
          <span dangerouslySetInnerHTML={{ __html: point }} />
        </li>
      ))}
    </ul>
  </div>
);

const EducationItem = ({ title, institution, date, description }) => (
  <div className="mb-3">
    <div className="flex justify-between items-start">
      <h3 className="text-md font-semibold text-gray-900">{title}</h3>
      <span className="text-sm font-medium text-indigo-600 flex-shrink-0 ml-4">{date}</span>
    </div>
    <p className="text-sm italic text-gray-600">{institution}</p>
    {description && <p className="text-sm text-gray-700 mt-1">{description}</p>}
  </div>
);

const App = () => {
  // Resume Data Structure
  const projects = [
    {
      title: "Online Vehicle Rental System",
      subInfo: "MERN Stack, Razorpay Integration, TailwindCSS",
      points: [
        "<strong>Engineered</strong> a full-stack MERN vehicle rental platform, enabling seamless search, booking, and secure payment processing via <strong>Razorpay integration</strong>.",
        "<strong>Developed</strong> a dual-interface system (User/Admin) that allows admins to <strong>efficiently manage</strong> vehicle listings and track all bookings in real-time.",
        "<strong>Implemented</strong> a highly responsive and modern UI using TailwindCSS, optimizing the user experience across all devices."
      ]
    },
    {
      title: "Kanban Board App",
      subInfo: "React, Tailwind CSS, react-beautiful-dnd",
      points: [
        "<strong>Developed</strong> a responsive task management Kanban application using React, featuring the <code>react-beautiful-dnd</code> library to provide intuitive drag-and-drop functionality.",
        "<strong>Improved</strong> user organization by including visual features for marking favorites, trashing tasks, and efficient column-based management.",
        "<strong>Customized</strong> the user interface with light/dark theming options for enhanced personalization and accessibility."
      ]
    },
    {
      title: "Notes App",
      subInfo: "React, Local Storage",
      points: [
        "<strong>Created</strong> a modern React notes application, incorporating core features like pin, archive, trash, search, and theming functionality to <strong>optimize</strong> note retrieval and organization.",
        "<strong>Ensured</strong> data persistence and fast loading times by utilizing <strong>Local Storage</strong> for reliable client-side data management."
      ]
    },
  ];

  const education = [
    {
      title: "Full Stack Development with AI Tools",
      institution: "Guvi",
      date: "May 2025",
      description: "Specialized in integrating Artificial Intelligence (AI) and Machine Learning (ML) concepts into full stack development workflows."
    },
    {
      title: "Master of Science in Biotechnology (GPA: 7.6/10.0)",
      institution: "AVS College of Arts & Science, Salem",
      date: "",
      description: ""
    },
    {
      title: "Diploma in Computer Applications",
      institution: "IITS Computer Education",
      date: "May 2015",
      description: "Completed foundational coursework in programming fundamentals, database management, and web development."
    },
  ];


  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-10 border border-gray-100">

        {/* Header and Contact Info */}
        <header className="border-b pb-4 mb-4 border-indigo-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            LOGANATHAN C
          </h1>
          <p className="text-xl text-indigo-600 font-medium mt-1">
            Full Stack Developer
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
            <ContactItem Icon={MapPin} text="Salem" />
            <ContactItem Icon={Phone} text="+91 9655891732" />
            <ContactItem Icon={Mail} text="loguflower3@gmail.com" link="mailto:loguflower3@gmail.com" />
            <ContactItem Icon={Linkedin} text="linkedin/loganathan-ramsaran-538831219" link="https://www.linkedin.com/in/loganathan-ramsaran-538831219" isLink={true} />
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <ContactItem Icon={Link} text="https://myself2025.netlify.app/" link="https://myself2025.netlify.app/" isLink={true} />
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <SectionHeading title="Professional Summary" />
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Highly motivated Full Stack Developer proficient in the <strong className="text-indigo-600">MERN stack</strong> (MongoDB, Express.js, React, Node.js) and adept at leveraging <strong className="text-indigo-600">AI-assisted development tools</strong> like GitHub Copilot. Proven ability to <strong className="text-indigo-600">engineer and deliver complex, responsive web applications</strong> focused on payment integration, scalable functionality, and intuitive user experiences. Seeking to apply technical expertise and AI-enhanced efficiency to drive product innovation.
        </p>

        {/* Technical Skills */}
        <SectionHeading title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <span className="font-bold text-gray-800">Languages/Core:</span> HTML, CSS, JavaScript, React.js, Node.js, Express.js
          </div>
          <div>
            <span className="font-bold text-gray-800">Frameworks/Styling:</span> TailwindCSS, Bootstrap
          </div>
          <div className="md:col-span-2">
            <span className="font-bold text-gray-800">Databases/Tools:</span> MongoDB, Git/GitHub, Netlify, Render, Postman, Razorpay
          </div>
        </div>

        {/* Key Projects */}
        <SectionHeading title="Key Projects" />
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              subInfo={project.subInfo}
              points={project.points}
            />
          ))}
        </div>

        {/* Education & Certifications */}
        <SectionHeading title="Education & Certifications" />
        <div className="space-y-3">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              title={edu.title}
              institution={edu.institution}
              date={edu.date}
              description={edu.description}
            />
          ))}
        </div>

      </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          Generated ❤️ by Loganathan C
        </p>
    </div>
  );
};

export default App;
