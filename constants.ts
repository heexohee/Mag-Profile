
// UI Translations
export const UI_TEXT = {
  en: {
    nav: {
      about: 'About Me',
      education: 'Education',
      workExperience: 'Work Experience',
      personalProjects: 'Projects',
      expertise: 'Expertise',
      awards: 'Awards',
      certifications: 'Certifications',
    },
    hero: {
      title1: 'SoHee Jeong',
      title2: 'Creative Developer',
      subtitle: 'A creative developer and designer crafting elegant digital experiences from Seoul, South Korea.',
      scroll: 'SCROLL',
    },
    about: {
      title: 'About Me',
      p1: 'I am a multi-disciplinary creative with a focus on crafting elegant and effective solutions for the digital world. With a background in both design and front-end development, I bridge the gap between aesthetics and functionality. My approach is rooted in a deep appreciation for minimalism, typography, and user-centric design principles.',
      p2: 'Over the years, I have collaborated with startups and established brands to build engaging websites, robust applications, and memorable brand identities. I believe great design is not just about looking good, but about solving problems and creating intuitive experiences that resonate with people.',
    },
    education: {
      title: 'Education',
    },
    workExperience: {
      title: 'Work Experience',
      period: '2025 – 2026', // Update dynamic date if needed
    },
    projects: {
      title: 'Projects',
    },
    personalProjects: {
      title: 'Projects',
    },
    skills: {
      title: 'Expertise',
    },
    awards: {
      title: 'Awards',
    },
    certifications: {
      title: 'Certifications',
    },
    contact: {
      title: 'Get in Touch',
      p1: 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
      email: 'Email me',
    }
  },
  ko: {
    nav: {
      about: 'About Me',
      education: 'Education',
      workExperience: 'Work Experience',
      personalProjects: 'Projects',
      expertise: 'Expertise',
      awards: 'Awards',
      certifications: 'Certifications',
    },
    hero: {
      title1: '정소희',
      title2: 'Creative Developer',
      subtitle: '서울을 기반으로 활동하며 우아한 디지털 경험을 만드는 크리에이티브 개발자이자 디자이너입니다.',
      scroll: '스크롤',
    },
    about: {
      title: 'About Me',
      p1: '저는 디지털 세상을 위한 우아하고 효과적인 솔루션을 만드는 데 중점을 둔 다학제적 크리에이터입니다. 디자인과 프론트엔드 개발에 대한 배경지식을 바탕으로 심미성과 기능성 사이의 간극을 좁힙니다. 저의 접근 방식은 미니멀리즘, 타이포그래피, 그리고 사용자 중심 디자인 원칙에 깊은 뿌리를 두고 있습니다.',
      p2: '수년 동안 스타트업 및 기존 브랜드와 협력하여 매력적인 웹사이트, 견고한 애플리케이션, 기억에 남는 브랜드 아이덴티티를 구축해 왔습니다. 훌륭한 디자인은 단순히 보기 좋은 것이 아니라, 문제를 해결하고 사람들의 공감을 불러일으키는 직관적인 경험을 창조하는 것이라 믿습니다.',
    },
    education: {
      title: 'Education',
    },
    workExperience: {
      title: 'Work Experience',
      period: '2025 – 2026',
    },
    projects: {
      title: 'Projects',
    },
    personalProjects: {
      title: 'Personal Projects',
    },
    skills: {
      title: 'Expertise',
    },
    awards: {
      title: 'Awards',
    },
    certifications: {
      title: 'Certifications',
    },
    contact: {
      title: 'Get in Touch',
      p1: 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
      email: 'Email me',
    }
  }
};

export interface Project {
  id: number;
  year: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const WORK_EXPERIENCE_EN: Project[] = [
  {
    id: 1,
    year: "2025",
    category: "Branding",
    title: "Zigbang",
    description: "A comprehensive rebranding for a leading tech startup, focusing on minimalist aesthetics and digital presence.",
    imageUrl: "https://picsum.photos/seed/alpha/800/600?grayscale",
  },
  {
    id: 2,
    year: "2023",
    category: "Web Design",
    title: "E-commerce Platform",
    description: "Designed a seamless and intuitive user experience for a high-end fashion e-commerce website.",
    imageUrl: "https://picsum.photos/seed/ecommerce/800/600?grayscale",
  },
  {
    id: 3,
    year: "2022",
    category: "Editorial Design",
    title: "The Urbanist Magazine",
    description: "Art direction and layout design for a monthly publication on modern architecture and urban living.",
    imageUrl: "https://picsum.photos/seed/urbanist/800/600?grayscale",
  },
  {
    id: 4,
    year: "2022",
    category: "UI/UX",
    title: "Mobile Banking App",
    description: "Crafted a secure and user-friendly interface for a next-generation mobile banking application.",
    imageUrl: "https://picsum.photos/seed/banking/800/600?grayscale",
  },
];

const WORK_EXPERIENCE_KO: Project[] = [
  {
    id: 1,
    year: "2025",
    category: "브랜딩",
    title: "직방",
    description: "미니멀한 미학과 디지털 존재감에 초점을 맞춘 선도적인 기술 스타트업을 위한 포괄적인 리브랜딩.",
    imageUrl: "https://picsum.photos/seed/alpha/800/600?grayscale",
  },
  {
    id: 2,
    year: "2023",
    category: "웹 디자인",
    title: "E-commerce Platform",
    description: "하이엔드 패션 이커머스 웹사이트를 위한 매끄럽고 직관적인 사용자 경험 디자인.",
    imageUrl: "https://picsum.photos/seed/ecommerce/800/600?grayscale",
  },
  {
    id: 3,
    year: "2022",
    category: "편집 디자인",
    title: "The Urbanist Magazine",
    description: "현대 건축과 도시 생활에 관한 월간 간행물의 아트 디렉션 및 레이아웃 디자인.",
    imageUrl: "https://picsum.photos/seed/urbanist/800/600?grayscale",
  },
  {
    id: 4,
    year: "2022",
    category: "UI/UX",
    title: "Mobile Banking App",
    description: "차세대 모바일 뱅킹 애플리케이션을 위한 안전하고 사용자 친화적인 인터페이스 제작.",
    imageUrl: "https://picsum.photos/seed/banking/800/600?grayscale",
  },
];

export const WORK_EXPERIENCE_DATA = {
  en: WORK_EXPERIENCE_EN,
  ko: WORK_EXPERIENCE_KO
};

const PERSONAL_PROJECTS_EN: Project[] = [
  {
    id: 5,
    year: "2023",
    category: "Web App",
    title: "Portfolio Website",
    description: "This very portfolio, built with React, TypeScript, and Tailwind CSS to showcase my skills in a modern, aesthetic way.",
    imageUrl: "https://picsum.photos/seed/portfolio/800/600?grayscale",
  },
  {
    id: 6,
    year: "2023",
    category: "Creative Coding",
    title: "Generative Art Explorer",
    description: "An interactive web-based tool for creating and exploring generative art patterns using p5.js.",
    imageUrl: "https://picsum.photos/seed/genart/800/600?grayscale",
  },
];

const PERSONAL_PROJECTS_KO: Project[] = [
  {
    id: 5,
    year: "2023",
    category: "웹 앱",
    title: "포트폴리오 웹사이트",
    description: "React, TypeScript, Tailwind CSS로 제작된 이 포트폴리오는 저의 기술을 현대적이고 심미적인 방식으로 보여줍니다.",
    imageUrl: "https://picsum.photos/seed/portfolio/800/600?grayscale",
  },
  {
    id: 6,
    year: "2023",
    category: "크리에이티브 코딩",
    title: "Generative Art Explorer",
    description: "p5.js를 사용하여 생성 예술 패턴을 만들고 탐색하는 인터랙티브 웹 기반 도구입니다.",
    imageUrl: "https://picsum.photos/seed/genart/800/600?grayscale",
  },
];

export const PERSONAL_PROJECTS_DATA = {
  en: PERSONAL_PROJECTS_EN,
  ko: PERSONAL_PROJECTS_KO
};

export interface Award {
  id: number;
  year: string;
  title: string;
  organization: string;
}

const AWARDS_EN: Award[] = [
  { id: 1, year: "2022", title: "Webby Awards Honoree", organization: "The International Academy of Digital Arts and Sciences" },
];

const AWARDS_KO: Award[] = [
  { id: 1, year: "2022", title: "LG CNS DX 아이디어 공모전 입선", organization: "LG CNS DX 아이디어" },
];

export const AWARDS_DATA = {
  en: AWARDS_EN,
  ko: AWARDS_KO
};

export interface Certification {
  id: number;
  year: string;
  title: string;
  issuer: string;
}

const CERTIFICATIONS_EN: Certification[] = [
  { id: 1, year: "2023", title: "ADsP", issuer: "Amazon Web Services" },
  { id: 2, year: "2022", title: "Google UX Design Professional Certificate", issuer: "Google" },
];

const CERTIFICATIONS_KO: Certification[] = [
  { id: 1, year: "2023", title: "ADsP 데이터 분석 준전문가", issuer: "한국데이터산업진흥원 " },
  { id: 2, year: "2022", title: "공인중개사", issuer: "한국산업인력공단" },
];

export const CERTIFICATIONS_DATA = {
  en: CERTIFICATIONS_EN,
  ko: CERTIFICATIONS_KO
};

export interface Education {
  id: number;
  year: string;
  degree: string;
  institution: string;
}

const EDUCATION_EN: Education[] = [
  { id: 1, year: "2016 - 2021", degree: "Bachelor of Fine Arts in Sculpture", institution: "Hongik University" },
  { id: 2, year: "2024", degree: "IOS Development, UIUX Design", institution: "Apple Developer Academy @POSTECH" },
];

const EDUCATION_KO: Education[] = [
  { id: 1, year: "2016 - 2021", degree: "조소과 학사", institution: "홍익대학교" },
  { id: 2, year: "2024", degree: "iOS 개발, UI/UX 디자인", institution: "Apple Developer Academy @POSTECH" },
];

export const EDUCATION_DATA = {
  en: EDUCATION_EN,
  ko: EDUCATION_KO
};

export const SKILLS_DATA: string[] = [
  "Vibe Coding",
  "UI/UX Design",
  "Web Development",
  "React & TypeScript",
  "Graphic Design",
  "Tailwind CSS",
  "Figma",
  "Art Direction",
  "Frontend Architecture",
  "SwiftUI"
];

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/%EC%86%8C%ED%9D%AC-%EC%A0%95-683a9b1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",  // 여기에 실제 LinkedIn 주소 입력
  instagram: "https://www.instagram.com/heesoheesohee?igsh=MWhmejFzMXVoZTAzZw%3D%3D&utm_source=qr", // 여기에 실제 Instagram 주소 입력
  github: "https://github.com/heexohee",           // 여기에 실제 GitHub 주소 입력
  email: "mailto:rsoy2918@gmail.com"
};
