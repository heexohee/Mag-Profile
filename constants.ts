// ====================================================================
//  정소희 Portfolio — constants.ts (Updated 2026-05-21)
//  AI / Automation Specialist Positioning
//  이 파일을 기존 constants.ts와 교체하세요.
// ====================================================================

// ---------- UI Translations ----------
export const UI_TEXT = {
  en: {
    nav: {
      about: 'About',
      education: 'Education',
      workExperience: 'Work',
      personalProjects: 'Projects',
      expertise: 'Expertise',
      awards: 'Awards',
      certifications: 'Certifications',
    },
    hero: {
      title: 'SoHee Jeong',
      subtitleLeft: 'Turning vague AX into tangible experience.',
      subtitleRight:
        'AI · Automation Specialist based in Seoul. I translate technology into people-friendly language, and turn people’s problems into systems. Currently building internal AX and automation at Zigbang.',
      scroll: 'SCROLL',
    },
    about: {
      title: 'About Me',
      p1: 'I started in sculpture, learning to read space, form, and the way a viewer’s body moves through them. Through a data analysis certificate, a front-end bootcamp, and Apple Developer Academy, I gradually moved into building digital experiences — but kept the sculptor’s instincts: how does this *feel* to the person standing in front of it?',
      p2: 'Today I work as Internal Product Ops at Zigbang, leading the company-wide AX (AI Transformation) initiative and building automation systems that quietly remove friction from people’s work. I believe the best automation is invisible, and the best technology is one your team forgets is technology at all.',
    },
    education: {
      title: 'Education',
    },
    workExperience: {
      title: 'Work',
      period: '2025 – Present',
    },
    projects: {
      title: 'Work',
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
      p1: 'Open to new opportunities, collaborations, and conversations about automation, AX, and the space where art meets technology.',
      email: 'Email me',
    },
  },
  ko: {
    nav: {
      about: 'About',
      education: 'Education',
      workExperience: 'Work',
      personalProjects: 'Projects',
      expertise: 'Expertise',
      awards: 'Awards',
      certifications: 'Certifications',
    },
    hero: {
      title: '정소희',
      subtitleLeft: '막연한 AX를 손에 잡히는 ‘경험’으로 만듭니다.',
      subtitleRight:
        '서울에서 활동하는 AI·Automation Specialist입니다. 기술을 사람의 언어로 번역하고, 사람의 문제를 시스템으로 풀어냅니다. 지금은 직방 Internal Product 팀에서 전사 AX 전환과 사내 자동화를 만들고 있습니다.',
      scroll: 'SCROLL',
    },
    about: {
      title: 'About Me',
      p1: '저는 홍익대학교에서 조소(彫塑)를 전공했습니다. 4년간 공간·형태·관람자의 동선을 다루며, “이 작업이 사람에게 어떻게 닿는가”를 묻는 훈련을 받았습니다. 졸업 후 데이터 분석 자격증(ADsP), 이노베이션 개발자 부트캠프(JS/React), 애플 디벨로퍼 아카데미 @POSTECH을 거치며 디지털 경험을 직접 만드는 영역으로 옮겨 왔습니다.',
      p2: '지금은 직방 Internal Product 팀에서 전사 AX(AI Transformation) 전환과 사내 자동화 시스템을 만들고 있습니다. 비개발 직군 동료들이 AI를 막연한 것이 아니라 일상의 도구로 받아들이게 하는 일, 반복 업무 뒤에 숨은 비효율을 시스템으로 걷어내는 일을 합니다. 가장 좋은 자동화는 사용자가 그 존재를 의식하지 않는 자동화라고 믿습니다.',
    },
    education: {
      title: 'Education',
    },
    workExperience: {
      title: 'Work',
      period: '2025 – 현재',
    },
    projects: {
      title: 'Work',
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
      p1: '새로운 기회, 협업, 그리고 자동화·AX·예술과 기술의 교차점에 대한 대화를 언제든 환영합니다.',
      email: 'Email me',
    },
  },
};

// ---------- Types ----------
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

// ---------- Work Experience (실제 직방 프로젝트 3종) ----------
const WORK_EXPERIENCE_EN: Project[] = [
  {
    id: 1,
    year: '2025 – 2026',
    category: 'Company-wide AX Transformation',
    title: 'Zigbang AX Transformation',
    description:
      'A 4-stage AX learning journey (Zapier → Slack → GAS → Claude) that reached 82% completion across the company.',
    imageUrl: 'https://picsum.photos/seed/ax/800/600?grayscale',
    projectDescription:
      'A company-wide AI Transformation initiative at Zigbang, designed to make automation and LLM tools part of every employee’s daily workflow — from non-developers to engineers. I planned and operated a 4-stage curriculum (Zapier · Slack · Google Apps Script · Claude) and produced immersive communication content to lower the psychological barrier of adopting new tools.',
    myRole:
      'Internal Product Ops — I led the change management side: designing the learning roadmap, creating generative-AI webtoons to explain each tool in human language, and managing rollout across the company.',
    contribution:
      'Curriculum design, content production (AI-generated webtoons), facilitation, and outcome tracking.',
    results:
      '82% of all employees completed the full program. Qualitative feedback: “AI and automation used to feel abstract — the webtoons and step-by-step guides gave me the courage to actually try it in my own work.” Beyond the numbers, the project established a culture where employees voluntarily audit and improve their own workflows.',
    detailImageUrls: [
      'https://picsum.photos/seed/ax1/1200/800?grayscale',
      'https://picsum.photos/seed/ax2/800/1000?grayscale',
      'https://picsum.photos/seed/ax3/1000/600?grayscale',
    ],
  },
  {
    id: 2,
    year: '2026 – Present',
    category: 'Internal System Design',
    title: 'Zigbang Automation Request Bot',
    description:
      'An End-to-End Slack bot pipeline that standardized how teams request, approve, and ship internal automation.',
    imageUrl: 'https://picsum.photos/seed/slackbot/800/600?grayscale',
    projectDescription:
      'Before this system, internal automation requests came in through email and DMs — no standard form, no manager approval, no record. I designed a Slack-based pipeline that handles the full lifecycle: request → manager approval → IP team review → development. Each approved request auto-creates a dedicated collaboration channel with the right people already invited.',
    myRole:
      'End-to-end design and implementation: process design, Slack Block Kit UX, serverless logic on AWS Lambda, and DynamoDB schema for request history.',
    contribution:
      'Process design · UX · Backend logic · Database schema · Rollout.',
    results:
      '12+ automation requests captured and tracked as structured data since March 2026, making internal bottlenecks visible for the first time. Lead time from request to kickoff dropped significantly thanks to auto-channel creation. Governance established: managers now approve before IP team touches anything.',
    detailImageUrls: [
      'https://picsum.photos/seed/bot1/1200/800?grayscale',
      'https://picsum.photos/seed/bot2/800/1000?grayscale',
      'https://picsum.photos/seed/bot3/1000/600?grayscale',
    ],
  },
  {
    id: 3,
    year: '2026 – Present',
    category: 'Data Pipeline Automation',
    title: 'ADS Team — Notion-to-Sheets Pipeline',
    description:
      'A fully automated pipeline that extracts client-specific advertising data from Notion into formatted Google Sheets in under 10 seconds.',
    imageUrl: 'https://picsum.photos/seed/ads/800/600?grayscale',
    projectDescription:
      'The ADS team manually filtered and copy-pasted client data from a large Notion database into shared spreadsheets — a process prone to human error and slow enough to delay ad-buying decisions. I designed an automated pipeline using the Notion API and Google Apps Script that pulls, cleans, and routes data to per-client sheets in real time.',
    myRole:
      'Pipeline design and implementation: Notion API integration, GAS-based transformation logic, scheduling, and error handling.',
    contribution: 'Architecture · GAS development · Data validation logic · Operational handoff.',
    results:
      'Human error rate dropped to 0%. Extraction time per request reduced to ~10 seconds. The freed-up operational time was redirected to higher-value work like ad performance analysis and strategy.',
    detailImageUrls: [
      'https://picsum.photos/seed/ads1/1200/800?grayscale',
      'https://picsum.photos/seed/ads2/800/1000?grayscale',
      'https://picsum.photos/seed/ads3/1000/600?grayscale',
    ],
  },
];

const WORK_EXPERIENCE_KO: Project[] = [
  {
    id: 1,
    year: '2025 – 2026',
    category: '전사 AX 전환',
    title: '직방 전사 AX 전환 프로젝트',
    description:
      'Zapier · Slack · GAS · Claude로 이어지는 4단계 AX 로드맵을 기획·운영해 전체 구성원의 82% 수료를 달성한 프로젝트.',
    imageUrl: 'https://picsum.photos/seed/ax/800/600?grayscale',
    projectDescription:
      '직방 전사 구성원이 AI와 자동화를 일상의 도구로 받아들이게 하는 것을 목표로 한 AX(AI Transformation) 전환 프로젝트입니다. 비개발 직군부터 개발자까지 모두 따라올 수 있도록 No-code 도구(Zapier)부터 LLM(Claude)까지 4단계 커리큘럼을 설계했고, 신규 툴에 대한 심리적 허들을 낮추기 위해 생성형 AI로 제작한 만화(Webtoon)를 홍보·교육 콘텐츠로 도입했습니다.',
    myRole:
      'Internal Product Ops 역할로 프로젝트의 변화 관리(Change Management) 측면을 리드했습니다. 4단계 커리큘럼 설계, 생성형 AI 만화 콘텐츠 기획·제작, 전사 롤아웃 운영, 성과 측정까지 담당했습니다.',
    contribution: '커리큘럼 설계 · AI 만화 콘텐츠 기획·제작 · 전사 운영 · 성과 분석.',
    results:
      '전체 구성원의 82%가 프로젝트 전 과정을 수료. 정성적 피드백: “AI와 자동화가 막연히 어렵게 느껴졌는데, 만화와 단계별 가이드를 통해 실무에 바로 적용해 볼 용기가 생겼다.” 단순 교육을 넘어, 구성원 스스로 자신의 업무 파이프라인을 점검하고 개선하는 자생적 AX 문화가 자리잡았습니다.',
    detailImageUrls: [
      'https://picsum.photos/seed/ax1/1200/800?grayscale',
      'https://picsum.photos/seed/ax2/800/1000?grayscale',
      'https://picsum.photos/seed/ax3/1000/600?grayscale',
    ],
  },
  {
    id: 2,
    year: '2026 – 현재',
    category: '사내 시스템 설계',
    title: '직방 사내 자동화 요청 슬랙 봇',
    description:
      '비정형 자동화 요청을 표준화한 End-to-End 슬랙 봇 시스템. 요청 → 승인 → 검토 → 개발의 4단계 워크플로우를 자동화했습니다.',
    imageUrl: 'https://picsum.photos/seed/slackbot/800/600?grayscale',
    projectDescription:
      '기존에는 자동화 요청이 이메일과 개인 DM으로 비공식적으로 들어와 히스토리 추적도, 부서장 승인도, 우선순위 관리도 불가능했습니다. 이를 해결하기 위해 슬랙 봇 기반으로 요청-승인-검토-개발의 전 과정을 시스템화했고, 승인 즉시 관련 인원이 자동 초대된 협업 채널이 생성되도록 설계했습니다.',
    myRole:
      'End-to-end로 직접 설계·구현했습니다. 운영 프로세스 설계, Slack Block Kit 기반 인터랙티브 UX, AWS Lambda Serverless 로직, DynamoDB 스키마 설계까지 담당했습니다.',
    contribution:
      '프로세스 설계 · Slack UX · AWS Lambda 로직 · DynamoDB 스키마 · 롤아웃.',
    results:
      '2026년 3월 이후 누적 12건 이상의 자동화 요청이 구조화된 데이터로 축적되어, 사내 업무 병목 구간이 처음으로 가시화되었습니다. 채널 자동 생성으로 초기 협의 리드타임이 크게 단축되었고, “팀장 승인 → IP팀 검토”라는 공식 거버넌스가 자리잡아 무분별한 요청이 사라졌습니다.',
    detailImageUrls: [
      'https://picsum.photos/seed/bot1/1200/800?grayscale',
      'https://picsum.photos/seed/bot2/800/1000?grayscale',
      'https://picsum.photos/seed/bot3/1000/600?grayscale',
    ],
  },
  {
    id: 3,
    year: '2026 – 현재',
    category: '데이터 파이프라인 자동화',
    title: 'ADS팀 거래처 데이터 추출 자동화',
    description:
      '노션 DB의 거래처별 광고사 데이터를 구글 시트로 10초 안에 추출·정렬하는 자동화 파이프라인.',
    imageUrl: 'https://picsum.photos/seed/ads/800/600?grayscale',
    projectDescription:
      'ADS팀은 노션에 보관된 방대한 거래처·광고사 데이터를 매번 수동으로 필터링·복사해 공유 시트로 옮기고 있었습니다. 휴먼 에러가 발생하기 쉽고, 광고 집행 의사결정을 지연시키는 원인이 되었습니다. 이를 해결하기 위해 Notion API와 Google Apps Script(GAS)를 연동한 자동 추출 파이프라인을 설계·구축했습니다.',
    myRole:
      'Notion API 호출 로직 설계, GAS 기반 데이터 전처리·분류 로직 구현, 스케줄링 설정, 에러 핸들링까지 직접 담당했습니다.',
    contribution: '아키텍처 설계 · GAS 개발 · 데이터 정합성 검증 로직 · 운영 인수인계.',
    results:
      '휴먼 에러 0%로 데이터 정합성을 확보했고, 거래처별 데이터 추출 시간을 10초 내외로 단축했습니다. 확보된 리소스는 단순 추출 대신 광고 효율 분석·전략 수립 같은 고부가가치 업무로 재배치되었습니다.',
    detailImageUrls: [
      'https://picsum.photos/seed/ads1/1200/800?grayscale',
      'https://picsum.photos/seed/ads2/800/1000?grayscale',
      'https://picsum.photos/seed/ads3/1000/600?grayscale',
    ],
  },
];

export const WORK_EXPERIENCE_DATA = {
  en: WORK_EXPERIENCE_EN,
  ko: WORK_EXPERIENCE_KO,
};

// ---------- Personal Projects ----------
const PERSONAL_PROJECTS_EN: Project[] = [
  {
    id: 5,
    year: '2023',
    category: 'Public Space Design',
    title: 'Dongbin Cultural Space — Signage Workshop',
    description:
      'Participated in a signage design workshop for a hybrid cultural space, bridging spatial design and visual communication.',
    imageUrl: 'https://picsum.photos/seed/dongbin/800/600?grayscale',
  },
  {
    id: 6,
    year: '2026',
    category: 'Web · This Site',
    title: 'Monochrome Magazine Portfolio',
    description:
      'This portfolio itself — built with React 19, TypeScript, Tailwind, and Three.js. A study in minimalism and the quiet authority of typography.',
    imageUrl: 'https://picsum.photos/seed/portfolio/800/600?grayscale',
  },
];

const PERSONAL_PROJECTS_KO: Project[] = [
  {
    id: 5,
    year: '2023',
    category: '공공 공간 디자인',
    title: '동빈문화공간 사이니지 워크숍',
    description:
      '복합 문화공간의 사이니지 디자인 워크숍에 참여·제작. 공간 디자인과 시각 커뮤니케이션의 접점을 다룬 작업입니다.',
    imageUrl: 'https://picsum.photos/seed/dongbin/800/600?grayscale',
  },
  {
    id: 6,
    year: '2026',
    category: '웹 · 이 사이트',
    title: 'Monochrome Magazine Portfolio',
    description:
      '지금 보고 계신 이 포트폴리오 자체입니다. React 19, TypeScript, Tailwind, Three.js로 제작. 미니멀리즘과 타이포그래피의 조용한 권위를 실험한 작업입니다.',
    imageUrl: 'https://picsum.photos/seed/portfolio/800/600?grayscale',
  },
];

export const PERSONAL_PROJECTS_DATA = {
  en: PERSONAL_PROJECTS_EN,
  ko: PERSONAL_PROJECTS_KO,
};

// ---------- Awards ----------
export interface Award {
  id: number;
  year: string;
  title: string;
  organization: string;
}

const AWARDS_EN: Award[] = [
  {
    id: 1,
    year: '2022',
    title: 'LG CNS DX Idea Contest — Honorable Mention',
    organization: 'LG CNS',
  },
];

const AWARDS_KO: Award[] = [
  {
    id: 1,
    year: '2022',
    title: 'LG CNS DX 아이디어 공모전 입선',
    organization: 'LG CNS',
  },
];

export const AWARDS_DATA = {
  en: AWARDS_EN,
  ko: AWARDS_KO,
};

// ---------- Certifications ----------
export interface Certification {
  id: number;
  year: string;
  title: string;
  issuer: string;
}

const CERTIFICATIONS_EN: Certification[] = [
  {
    id: 1,
    year: '2023',
    title: 'ADsP (Advanced Data Analytics Semi-Professional)',
    issuer: 'Korea Data Agency (KDATA)',
  },
  {
    id: 2,
    year: '2022',
    title: 'Licensed Real Estate Agent (Republic of Korea)',
    issuer: 'Human Resources Development Service of Korea',
  },
];

const CERTIFICATIONS_KO: Certification[] = [
  {
    id: 1,
    year: '2023',
    title: 'ADsP 데이터 분석 준전문가',
    issuer: '한국데이터산업진흥원',
  },
  {
    id: 2,
    year: '2022',
    title: '공인중개사',
    issuer: '한국산업인력공단',
  },
];

export const CERTIFICATIONS_DATA = {
  en: CERTIFICATIONS_EN,
  ko: CERTIFICATIONS_KO,
};

// ---------- Education ----------
export interface Education {
  id: number;
  year: string;
  degree: string;
  institution: string;
}

const EDUCATION_EN: Education[] = [
  {
    id: 1,
    year: '2016 – 2021',
    degree: 'Bachelor of Fine Arts in Sculpture',
    institution: 'Hongik University',
  },
  {
    id: 2,
    year: '2023',
    degree: 'Front-End Development Bootcamp (JavaScript · React)',
    institution: 'Innovation Academy',
  },
  {
    id: 3,
    year: '2024',
    degree: 'iOS Development · UI/UX Design',
    institution: 'Apple Developer Academy @ POSTECH (Cohort 3)',
  },
];

const EDUCATION_KO: Education[] = [
  {
    id: 1,
    year: '2016 – 2021',
    degree: '조소과 학사',
    institution: '홍익대학교 미술대학',
  },
  {
    id: 2,
    year: '2023',
    degree: '프론트엔드 개발 부트캠프 (JavaScript · React)',
    institution: '이노베이션 아카데미',
  },
  {
    id: 3,
    year: '2024',
    degree: 'iOS 개발 · UI/UX 디자인',
    institution: 'Apple Developer Academy @ POSTECH (3기)',
  },
];

export const EDUCATION_DATA = {
  en: EDUCATION_EN,
  ko: EDUCATION_KO,
};

// ---------- Skills (AI/Automation Specialist 포지셔닝) ----------
export const SKILLS_DATA: string[] = [
  // AI / LLM
  'Claude · LLM Prompting',
  'Generative AI Content (Webtoon)',
  // Automation
  'Zapier',
  'Google Apps Script',
  'AWS Lambda (Serverless)',
  'Slack Web API & Block Kit',
  // Data
  'Notion API',
  'Google Sheets API',
  'Amazon DynamoDB',
  'ADsP (Data Analysis)',
  // Development
  'React · TypeScript',
  'SwiftUI · iOS',
  // Creative & Soft
  'Change Management',
  'Visual Storytelling',
];

// ---------- Social Links ----------
export const SOCIAL_LINKS = {
  linkedin:
    'https://www.linkedin.com/in/%EC%86%8C%ED%9D%AC-%EC%A0%95-683a9b1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  instagram:
    'https://www.instagram.com/heesoheesohee?igsh=MWhmejFzMXVoZTAzZw%3D%3D&utm_source=qr',
  github: 'https://github.com/heexohee',
  email: 'mailto:rsoy2918@gmail.com',
};
