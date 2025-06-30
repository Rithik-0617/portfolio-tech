'use client';

import { useState } from 'react';

interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C', 'C++', 'Golang (Go)', 'JavaScript', 'Dart', 'SQL']
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      'React.js',
      'React Native (Expo)',
      'Flutter',
      'Node.js (Express)',
      'PyTorch',
      'PaddleOCR',
      'YOLOv5 / YOLOv8',
      'Gorilla Mux (Go)',
      'MQTT',
      'REST API',
      'Roboflow'
    ]
  },
  {
    title: 'AI, Data, and Analysis',
    items: [
      'Convolutional Neural Networks (CNN)',
      'OCR Text Recognition',
      'NLP & Sentiment Analysis',
      'PointNet++',
      'FFT (Frequency Analysis)',
      'Real-time Sensor Data Processing'
    ]
  },
  {
    title: 'Robotics & IoT',
    items: [
      'ESP32',
      'Arduino Uno',
      'Servo Motors',
      'NiMyDAQ',
      'DEPRAG AST12',
      'PLC via MQTT',
      'IR Sensors',
      'Accelerometers',
      'RTC (DS1307)',
      '3D Printing',
      'Moisture Sensors'
    ]
  },
  {
    title: 'Web, Mobile & UI Development',
    items: [
      'React.js',
      'React Native (Expo)',
      'Flutter',
      'HTML & CSS',
      'JavaScript',
      'Local Notifications (Expo)',
      'RESTful API Development'
    ]
  },
  {
    title: 'Tools, Platforms & Environments',
    items: [
      'MySQL',
      'MongoDB',
      'Arduino IDE',
      'VS Code',
      'Fusion 360 / Tinkercad',
      'VirtualBox',
      'Linux / Ubuntu',
      'DroidCam',
      'Git & GitHub'
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);

  const handleClose = () => {
    setActiveCategory(null);
  };

  return (
    <section id="skills" className="py-[8vh] sm:py-[10vh] lg:py-[12vh] bg-white px-[2vw] sm:px-[3vw] lg:px-[4vw]">
      <div className="container mx-auto max-w-[95vw]">
        <h2 className="text-center text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw] font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-[4vh]">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-[2vw] sm:gap-[2vw]">
          {skillCategories.map((cat) => {
            const displayItems = cat.items.slice(0, 4);
            const hasMore = cat.items.length > 4;

            return (
              <div
                key={cat.title}
                className="relative bg-gradient-to-br from-blue-200 via-white to-purple-100 rounded-2xl shadow-xl hover:shadow-2xl p-[2.5vw] sm:p-[2vw] min-h-[170px] flex flex-col transition-transform hover:scale-105"
                style={{ minWidth: 0 }}
              >
                <h3 className="text-blue-700 text-[2.2vw] sm:text-[1.8vw] lg:text-[1.5vw] font-bold mb-[1.2vh] truncate bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {cat.title}
                </h3>
                <ul className="space-y-[1vh]">
                  {displayItems.map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 text-[1.5vw] sm:text-[1.2vw] lg:text-[1vw] truncate"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {hasMore && (
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className="absolute top-[1vw] right-[1vw] text-blue-600 hover:text-blue-800 text-[1.7vw] sm:text-[1.3vw]"
                  >
                    ...
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Popup for full category */}
        {activeCategory && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="relative bg-white rounded-xl w-[80vw] max-h-[80vh] p-[2vw] overflow-auto">
              <button
                onClick={handleClose}
                className="absolute top-[1vw] right-[1vw] text-gray-500 hover:text-gray-700 text-[3vw] sm:text-[2.5vw]"
              >
                ✕
              </button>
              <h3 className="text-blue-700 text-[3.5vw] sm:text-[3vw] lg:text-[2.5vw] font-bold mb-[3vh]">
                {activeCategory.title}
              </h3>
              <ul className="list-disc list-inside space-y-[1vh]">
                {activeCategory.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;