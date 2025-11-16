import { Experience, Skill, Project, Recommendation, Education, SocialLinks } from '@/types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

export const personalInfo = {
  name: 'Harsh Vora',
  roles: ['Full Stack Engineer', 'Software Engineer', 'Backend Engineer', 'Mobile Developer'],
  email: 'harshvora242@gmail.com',
  greeting: "Hi, my name is",
  description: "I’m a problem-solver at heart who loves turning ideas into working systems. Whether it’s designing backend infrastructure, building full-stack features, or integrating AI to enhance functionality and efficiency, I focus on creating solutions that are elegant, reliable, and built with purpose.",
  aboutText: [
    "Hi, I’m Harsh 👋 - a curious problem solver and software engineer. What started as a love for gaming soon turned into a fascination with how those worlds were built, which led me to software engineering.",
    "I design and develop reactive, event-driven, and high-performance applications that make complex workflows simple and reliable. My toolkit includes Java 17, Spring Boot, Project Reactor, RabbitMQ, PostgreSQL, and Netflix Conductor, with hands-on experience in TypeScript, React, and modern web development.",
    "I’m big on clean architecture, automation, and developer experience, the kind of principles that make engineering both powerful and enjoyable. Over the years, I’ve worked across the full SDLC, from design and coding to testing, deployment, and production support, thriving in Agile/Scrum teams that value collaboration and continuous learning.",
    "When I’m not coding, I enjoy exploring new food spots around the city, biking along Chicago’s lakefront, and staying active at the gym."
  ],
  resumeUrl: '/resume.pdf',
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'GE Healthcare',
    duration: 'June 2024 - Present',
    description: 'Designed and optimized reactive, event-driven backend systems using Java 17, Spring Boot, Project Reactor, and RabbitMQ - improving data-pipeline scalability and real-time streaming efficiency across cloud platforms.'  
  },
  {
    id: '2',
    title: 'Software Engineer Specialist',
    company: 'GE Healthcare',
    duration: 'October 2021 - June 2024',
    description: 'Engineered distributed microservices and REST APIs for healthcare imaging workflows, boosting throughput 3 - 5× and enhancing reliability through Docker-based deployments, testing automation, and Agile delivery.' 
  },
  {
    id: '3',
    title: 'Software Developer Intern - MERN Stack',
    company: 'SQUADDD',
    duration: 'July 2021 - October 2021',
    description: 'Built RESTful APIs and middleware using Express.js, JWT, and MongoDB Atlas, improving backend integration by 20%. Collaborated with front-end teams in an Agile setup to design cohesive, secure, and scalable full-stack solutions.'
  },
  {
    id: '4',
    title: 'Graduate Teaching Assistant - Discrete Structures',
    company: 'Illinois Institute of Technology',
    duration: 'January 2021 - May 2021',
    description: 'Led weekly virtual office hours to support students, clarify course concepts, and guide them through assignments. Assisted the professor in preparing assignments and detailed solution sets and contributed to maintaining a smooth academic workflow for the course.'
  },
  {
    id: '5',
    title: 'Android Application Developer',
    company: 'M-Intellect Global',
    duration: 'May 2017 - July 2017',
    description: 'Developed feature-rich Android apps using SQLite, RecyclerView, and custom UI components. Integrated third-party libraries like Retrofit and Picasso to enhance data handling and user-experience performance.'
    },
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', icon: '⚛️', category: 'frontend' },
  { id: '2', name: 'Next.js', icon: '▲', category: 'frontend' },
  { id: '3', name: 'JavaScript', icon: '📜', category: 'frontend' },
  { id: '4', name: 'TypeScript', icon: '🔷', category: 'frontend' },
  { id: '5', name: 'HTML5', icon: '🎨', category: 'frontend' },
  { id: '6', name: 'CSS3', icon: '🎨', category: 'frontend' },
  { id: '7', name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
  { id: '8', name: 'SASS/SCSS', icon: '🎨', category: 'frontend' },
  { id: '9', name: 'Redux', icon: '🎨', category: 'frontend' },
  
  // Backend
  { id: '10', name: 'Java (17+)', icon: '☕', category: 'backend' },
  { id: '11', name: 'Spring Boot', icon: '☕', category: 'backend' },
  { id: '12', name: 'Project Reactor', icon: '☕', category: 'backend' },
  { id: '13', name: 'Node.js', icon: '🟢', category: 'backend' },
  { id: '14', name: 'Express', icon: '⚡', category: 'backend' },
  { id: '15', name: 'Python', icon: '🐍', category: 'backend' },
  { id: '16', name: 'REST APIs', icon: '🎯', category: 'backend' },
  { id: '17', name: 'Microservices', icon: '🎯', category: 'backend' },
  { id: '18', name: 'Event-Driven Architecture', icon: '◈', category: 'backend' },

  // DevOps & Cloud
  { id: '19', name: 'Docker', icon: '🐳', category: 'devops' },
  { id: '20', name: 'Kubernetes', icon: '☸️', category: 'devops' },
  { id: '21', name: 'Jenkins', icon: '🔧', category: 'devops' },
  { id: '22', name: 'AWS', icon: '☁️', category: 'devops' },
  { id: '23', name: 'Azure', icon: '🔵', category: 'devops' },
  { id: '24', name: 'CI/CD Pipelines', icon: '☁️', category: 'devops' },
  { id: '25', name: 'SonarQube', icon: '🔵', category: 'devops' },
  { id: '26', name: 'Git Version Control', icon: '☸️', category: 'devops' },

  // Database
  { id: '27', name: 'PostgreSQL', icon: '🍃', category: 'database' },
  { id: '28', name: 'MongoBD', icon: '🐘', category: 'database' },
  { id: '29', name: 'MySQL', icon: '🐬', category: 'database' },
  { id: '30', name: 'Redis', icon: '🔴', category: 'database' },
  { id: '31', name: 'Firebase', icon: '🔥', category: 'database' },
  { id: '32', name: 'Database Design', icon: '🔴', category: 'database' },
  { id: '33', name: 'Query Optimization', icon: '🔴', category: 'database' },
  { id: '34', name: 'Caching Strategies', icon: '🔴', category: 'database' },
  
  // Messaging & Workflow Orchestration
  { id: '35', name: 'RabbitMQ', icon: '📱', category: 'messaging' },
  { id: '103', name: 'Kafka', icon: '📱', category: 'messaging' },
  { id: '36', name: 'Netflix Conductor', icon: '🦋', category: 'messaging' },
  { id: '37', name: 'Workflow Automation', icon: '🤖', category: 'messaging' },
  { id: '38', name: 'Event Streaming', icon: '🍎', category: 'messaging' },

  // Testing
  { id: '39', name: 'JUnit', icon: '📱', category: 'testing' },
  { id: '40', name: 'Mockito', icon: '📱', category: 'testing' },
  { id: '41', name: 'Jest', icon: '📱', category: 'testing' },
  { id: '42', name: 'Selenium', icon: '📱', category: 'testing' },
  { id: '43', name: 'Playwright', icon: '📱', category: 'testing' },
  { id: '44', name: 'Cucumber', icon: '📱', category: 'testing' },
  { id: '45', name: 'Behavior-Driven Development', icon: '📱', category: 'testing' },
  { id: '46', name: 'Test-Driven Development', icon: '📱', category: 'testing' },
  
  // Other Skills
  { id: '47', name: 'Agile/Scrum', icon: '🏃', category: 'other-skills' },
  { id: '60', name: 'Jira', icon: '🔌', category: 'other-skills' },
  { id: '61', name: 'Confluence', icon: '🔌', category: 'other-skills' },
  { id: '53', name: 'Postman', icon: '📚', category: 'other-skills' },
  { id: '57', name: 'Bash/Shell', icon: '🔌', category: 'other-skills' },
  { id: '63', name: 'Team Collaboration', icon: '🏃', category: 'other-skills' },
  { id: '68', name: 'Agile Mindset', icon: '🏃', category: 'other-skills' },
  { id: '69', name: 'Attention to Detail', icon: '🏃', category: 'other-skills' },
  { id: '55', name: 'Intellij IDEA', icon: '🏃', category: 'other-skills' },
  { id: '56', name: 'Visual Studio Code', icon: '🔌', category: 'other-skills' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Semantic Search Engine',
    description: 'Developed a semantic movie search engine with an intuitive JSP-driven UI. Built a natural-language query algorithm using Microsoft LUIS for intent detection and integrated SPARQL queries on DBpedia to deliver accurate movie results.',
    technologies: ['Java', 'Jsp', 'SPARQL', 'Spring MVC'],
    links: {
      github: 'https://github.com/VoraHarsh/Projects/tree/master/Search%20Engine%20Based%20on%20Semantic%20Web-Java%20WebApp/WebApp',
      screenshots: 'https://drive.google.com/drive/folders/1j0l5FExAKG5wJEPtcg2J6Gdu7D5qbx_M?usp=sharing',
      publication: 'https://www.ijsr.net/getabstract.php?paperid=ART20196648',
    },
    image: '/Project1.png',
  },
  {
    id: '2',
    title: 'Movie Ticket Booking System',
    description: 'Developed an Android-based movie ticket booking app using Java, Firebase, and MySQL. Enabled users to select theatres, choose movies and showtimes, view seating charts, reserve seats in real time, complete payments, and access their order history.',
    technologies: ['Android', 'Java', 'FireBase', 'MySQL'],
    links: {
      github: 'https://github.com/VoraHarsh/Projects/tree/master/Movie%20Ticket%20Booking%20System-Desktop%20Application',
      screenshots: 'https://drive.google.com/drive/folders/1ahMN17RvjemHflvselTJjxvA3nV5YxpF?usp=sharing',
    },
    image: '/Project2.png',
  },
  {
    id: '3',
    title: 'Online Book Store',
    description: 'Built desktop and mobile applications for online book search and purchase, supporting title, author, and subject-based queries. Designed a real-time shopping cart that displays selected items, updates totals dynamically, and enables easy item removal.',
    technologies: ['Android', 'Java', 'FireBase', 'MySQL'],
    links: {
      github: 'https://github.com/VoraHarsh/Projects/tree/master/Online%20Book%20Store-Android%20Application/BookkarBooks/BookkarBooks',
      screenshots: 'https://drive.google.com/drive/folders/1YrANLbXh7Du0BqIwjAonlvjypOlDvY8L?usp=sharing',
    },
    image: '/Project3.jpg',
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: "Master's in Computer Science",
    institution: 'Illinois Institute of Technology',
    duration: '2019 - 2021',
    description: 'Coursework: Algorithms, Artificial Intelligence, Advanced Operating Systems, Machine Learning, Deep Learning, Mobile Application Development, Enterprise Web Applications, Computer Vision, and Big Data Technologies.',
    type: 'education',
  },
  {
    id: '2',
    degree: "Bachelor's in Computer Engineering",
    institution: 'Mumbai University',
    duration: '2015 - 2019',
    description: 'Coursework: Data Structures, Analysis of Algorithms, Object-Oriented Design, Big Data Analysis, Database Management Systems, and Distributed Systems.',
    type: 'education',
  },
  // Add certifications
  {
    id: '3',
    degree: 'Oracle Certified Professional, Java Programmer',
    institution: 'Oracle',
    duration: '2018',
    description: 'Professional certification in Java programming and software development.',
    type: 'certification',
  },
];

export const recommendations: Recommendation[] = [
  {
    id: '1',
    name: 'Benjamin Novatzky',
    role: 'Senior Engineering Manager',
    company: 'GE Healthcare',
    text: "I've had the chance to be Harsh's manager over the last 4 years. During this time Harsh has grown from an entry-level engineer to an engineer with solid execution and ownership. Harsh is a dedicated reliable contributor, with technical skills in back-end services, Java/SpringBoot, automation technologies (Serenity/Playwright), and expanding skill in front-end technologies (JavaScript/TypeScript). He has also been expanding his design skills by taking on new challenging areas of design ownership. Harsh likes to take on technical challenges, learn new areas, and do failure mode thinking. He's also become a good resource for the team and a go-to person for the areas under his ownership. Harsh is easy to work with, is very responsive to product needs/pivots, and is willing to help out wherever the team needs support. Overall, Harsh is great to have on the team and is an important asset to the team.",
    avatar: 'BN',
  },
  {
    id: '2',
    name: 'Ali Mihankhah',
    role: 'Staff Software Engineer',
    company: 'GE Healthcare',
    text: "I worked with Harsh for over 4 years, where he played a key role in developing backend services using Java, Spring, and RESTful APIs. Harsh quickly ramped up on reactive programming and excelled at building modular, asynchronous pipelines for processing data — an area that required both precision and deep technical understanding. His work consistently resulted in clean, well-structured APIs that were both meaningful and easy to integrate. Harsh was always open to feedback and approached collaboration with humility, curiosity, and professionalism. Whether it was refining a design, debugging a challenging issue, or contributing to architectural discussions, Harsh showed clarity, ownership, and a growth-oriented mindset to every interaction. He consistently looked for opportunities to expand his technical domain and was able to contribute across the stack when needed. Harsh is reliable, adaptable, and deeply committed to delivering high-quality solutions. He would be a valuable asset to any engineering team.",
    avatar: 'AM',
  },
  {
    id: '3',
    name: 'Supradeep Peyetti',
    role: 'Sr. QA Automation Engineer',
    company: 'GE HEalthcare',
    text: "As Harsh's Engineer Peer at GeHealthCare, I have had the chance of working with Harsh and I can confidently say he’s one of the most reliable and technically sound software engineers I’ve worked with. As a Software Engineer , Harsh brings a strong command of both backend development and frontend expertise , consistently delivering clean, scalable, and well-architected solutions. What stands out most is his deep understanding of design principles and his ability to apply them thoughtfully across projects. Harsh approaches every challenge with clarity and precision. He’s also a great collaborator—always willing to share knowledge, support teammates, and contribute to a positive team culture. I highly recommend Harsh for any role that demands strong engineering skills, architectural thinking, and a proactive mindset.",
    avatar: 'SP',
  },
  {
    id: '4',
    name: 'Dimple Mehra',
    role: 'Senior Machine Learning Engineer',
    company: 'Unity',
    text: "Harsh is a great professional to work with. We've worked together on several projects and he helped me a lot to learn new skills. He always went the extra mile and found great ways to quickly solve problems. It would be pleasure working with him again in future.",
    avatar: 'DM',
  },
];

export const socialLinks: SocialLinks[] = [
  { name: 'GitHub', icon: React.createElement(Github, { size: 18 }), url: 'https://github.com/VoraHarsh' },
  { name: 'LinkedIn', icon: React.createElement(Linkedin, { size: 18 }), url: 'https://linkedin.com/in/voraharsh' },
  { name: 'Email', icon: React.createElement(Mail, { size: 18 }), url: 'mailto:harshvora242@gmail.com' },
];