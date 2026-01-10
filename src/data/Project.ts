export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
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
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "Lead Front-End Developer",
    },
    content: {
      introduction: "Did a full re-design of the page, had to redo all the pages and functionalities to better appeal to customers and teachers, it has been my favorite project to work on up until today, it has put me on check many times and made me learn more each day.",
      sections: [
        {
          heading: "Story",
          content: "Exzellent is a startup founded by Riyabrata Mondal, my boss. It envisions a platform where teachers and students are able to easily interact and take away the potential annoyances of other platforms. It has been slowly but surely becoming a more grounded project, each day that passes feels like a stroke of paint I have placed on it, in the end the whole picture looks cohesive and fun.",
        },
        {
          heading: "The team",
          content: "I worked mostly on the Front End of the page, while my partner Walid Khrouf was on the Back End, also with the help of Saurabhi Raut as product manager we were able to better organize and meet deadlines a LOT faster than working alone us two. I believe communication was CRITICAL and people here delivered on that front, making the job a lot more manageable and efficient.",
        },
        {
          heading: "What sets this product appart?",
          content: "Now, you most likely now many platforms to learn languages, however, this project aims to incorporate AI, not to replace teachers, but to offload the tasks of repetition and annoyances, such as capturing accents, misspells and other issues when learning a language, leaving teachers just with the task of showing new subjects and later testing students.",
        },
        {
          heading: "Great bang for your buck",
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
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "UI / UX Designer & Front-End Developer",
    },
    content: {
      introduction: "In a world of financial noise and conflicting advice, sometimes the wisest course of action is to listen to the whispers—those quiet moments of clarity that cut through the chaos. Financial planning isn't just about numbers; it's about understanding your values and aligning your resources with what truly matters.",
      sections: [
        {
          heading: "The Power of Quiet Reflection",
          content: "Before making any major financial decision, we often rush to consume more information, read more projects, or seek more advice. Yet the most profound insights often come when we step back and simply reflect. Taking time for quiet contemplation allows us to connect with our deeper values and understand what financial security truly means to us—not what society tells us it should mean.",
        },
        {
          heading: "Building Financial Awareness",
          content: "True financial wisdom begins with awareness. This means honestly assessing where you are, understanding your patterns and behaviors around money, and recognizing the emotional drivers behind your financial decisions. It's not about judgment, but about clear-eyed observation. When we can see our financial reality clearly, we're empowered to make intentional changes.",
        },
        {
          heading: "Small Steps, Lasting Change",
          content: "The whispers of wisdom often guide us toward small, sustainable actions rather than dramatic overhauls. Perhaps it's automating a small savings contribution, or finally organizing your financial documents, or having that honest conversation about money with your partner. These quiet actions, consistently applied, create profound change over time.",
        },
        {
          heading: "Values-Based Financial Planning",
          content: "When we align our financial decisions with our core values, money becomes a tool for creating the life we want rather than a source of stress and confusion. Ask yourself: What do I truly value? How can my financial choices support those values? The answers to these questions are your compass in navigating financial decisions.",
        },
      ],
      conclusion: "Financial wisdom isn't found in the loudest voices or the most complex strategies. It's discovered in quiet moments of reflection, in the gentle guidance of your values, and in the consistent application of simple, intentional actions. Listen to the whispers—they often speak the deepest truths.",
    },
    tags: ["financial planning", "mindfulness", "personal finance", "values"],
  },
  {
    id: "003",
    title: "Soundstagram!",
    subtitle: "Let´s make some waves.",
    category: "Social",
    date: "July, 2025",
    readTime: "5 min",
    image: "/projects/Soundstagram-portfolio.jpeg",
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "Front-End Developer",
    },
    content: {
      introduction: "In a world of financial noise and conflicting advice, sometimes the wisest course of action is to listen to the whispers—those quiet moments of clarity that cut through the chaos. Financial planning isn't just about numbers; it's about understanding your values and aligning your resources with what truly matters.",
      sections: [
        {
          heading: "The Power of Quiet Reflection",
          content: "Before making any major financial decision, we often rush to consume more information, read more projects, or seek more advice. Yet the most profound insights often come when we step back and simply reflect. Taking time for quiet contemplation allows us to connect with our deeper values and understand what financial security truly means to us—not what society tells us it should mean.",
        },
        {
          heading: "Building Financial Awareness",
          content: "True financial wisdom begins with awareness. This means honestly assessing where you are, understanding your patterns and behaviors around money, and recognizing the emotional drivers behind your financial decisions. It's not about judgment, but about clear-eyed observation. When we can see our financial reality clearly, we're empowered to make intentional changes.",
        },
        {
          heading: "Small Steps, Lasting Change",
          content: "The whispers of wisdom often guide us toward small, sustainable actions rather than dramatic overhauls. Perhaps it's automating a small savings contribution, or finally organizing your financial documents, or having that honest conversation about money with your partner. These quiet actions, consistently applied, create profound change over time.",
        },
        {
          heading: "Values-Based Financial Planning",
          content: "When we align our financial decisions with our core values, money becomes a tool for creating the life we want rather than a source of stress and confusion. Ask yourself: What do I truly value? How can my financial choices support those values? The answers to these questions are your compass in navigating financial decisions.",
        },
      ],
      conclusion: "Financial wisdom isn't found in the loudest voices or the most complex strategies. It's discovered in quiet moments of reflection, in the gentle guidance of your values, and in the consistent application of simple, intentional actions. Listen to the whispers—they often speak the deepest truths.",
    },
    tags: ["financial planning", "mindfulness", "personal finance", "values"],
  },
   {
    id: "004",
    title: "BoxNcase",
    subtitle: "Your Gateway To Specialty & Fine Foods.",
    category: "Shop Front",
    date: "July, 2024",
    readTime: "5 min",
    image: "/projects/BoxNCase-portfolio.jpeg",
    author: {
      name: "Alejandro De Yavorsky",
      avatar: "/assets/CV-Photo.png",
      bio: "Front-End Developer",
    },
    content: {
      introduction: "In a world of financial noise and conflicting advice, sometimes the wisest course of action is to listen to the whispers—those quiet moments of clarity that cut through the chaos. Financial planning isn't just about numbers; it's about understanding your values and aligning your resources with what truly matters.",
      sections: [
        {
          heading: "The Power of Quiet Reflection",
          content: "Before making any major financial decision, we often rush to consume more information, read more projects, or seek more advice. Yet the most profound insights often come when we step back and simply reflect. Taking time for quiet contemplation allows us to connect with our deeper values and understand what financial security truly means to us—not what society tells us it should mean.",
        },
        {
          heading: "Building Financial Awareness",
          content: "True financial wisdom begins with awareness. This means honestly assessing where you are, understanding your patterns and behaviors around money, and recognizing the emotional drivers behind your financial decisions. It's not about judgment, but about clear-eyed observation. When we can see our financial reality clearly, we're empowered to make intentional changes.",
        },
        {
          heading: "Small Steps, Lasting Change",
          content: "The whispers of wisdom often guide us toward small, sustainable actions rather than dramatic overhauls. Perhaps it's automating a small savings contribution, or finally organizing your financial documents, or having that honest conversation about money with your partner. These quiet actions, consistently applied, create profound change over time.",
        },
        {
          heading: "Values-Based Financial Planning",
          content: "When we align our financial decisions with our core values, money becomes a tool for creating the life we want rather than a source of stress and confusion. Ask yourself: What do I truly value? How can my financial choices support those values? The answers to these questions are your compass in navigating financial decisions.",
        },
      ],
      conclusion: "Financial wisdom isn't found in the loudest voices or the most complex strategies. It's discovered in quiet moments of reflection, in the gentle guidance of your values, and in the consistent application of simple, intentional actions. Listen to the whispers—they often speak the deepest truths.",
    },
    tags: ["financial planning", "mindfulness", "personal finance", "values"],
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
