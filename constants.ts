
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
      title: 'SoHee Jeong',
      subtitleLeft: 'A developer who speaks the language of design.',
      subtitleRight: 'Crafting intuitive interfaces and meaningful digital narratives. Based in Seoul, my work is a fusion of clean code, minimalist aesthetics, and user-centric philosophy.',
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
      title: '정소희',
      subtitleLeft: '프롭테크 NO.1 직방에서 AX전환 프로젝트를 이끈 ',
      subtitleRight: '직관적인 인터페이스와 의미 있는 디지털 내러티브를 만듭니다. 서울을 기반으로 활동하며, 깨끗한 코드와 미니멀한 미학, 그리고 사용자 중심 철학의 융합을 추구합니다.',
      scroll: 'SCROLL',
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
  }
};

export interface Project {
  id: number;
  year: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  projectDescription?: string;
  myRole?: string;
  contribution?: string;
  results?: string;
  detailImageUrls?: string[];
}

const WORK_EXPERIENCE_EN: Project[] = [
  {
    id: 1,
    year: "2025",
    category: "Branding",
    title: "Zigbang",
    description: "A comprehensive rebranding for a leading tech startup, focusing on minimalist aesthetics and digital presence.",
    imageUrl: "https://picsum.photos/seed/alpha/800/600?grayscale",
    projectDescription: "An AX (AI Transformation) project aimed at redesigning the legacy system to create a brand new user-centric experience.",
    myRole: "As the lead designer, I was responsible for rebuilding the design system and the overall UI/UX design.",
    contribution: "100% (Led design strategy, prototyping, and usability testing)",
    results: "Achieved a 30% increase in conversion rates through data-driven decisions and secured positive feedback in user satisfaction surveys.",
    detailImageUrls: [
      "https://picsum.photos/seed/z1/1200/800?grayscale",
      "https://picsum.photos/seed/z2/800/1000?grayscale",
      "https://picsum.photos/seed/z3/1000/600?grayscale"
    ]
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
    year: "2026",
    category: "전사 AX전환 프로젝트 리딩",
    title: "직방 ZIGBANG",
    description: "프롭테크 기업 직방의 전사 서비스 AX 전환 프로젝트에 참여.",
    imageUrl: "https://picsum.photos/seed/alpha/800/600?grayscale",
    projectDescription: "기존 레거시 시스템을 혁신하고 사용자 중심의 새로운 경험을 설계하는 것을 목표로 한 AX(AI Transformation) 전환 프로젝트입니다. 비개발자도 사용할 수 있는 GUI 기반 자동화 툴 'Zapier'를 메뉴얼 제작에서 생성형 AI를 활용한 4컷 만화를 삽입하여 구성원들의 초기 진입 허들을 낮추고 재미있는 콘텐츠로 몰입감을,,,",
    myRole: "리드 디자이너로서 디자인 시스템 재구축 및 전반적인 UI/UX 설계를 담당했습니다.만화를 그림 어떤 문제를 해결하려는 자동화 프로젝트 인지 ",
    contribution: "100% (디자인 전략 수립, 프로토타이핑, 사용성 테스트 등 리드)",
    results: "데이터 기반의 의사결정을 통해 전환율을 30% 이상 향상시켰으며, 사용자 만족도 조사에서 긍정적인 피드백을 확보했습니다. 데이터 기반의 의사결정을 통해 전환율을 30% 이상 향상시켰으며, 사용자 만족도 조사에서 긍정적인 피드백을 확보했습니다.데이터 기반의 의사결정을 통해 전환율을 30% 이상 향상시켰으며, 사용자 만족도 조사에서 긍정적인 피드백을 확보했습니다.데이터 기반의 의사결정을 통해 전환율을 30% 이상 향상시켰으며, 사용자 만족도 조사에서 긍정적인 피드백을 확보했습니다.데이터 기반의 의사결정을 통해 전환율을 30% 이상 향상시켰으며, 사용자 만족도 조사에서 긍정적인 피드백을 확보했습니다.데이터 기반의 의사결정을 통해 전환율을 30% 이상 향상시켰으며, 사용자 만족도 조사에서 긍정적인 피드백을 확보했습니다.",
    detailImageUrls: [
      "https://picsum.photos/seed/z1/1200/800?grayscale",
      "https://picsum.photos/seed/z2/800/1000?grayscale",
      "https://picsum.photos/seed/z3/1000/600?grayscale"
    ]
  },
  {
    id: 2,
    year: "2023",
    category: "웹 디자인",
    title: "E-commerce Platform",
    description: "하이엔드 패션 이커머스 웹사이트를 위한 매끄럽고 직관적인 사용자 경험 디자인.",
    imageUrl: "https://picsum.photos/seed/ecommerce/800/600?grayscale",
    projectDescription: "프리미엄 패션 브랜드의 시각적 스토리텔링과 사용자 여정을 강화하기 위한 디지털 스토어 전면 개편 프로젝트입니다. 다수의 상품을 직관적으로 탐색할 수 있도록 돕는 카테고리 분류와 매끄러운 결제 경험을 제공하여 초기 진입 허들을 낮추고 재미있는 콘텐츠로 몰입감을,,,",
    myRole: "리드 UX/UI 디자이너로서 유저 플로우 설계, 와이어프레임 및 하이파이(High-Fidelity) 목업 제작을 주도했습니다. 구매 전환율을 높이기 위해 어떤 문제를 해결하려는 디자인 리뉴얼 프로젝트 인지 ",
    contribution: "100% (UI 디자인, 인터랙티브 프로토타이핑, 타 부서와의 협업 리드)",
    results: "평균 세션 시간이 45% 증가하였으며, 장바구니 이탈률을 20% 감소시키는 성과를 거두었습니다. 평균 세션 시간이 45% 증가하였으며, 장바구니 이탈률을 20% 감소시키는 성과를 거두었습니다.평균 세션 시간이 45% 증가하였으며, 장바구니 이탈률을 20% 감소시키는 성과를 거두었습니다.평균 세션 시간이 45% 증가하였으며, 장바구니 이탈률을 20% 감소시키는 성과를 거두었습니다.평균 세션 시간이 45% 증가하였으며, 장바구니 이탈률을 20% 감소시키는 성과를 거두었습니다.평균 세션 시간이 45% 증가하였으며, 장바구니 이탈률을 20% 감소시키는 성과를 거두었습니다.",
    detailImageUrls: [
      "https://picsum.photos/seed/e1/800/800?grayscale",
      "https://picsum.photos/seed/e2/800/800?grayscale",
      "https://picsum.photos/seed/e3/800/800?grayscale"
    ]
  },
  {
    id: 3,
    year: "2022",
    category: "편집 디자인",
    title: "The Urbanist Magazine",
    description: "현대 건축과 도시 생활에 관한 월간 간행물의 아트 디렉션 및 레이아웃 디자인.",
    imageUrl: "https://picsum.photos/seed/urbanist/800/600?grayscale",
    projectDescription: "미니멀한 타이포그래피와 감각적인 사진을 통해 현대 도시의 본질을 담아내는 인쇄 및 디지털 에디토리얼 프로젝트입니다. 복잡한 도시 생활의 인사이트를 직관적인 레이아웃과 흥미로운 아티클로 풀어내어 독자들의 초기 진입 허들을 낮추고 재미있는 콘텐츠로 몰입감을,,,",
    myRole: "아트 디렉터로서 전체적인 시각적 콘셉트와 그리드 시스템을 기획하고 디자인했습니다. 타이포그래피를 통해 어떤 문제를 해결하려는 에디토리얼 프로젝트 인지 ",
    contribution: "100% (아트 디렉션, 레이아웃 디자인, 인쇄 제작 감리)",
    results: "12개의 월간 호를 성공적으로 발행하였으며, 내셔널 디자인 어워드에서 '베스트 에디토리얼 디자인' 상을 수상했습니다. 12개의 월간 호를 성공적으로 발행하였으며, 내셔널 디자인 어워드에서 '베스트 에디토리얼 디자인' 상을 수상했습니다.12개의 월간 호를 성공적으로 발행하였으며, 내셔널 디자인 어워드에서 '베스트 에디토리얼 디자인' 상을 수상했습니다.12개의 월간 호를 성공적으로 발행하였으며, 내셔널 디자인 어워드에서 '베스트 에디토리얼 디자인' 상을 수상했습니다.12개의 월간 호를 성공적으로 발행하였으며, 내셔널 디자인 어워드에서 '베스트 에디토리얼 디자인' 상을 수상했습니다.12개의 월간 호를 성공적으로 발행하였으며, 내셔널 디자인 어워드에서 '베스트 에디토리얼 디자인' 상을 수상했습니다.",
    detailImageUrls: [
      "https://picsum.photos/seed/u1/800/800?grayscale",
      "https://picsum.photos/seed/u2/800/800?grayscale",
      "https://picsum.photos/seed/u3/800/800?grayscale"
    ]
  },
  {
    id: 4,
    year: "2022",
    category: "UI/UX",
    title: "Mobile Banking App",
    description: "차세대 모바일 뱅킹 애플리케이션을 위한 안전하고 사용자 친화적인 인터페이스 제작.",
    imageUrl: "https://picsum.photos/seed/banking/800/600?grayscale",
    projectDescription: "복잡한 금융 거래를 안전하고 쉽고 직관적으로 느낄 수 있도록 레거시 모바일 뱅킹 앱을 리디자인하는 프로젝트입니다. 비대면 금융 서비스에 익숙하지 않은 사용자들을 위해 직관적인 인터랙션과 안내 화면을 삽입하여 사용자들의 초기 진입 허들을 낮추고 편리한 금융 서비스 경험을 제공하여 몰입감을,,,",
    myRole: "프로덕트 디자이너로서 사용자 리서치를 수행하고 End-to-End 유저 플로우를 설계했습니다. 금융의 복잡성을 어떻게 줄이고 어떤 문제를 해결하려는 앱 리뉴얼 프로젝트 인지 ",
    contribution: "100% (사용자 리서치, 인터랙션 디자인, 디자인 시스템 연동)",
    results: "앱 스토어 평점이 3.2에서 4.8로 상승하였고, 일간 활성 사용자(DAU)가 60% 증가했습니다. 앱 스토어 평점이 3.2에서 4.8로 상승하였고, 일간 활성 사용자(DAU)가 60% 증가했습니다.앱 스토어 평점이 3.2에서 4.8로 상승하였고, 일간 활성 사용자(DAU)가 60% 증가했습니다.앱 스토어 평점이 3.2에서 4.8로 상승하였고, 일간 활성 사용자(DAU)가 60% 증가했습니다.앱 스토어 평점이 3.2에서 4.8로 상승하였고, 일간 활성 사용자(DAU)가 60% 증가했습니다.앱 스토어 평점이 3.2에서 4.8로 상승하였고, 일간 활성 사용자(DAU)가 60% 증가했습니다.",
    detailImageUrls: [
      "https://picsum.photos/seed/b1/800/800?grayscale",
      "https://picsum.photos/seed/b2/800/800?grayscale",
      "https://picsum.photos/seed/b3/800/800?grayscale"
    ]
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
    category: "Design",
    title: "동빈문화공간 사이니지 워크숍",
    description: "복합 문화 공간 사이니지 워크숍 참여 및 제작",
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
