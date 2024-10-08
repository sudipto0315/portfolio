import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About Me", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills & Abilities", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize continuous learning and developing real-world projects.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: " My focus is on enhancing my skills in React, Node.js, and TypeScript, while also exploring blockchain and AI technologies.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Video Conferencing App using Next.js, Tailwind CSS, and Stream API.",
    description: "LiveLink",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.google.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/404.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/404.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/404.com",
  },
];

export const skills = [
  {
    title: "Programming Languages: ",
    description: "Proficient in C/C++, Python, Java, JavaScript/TypeScript, and SQL, enabling versatile software development across various platforms.",
    details: "C/C++, Python, Java, JavaScript/TypeScript",
    iconLists: ["/c-logo.svg", "/c++-logo.svg", "/python-logo.svg", "/java-logo.svg", "/javascript-logo.svg", "/typescript-logo.svg"],
  },
  {
    title: "Databases: ",
    description: "Experienced with MySQL, PostgreSQL, NoSQL (MongoDB), and Firebase Services, ensuring efficient data management and storage solutions.",
    details: "MySQL, PostgreSQL, NoSQL (MongoDB), Firebase Services",
    iconLists: ["/mysql-logo.svg", "/postgresql-logo.svg", "/mongodb-logo.svg", "/firebase-logo.svg"],
  },
  {
    title: "Frameworks: ",
    description: "Skilled in NodeJS, ExpressJS, ReactJS, TensorFlow, Android SDK, AWS, and Git, facilitating robust full-stack development and machine learning applications.",
    details: "NodeJS, ReactJS, TensorFlow, Android SDK, AWS, Git",
    iconLists: ["/nodejs-logo.svg", "/re.svg", "/tensorflow-logo.svg", "/android-logo.svg", "/aws-logo.svg", "/git-logo.svg"],
  },
  {
    title: "Concepts Known:",
    description: "Strong understanding of DSA, Networking, Machine Learning, Linux and Cloud Computing for efficient and scalable software solutions.",
    details: "Data Structures & Algorithms, Networking, Machine Learning, Linux, Cloud Computing",
    iconLists: ["/algorithm-logo.svg", "/networking-logo.svg", "/machine-learning-logo.svg", "/linux-logo.svg", "/cloud-computing-logo.svg"],
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    desc: "Implemented microservices architecture using Flutter and Node.js, boosting reliability, performance, and reducing API response time by 20%. Deployed and managed AWS EC2 instances with Auto-Scaling and RDS database migration in production. Demonstrated problem-solving skills through load testing and optimization strategies to handle increased user traffic. Funded by: Department of Science and Technology (DST), Govt. of India. Under Supervision of: Dr. Sanjay Moulik (Assistant Professor at IIIT Guwahati)",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mess Management System IIITG (Ongoing)",
    desc: "Leading development of a Mess Management System for 1000+ students at IIIT Guwahati, enhancing operational efficiency by 20%. Introduced real-time mess menu display, Payment Gateway Integration, and Complaint Portal, reducing complaint resolution time by 30%. Implemented Agile-based Evolutionary Model for streamlined operations and user-centric design, ensuring continuous stakeholder involvement and effective SDLC application.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Student Management System",
    desc: "Designed and developed a comprehensive Student Management System to streamline administrative tasks. Implemented features for student registration, course enrollment, and attendance tracking. Utilized Node.js and Express for backend development and MySQL for database management.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Anti-Spoofing Face Recognition System",
    desc: "Developed Face Recognition system achieving 90% accuracy initially, refined to 99% through proper advanced libraries. Implemented preprocessing techniques and data augmentation to enhance model robustness and generalization. Integrated the trained model with a real-time facial recognition application, using OpenCV for video capture and processing.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sudipto0315",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/sudipto_ray03/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sudipto0315",
  },
  {
    id: 4,
    img: "/twit.svg",
    link: "https://x.com/SudiptoRay10",
  },
];
