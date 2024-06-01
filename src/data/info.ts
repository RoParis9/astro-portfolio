export const info = {
  baseUrl: "",
  name: "Rodrigo Paris",
  jobDescription: "Web Developer",
  about: `
I am a seasoned software developer based in São Paulo with two years of hands-on experience in the Computer Software industry. My expertise spans across both Front-end and Back-end Development, where I excel in crafting robust web solutions.

In the realm of Front-end Development, I am proficient in HTML, CSS, SCSS, JavaScript, TypeScript, and adept at utilizing frameworks such as Tailwind CSS, React JS, and Next JS. On the Back-end front, I am well-versed in Node JS, Express JS, Java, and Spring Boot. My database skills encompass both SQL (Postgres) and NoSQL (MongoDB and Redis) technologies.

With a demonstrated history of delivering successful web projects from conception to deployment, I am deeply committed to continuous learning and staying abreast of emerging technologies.
  `,

  experience: [
    {
      name: "Freelancer Developer",
      location: "São Paulo, Brasil",
      startDate: "Aug 2022",
      endDate: "Present",
      description: [
        "- Developing screens and UI components for the web application using React and Tailwind.",
        "- Fixing UI issues and integrating with backend APIs.",
        "- Implementing code in compliance with relevant design and architectural guidelines.",
        "- Documenting, testing, deploying, maintaining, and supporting platforms, applications, databases, and solutions.",
        "- Enhancing code through improvements and refactoring.",
        "- Upholding best practices and rules."
      ],
    },
  ],

  education: [
    {
      name: "Universidade Anhembi Morumbi",
      location: "São Paulo, São Paulo, ",
      startDate: "2019",
      endDate: "2020",
      description: ["Undergrad,  Computer Science"],
    },
  ],

  socialMedia: {
    github: "https://github.com/RoParis9",
    email: "mailto:rocostaparis@hotmail.com",
    linkedin: "https://www.linkedin.com/in/rodrigo-costa-paris/",
  },

  projects: [
   {
    title: "Portfolio",
    isFeatured: true,
    thumbnail: "/assets/images/astro-portfolio.png",
    githubUrl: "https://github.com/RoParis9/astro-portfolio",
    liveUrl: "https://rodrigo-paris-portfolio.vercel.app/"
   },
   {
    title: "Jobify",
    isFeatured: true,
    thumbnail: "/assets/images/jobify-1.png",
    githubUrl: "https://github.com/RoParis9/jobify-page",
    liveUrl: "https://jobify-page.vercel.app/"
   },
  ],
};
