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
      role: 'Internal Product · Tech Translator',
      tags: ['Automation', 'AI Tools', 'Problem Solving'],
      subtitleLeft: 'Problem Solver & Tech Translator',
      subtitleRight:
        'Creative thinking from art school, problem-solving skills from coding. I solve colleagues\' problems as an internal problem solver and tech translator.',
      scroll: 'SCROLL',
    },
    about: {
      title: 'About Me',
      p1: 'I build automation and AI tools for non-developer colleagues at Zigbang\'s Internal Product team. I\'m a "friendly tech translator" — translating technology into human language, and turning people\'s problems into systems.',
      p2: 'I planned and operated company-wide AX education achieving 82% completion, and built the internal automation request bot and RAG system with end-to-end ownership. Trained in sculpture at Hongik University asking "how does this work reach people" — that sense now drives my user-centered design.',
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
      role: 'Internal Product · Tech Translator',
      tags: ['자동화', 'AI 도구', '문제 해결'],
      subtitleLeft: '사내 문제 해결사 및 기술 번역가',
      subtitleRight:
        '미술 대학에서 배운 창의적 사고 능력과, 코딩을 통해 배운 문제 해결 능력으로, 동료의 문제를 해결하는 사내 문제 해결사 및 기술 번역가.',
      scroll: 'SCROLL',
    },
    about: {
      title: 'About Me',
      p1: '직방 Internal Product 팀에서 비개발 동료를 위한 자동화·AI 도구를 만듭니다. 기술을 사람의 언어로 번역하고, 사람의 문제를 시스템으로 풀어내는 "친절한 기술 번역가"입니다.',
      p2: '전사 AX 교육을 기획·운영하며 82% 수료율을 달성했고, 사내 자동화 요청 봇과 RAG 시스템을 기획부터 구현까지 오너십을 가지고 완성했습니다. 홍익대학교 조소과에서 "작업이 사람에게 어떻게 닿는가"를 훈련받았고, 이 감각이 지금의 사용자 중심 설계로 이어지고 있습니다.',
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
  // STAR Framework
  situation?: string;
  task?: string;
  action?: string;
  results?: string;
  detailImageUrls?: string[];
}

// ---------- Work Experience (실제 직방 프로젝트 3종) ----------
const WORK_EXPERIENCE_EN: Project[] = [
  {
    id: 1,
    year: '2025.10 – 2026.07',
    category: 'Company-wide AX · Education',
    title: 'Zigbang AX Transformation',
    description: '82% completion rate. Taught Zapier & GAS tracks, created AI webtoon content.',
    imageUrl: '/project1-1.png',
    situation: 'Most Zigbang employees perceived AI and automation as "developer territory." High psychological barriers prevented non-developers from adopting these tools in their daily work.',
    task: 'Design and operate an education program that lowers psychological barriers so non-developers can use AI and automation as everyday tools.',
    action: '• Joined as planning & operations partner to HR Training Lead\n• Designed 4-stage roadmap: Zapier (No-code) → Slack → GAS (first code) → Claude (LLM)\n• Created curriculum and taught Zapier beginner/advanced and GAS tracks\n• Produced AI-generated webtoon content → drove initial engagement through relatability\n• Incorporated real automation cases discovered through non-developer collaboration into curriculum',
    results: '• 82% company-wide completion rate (verified via measurement system)\n• "AI felt abstract before — now I have courage to apply it" — feedback\n• Established self-sustaining AX culture where employees audit and improve their own workflows\n• Trust built here led to ADS team automation request and internal bot system',
    detailImageUrls: ['/project1-1.png', '/project1-2.png', '/project1-3.png'],
  },
  {
    id: 2,
    year: '2026.02 – 2026.07',
    category: 'Data Pipeline · Automation',
    title: 'ADS Team Data Automation',
    description: 'Notion API + GAS for per-client auto-classification. 0% human error, 10-second extraction.',
    imageUrl: 'https://picsum.photos/seed/ads/800/600?grayscale',
    situation: 'ADS team manually filtered and copy-pasted advertiser/client data from Notion DB to spreadsheets. Frequent human errors and delayed ad execution decisions.',
    task: 'Received surface request "please move data automatically," but discovered through interviews the real problem was "per-client classification and data integrity." Needed to solve the root cause, not just sync.',
    action: '• Interviewed ADS team to observe actual workflow, distinguished surface request vs real problem\n• Identified Zapier no-code branching limitations → chose GAS + Notion API direct integration\n• Designed and built per-client auto-classification + error handling + logging system\n• Error logs in sheets → non-developers can check "why it failed" directly\n• Handoff-ready system: comments in sheets, error messages in human language, editable areas marked',
    results: '• 0% human error, ~10 second extraction, real-time sync\n• Data reliability restored → secured decision-making basis for ad execution\n• ADS team can modify/extend GAS code themselves thanks to documentation\n• Freed resources redirected to high-value work like ad efficiency analysis\n• Accumulation of informal requests led to internal bot project necessity',
    detailImageUrls: [],
  },
  {
    id: 3,
    year: '2026.03 – Present',
    category: 'Internal System · LLM',
    title: 'Automation Request Bot + RAG Bot',
    description: 'Standardized workflow via Slack bot, knowledge capitalization via Claude API RAG.',
    imageUrl: '/project3-1.png',
    situation: 'Automation requests came through informal emails and DMs — no history tracking, no manager approval, no priority management. Requests disappeared when staff changed, and no data existed to answer "what work should be automated."',
    task: 'Convert informal automation requests into standardized workflow, and turn accumulated collaboration data into searchable knowledge assets. Needed architecture where new AI features can extend without touching production systems.',
    action: '• End-to-end design and implementation (AWS Lambda + DynamoDB + Slack Block Kit)\n• Automation Request Bot: Request → Manager approval → IP team review → auto-channel creation\n• RAG Knowledge Bot: Claude API integration, channel message-based internal knowledge search\n• Applied CQRS pattern: RAG bot read-only, IAM permission separation for operations/AI isolation\n• Human-in-the-Loop: LLM-extracted metadata saved only after verification modal\n• Legacy channel backfill (/rag-backfill): LLM extracts metadata → user verification → DB save',
    results: '• Automation request bot live (3 collaboration channels created)\n• "Manager approval → IP team review" official governance established\n• Informal requests now structured data → internal bottlenecks visible for first time\n• RAG bot design complete, implementation in progress\n• Learned NoSQL schemaless characteristics, patterns for compensating LLM limitations with system structure',
    detailImageUrls: ['/project3-1.png', '/project3-2.png', '/project3-3.png'],
  },
];

const WORK_EXPERIENCE_KO: Project[] = [
  {
    id: 1,
    year: '2025.10 – 2026.07',
    category: '전사 AX 전환 · 교육',
    title: '직방 전사 AX 전환 프로젝트',
    description: '전사 구성원 82% 수료 달성. Zapier·GAS 트랙 직접 강의, AI 만화 콘텐츠로 초기 관심 견인.',
    imageUrl: '/project1-1.png',
    situation: '직방 전사 구성원 대부분이 AI와 자동화를 "개발자의 영역"으로 인식하고 있었습니다. 비개발 직군의 심리적 진입장벽이 높아 실무 도입이 어려운 상황이었습니다.',
    task: '비개발 직군도 AI와 자동화를 일상 도구로 쓸 수 있도록, 심리적 장벽을 낮추는 교육 프로그램을 기획·운영해야 했습니다.',
    action: '• 사내교육인사팀장의 기획·운영 파트너로 참여\n• 4단계 로드맵 설계: Zapier(No-code) → Slack → GAS(첫 코드) → Claude(LLM)\n• Zapier 초급/고급, GAS 트랙 교안 작성 및 직접 강의\n• 생성형 AI로 만화 콘텐츠 제작 → "나도 그렇지!" 공감 유도로 초기 관심 견인\n• 비개발 직군과 협업하며 발굴한 실제 자동화 케이스를 교안에 반영',
    results: '• 전사 구성원 82% 수료율 달성 (측정 시스템으로 검증)\n• "AI가 막연했는데 실무에 적용할 용기가 생겼다" — 피드백\n• 구성원 스스로 업무 파이프라인을 점검·개선하는 자생적 AX 문화 조성\n• 이 프로젝트에서 형성된 신뢰가 ADS팀 자동화 의뢰, 사내 봇 시스템으로 확장',
    detailImageUrls: ['/project1-1.png', '/project1-2.png', '/project1-3.png'],
  },
  {
    id: 2,
    year: '2026.02 – 2026.07',
    category: '데이터 파이프라인 · 자동화',
    title: 'ADS팀 거래처 데이터 자동화',
    description: 'Notion API + GAS로 거래처별 자동 분류. 휴먼 에러 0%, 추출 시간 10초.',
    imageUrl: 'https://picsum.photos/seed/ads/800/600?grayscale',
    situation: 'ADS팀(분양광고팀)은 노션 DB의 광고사·거래처 데이터를 매번 수동으로 필터링 후 복사·붙여넣기로 시트에 옮기고 있었습니다. 휴먼 에러가 빈번하고, 광고 집행 의사결정이 지연되는 상황이었습니다.',
    task: '"데이터를 자동으로 옮겨주세요"라는 표면 요청을 받았지만, 인터뷰를 통해 진짜 문제가 "거래처별 분류와 정합성 유지"임을 발견했습니다. 단순 동기화가 아닌 근본 문제를 해결해야 했습니다.',
    action: '• ADS팀 인터뷰로 실제 워크플로우 관찰, 표면 요청 vs 진짜 문제 구분\n• Zapier의 No-code 분기 한계 파악 → GAS + Notion API 직접 연동 결정\n• 거래처별 자동 분류 + 에러 핸들링 + 로그 시스템 설계·구현\n• 에러 로그를 시트에 기록 → 비개발자도 "왜 안 됐는지" 직접 확인 가능\n• 인계 가능한 시스템: 주석을 시트에, 에러 메시지를 사람의 언어로, 수정 가능 영역 명시',
    results: '• 휴먼 에러 0%, 추출 시간 10초 내외, 실시간 동기화\n• 데이터 신뢰도 회복 → 광고 집행 의사결정 근거 확보\n• ADS팀이 직접 GAS 코드 수정·확장 가능하도록 문서화\n• 확보된 리소스를 광고 효율 분석·전략 수립 등 고부가가치 업무로 전환\n• 비공식 자동화 의뢰가 누적되며 사내 봇 프로젝트의 필요성 대두',
    detailImageUrls: [],
  },
  {
    id: 3,
    year: '2026.03 – 현재',
    category: '사내 시스템 · LLM',
    title: '사내 자동화 요청 봇 + RAG 봇',
    description: 'Slack 봇으로 워크플로우 표준화, Claude API 기반 RAG로 지식 자산화.',
    imageUrl: '/project3-1.png',
    situation: '자동화 요청이 이메일과 DM으로 비공식적으로 들어와 히스토리 추적, 부서장 승인, 우선순위 관리가 불가능했습니다. 담당자가 바뀌면 요청 이력이 사라지고, "어떤 업무가 자동화되어야 하는가"에 답할 데이터도 없었습니다.',
    task: '비정형 자동화 요청을 표준화된 워크플로우로 전환하고, 축적된 협업 데이터를 검색 가능한 지식 자산으로 만들어야 했습니다. 운영 중인 시스템을 건드리지 않으면서 신규 AI 기능을 확장할 수 있는 구조가 필요했습니다.',
    action: '• 전체 시스템 End-to-end 설계 및 구현 (AWS Lambda + DynamoDB + Slack Block Kit)\n• 자동화 요청 봇: 요청 → 부서장 승인 → IP팀 검토 → 협업 채널 자동 생성\n• RAG 지식 봇: Claude API 연동, 채널 메시지 기반 사내 지식 검색\n• CQRS 패턴 적용: RAG 봇은 읽기 전용, IAM 권한 분리로 운영/AI 시스템 격리\n• Human-in-the-Loop: LLM 추출 메타데이터는 검증 모달 거친 후 저장\n• 레거시 채널 백필(/rag-backfill) 설계: LLM이 메타데이터 추출 → 사용자 검증 → DB 저장',
    results: '• 자동화 요청 봇 실 운영 중 (협업 채널 3건 생성)\n• "부서장 승인 → IP팀 검토" 공식 거버넌스 확립, 무분별한 요청 방지\n• 비정형 요청이 구조화된 데이터로 축적 → 사내 병목 구간 최초 가시화\n• RAG 봇 설계 완료, 구현 진행 중\n• NoSQL 스키마리스 특성, LLM 한계를 시스템으로 보완하는 패턴 체득',
    detailImageUrls: ['/project3-1.png', '/project3-2.png', '/project3-3.png'],
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

// ---------- Skills (노션 기반 재구성) ----------
export const SKILLS_DATA: string[] = [
  // AI · 자동화
  'Claude API · RAG',
  'Notion API · Google Apps Script',
  'Slack API · Block Kit',
  'Zapier',
  // 클라우드
  'AWS Lambda',
  'DynamoDB',
  'API Gateway · IAM',
  // 프로그래밍
  'JavaScript',
  'Swift · iOS',
  'React · TypeScript',
  // 데이터 · 운영
  'ADsP (데이터 분석)',
  'ITSM 운영',
  'Git · GitHub',
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
