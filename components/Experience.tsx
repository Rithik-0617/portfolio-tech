'use client';

import { useInView } from 'react-intersection-observer';
import { Building, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      icon: <Building size={24} />,
      title: "MasterLinque Automation (SPM)",
      role: "Intern",
      description: "Designed and coded automation workflows for industrial robotics applications.",
      type: "internship"
    },
    {
      icon: <Building size={24} />,
      title: "SRM Directorate of Research",
      role: "Research Intern",
      description: "Worked on IoT and AI solutions to improve manufacturing processes with prototype development.",
      type: "internship"
    }
  ];

  const education = [
    {
      degree: "B.E. in Robotics and Automation",
      institution: "Easwari Engineering College",
      period: "2022 – 2026",
      grade: "CGPA: 8.04"
    },
    {
      degree: "HSC (Computer Science)",
      institution: "G.G.S.M.M. Hr. Sec. School",
      period: "2020 – 2022",
      grade: "82.33%"
    },
    {
      degree: "SSLC",
      institution: "G.G.S.M.M. Hr. Sec. School",
      period: "2020",
      grade: "72.66%"
    }
  ];

  const certifications = [
    "Python Essentials 1 & 2",
    "CCNA 1, 2, 3",
    "Introduction to Cybersecurity"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${inView ? 'fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <Building className="text-blue-400" />
                Internships
              </h3>
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className="glass-effect rounded-xl p-6 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">{exp.title}</h4>
                      <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">{exp.role}</p>
                      <p className="text-gray-700 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-400" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className="glass-effect rounded-xl p-6 hover:bg-blue-50 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">{edu.degree}</h4>
                  <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">{edu.institution}</p>
                  <p className="text-gray-700 text-sm mb-2">{edu.period}</p>
                  <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">{edu.grade}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <Award className="text-yellow-400" />
                Certifications
              </h3>
              <div className="glass-effect rounded-xl p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;