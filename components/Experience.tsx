export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 pixel-bg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="retro-heading text-4xl md:text-5xl text-center mb-12">
          EXPERIENCE
        </h2>

        {/* Main Experience Card */}
        <div className="pixel-card p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-[#ff6b35] mb-2">
                Software Developer Intern
              </h3>
              <p className="text-2xl text-primary font-bold">
                Synchronik.co.in
              </p>
            </div>
            <div className="text-xl text-primary font-bold mt-2 md:mt-0">
              Jan 2025 – May 2025
            </div>
          </div>

          <div className="space-y-4 text-lg text-primary">
            <p className="text-xl font-bold mb-4">
              🚀 Key Contributions:
            </p>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⚛️</span>
                <span>Developed <strong>ReactJS modules</strong> for registration, attendance tracking, and access management in scalable ERP systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔐</span>
                <span>Built and integrated <strong>Django REST APIs</strong> with secure authentication and role-based permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <span>Optimized <strong>PostgreSQL queries</strong>, improving system response time by <strong className="text-[#ff6b35]">30%</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🐧</span>
                <span>Configured <strong>Linux-based CI/CD pipelines</strong> and managed deployment servers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <span>Collaborated in <strong>Agile sprints</strong> and contributed to code reviews, testing, and production releases</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <h2 className="retro-heading text-3xl md:text-4xl text-center mb-8">
          EDUCATION
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="pixel-card p-6">
            <div className="text-5xl mb-4 text-center">🎓</div>
            <h3 className="text-2xl font-bold text-[#ff6b35] mb-2 text-center">
              B.Tech in AI & ML
            </h3>
            <p className="text-xl text-primary text-center font-bold mb-2">
              Yeshwantrao Chavan College of Engineering
            </p>
            <p className="text-lg text-primary text-center">
              2021 – 2025 | CGPA: 7.81
            </p>
          </div>

          <div className="pixel-card p-6">
            <div className="text-5xl mb-4 text-center">💻</div>
            <h3 className="text-2xl font-bold text-[#ff6b35] mb-2 text-center">
              Diploma in Computer Engineering
            </h3>
            <p className="text-xl text-primary text-center font-bold mb-2">
              Government Polytechnic, Nagpur
            </p>
            <p className="text-lg text-primary text-center">
              2018 – 2021 | 81.85%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
