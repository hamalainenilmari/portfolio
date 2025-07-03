import hybrid_arc from "../images/bdp_hybrid_architecture.png"
import shed_pic from "../images/shed.png"
import sponza_pic from "../images/sponza.png"


const MainContent = () => {
  return (
    <div class="px-4">
        <h1 class="text-center text-lg font-bold">Ilmari Hämäläinen</h1>
        <div>
            <p>
            Computer Science Master's Student | Aalto University (GPA: 4.4) | Graduating November 2025
            Languages: Finnish (native), English (proficient)
            </p>
        </div>
        <div class="bg-white w-full border-2 border-b-blue-200 rounded-md mb-4 p-2">
            <p>
            Aspiring data engineer and full-stack web developer with hands-on industry experience at Fingrid Datahub. Currently completing a Master's Thesis on scalable data analytics platform design for Datahub reporting as a full-time role at Fingrid. Skilled in big data technologies and modern web development, with a strong interest in building scalable, data-driven systems.
            Expected to finish the thesis and graduate in November 2025 and I'm actively looking for data engineering or full-stack web development opportunities starting December 2025.
            </p>
        </div>
      <div>
        <h2>Professional Experience</h2>
        <b>Fingrid Datahub (2023-present) <br></br></b>
        <p>Datahub is a centralized data exchange system for electricity retail market of Finland</p>
        <i>Thesis Worker 04/2025 - 11/2025</i>
        <p>
        Working on a Master's Thesis: designing a scalable enterprise-scale data analytics platform for 
        terabyte-scale electricity market data. Thesis explores modern data platform design principles, 
        best practices and relevant enabling technologies. Theoretical research focuses on concepts including:
        </p>
        <ul>
        <li>Core layers of data platforms: data acquisition, data storage, data processing and data serving</li>
        <li>Platform architectures: data warehouses, data lake + data warehouse, lakehouse</li>
        <li>Data integration: ETL, Change Data Capture</li>
        <li>Big data processing paradigms: batch, stream, hybrid/lambda</li>
        <li>Technologies: Hadoop, Hive, Spark, Flink, Kafka, etc.</li>
        <li>Cloud and Platforms: GCP, AWS, Azure, Snowflake, Databricks</li>
        </ul>
        <i>Intern 2023-2024</i>
        <ul>
        <li>2024: Full-stack web development of Testing and Certification Service of Datahub using Angular, Vue.js, Node.js/Express, Docker, and Kubernetes 
            in regulated industry environment, working with a team of skilled consultant developers. Experienced enterprise CI/CD pipelines, software testing, code 
            reviews, and production deployments in cloud. </li>
        <li>2023: Manual system testing and drawing UML diagrams</li>
        </ul>
        </div>
        <div>
        <h2>Technical Expertise and Education</h2>
        <b>Data Engineering<br></br></b>
        During my studies I have gained experience in data engineering in both design and development sides. 
        I excelled in a Big Data Platforms -course (link), which focused on building batch and stream data 
        ingestion & processing platforms, gaining 97.5/100 points (grade 5). I have gained hands-on 
        experience in platform design, core services for data storage, batch and stream data ingestion (ETL) & 
        processing, and managing big data. The design and implementations can be found from 
        my <a href={"https://github.com/hamalainenilmari/big-data-platform"}>Github Repository</a>.
        Concepts I have hands-on experience in:
        <ul>
        <li>Big Data Technologies: Apache Kafka, Cassandra, Hadoop/HDFS, Spark, Flink, Airflow</li>
        <li>Data Ingestion & Processing: Batch and stream processing, ETL pipelines, real-time analytics</li>
        <li>Cloud Platforms: GCP (hands-on deployment)</li>
        <li>Databases: PostgreSQL, MySQL, MongoDB, Cassandra, Redis</li>
        <li>Programming: Python (PySpark, PyFlink, Pandas), Scala, SQL</li>
        </ul>

        <img src={hybrid_arc} alt="Lambda architecture platform" />

        <b><br></br>Full-Stack Web Development<br></br></b>
        <p>
        I have several years of experience building modern web applications through academic projects and 
        industry work. I have experience in designing and developing scalable, micro-services based 
        applications. Technologies and practices I am experienced with:
        </p>
        <ul>
        <li>Frontend: React, Angular, Vue.js, JavaScript/Typescript, HTML/CSS, TailwindCSS</li>
        <li>Backend: Node.js/Express, REST/GraphQL APIs</li>
        <li>DevOps: Docker, Kubernetes, CI/CD pipelines, monitoring (Prometheus, Grafana)</li>
        <li>Security: JWT, OAuth, authentication & authorization, secure API design</li>
        <li>Testing: Unit & end-to-end testing, Playwright, Cypress</li>
        </ul>
        <p>
        I have passed all these web development courses with excellent (5) grades:
        </p>
          <li>
          <a href={"https://fitech101.aalto.fi/fi/courses/web-software-development"}> Web Software Development </a>
        </li>
        <li>
          <a href={"https://fullstackopen.com/en/about"}> Full Stack Web Development </a>
        </li>
        <li>
          <a href={"https://fitech101.aalto.fi/fi/courses/designing-and-building-scalable-web-applications"}>Designing and Building Scalable Web Applications</a> <a href={"https://github.com/hamalainenilmari/dab-project"}>(Github Repo)</a>
        </li>
        <p>
        As a small side project I developed and maintained a football betting web app together with a friend, 
        see here (github). The idea was to enable users to make predictions on UEFA Euro 2024 tournament 
        matches and see who gets the most points. App composed of React front-end, Express backend, 
        MongoDB database, and a scheduled fetching of the match results from a third party API. App was 
        deployed on Vercel cloud and had 10 active users.
        </p>
        
        <b>Add picture here</b>
        
        <b>Programming languages:</b>
        <ul>
        <li>Proficiency: Python, JavaScript, TypeScript, C++</li>
        <li>Experience in: C, Scala, Shell/Bash scripting</li>
        <li>Environments: Unix/Linux</li>
        </ul>

        <b>Theoretical CS</b>
        <ul>
        <li>Understanding of computer architecture, operating systems, networking</li>
        <li>Algorithm design and analysis (time & space complexity),  Data Structures</li>
        <li>Information security fundamentals (encryption, hashing, SSL/TLS, PKI, XSS, CSRF, OAuth)</li>
        <li>Concurrent programming (threads, locks, race conditions)</li>
        </ul>
        <p>
        I also found deep interest in computer graphics, collaborating with Jaakko Lehtinen for a 
        foundations and advanced graphics courses. The courses focused on offline ray-tracing. 
        Here is some of the images I have created:
        <img src={shed_pic} alt="Ray Traced shed" />
        <img src={sponza_pic} alt="Ray Traced sponza" />

        </p>
        <p>
        I am seeking Data Engineering or Full-Stack Web Development opportunities where I can leverage my 
        expertise in scalable data platforms, modern web technologies, and cloud-native architectures to 
        solve complex technical challenges.
        </p>
    </div>
    
    </div>
  )
};

export default MainContent;
