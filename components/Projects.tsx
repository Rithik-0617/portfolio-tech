'use client';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  short: string;
  detailed: string;
}

const projectsData: Project[] = [
  {
    title: 'Smart Irrigation System',
    short: 'Automated irrigation using ESP32, moisture sensors, Node.js, and Flutter.',
    detailed: `Developed a fully functional smart irrigation system to automate and optimize water usage in agriculture.
Key Features & Components:
- Hardware: ESP32, DS1307 RTC, 4 capacitive soil moisture sensors
- Software: Node.js backend, Flutter mobile app, MySQL database
- 147-day rotating schedule logic executed on backend
- Real-time moisture sensor data logging
- App shows moisture levels, historical data, and control
Platform Used: Flutter (Android), Node.js (API), MySQL (DB)`
  },
  {
    title: 'Weed Detection in Paddy Fields',
    short: 'YOLO-based custom CNN to detect and localize weeds in paddy fields.',
    detailed: `Implemented a deep learning-based agricultural vision system to detect weed presence in crop fields.
Key Features & Components:
- Model: Custom-trained YOLOv5
- Dataset: Manually labeled dataset of paddy fields
- Detects and localizes weeds
- Extendable for automated herbicide spraying
Platform Used: Python, PyTorch, Roboflow`
  },
  {
    title: 'Durable Moisture Sensor Casing Design',
    short: 'Protective casing for outdoor soil moisture sensors.',
    detailed: `Designed a robust, weather-resistant enclosure for moisture sensors in agriculture.
Key Features & Components:
- Design Tool: Fusion 360 / Tinkercad
- Material: PLA+ or PETG
- Rain-proof ventilation, protective cover
Platform Used: CAD Tools + 3D Printing`
  },
  {
    title: 'Smart Curtain Automation',
    short: 'Automated curtain control using ESP32 and smartphone commands.',
    detailed: `Built a home automation system to control curtains with an ESP32 and servo motor.
Key Features & Components:
- Microcontroller: ESP32
- Communication: HTTP/Web-based
- Smartphone app sends open/close commands
Platform Used: Arduino IDE, ESP32 (C/C++), Basic web UI`
  },
  {
    title: 'URL Shortener',
    short: 'Custom short link generator using React and Go.',
    detailed: `Developed a URL shortener to convert long URLs into short versions.
Key Features & Components:
- Frontend: ReactJS
- Backend: Go with Gorilla Mux
- Database: MongoDB
- Redirect tracking, visit counts, admin dashboard
Platform Used: React, Go, MongoDB`
  },
  {
    title: 'Predictive Maintenance for Automatic Screwing Machine',
    short: 'Real-time vibration analysis dashboard with Node.js, MySQL.',
    detailed: `Built a predictive maintenance system for a robotic screwing workstation.
Key Features & Components:
- Data from NiMyDAQ, DEPRAG AST12, PLC (MQTT)
- Node.js for API/scheduling
- MySQL database, real-time charts, FFT-based alerts
Platform Used: Node.js, MySQL, JavaScript`
  },
  {
    title: 'Smart Notes App (React + Expo, No Backend)',
    short: 'Cross-platform notes app with status control and local alerts.',
    detailed: `Built a mobile note-taking app with offline reminders.
Key Features & Components:
- React Native + Expo
- Note statuses: Working, Completed, Abort
- Custom notification intervals
Platform Used: React Native + Expo`
  },
  {
    title: 'Line Follower Robot',
    short: 'Autonomous robot that follows black paths using IR sensors.',
    detailed: `Created a robotic vehicle that navigates by following a black line.
Key Features & Components:
- Sensors: IR reflectance
- Controller: Arduino Uno
- Path detection and corner turning
Platform Used: Arduino IDE (C++)`
  },
  {
    title: 'Hand Gesture Controlled Robot',
    short: 'Wireless robot controlled via hand gestures using accelerometer.',
    detailed: `Built a robot that moves according to real-time hand motion.
Key Features & Components:
- Sensor: ADXL335 Accelerometer
- RF Transmitter/Receiver (433 MHz)
- Arduino at both ends
- Tilt-based movement mapping
Platform Used: Arduino IDE`
  },
  {
    title: 'OCR Text Detection using PaddleOCR',
    short: 'Text recognition from images using PaddleOCR.',
    detailed: `Created an OCR system for printed/handwritten text extraction.
Key Features & Components:
- PaddleOCR (Python)
- Webcam/DroidCam or static images
- Multilingual OCR output
Platform Used: Python, PaddleOCR`
  }
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-[8vh] sm:py-[10vh] lg:py-[12vh] bg-white px-[2vw] sm:px-[3vw] lg:px-[4vw]">
      <div className="container mx-auto max-w-[95vw]">
        <h2 className="text-center text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw] font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-[4vh]">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-[2vw] sm:gap-[2vw]">
          {projectsData.map((proj) => (
            <div
              key={proj.title}
              className="relative bg-gradient-to-br from-blue-200 via-white to-purple-100 rounded-2xl shadow-xl hover:shadow-2xl p-[2.5vw] sm:p-[2vw] min-h-[170px] flex flex-col transition-transform hover:scale-105"
              style={{ minWidth: 0 }}
            >
              <h3 className="text-blue-700 text-[2.2vw] sm:text-[1.8vw] lg:text-[1.5vw] font-bold mb-[1.2vh] truncate bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {proj.title}
              </h3>
              <p className="text-gray-700 text-[1.5vw] sm:text-[1.2vw] lg:text-[1vw] mb-[1vh] truncate">
                {proj.short}
              </p>
              <button
                onClick={() => setActiveProject(proj)}
                className="absolute top-[1vw] right-[1vw] text-blue-700 hover:text-blue-900"
              >
                <ExternalLink className="w-[1.7vw] h-[1.7vw] sm:w-[1.3vw] sm:h-[1.3vw]" />
              </button>
            </div>
          ))}
        </div>

        {/* Popup */}
        {activeProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white rounded-lg p-[3vw] relative w-[80vw] max-h-[80vh] overflow-auto animate-fade-in">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-[2vw] right-[2vw] text-gray-500 hover:text-gray-700 text-[3vw] sm:text-[2.5vw]"
              >
                ✕
              </button>
              <h3 className="text-blue-700 text-[3vw] sm:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] 2xl:text-[1.5vw] font-bold mb-[2vh]">
                {activeProject.title}
              </h3>
              <p className="text-gray-700 text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] whitespace-pre-line">
                {activeProject.detailed}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;