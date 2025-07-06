// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import photoshopLogo from "./assets/tech_logo/photoshop.svg";
import illustratorLogo from "./assets/tech_logo/illustrator.svg";
import premierLogo from "./assets/tech_logo/premiere.svg";
import aftereffectLogo from "./assets/tech_logo/after-effects.svg";
import canvaLogo from "./assets/tech_logo/canva.png";
import coreldrawLogo from "./assets/tech_logo/coreldraw.png";

// Experience Section Logo's
import aphaLogo from "./assets/company_logo/APHA.png";
import lshiLogo from "./assets/company_logo/LSHI.jpeg";

// Education Section Logo's
import islamiyahLogo from "./assets/education_logo/islamiyah.png";
import unpamLogo from "./assets/education_logo/unpam.png";

// Project Section Logo's
import piagam1Design from "./assets/work_logo/Portfolio/Piagam_Musari_1.png";
import piagam2Design from "./assets/work_logo/Portfolio/Piagam_Musari_2.png";
import Sertifikat_APHA1_3 from "./assets/work_logo/Portfolio/Certificate_Apha_1.3.png";
import AphaConference1 from "./assets/work_logo/Portfolio/Apha-Inter_conference.png";
import AphaConference_Sertifikat from "./assets/work_logo/Portfolio/Sertifikat_APHA_Conference.png";
import CoverLegal_Audit from "./assets/work_logo/Portfolio/Cover_Legal_Audit_Legal_Opinion.png";
import Cover_Hukum_Acara_Pengadilan_Niaga from "./assets/work_logo/Portfolio/Cover_Hukum_Acara_Pengadilan_Niaga.png";
import Cover_Hukum_Pengangkutan from "./assets/work_logo/Portfolio/Cover_Hukum_Pengangkutan.jpeg";

import SPKZakat from "./assets/work_logo/Portfolio/SPK_Zakat.png";
import MasjidAl_Jihad from "./assets/work_logo/Portfolio/Masjid_Jami_Al-Jihad.png";
import pengarsipanJava from "./assets/work_logo/Portfolio/Pengarsipan_Java.png";
import aphaWeb from "./assets/work_logo/Portfolio/APHA_web.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },

      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Photoshop", logo: photoshopLogo },
      { name: "Illustrator", logo: illustratorLogo },
      { name: "Premier", logo: premierLogo },
      { name: "After Effect", logo: aftereffectLogo },
      { name: "Corel Draw", logo: coreldrawLogo },
      { name: "Canva", logo: canvaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: aphaLogo,
    role: "Fullstack Developer",
    company: "Asosiasi Pengajar Hukum Adat Indonesia",
    date: "2022 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Laravel",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "Mysql",
    ],
  },
  {
    id: 1,
    img: aphaLogo,
    role: "Assistant",
    company: "Asosiasi Pengajar Hukum Adat Indonesia",
    date: "2022 - Present",
    desc: "I worked as an assistant, supporting various event-related tasks such as managing member registrations, creating presentation materials, designing banners and certificates, and taking meeting minutes. My role encompassed both creative and administrative responsibilities, allowing me to contribute to the planning and execution of events by ensuring that all visual, written, and media content was clear, engaging, and aligned with the event’s objectives.",
    skills: ["Event Organizer", "Registration Member"],
  },
  {
    id: 2,
    img: lshiLogo,
    role: "Fullstack Engineer",
    company: "Lembaga Studi Hukum Indonesia",
    date: "2022 - 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL with Wordpress. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: ["Wordpress", "HTML", "CSS", "MySQL"],
  },
  {
    id: 3,
    img: lshiLogo,
    role: "Assistant",
    company: "Lembaga Studi Hukum Indonesia",
    date: "2022 - 2024",
    desc: "I worked as an assistant, supporting both educational and event-related activities. My tasks included creating presentation materials for learning sessions, designing banners for events, and producing promotional videos. These responsibilities allowed me to contribute creatively and technically to the success of various academic programs and special events by delivering clear, engaging, and visually appealing content that supported effective communication and audience engagement.",
    skills: ["PPT", "Design", "Video Editing"],
  },
];

export const education = [
  {
    id: 0,
    img: unpamLogo,
    school: "Univercity of Pamulang, Pamulang",
    date: "2016 - 2021",
    grade: "73.2%",
    desc: "I completed my Bachelor’s degree in Computer Science (S.Kom.) at Universitas Pamulang, Pamulang. Throughout my studies, I deepened my understanding of computation and technology through a wide range of courses. From learning Data Structures and Algorithms to studying Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Universitas Pamulang also provided the opportunity to work on projects that applied theoretical concepts to real-world problems, further enhancing my problem-solving and technical skills.",
    degree: "Bachelor's Degree of Computer",
  },
  {
    id: 1,
    img: islamiyahLogo,
    school: "Islamic Vocational High School, Ciputat",
    date: "2013 - 2016",
    grade: "7.81 CGPA",
    desc: "I have completed my Vocational High School education in Computer and Network Engineering at Islamic Vocational High School Ciputat. During my studies, I focused on core subjects including computer systems, network infrastructure, and IT support. I gained hands-on experience in installing, configuring, and maintaining computer networks, while building a strong foundation in computer hardware, operating systems, web development, and basic programming. I also developed practical skills in troubleshooting, server management, and implementing cybersecurity best practices.",
    desc2:
      "Throughout the program, I acquired in-depth knowledge in configuring LAN/WAN networks, diagnosing and resolving hardware issues, and providing comprehensive IT support. I gained experience in managing both Windows and Linux servers, applying essential cybersecurity measures, and maintaining robust network infrastructure. Additionally, I honed my skills in front-end web development using HTML, CSS, and JavaScript, as well as digital design with tools like Adobe Photoshop and CorelDRAW. My back-end development skills include working with PHP and MySQL to build dynamic and data-driven websites.",
    degree: "Vocational High School - Computer and Network Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "Website APHA",
    description:
      "The official website of the Association of Indigenous Law Teachers (APHA) serves as a platform to introduce APHA to the international community and advocate for the protection of Indigenous Law Communities' rights under the law. The website was built using Laravel, Node.js, HTML and CSS. It features a clean and visually appealing design, effectively showcasing APHA’s activities and initiatives..",
    image: aphaWeb,
    tags: ["HTML", "CSS", "Laravel", "Mysql"],

    webapp: "https://apha.or.id",
  },
  {
    id: 1,
    title: "APHA International Conference",
    description:
      "Majelis Permusyawaratan Rakyat Republik Indonesia (MPR RI), in collaboration with  Asosiasi Pengajar Hukum Adat (APHA), Pancasila University, Trisakti University, National University, and Borobudur University, organized an International Conference themed 'Recognition and Protection of Indigenous Law Communities at the National and International Levels.' The conference was held on August 7–8, 2023, at the Nusantara Room, MPR RI Building.",
    image: AphaConference1,
    tags: ["APHA", "International", "Conference", "Event Organizer", "Crew"],
    webapp:
      "https://www.apha.or.id/news/apha-international-conference-call-for-papers",
  },
  {
    id: 2,
    title: "Legal Audit Legal Opinion Textbook",
    description:
      "Legal Auditing is the systematic examination of the relationship between legal rules, analyzed textually and contextually to identify whether they are cooperative or contradictory. Legal Opinion provides professional assessments and arguments regarding legal issues, offering insights and recommendations based on applicable laws. This book is designed for diverse audiences to study legal auditing and the preparation of legal opinions.",
    image: CoverLegal_Audit,
    tags: ["Cover Book", "Layouting", "TextBook"],
    webapp:
      "https://lshi.or.id/publikasi/buku/buku-ajar/legal-audit-legal-opinion",
  },
  {
    id: 3,
    title: "Hukum Acara Pengadilan Niaga Textbook",
    description:
      "This textbook/reference is designed for law students, aiming to support and facilitate their learning and understanding of the legal concepts covered in Commercial Court Procedural Law..",
    image: Cover_Hukum_Acara_Pengadilan_Niaga,
    tags: ["Cover Book", "Layouting", "Textbook"],
    webapp:
      "https://lshi.or.id/publikasi/buku/buku-ajar/Hukum_Acara_Pengadilan_Niaga",
  },
  {
    id: 4,
    title: "Hukum Pengangkutan",
    description:
      "In principle, transportation plays a crucial role in human daily activities as a means to facilitate and accelerate the movement of people and goods. This book is a culmination of research findings, lecture materials, and various articles and journals authored by previous scholars. It is hoped that this work will provide significant benefits for the advancement of legal studies, particularly in the field of transportation law.",
    image: Cover_Hukum_Pengangkutan,
    tags: ["Cover Book", "Textbook"],
    webapp: "https://lshi.or.id/publikasi/buku/buku-ajar/Hukum_Pengangkutan",
  },

  {
    id: 5,
    title: "Sertifikat APHA Proposal Pembuat Proposal Bersandar Hibah Dikti",
    description:
      "Pembuatan Proposal Penelitian Masyarakat Hukum Adat Berstandar Hibah Dikti.",
    image: AphaConference_Sertifikat,
    tags: ["APHA", "Conference"],
  },
  {
    id: 6,
    title: "Sertifikat APHA Proposal Pembuat Proposal Bersandar Hibah Dikti",
    description:
      "This certificate is awarded to participants of the event 'Preparation of Customary Law Community Research Proposals in accordance with Dikti Grant Standards.'",
    image: Sertifikat_APHA1_3,
    tags: ["APHA", "Conference", "Design", "Sertifikat", "Photoshop"],
  },
  {
    id: 7,
    title: "Sistem Informasi Masjid Jami Al-Jihad",
    description:
      "The Mosque Information System Website is the official site of Masjid Jami Al-Jihad, serving as a platform to introduce the mosque to the community, provide the latest news and event updates, and share financial information transparently. This website was built using CodeIgniter, HTML, and CSS. It features a clean and visually appealing design that effectively showcases the mosque's activities and initiatives.",
    image: MasjidAl_Jihad,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
  },
  {
    id: 8,
    title: "Website Sistem Pengambilan Keputusan Zakat",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: SPKZakat,
    tags: ["Codeigniter", "PHP", "HTML", "CSS"],
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 9,
    title: "Sistem Pengarsipan",
    description:
      "This Java-based Desktop Archiving System is developed using the Java programming language. It is designed to simplify the management and archiving of incoming and outgoing letters.",
    image: pengarsipanJava,
    tags: ["Java", "Desktop Aplication", "Mysql"],
  },
  {
    id: 10,
    title: "Piagam Musari 2",
    description:
      "This certificate is awarded to outstanding male and female students (Santri/Santriwati) for their achievements.",
    image: piagam2Design,
    tags: ["Design Graphic", "Sertifikat"],
  },
  {
    id: 11,
    title: "Piagam Musari 1",
    description:
      "This certificate is awarded to outstanding male and female students (Santri/Santriwati) for their achievements.",
    image: piagam1Design,
    tags: ["Design Graphic", "Sertifikat"],
  },
];
