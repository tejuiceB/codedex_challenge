'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'NeuroKheti',
      description: 'AI-Powered Agricultural Robotics Platform with ML models for soil moisture & crop health prediction (85%+ accuracy). Real-time farmer dashboard with IoT integration.',
      image: '🧠',
      tech: ['Python', 'NextJS', 'FastAPI', 'ML', 'IoT'],
      github: 'https://github.com/tejuiceB',
      demo: 'https://neurokhet-814802096118.asia-south1.run.app/',
      color: 'from-green-400 to-emerald-600',
    },
    {
      id: 2,
      title: 'Playlist Converter',
      description: 'Automated playlist transfer between Spotify and YouTube Music. OAuth2 authentication and async track mapping with AWS EC2 deployment.',
      image: '🎵',
      tech: ['Java', 'Spring Boot', 'React', 'OAuth2', 'AWS'],
      github: 'https://github.com/tejuiceB/PlaylistConverter.git',
      demo: 'http://spoyou.site/',
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 3,
      title: 'Recycling Detection AI',
      description: 'CNN model with 92% accuracy to classify recyclable waste. Live video feed integration via Flask API promoting sustainability.',
      image: '♻️',
      tech: ['React', 'Flask', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/tejuiceB/recycler',
      demo: '#',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 4,
      title: 'TejuiceHub App',
      description: 'Smart file analysis tool with AI-based summaries for PDFs, CSVs, and images. Finalist at Google FlutterFlow Build Fest 2025.',
      image: '📊',
      tech: ['FlutterFlow', 'Firebase', 'Gemini API', 'Streamlit'],
      github: 'https://github.com/tejuiceB',
      demo: 'https://drive.google.com/file/d/1d49V5ihqhlOP_4xYt4REbL_dx4xtyWMp/view',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 5,
      title: 'Meeting Assistant AI',
      description: 'Real-time meeting transcription & summarization with interactive highlights. Winner of Intel AI Hackathon 2025.',
      image: '🤖',
      tech: ['Python', 'NLP', 'Streamlit', 'Gemini API'],
      github: 'https://github.com/tejuiceB',
      demo: '#',
      color: 'from-indigo-400 to-purple-600',
    },
    {
      id: 6,
      title: 'Spacecraft Anomaly Detection',
      description: 'LSTM-based predictive modeling for detecting spacecraft subsystem failures. Research project for AI-driven autonomous systems.',
      image: '🛰️',
      tech: ['Python', 'TensorFlow', 'LSTM', 'Matplotlib'],
      github: 'https://github.com/tejuiceB',
      demo: '#',
      color: 'from-gray-700 to-slate-900',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 pixel-bg">
      <div className="container mx-auto max-w-7xl">
        <h2 className="retro-heading text-4xl md:text-5xl text-center mb-6">
          MY PROJECTS
        </h2>
        <p className="text-center text-2xl mb-12 max-w-2xl mx-auto text-primary">
          Check out some of the cool stuff I&apos;ve built! 🚀
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="pixel-card p-6 transition-all duration-300 hover:scale-105"
            >
              {/* Project Icon */}
              <div className={`bg-gradient-to-br ${project.color} p-8 mb-6 border-4 border-[#8b4513] flex items-center justify-center`}>
                <div className="text-8xl">{project.image}</div>
              </div>

              {/* Project Info */}
              <h3 className="text-2xl font-bold mb-3 text-[#ff6b35]">
                {project.title}
              </h3>
              <p className="text-lg mb-4 line-clamp-3 text-primary">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#ffd93d] text-[#2d1b00] px-3 py-1 text-sm border-2 border-[#8b4513] font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center pixel-button px-4 py-2 text-xs"
                >
                  CODE
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center pixel-button px-4 py-2 text-xs bg-[#f7931e]"
                >
                  DEMO
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="pixel-card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-[#ff6b35]">
              🏆 Achievements & More
            </h3>
            <p className="text-xl mb-6 text-primary">
              Winner of Intel AI Hackathon 2025 • Finalist at Google BuildFest 2025 • 
              Top 9K Team at Agentic AI Day • 300+ DSA Problems Solved
            </p>
            <a
              href="https://github.com/tejuiceB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pixel-button px-8 py-4 text-sm"
            >
              VIEW ALL ON GITHUB →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
