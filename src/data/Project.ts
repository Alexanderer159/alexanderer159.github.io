export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  gitHub: string;
  webpage: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "001",
    title: "Exzellent",
    subtitle: "Be Excellent with Exzellent.",
    category: "Language",
    date: "December, 2025",
    readTime: "5 min",
    image: "/projects/Exzellent-portfolio.jpeg",
    gitHub:"https://github.com/EXZELLENT/exzellent-frontend",
    webpage:"https://www.exzellent.co/",
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "Lead Front-End Developer",
    },
    content: {
      introduction: "Did a full re-design of the page, had to redo all the pages and functionalities to better appeal to customers and teachers, it has been my favorite project to work on up until today, it has put me on check many times and made me learn more each day.",
      sections: [
        {
          heading: "The story.",
          content: "Exzellent is a startup founded by Riyabrata Mondal, my boss. It envisions a platform where teachers and students are able to easily interact and take away the potential annoyances of other platforms. It has been slowly but surely becoming a more grounded project, each day that passes feels like a stroke of paint I have placed on it, in the end the whole picture looks cohesive and fun.",
        },
        {
          heading: "The team.",
          content: "I worked mostly on the Front End of the page, while my partner Walid Khrouf was on the Back End, also with the help of Saurabhi Raut as product manager we were able to better organize and meet deadlines a LOT faster than working alone us two. I believe communication was CRITICAL and people here delivered on that front, making the job a lot more manageable and efficient.",
        },
        {
          heading: "What sets this product apart?",
          content: "Now, you most likely now many platforms to learn languages, however, this project aims to incorporate AI, not to replace teachers, but to offload the tasks of repetition and annoyances, such as capturing accents, misspells and other issues when learning a language, leaving teachers just with the task of showing new subjects and later testing students.",
        },
        {
          heading: "Great bang for your buck.",
          content: "The way the site is set up, you are able to get a plan which offers a lot of value, being able to learn a whole level of a language (From A1 up to C2), access to AI, tutoring from a teacher, help on tests and a lot more for just an entry fee, not many platforms give this much. I believe this product has a lot of potential, just needs to find the right partners.",
        },
      ],
      conclusion: "The best projects don't have to be loud, just focused, I believe this project has a lot of future due to that, trying to do something, and doing it RIGHT. People on this project believe in it, and gives me hope as I am part of it.",
    },
    tags: ["Language", "Social", "Learning", "Fun"],
  },
  {
    id: "002",
    title: "LATAM Connect",
    subtitle: "Connecting LATAM and Europe.",
    category: "Tech",
    date: "November, 2025",
    readTime: "5 min",
    image: "/projects/LC-portfolio.jpeg",
    gitHub:"https://github.com/Latam-Connect/congress-spark",
    webpage:"https://github.com/Latam-Connect/congress-spark",
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "UI / UX Designer & Front-End Developer",
    },
    content: {
      introduction: "On this case, I was provided an already started project made in lovable and was given the task to improve the user experience and the interface of the page. It was a very generic looking page as the main focus was to create a sketch and later have someone who knows how to tackle the task make it more marketable.",
      sections: [
        {
          heading: "The story.",
          content: "The startup was concieved by Miguel Carrone, he envisioned a company that provided outside talent from Latin America to companies and startups from Europe (Hence the name LATAM Connect), the project had past members that had left the groundwork for a functioning database in azure and a github repository with what we needed to keep on building.",
        },
        {
          heading: "The team.",
          content: "The team was divided into 3 major groups, we had the people in charge of setting up Azure, which is how I met Jose Manuel Sepulveda, we also had a team dedicated to retrieve data and organize it which is how I met Melanie Medigovich, Radharani Dorta and Jose Luis Macias, lastly, the Front-End was left all to me. Thanks to daily meetings we could divide tasks and see in what point we were at the moment.",
        },
        {
          heading: "What sets this product apart?",
          content: "In the late years, I have personally seen how many projects have arisen in Europe that desperately need capable hands on deck, with the amount of people in Latin America that desperately need a job that helps them hae a better life quality, it feels like an obvious trade and kind of surprises me not many companies exist that provide this service. With the help of AI, we will give you the BEST candidates for the job offers you provide.",
        },
        {
          heading: "You got the goods? We got the people to make them better.",
          content: "People around the world are eager to find opportunities to sink their teeth in, mane capable people are not taken into account because of not even knowing they are there, LinkedIn tries to bridge that gap, but having an active agent actually bringing said people to you is MUCH more convenient.",
        },
      ],
      conclusion: "Problems arise in life and its up to us how to tackle them, we could lay down and not do anything about it or we can get to the task and get it over with, this project taught me the importance of consistency and being able to visualize a goal.",
    },
    tags: ["Tech", "Connection", "Talent", "International", "Startup"],
  },
  {
    id: "003",
    title: "Soundstagram!",
    subtitle: "Let´s make some waves.",
    category: "Social",
    date: "July, 2025",
    readTime: "5 min",
    image: "/projects/Soundstagram-portfolio.jpeg",
    gitHub:"https://github.com/Alexanderer159/Soundstagram",
    webpage:"https://soundstagram.onrender.com/",
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "Front-End Developer",
    },
    content: {
      introduction: "Projects born from passion just hit different when they are made. They don't necessarily bring all the bells and whistles a big company can give, but the palpable sense of something huge is undeniable.",
      sections: [
        {
          heading: "The Story.",
          content: "This passion project was born from Adrián Torres, a developer that wanted to make music with his brother, but due to the distance, they couldn't. The fact that no program, utility or page gave an even close service to what he was looking for, he presented the idea to me and another fellow programmer. We did it for fun and to learn a little more what we could do together in just one month.",
        },
        {
          heading: "The team.",
          content: "All 3 of the people involved here had a little dip into all aspects of it since we were all doing it for ourselves, however Adrián always was always leaning more into providing new functionalities and ideas, then we had Antonio Barroso (Toni) Who loved more of the backend side and was amazing at it, while, as per usual, I was more into the front end and designing, which I love. We had an amazing time together and we always saw eye to eye in all issues the project needed tackled.",
        },
        {
          heading: "What sets this project apart?",
          content: "It is a social media platform that is dedicated to make music together, one person can do the bass, while another does the guitar and another the drums. It is a super original idea that I have never seen tried before. Even though you can tell it was made in a rush and the backend is no longer working due to us not paying for it, you will definitely see the passion we had for it.",
        },
        {
          heading: "What are we doing today?",
          content: "This project was the first time I ever programmed and designed not for a job, but for the fun of it and because I liked doing it. No other project has been like this one up until now, and the fun that we had doing it is incomparable with anything. When things worked, the high we got out of them was incredible.",
        },
      ],
      conclusion: "Not all that glitters is gold, we learned that on this project since we didn't get anything out of it other than fun, and I believe that is far more valuable than any amount of money. I cherish time more than gold.",
    },
    tags: ["For Fun", "POC", "Social", "Music"],
  },
   {
    id: "004",
    title: "BoxNcase",
    subtitle: "Your Gateway To Specialty & Fine Foods.",
    category: "Shop Front",
    date: "July, 2024",
    readTime: "5 min",
    image: "/projects/BoxNCase-portfolio.jpeg",
    gitHub:"https://github.com/Alexanderer159",
    webpage:"https://boxncase.com/",
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "Front-End Developer",
    },
    content: {
      introduction: "It's not many times you do something for the first time, and much less without any experience. This was my first immersion into the world of programming.",
      sections: [
        {
          heading: "The story.",
          content: "Before this project, I had never done anything in the world of programming, however, due to a lucky find on reddit I managed to land a job at a company in the United States as a contractor. My boss, called Surya, found my job application and gave me a job.",
        },
        {
          heading: "The team.",
          content: "My team was pretty small at this point, since I was a VERY junior dev (If even) I was given very basic tasks such as changing some jsx components or changing stuff in CSS. My team leader Hans Moreno, taught me a LOT about programming and it started my love for it, I didn't think I would enjoy it this much until I tried it.",
        },
        {
          heading: "What sets this project apart?",
          content: "There are thousands of marketplaces around the web, however this one was set apart due to the products they were providing, they were incredibly niche, super artisanal or from very small businesses that needed to have a delivery and marketfront to sell their products.",
        },
        {
          heading: "Sometimes necessity does push you forward.",
          content: "I never thought I would end up on this world, but due to not have many opportunities in the context I was living in, I took a shot and managed to jumpstart an amazing journey. It was one of the best decisions I made and I feel that due to it I found my calling.",
        },
      ],
      conclusion: "Sometimes, the things you DON'T look for are the first you do find and vice-versa. This was one of those cases. I believe that without this job I wouldn't be here so I truly thank the opportunity I was finally given.",
    },
    tags: ["Shop Front", "Food", "Niche", "Outsourcing"],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getRelatedProjects(currentId: string, limit: number = 3): Project[] {
  const currentProject = getProjectById(currentId);
  if (!currentProject) return projects.slice(0, limit);
  
  // Get projects from the same category, excluding current
  const related = projects.filter(
    project => project.id !== currentId && project.category === currentProject.category
  );
  
  // If not enough from same category, add others
  if (related.length < limit) {
    const others = projects.filter(
      project => project.id !== currentId && project.category !== currentProject.category
    );
    return [...related, ...others].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
