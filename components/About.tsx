export default function About() {
  const skills = [
    { name: 'Python', icon: '🐍', level: 92 },
    { name: 'React/Next.js', icon: '⚛️', level: 88 },
    { name: 'FastAPI/Django', icon: '⚡', level: 85 },
    { name: 'TensorFlow/PyTorch', icon: '🤖', level: 87 },
    { name: 'PostgreSQL/MySQL', icon: '🗄️', level: 83 },
    { name: 'Docker/CI-CD', icon: '🐳', level: 80 },
    { name: 'AWS/GCP', icon: '☁️', level: 78 },
    { name: 'Java/Spring Boot', icon: '☕', level: 82 },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-section-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="retro-heading text-4xl md:text-5xl text-center mb-12 text-[#ff6b35]">
          ABOUT ME
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <div className="pixel-card p-8">
            <h3 className="text-3xl mb-6 font-bold text-[#ff6b35]">
              👋 Nice to meet you!
            </h3>
            <div className="space-y-4 text-xl leading-relaxed text-primary">
              <p>
                I&apos;m <strong className="text-[#ff6b35]">Tejas Bhurbhure</strong>, 
                a passionate <strong>Software Developer and AI Engineer</strong> from Nagpur, India, 
                specializing in full-stack development, AI, and intelligent automation systems.
              </p>
              <p>
                I recently completed my <strong className="text-[#ff6b35]">B.Tech in Artificial Intelligence & Machine Learning</strong> from 
                Yeshwantrao Chavan College of Engineering (2025), and previously earned a Diploma in Computer Engineering.
              </p>
              <p>
                I love building <strong>real-world AI applications</strong>, from web-based ERP systems and automation tools 
                to research-driven AI agents for robotics and anomaly detection. My work combines ReactJS, FastAPI/Django, 
                Python, and ML frameworks like TensorFlow and PyTorch.
              </p>
              <p className="text-2xl font-bold">
                🤖 AI Engineer | 🚀 Full-Stack Developer | 🛰️ Space Systems Enthusiast
              </p>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://github.com/tejuiceB"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button px-6 py-3 text-sm"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/tejas-bhurbhure-b35b0b218"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button px-6 py-3 text-sm bg-[#f7931e]"
              >
                LINKEDIN
              </a>
              <a
                href="https://leetcode.com/u/tejuice/"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button px-6 py-3 text-sm bg-[#ffd93d] text-[#2d1b00]"
              >
                LEETCODE
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="pixel-card p-8">
            <h3 className="text-3xl mb-6 font-bold text-[#ff6b35]">
              🛠️ My Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-lg text-[#ff6b35] font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-6 border-2 border-[var(--pixel-border)]">
                    <div
                      className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] h-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-16 pixel-card p-8">
          <h3 className="text-3xl mb-8 font-bold text-[#ff6b35] text-center">
            📚 My Coding Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h4 className="text-2xl font-bold mb-2 text-[#ff6b35]">Experience</h4>
              <p className="text-lg text-primary">
                Software Developer Intern at Synchronik.co.in (Jan-May 2025)
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold mb-2 text-[#ff6b35]">Achievements</h4>
              <p className="text-lg text-primary">
                Winner of Intel AI Hackathon & Finalist at Google BuildFest 2025
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h4 className="text-2xl font-bold mb-2 text-[#ff6b35]">Research</h4>
              <p className="text-lg text-primary">
                AI for Robotics, Space Systems & Human-Aware Automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
