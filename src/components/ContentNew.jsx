import React from 'react';
import { Github, Mail, Linkedin, Database, Globe, Award, PinIcon } from 'lucide-react';
import dh from "../images/datahub.png";
import shed from "../images/shed.png";
import sponza from "../images/sponza.png";
import betapp_table from "../images/table.jpg";
import betapp from "../images/betapp4.jpg";
import arc from "../images/bdp_hybrid_architecture.png";
import { useState } from 'react';

export default function Portfolio() {

  const [table_isOpen, table_setIsOpen] = useState(false);
  const [betapp_isOpen, betapp_setIsOpen] = useState(false);
  const [shed_isOpen, shed_setIsOpen] = useState(false);
  const [sponza_isOpen, sponza_setIsOpen] = useState(false);
  const [arc_isOpen, arc_setIsOpen] = useState(false);


  return (
    <div className='sm:text-sm'>
      <section id="header" className='w-full bg-white shadow-sm border-b border-gray-200'>
          <div className="flex flex-col py-4 sm:items-center">
            <h1 className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center gap-1 font-bold text-gray-900">
              <span className="block sm:inline">Ilmari</span>
              <span className="block sm:inline ml-0 sm:ml-1">Hämäläinen</span>
            </h1>
            <p className="text-2xl text-center sm:text-2xl font-medium text-gray-900 mt-2 sm:mt-0 mb-3 tracking-tight sm:mb-3">
              Data Engineering & Full-Stack Web Development
            </p>

            <nav className="flex justify-center flex-row pt-1 gap-4 sm:gap-10 sm:justify-end p-1">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Experience</a>
              <a href="#expertise" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Expertise</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Projects</a>
              <a href="#footer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </nav>
          </div>
      </section>

      <div className='sm:max-w-4xl mx-auto'>
        <section id='hero' className="pt-4 pb-6 sm:py-8 sm:pt-4">
          <div className="px-6 text-center">
            
            <div className="text-lg text-gray-700 space-y-2 leading-relaxed max-w-xl mx-auto sm:space-y-1 sm:text-base">
              <p className="font-semibold">Master's student in Computer Science at Aalto University (GPA: 4.4)</p>
              <p className="font-medium">Graduating November 2025</p>
              <p className="">
                Languages: Finnish (native), English (proficient)
              </p>
              <p className="pb-4 inline-flex items-center gap-2">
                <PinIcon size={20} color="#ff0000" fill="#ff0000"  />
                Helsinki
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-lg text-left mb-8 sm:mb-4">
              <div className="text-gray-700 leading-relaxed text-center space-y-2 sm:space-y-0">
                <p>
                Early career data engineer and full-stack web developer with hands-on industry experience at Fingrid Datahub. <br />
                </p>
                <p>
                Currently finalizing a Master's thesis on designing a big data platform for metering data analysis at Datahub. <br />
                </p>
                <p>
                  Skilled in big data technologies and modern web development, passionate about
                  building end-to-end data pipelines that turn complex datasets into meaningful insights.
                </p>
              </div>
            </div>
              <div className="text-lg font-semibold flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1">
                <p>
                  Available for opportunities starting 
                </p>
                <b>December 2025</b>
            </div>
          </div>
        </section>

        <section id="experience" className="py-0 sm:py-0 bg-white">
          <div className="mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3 sm:text-2xl">
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
                  Datahub is a centralized data exchange system for the electricity retail market of Finland
                  </p>
                  
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h5 className="text-lg font-semibold text-gray-900">Master's Thesis Worker</h5>
                    <span className="text-gray-600 italic px-2 py-1 rounded text-sm">04/2025 - 11/2025</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <b>Designing a data analytics platform </b> for 
                    terabyte-scale electricity market data. The research explores modern big data platform design 
                    principles 
                    and technologies to architect a scalable platform enabling large-scale
                    analytical workloads and flexible data product delivery.
                    
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-2">Core Research Areas:</h6>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Data platform core layers: data ingestion, storage, processing, presentation</li>
                        <li>• Platform architectures: data warehouse, data lake, lakehouse</li>
                        <li>• Data integration approaches: batch, stream, ETL, Change Data Capture</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-2">Technologies Evaluated:</h6>
                      <div className="flex flex-wrap gap-2">
                        {['Hadoop', 'HDFS', 'Hive', 'HBase', 'ClickHouse', 'Spark', 'Kafka', 'GCP', 'AWS', 'Azure'].map(tech => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <h5 className="text-lg font-semibold text-gray-900">Intern</h5>
                      <span className="text-gray-600 italic px-2 py-1 rounded text-sm">2023-2024</span>
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      Worked full-time during the summers of 2023 and 2024, and part-time 
                      during the academic years.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h6 className="font-bold text-gray-900 mb-2">2024: Full-stack Web Development</h6>
                      <p className="text-gray-700 mb-2">
                        Full-stack web development of a <a href='https://sertifiointi.datahub.fi/etusivu'> Testing and Certification 
                        Service </a> that enables 200+ market parties to test their systems' compatibility with 
                        Datahub by simulating electricity market process flows.
                        <br />
                      </p>

                      <div>
                        <h6 className="font-semibold text-gray-900 mb-1 mt-2">Full-Stack:</h6>
                        <div className="flex flex-wrap gap-2">
                            {['TypeScript', 'Vue.js', 'Svelte', 'Axios', 'Node.js', 'Express.js', 'Contentful CMS', 'Jest'].map(tech => (
                            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>


                      <div className='mb-2'>
                        <h6 className="font-semibold text-gray-900 mb-1 mt-2">Infrastructure: </h6>
                        <div className="flex flex-wrap  gap-2">
                          {['Docker', 'Kubernetes', 'Nginx', 'Azure', 'Microsoft AAD', 'Microsoft Azure Storage'
                          ].map(tech => (
                            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm">
                        Gained hands-on experience in industry software development with agile DevOps, CI/CD pipelines, code reviews, and production deployments in Azure cloud.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-bold text-gray-900 mb-2">2023: System Testing</h6>
                      <p className="text-gray-700">Manual system testing and creating UML diagrams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-6 sm:pt-8 bg-white">
          <div className="mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3 sm:text-2xl">
              Technical Expertise & Education
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  Gained practical experience in designing and developing core services for big data platforms, including
                  storage, batch and stream data ingestion & processing (ETL), and big data management.
                  Implemented end-to-end data pipelines supporting real-time ingestion and processing (≈200 records/s)
                  and batch ingestion (≈2000 records/s) in a resource-constrained environment.
                  Included tenant-specific SLAs, job scheduling, real-time analytics, and data quality monitoring. 
                  Deployed in <b>Google Cloud Platform</b>.
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
                <div className='pt-4 xl:block xl:mt-4'>
                  {arc_isOpen && (
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 flex items-center justify-center"
                        onClick={() => arc_setIsOpen(false)}
                      >
                        <img
                          className="max-w-[90%] max-h-[90%] rounded shadow-lg z-50"
                          src={arc}
                          alt="Lambda architecture"
                        />
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      {!arc_isOpen && (
                        <img
                          className="rounded object-cover cursor-pointer shadow"
                          src={arc}
                          alt="Lambda architecture"
                          onClick={() => arc_setIsOpen(true)}
                        />
                      )}
                    </div>
                  </div>

                <div className="mt-4 inline-flex items-center gap-2">
                  <Github size={16} />
                  <a href="https://github.com/hamalainenilmari/big-data-platform" 
                    className=" text-blue-600 hover:text-blue-700 transition-colors">
                    Repository
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
                  Skilled in building scalable, microservices-based applications with RESTful APIs. Experience in testing and monitoring.
                  Proficiency in version control with Git, GitHub and GitLab.
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
                      {['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'Kubernetes', 'Nginx', 
                      'Vercel', 'Postman', 'Playwright', 'ESLint', 'Prettier', 'CI/CD'].map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="font-semibold text-gray-900 mb-2">Relevant Courses (All Grade 5):</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <a href="https://fitech101.aalto.fi/fi/courses/web-software-development" >Web Software Development </a>
                    <p className='font-extralight'>
                      Web application fundamentals with JavaScript, Deno, Svelte, server- and client-side development, and testing
                    </p>
                    <a href="https://fullstackopen.com/en/about/" >Full Stack Web Development </a>
                    <p className='font-extralight'>
                      Modern web development with React, TypeScript, Node.js, REST APIs, and GraphQL
                    </p>

                    <a href='https://fitech101.aalto.fi/fi/courses/designing-and-building-scalable-web-applications' > 
                    Designing and Building Scalable Web Applications </a>
                    <div className="font-extralight ">
                      <p>
                        Scalable web app design with core scalability concepts, Astro, Docker, Kubernetes, 
                        cloud computing and load balancing with Traefik<br />
                      </p>
                      
                     <div className='items-baseline'>
                        <span className='font-medium'>Project: </span> 
                        Scalable programming exercise 
                        platform with authentication, automated grading, 
                        and ML-powered submission grading
                        <div className='inline-flex gap-2 pl-2 justify-baseline items-baseline'>
                          <Github size={16} />
                          <a href="https://github.com/hamalainenilmari/dab-project">Repository</a>
                        </div>
                      </div>

                    </div>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages & CS Core Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-gray-900 mb-2">Proficiency:</h6>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'JavaScript', 'TypeScript', 'SQL'].map(lang => (
                      <span key={lang} className="bg-gray-100 text-gray-700 px-3 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <h6 className="font-semibold text-gray-900 mb-2">Experience in:</h6>
                  <div className="flex flex-wrap gap-2">
                    {['C', 'C++', 'Scala', 'Shell/Bash'].map(lang => (
                      <span key={lang} className="bg-gray-50 text-gray-600 px-3 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <h6 className="font-semibold text-gray-900 mt-2 mb-2">Databases:</h6>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra'].map(env => (
                      <span key={env} className="bg-gray-50 text-gray-600 px-3 py-1 rounded">
                        {env}
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
                    <li>• Operating Systems</li>
                    <li>• Algorithm design and analysis</li>
                    <li>• Data Structures</li>
                    <li>• Information security fundamentals</li>
                    <li>• Concurrent programming</li>
                    <li>• Networking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-6 sm:pt-2 bg-white">
          <div className="mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 sm:text-2xl">Additional Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">Football Match Prediction Web App</h4>
                </div>
                <div className="text-gray-600 mb-4">
                  <p>
                    I developed and deployed a football match prediction making app for UEFA Euro 2024 with 9 active users.
                  </p>
                  <p>
                    App featured authentication, automatic match information fetching, 
                    user predictions, scoring system, and user rankings.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Express', 'MongoDB', 'Vercel', 'Cron'].map(tech => (
                    <span key={tech} className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                  {betapp_isOpen && (
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 flex items-center justify-center"
                        onClick={() => betapp_setIsOpen(false)}
                      >
                        <img
                          className="max-w-[90%] max-h-[90%] rounded shadow-lg z-50"
                          src={betapp}
                          alt="App UI for making predictions"
                        />
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      {!betapp_isOpen && (
                        <img
                          className="rounded h-80 object-cover cursor-pointer shadow"
                          src={betapp}
                          alt="App UI for making predictions"
                          onClick={() => betapp_setIsOpen(true)}
                        />
                      )}
                    </div>

                  <div className="relative">
                    {table_isOpen && (
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 flex items-center justify-center"
                        onClick={() => table_setIsOpen(false)}
                      >
                        <img
                          className="max-w-[90%] max-h-[90%] rounded shadow-lg z-50"
                          src={betapp_table}
                          alt="Shed pic"
                        />
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      {!table_isOpen && (
                        <img
                          className="rounded h-80 object-cover cursor-pointer shadow"
                          src={betapp_table}
                          alt="Shed pic"
                          onClick={() => table_setIsOpen(true)}
                        />
                      )}
                    </div>
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
                  Excelled in Jaakko Lehtinen's foundational and advanced graphics courses focusing on offline ray-tracing. 
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

                  <div className="relative">
                    {shed_isOpen && (
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 flex items-center justify-center"
                        onClick={() => shed_setIsOpen(false)}
                      >
                        <img
                          className="max-w-[90%] max-h-[90%] rounded shadow-lg z-50"
                          src={shed}
                          alt="Shed pic"
                        />
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      {!shed_isOpen && (
                        <img
                          className="rounded object-cover cursor-pointer shadow"
                          src={shed}
                          alt="Shed pic"
                          onClick={() => shed_setIsOpen(true)}
                        />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    {sponza_isOpen && (
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 flex items-center justify-center"
                        onClick={() => sponza_setIsOpen(false)}
                      >
                        <img
                          className="max-w-[90%] max-h-[90%] rounded shadow-lg z-50"
                          src={sponza}
                          alt="Sponza pic"
                        />
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      {!sponza_isOpen && (
                        <img
                          className="rounded object-cover cursor-pointer shadow"
                          src={sponza}
                          alt="Sponza pic"
                          onClick={() => sponza_setIsOpen(true)}
                        />
                      )}
                    </div>
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

      <section id="footer" className="w-full pt-6 pb-2 sm:py-8 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Build Something Great Together</h3>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            I am seeking Data Engineering or Full-Stack Web Development opportunities where I can leverage my 
            expertise in scalable data platforms, modern web technologies, and big data architectures.
          </p>
          <div className="flex flex-wrap pt-2 justify-center py-3 flex-row space-x-2 sm:space-x-8 sm:py-0">
            <a 
              href='https://www.linkedin.com/in/ilmari-h%C3%A4m%C3%A4l%C3%A4inen-8a3670260/' 
              className="bg-white hover:bg-gray-50 text-gray-700 px-8 rounded-lg border py-2 border-gray-200 flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/hamalainenilmari/" 
              className="bg-white hover:bg-gray-50 text-black-700 px-8 rounded-lg border border-gray-200 flex items-center gap-2">
              <Github size={16} />
              GitHub
            </a>
            <p 
            className="flex items-center gap-2 pt-2 sm:pt-0">
              <Mail size={20} />
              illmarihamalainen@gmail.com
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}