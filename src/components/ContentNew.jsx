import React from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code, Database, Globe, Award } from 'lucide-react';
import dh from "../images/datahub.png";
import shed from "../images/shed.png";
import sponza from "../images/sponza.png";
import betapp_table from "../images/betapp_table.png";
import betapp from "../images/betapp.jpg";


export default function Portfolio() {
  return (
    <div>
      <section id="header" className='w-full bg-white shadow-sm border-b border-gray-200'>
          <div className="flex flex-col py-4 sm:items-center">
            <h1 className="text-center font-bold text-gray-900">Ilmari Hämäläinen</h1>
            <nav className="flex justify-center flex-row space-x-6 pt-1 sm:space-x-6 sm:justify-end">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Experience</a>
              <a href="#expertise" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Expertise</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Projects</a>
            </nav>
          </div>
      </section>

      <div className='md:max-w-7xl mx-auto'>
        <section id='hero' className="pt-10 pb-6 md:py-15">
          <div className="px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Data Engineer & Full-Stack Developer
            </h2>
            <div className="text-lg text-gray-700 space-y-3 leading-relaxed max-w-xl mx-auto">
              <p className="font-semibold">Computer Science Master's Student at Aalto University (GPA: 4.4)</p>
              <p className="font-medium">Graduating November 2025</p>
              <p className="pb-2">
                Languages: Finnish (native), English (proficient)
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-lg text-left mb-8">
              <p className="text-gray-700 leading-relaxed">
                Aspiring data engineer and full-stack web developer with hands-on industry experience at Fingrid Datahub. 
                Currently completing a Master's Thesis on data analytics platform design for Datahub reporting as a full-time role at Fingrid. 
                Skilled in big data technologies and modern web development, with a strong interest in building scalable, data-driven systems.
              </p>
            </div>
              <div className="">
                <p className="text-lg font-semibold">
                  Available for opportunities starting <b>December 2025</b>
                </p>
            </div>
          </div>
        </section>

        <section id="experience" className="py-6 md:py-2 bg-white">
          <div className="mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              Professional Experience
            </h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <img className="h-8 md:h-11" src={dh} alt="Fingrid Datahub" />
                </div>
              </div>
              <div className="space-y-6">
                  <p className="text-gray-600 italic mb-2">2023 - present</p>
                  <p className="text-gray-700 mb-2">
                  Datahub is a centralized data exchange system for electricity retail market of Finland
                  </p>
                  <p className="text-gray-700">
                  I worked full-time during the summers of 2023 and 2024, and part-time 
                  alongside my studies during the academic years.
                  </p>
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h5 className="text-lg font-semibold text-gray-900">Thesis Worker</h5>
                    <span className="text-gray-600 italic px-2 py-1 rounded text-sm">04/2025 - 11/2025</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Working on a Master's Thesis: designing an enterprise-scale data analytics platform for 
                    terabyte-scale electricity market data. Thesis explores modern data platform design principles, 
                    best practices and relevant enabling technologies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-2">Core Research Areas:</h6>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Data platform core layers: data ingestion, storage, processing, serving</li>
                        <li>• Platform architectures: data warehouse, data lake, lakehouse</li>
                        <li>• Data integration & processing: batch, stream, ETL, Change Data Capture</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-2">Technologies:</h6>
                      <div className="flex flex-wrap gap-2">
                        {['Hadoop', 'Hive', 'Spark', 'Flink', 'Kafka', 'GCP', 'AWS', 'Azure', 'Snowflake', 'Databricks'].map(tech => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h5 className="text-lg font-semibold text-gray-900">Intern</h5>
                    <span className="text-gray-600 italic px-2 py-1 rounded text-sm">2023-2024</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-2">2024: Full-stack Web Development</h6>
                      <p className="text-gray-700 mb-2">
                        Full-stack web development of Testing and Certification Service of Datahub using Angular, Vue.js, 
                        Node.js/Express(???), Contentful, Docker, and Kubernetes in industry environment.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Experienced enterprise CI/CD pipelines, software testing, code reviews, and production deployments in cloud.
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-2">2023: System Testing</h6>
                      <p className="text-gray-700">Manual system testing, drawing UML diagrams and so on</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-6 md:py-14 bg-white">
          <div className="mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              Technical Expertise & Education
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database size={24} />
                  <h4 className="text-xl font-semibold text-gray-900">Data Engineering</h4>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-700 font-semibold flex items-center gap-2">
                    <Award size={20} />
                    Big Data Platforms Course
                  </p>
                  <p className="pl-7 text-green-700 font-normal flex items-center gap-2">
                      97.5/100p | Grade 5 
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  Gained hands-on experience in platform design and development of core services for big data storage, batch and stream data 
                  ingestion (ETL) & processing, and managing big data.
                  Implemented real-time analytics and data quality monitoring. Deployed in GCP.
                </p>
                <div className="space-y-3">
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Big Data Technologies:</h6>
                    <div className="flex flex-wrap gap-2">
                      {['Apache Kafka', 'Cassandra', 'Hadoop/HDFS', 'Spark', 'Flink', 'Airflow'].map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Programming:</h6>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'PySpark', 'PyFlink', 'Pandas', 'CQL'].map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2">
                  <Github size={16} />
                  <a href="https://github.com/hamalainenilmari/big-data-platform" 
                    className=" text-blue-600 hover:text-blue-700 transition-colors">
                    Github Repository
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={24} />
                  <h4 className="text-xl font-semibold text-gray-900">Full-Stack Web Development</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  Several years of experience building modern web applications through academic projects and industry work. 
                  Skilled in building scalable, micro-services based applications through RESTful APIs. Experience in testing and monitoring.
                  Proficiency in version control with Git, Github and Gitlab.
                </p>
                <div className="space-y-3">
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Frontend & Building:</h6>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'CSS', 'HTML', 'React', 'Angular', 'Vue.js', 'TailwindCSS', 'Webpack', 'Vite','npm'].map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Backend & DevOps:</h6>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'Kubernetes', 'Nginx', 'JWT', 
                      'Vercel', 'Postman', 'Playwright', 'Jest', 'ESLint', 'Prettier'].map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="font-semibold text-gray-900 mb-2">Completed Courses (All Grade 5):</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <a href="https://fitech101.aalto.fi/fi/courses/web-software-development" >Web Software Development </a> </li>
                    <li>• <a href="https://fullstackopen.com/en/about/" >Full Stack Web Development </a></li>
                    <li>• <a href='https://fitech101.aalto.fi/fi/courses/designing-and-building-scalable-web-applications' > Designing and Building Scalable Web Applications </a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages & CS Core Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-gray-900 mb-2">Proficiency:</h6>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'].map(lang => (
                      <span key={lang} className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <h6 className="font-semibold text-gray-900 mb-2">Experience in:</h6>
                  <div className="flex flex-wrap gap-2">
                    {['C', 'Scala', 'Shell/Bash'].map(lang => (
                      <span key={lang} className="bg-gray-50 text-gray-600 px-3 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <h6 className="font-semibold text-gray-900 mt-2 mb-2">Environments:</h6>
                  <div className="flex flex-wrap gap-2">
                    {['Linux', 'Windows'].map(env => (
                      <span key={env} className="bg-gray-50 text-gray-600 px-3 py-1 rounded">
                        {env}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-2">Theory:</h6>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Computer architecture & OS</li>
                    <li>• Networking</li>
                    <li>• Algorithm design and analysis</li>
                    <li>• Information security fundamentals</li>
                    <li>• Concurrent programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-6 md:py-1 bg-white">
          <div className="mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Other Cool Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">Football Match Prediction Web App</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  I developed and deployed a football match prediction app for UEFA Euro 2024 with 9 active users.
                  App featured authentication, automatic match result fetching, 
                  user predictions, and a scoring system.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Express', 'MongoDB', 'Vercel'].map(tech => (
                    <span key={tech} className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      <img className='rounded h-80' src={betapp} alt="Shed pic" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      <img className='rounded h-80' src={betapp_table} alt="Shed pic" />
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 mt-2">
                  <Github size={16} />
                  <a href="https://github.com/hamalainenilmari/football-betting-app" 
                      className="hover:text-blue-700 transition-colors">
                      Frontend
                      </a>
                      <a href="https://github.com/hamalainenilmari/football-betting-app-backend" 
                      className="hover:text-blue-700 transition-colors">
                      Backend
                      </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 md:col-span-2 mb-2">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">Computer Graphics</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Excelled in Jaakko Lehtinen's courses on foundations and advanced graphics focusing on offline ray-tracing. 
                  Created photorealistic renderings by writing  linear algebra based advanced lighting algorithms in C++.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['C++', 'Ray Tracing', 'Offline Rendering', 'GLSL', 'GPU Programming'].map(tech => (
                    <span key={tech} className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      <img className='rounded' src={shed} alt="Shed pic" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      <img className='rounded' src={sponza} alt="Shed pic" />
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 mt-2">
                  <Github size={16} />
                  <a href="https://github.com/hamalainenilmari/computer-graphics" 
                      className="hover:text-blue-700 transition-colors">
                      Basics
                      </a>
                      <a href="https://github.com/hamalainenilmari/advanced-computer-graphics" 
                      className="hover:text-blue-700 transition-colors">
                      Advanced
                      </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="footer" className="w-full pt-10 pb-2 md:py-16 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Build Something Great Together</h3>
          <p className="text-lg text-gray-600 mb-8">
            I am seeking Data Engineering or Full-Stack Web Development opportunities where I can leverage my 
            expertise in scalable data platforms, modern web technologies, and cloud-native architectures.
          </p>
          <div className="flex flex-wrap justify-center flex-row space-x-2">
            <a 
              href='https://www.linkedin.com/in/ilmari-h%C3%A4m%C3%A4l%C3%A4inen-8a3670260/' 
              className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg border border-gray-200 flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/hamalainenilmari/" 
              className="bg-white hover:bg-gray-50 text-black-700 px-8 py-3 rounded-lg border border-gray-200 flex items-center gap-2">
              <Github size={16} />
              Github
            </a>
            <p 
            className="flex items-center gap-2 py-6">
              <Mail size={20} />
              illmarihamalainen@gmail.com
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}