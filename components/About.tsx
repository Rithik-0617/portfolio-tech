'use client';

import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 relative bg-white">
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${inView ? 'fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
                Career Objective
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a multidisciplinary engineer passionate about building intelligent systems that bridge hardware and software. With experience in AI, robotics, IoT, and full-stack development, I create solutions that solve real-world problems — from smart agriculture and predictive maintenance to object detection and mobile automation.
                <br /><br />
                I work with technologies like Python, C++, Node.js, React, Flutter, and ESP32 to deliver scalable, efficient systems. Whether it’s training deep learning models, designing embedded controllers, or building end-to-end applications, I enjoy turning ideas into working prototypes that matter.
                <br /><br />
                Always exploring, always building.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">10+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">8.02</div>
                  <div className="text-gray-600">Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">6+</div>
                  <div className="text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;