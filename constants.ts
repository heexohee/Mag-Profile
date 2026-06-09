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
      workExperience: 'Works',
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
      primaryCta: 'View Works',
      secondaryCta: 'Contact',
    },
    about: {
      title: 'About Me',
      p1: 'I build automation and AI tools for non-developer colleagues at Zigbang\'s Internal Product team. I\'m a "friendly tech translator" — translating technology into human language, and turning people\'s problems into systems.',
      p2: 'I planned and operated company-wide AX education achieving 82% completion, and built the internal automation request bot and RAG system with end-to-end ownership. Trained in sculpture at Hongik University asking "how does this work reach people" — that sense now drives my user-centered design.',
      proofTitle: 'What I connect',
    },
    education: {
      title: 'Education',
    },
    workExperience: {
      title: 'Works',
      period: '2025 – Present',
    },
    projects: {
      title: 'Works',
      intro: 'Selected work across AX education, data automation, and internal AI systems.',
      openLabel: 'Open case study',
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
      linksTitle: 'Find me on',
    },
  },
  ko: {
    nav: {
      about: 'About',
      education: 'Education',
      workExperience: 'Works',
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
      primaryCta: '대표 작업 보기',
      secondaryCta: '연락하기',
    },
    about: {
      title: 'About Me',
      p1: '직방 Internal Product 팀에서 비개발 동료를 위한 자동화·AI 도구를 만듭니다. 기술을 사람의 언어로 번역하고, 사람의 문제를 시스템으로 풀어내는 "친절한 기술 번역가"입니다.',
      p2: '전사 AX 교육을 기획·운영하며 82% 수료율을 달성했고, 사내 자동화 요청 봇과 RAG 시스템을 기획부터 구현까지 오너십을 가지고 완성했습니다. 홍익대학교 조소과에서 "작업이 사람에게 어떻게 닿는가"를 훈련받았고, 이 감각이 지금의 사용자 중심 설계로 이어지고 있습니다.',
      proofTitle: '제가 연결하는 것',
    },
    education: {
      title: 'Education',
    },
    workExperience: {
      title: 'Works',
      period: '2025 – 현재',
    },
    projects: {
      title: 'Works',
      intro: 'AX 교육, 데이터 자동화, 사내 AI 시스템을 중심으로 한 대표 작업입니다.',
      openLabel: '케이스 스터디 열기',
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
      linksTitle: 'Find me on',
    },
  },
};

export interface HeroMetric {
  value: string;
  label: string;
}

export interface Capability {
  title: string;
  description: string;
}

export const HERO_METRICS = {
  en: [
    { value: '82%', label: 'AX education completion' },
    { value: '0%', label: 'Manual transfer error after automation' },
    { value: '3+', label: 'Internal bot channels standardized' },
  ],
  ko: [
    { value: '82%', label: '전사 AX 교육 수료율' },
    { value: '0%', label: '자동화 후 수동 이관 오류' },
    { value: '3+', label: '표준화된 사내 봇 협업 채널' },
  ],
} satisfies Record<'en' | 'ko', HeroMetric[]>;

export const CAPABILITIES = {
  en: [
    {
      title: 'People to systems',
      description: 'Turn vague team pain points into repeatable workflows and maintainable tools.',
    },
    {
      title: 'No-code to code',
      description: 'Choose Zapier, GAS, Lambda, or LLMs by matching tool limits to real work constraints.',
    },
    {
      title: 'AI to operations',
      description: 'Design AI features with governance, human review, and clear handoff paths.',
    },
  ],
  ko: [
    {
      title: '사람의 문제를 시스템으로',
      description: '막연한 업무 불편을 반복 가능한 워크플로우와 유지 가능한 도구로 바꿉니다.',
    },
    {
      title: '노코드에서 코드까지',
      description: 'Zapier, GAS, Lambda, LLM의 한계를 보고 실제 업무 조건에 맞는 도구를 고릅니다.',
    },
    {
      title: 'AI를 운영 가능한 구조로',
      description: '거버넌스, 사람 검증, 인계 가능성을 포함해 AI 기능을 설계합니다.',
    },
  ],
} satisfies Record<'en' | 'ko', Capability[]>;

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
  keywords?: string[];
}

// ---------- Work Experience (실제 직방 프로젝트 3종) ----------
const WORK_EXPERIENCE_EN: Project[] = [
  {
    id: 1,
    year: '2025.10 – 2026.07',
    category: 'Company-wide AX · Education',
    title: 'Zigbang AX Transformation',
    description: '82% completion rate. Taught Zapier & GAS tracks, created AI webtoon content.',
    imageUrl: '/project1-webtoon.png',
    situation: `Most Zigbang employees perceived AI and automation as "developer territory." The real barrier wasn't technical complexity—it was psychological distance. Non-developers had never experienced "I can automate this myself," making adoption nearly impossible.`,
    task: `Design and operate an education program where psychological barriers—not technical skills—are the primary target. The goal: make non-developers feel "I can do this too" before teaching any tools.`,
    action: `[Role: Planning Partner + Track Instructor + Content Creator]

■ 4-Stage Roadmap Design Philosophy
Defined learner barriers as psychological distance, not technical complexity. Each stage was designed so the limitations of one stage become the motivation for the next:

Stage 1. Zapier → "Automation works without code" (first success)
  └ Limitation: Complex branching is difficult
Stage 2. Slack Automation → New discovery in daily tools
  └ Limitation: External data integration limits
Stage 3. GAS → First encounter with code in familiar Google environment
  └ Limitation: Can't handle natural language
Stage 4. Claude → "Even unstructured data can be automated"
  └ Leads to self-directed application

■ Key Decision: Why Zapier first, not Python?
→ The first success experience determines everything in learning.
→ If we started with Python, most non-developers would have dropped out in week one.

■ Key Decision: Why Claude (LLM) last?
→ To appreciate LLM's true value, learners must first experience the limits of previous stages.
→ Only after experiencing "structured data processing has limits" can they understand "handling unstructured text" as LLM's real power.

■ AI Webtoon Content Creation
Keyword: "Empathy." The biggest resistance to new tech adoption was psychological fear.
Created comic-style content using generative AI featuring the most common work situations → drew "That's so me!" reactions → drove initial interest.
→ Proved "AI can create this" through the content itself.

■ Practice ↔ Curriculum Circulation
[Real pain points from non-dev teams] → [Solved with automation tools]
→ [Used as curriculum case studies] → [Other teams discover similar cases]
→ [Self-directed adoption] = Self-sustaining AX environment

The decisive difference from typical training: Instead of "here's a tool," it was "here's how the team next door solved this problem."`,
    results: `■ Quantitative Results
• 82% company-wide completion rate (verified via measurement infrastructure)
• Multiple employees gained practical automation skills
• Non-developers began creating automation cases independently

■ Qualitative Results
• "AI felt vague before—now I have courage to apply it to my work" — feedback
• Employees began auditing and improving their own workflows = self-sustaining AX culture
• Shifted perception that "AI/automation is for developers only"

■ What I Learned
• The real bottleneck in AI adoption isn't model performance—it's existing workers' psychological barriers
• Developed practical judgment on when each tool is appropriate and when it falls short (tool limitation matrix)
• Same technology must be explained differently depending on the listener's role and context = "Tech Translator" role

■ Ripple Effect
Trust built through this project led to ADS team automation requests and eventually the internal bot system.`,
    detailImageUrls: ['/project1-comic-email.png', '/project1-comic-files.png', '/project1-comic-collab.png', '/project1-comic-sales.png'],
    keywords: ['AX Transformation', 'Education Design', 'Zapier', 'Google Apps Script', 'Change Management', 'Tech Translator'],
  },
  {
    id: 2,
    year: '2026.02 – 2026.07',
    category: 'Data Pipeline · Automation',
    title: 'ADS Team Data Automation',
    description: 'Notion API + GAS for per-client auto-classification. 0% human error, 10-second extraction.',
    imageUrl: 'https://picsum.photos/seed/ads/800/600?grayscale',
    situation: `ADS team (Sales Advertising team) managed advertiser/client data in Notion DB. For sharing with each client, they manually filtered conditions, then copy-pasted to separate spreadsheets every time.

■ Identified Problems
1. Human Error (Inefficient Manual Work): Filtering, copying, classifying consumed significant resources
2. Data Integrity Issues: Human errors during manual transfer degraded ad metric reliability
3. Reporting Delays: Time spent on per-client custom extraction prevented real-time optimization`,
    task: `■ Surface Request vs Real Problem
Initial request: "Please move data automatically"
After interviews: "Per-client classification and maintaining integrity is the real burden"

→ If I'd only fulfilled the surface request, it would have ended as a simple sync script.
→ Because I found the real problem, I designed: per-client auto-classification + error handling + log system`,
    action: `■ Tool Selection: Why GAS, not Zapier?
Zapier was learned in the AX education project, but this was beyond its capabilities.

ADS Team Requirements:
• Per-client sheet auto-classification
• Conditional filtering
• Error tracking

Zapier Review:
❌ No-code branching limitations
❌ Can't dynamically create sheets
✓ Only simple 1:1 sync

GAS Review:
✓ Complete logic control
✓ Dynamic sheet creation
✓ Error handling freedom

→ Final Choice: GAS + Notion API direct integration
→ "Per-client sheet auto-classification" requirement couldn't be solved with Zapier's no-code branching. Clear rationale for choosing GAS.

■ Scheduling Strategy: Pull vs Push
Choice: Pull method with scheduled GAS Triggers

Reasons:
• Considered Notion API Webhook stability/limitations
• GAS Trigger reliability and debugging ease
• ADS team prioritized "accurate latest" over "real-time" (minute-level delay acceptable)

■ Error Handling: Logs Recorded in Sheets
The more important decision was recording logs in sheets together.

Typical approach: Record logs in GAS Logger.log
Adopted approach: Create separate log sheet so ADS team can check directly

→ Non-developers (ADS team) can check "why it failed" themselves = sustainable, handoff-ready system

■ Architecture
Notion DB (source) → GAS Trigger (scheduled pull)
→ GAS Pipeline [API call → Preprocessing/classification → Error handling → Log recording]
→ Google Sheets [Client A sheet, Client B sheet, All data sheet, Log sheet (for operators)]
→ ADS team (only checks results)`,
    results: `■ Before → After

| Metric | Before | After |
| Extraction time | Manual per-client processing | ~10 seconds |
| Human error | Frequent from manual work | 0% |
| Data freshness | Dependent on manual update timing | Real-time (schedule-based) |
| ADS team resources | Time spent on repetitive tasks | Redirected to high-value work like ad strategy analysis |

■ Qualitative Results
• Data reliability restored: Secured integrity for ad execution decision metrics
• ADS team self-sufficiency: Documented so ADS team can modify/extend GAS code themselves (sheet-based operation guide included)

■ Principles Learned from Non-Developer Collaboration

1. Surface Request ≠ Real Problem
Non-developers rarely have experience translating their workflows into developer language for technical solutions.
→ Someone with development knowledge + communication skills must draw it out through interviews.

2. Building "Handoff-Ready" Systems
Most important in non-developer collaboration: "Will this system survive after I leave?"
• Comments in sheets, not next to code: ADS team is more familiar with sheets than GAS code
• Error messages in human language: Not "401 Unauthorized" but "Notion connection token has expired. [Reset guide link]"
• Mark editable areas: "Just change this cell value to add a new client"

3. Automation systems survive not because of sophisticated code but because of "interfaces operators can understand"
→ This became the basis for all decisions in the internal bot project: modal readability, human-language error messages, self-describing DB fields.

■ Ripple Effect
As informal automation requests accumulated, limitations of informal channels became apparent.
→ This problem recognition led to the next project: Internal Automation Bot + RAG System`,
    detailImageUrls: [],
    keywords: ['Notion API', 'Google Apps Script', 'Data Pipeline', 'Non-Developer Collaboration', 'Interview-Driven', 'Handoff-Ready System'],
  },
  {
    id: 3,
    year: '2026.03 – Present',
    category: 'Internal System · LLM',
    title: 'Automation Request Bot + RAG Bot',
    description: 'Standardized workflow via Slack bot, knowledge capitalization via Claude API RAG.',
    imageUrl: '/project3-1.png',
    situation: `■ Problem Diagnosis

1. No Governance for Automation Requests
   Requests went directly to staff without manager approval → Team-member priority coordination impossible

2. History Volatility
   Requests processed via DM weren't searchable; when staff changed, they simply disappeared

3. Failed Data Capitalization
   No data existed to answer the most important question: "What work should be automated?"`,
    task: `■ Two Bots on Shared Data Infrastructure

| System | Role | Status |
| Automation Request Bot | Request/approval/channel creation pipeline | Live |
| RAG Knowledge Bot | Internal knowledge search based on accumulated collaboration data | Design complete, implementing |

Design goal: Structure where operations system and new AI features can evolve independently.`,
    action: `■ Integrated Architecture
User Interface (Slack): /autorequest, /rag-backfill, /ip-find commands
→ AWS Lambda + API Gateway
→ Data Layer: DynamoDB (IP-FLOW-TABLE), RAG Index (S3/DynamoDB)
→ External LLM: Anthropic Claude API

■ Design Decision 1: CQRS — Read/Write Separation
Decision: RAG bot accesses IP-FLOW-TABLE as read-only, writes its results to separate storage.

Reason:
• Guarantee reliability of live automation request system
• Isolate so new bot bugs/failures don't infect core operations flow
• IAM permission separation enforces at infrastructure level

Comparison:
❌ Single table sharing (R/W): Simple but risks affecting operations
✓ Separate table + read-only reference: Operations isolation, IAM enforceable
❌ Complete separation (DynamoDB replication): Highest isolation but excessive sync cost

■ Design Decision 2: Deterministic vs Probabilistic Domain Separation
Decision: Clearly distinguish what code handles vs what LLM judges within same system.

| Task | Processing Method | Reason |
| Manager approval mapping | Code (deterministic) | Authority/governance must not waver |
| DynamoDB transactions | Code (deterministic) | Data integrity |
| Slack channel creation/invite | Code (deterministic) | API call result consistency |
| Automation request categorization | LLM (probabilistic) | Needs natural language understanding |
| Metadata extraction from channel messages | LLM (probabilistic) | Unstructured text interpretation |
| Answer generation for search queries | LLM (probabilistic) | Context synthesis |

Core insight: Good AI systems start from accurately judging "where NOT to use LLM" rather than "where to use LLM."

■ Design Decision 3: Human-in-the-Loop
Decision: LLM-extracted metadata is NOT saved to DB immediately—must go through operator verification modal first.

Reason:
• Mitigate LLM hallucination/misextraction risk
• "Limits of vibe coding": LLM creates drafts, humans make final decisions
• User corrections during verification → System reliability improves gradually

■ Design Decision 4: Progressive Metadata Enrichment
Decision: Fields user doesn't input at registration are auto-extracted by LLM or enriched asynchronously later.

Example:
• User inputs in modal: Title, Team
• LLM auto-extracts: Category, one-line summary, estimated tools used
• Auto-calculated over time: Lead time, message count, activity level

■ Design Decision 5: Idempotency and Defensive Error Handling
Decision: Apply nested try-catch structure so new feature additions don't block existing operations flow.

Principle: "Channel ID recording is auxiliary function, channel creation/invite/welcome message is core function" — express this priority in code structure.

■ Troubleshooting Records

Issue 1. Collaboration channel ID wasn't being saved to DynamoDB
Symptom: After Slack channel creation in approve_2nd branch, channel ID was only used as variable, not recorded to DB. Channel exists in Slack but system couldn't track "which request went to which channel."
Impact: RAG bot later can't know which channels to index; operations-wise, entire Request → Channel → Resolution flow is broken.
Solution: Added DynamoDB UpdateCommand to approve_2nd branch to record channel ID/name/creation time together.
Learning: "Thinking to accumulate data now for future features." Not just making current bot work, but pre-designing who will use that data and how.

Issue 2. DynamoDB is schemaless — attributes don't auto-add just by deploying code
Symptom: Added projectChannelId save code to approve_2nd, but existing items in DynamoDB don't automatically get that attribute.
Cause: DynamoDB is schemaless unlike RDB. No column definitions; attributes are dynamically added only to that item at the moment UpdateCommand executes.
Solution: New requests: Auto-recorded after deployment (solved). Existing requests (3 live collaboration channels): Manual backfill + /rag-backfill LLM extraction tool
Learning: Experienced RDB vs NoSQL difference in operations situation, not theory. "Just add new column and done" isn't it—"how to fill existing data" is the bigger problem.

Issue 3. Collaboration channels started via informal DM — metadata itself doesn't exist
Symptom: Some existing collaboration channels weren't through official request bot but started via direct DM requests, so no item exists in DynamoDB for that request. Just the channel floating in Slack.
Problem essence: RAG bot needs "what automation case is this channel" metadata to search/answer, but manually filling in old memories is inefficient and inaccurate.
Solution (designed): Implement /rag-backfill slash command in new RAG Lambda.
Flow: User enters /rag-backfill in legacy collaboration channel → Lambda fetches last 100 messages via conversations.history API → Asks Claude "extract metadata as JSON from these messages" → Shows extracted results in user verification modal (pre-filled) → User reviews/edits/approves → DynamoDB PUT

Issue 4. How to create new RAG bot without modifying live automation bot
Symptom: RAG bot needs to know "which channels are automation collaboration channels" but massively modifying live automation bot code is risky.
Solution (designed): Keep operations bot and RAG bot as physically separate Lambda functions. Shared data (IP-FLOW-TABLE) is referenced read-only, RAG bot results go to separate storage. Minimal modification to operations bot code (one line to save channel ID).
Architecture principle: "New features don't break core operations" as first design principle.

Issue 5. Google Workspace / external tool link handling scope
Symptom: Collaboration channel messages frequently share links to Google Drive, Sheets, Notion, GitHub, etc. Need to decide how far RAG bot should index these materials.
Decision: MVP limited to "Slack messages + external link catalog." External document integration deferred to future expansion phase.
Design philosophy: "Perfectionism of indexing all external documents at once is the enemy of MVP. Deciding what NOT to do is also part of system design."

■ Tech Stack

Automation Request Bot (Live):
• Interface: Slack Block Kit (Interactive Modals)
• Logic: AWS Lambda (Node.js, ESM)
• Data: Amazon DynamoDB (NoSQL)
• API: Slack Web API
• Infra: API Gateway, IAM, CloudWatch Logs

RAG Knowledge Bot (Implementing):
• Interface: Slack Slash Commands, Block Kit Modals
• Logic: AWS Lambda (Node.js)
• Data (reference): DynamoDB IP-FLOW-TABLE (read-only)
• Data (own): DynamoDB separate items / S3
• LLM: Anthropic Claude API
• Message source: Slack conversations.history API
• (Future) Vector DB: OpenSearch Serverless / pgvector candidates

■ Intentionally NOT Adopted at This Stage
| Not Adopted | Reason |
| Embedding-based vector search | At initial data scale (3 channels), Claude context window is sufficient. Plan gradual introduction as data grows in operations phase. |
| LangChain / LangGraph | At RAG MVP level, direct implementation is clearer with lighter dependencies. Will consider when entering Agent stage. |
| OAuth-based external document integration | Planned for phased expansion after confirming permission model and re-indexing strategy. |`,
    results: `■ Quantitative Results
• Automation request bot live (3 collaboration channels created)
• Absorbed informal requests (email/DM) into standardized workflow infrastructure
• Full automation of 1st approval (manager) → 2nd review (IP team) → auto channel creation process

Note: Operations period isn't long so absolute count is low, but the core value is establishing governance infrastructure that formalizes informal requests, not the count itself.

■ Qualitative Learnings
• Experienced NoSQL schemaless characteristics in operations situation (Issue 2)
• Design thinking to extend new features without touching operations system (Issue 4)
• Patterns for compensating LLM limitations with system structure — Human-in-the-Loop, Deterministic/Probabilistic separation (Issue 3, Design Decision 2)
• "Deciding what NOT to do is core to MVP" (Issue 5)

■ Future Expansion Plan
[Phase 1] MVP (Current)
  └ RAG bot simple search (direct Claude context window use)
    /ip-find command for comprehensive channel message answers

[Phase 2] Embedding-based Search
  └ Per-message embedding + vector search
    OpenSearch Serverless or pgvector introduction
    Improved search accuracy and speed

[Phase 3] External Tool Integration
  └ Google Workspace, Notion, GitHub content indexing
    OAuth-based permission-aware search

[Phase 4] Agent Evolution
  └ Decision-type queries like "recommend solution for this automation case"
    Recommend suitable tools (Zapier/GAS/Lambda) + estimate effort
    LangGraph-based multi-step reasoning`,
    detailImageUrls: ['/project3-1.png', '/project3-2.png', '/project3-3.png'],
    keywords: ['AWS Lambda', 'DynamoDB', 'Slack Bot', 'Claude API', 'RAG', 'CQRS', 'Human-in-the-Loop', 'Governance'],
  },
];

const WORK_EXPERIENCE_KO: Project[] = [
  {
    id: 1,
    year: '2025.10 – 2026.07',
    category: '전사 AX 전환 · 교육',
    title: '직방 전사 AX 전환 프로젝트',
    description: '전사 구성원 82% 수료 달성. Zapier·GAS 트랙 직접 강의, AI 만화 콘텐츠로 초기 관심 견인.',
    imageUrl: '/project1-webtoon.png',
    situation: `직방 전사 구성원 대부분이 AI와 자동화를 "개발자의 영역"으로 인식하고 있었습니다. 진짜 장벽은 기술적 복잡성이 아니라 심리적 거리였습니다. 비개발자들은 "나도 이걸 자동화할 수 있다"는 경험을 한 번도 해본 적이 없어 도입이 거의 불가능한 상황이었습니다.`,
    task: `기술 스킬이 아닌 심리적 장벽을 주요 타깃으로 하는 교육 프로그램을 기획·운영해야 했습니다. 목표는 어떤 도구를 가르치기 전에 비개발자들이 "나도 할 수 있다"고 느끼게 만드는 것이었습니다.`,
    action: `[역할: 기획 파트너 + 트랙 강사 + 콘텐츠 제작]

■ 4단계 로드맵 설계 철학
학습자의 장벽을 기술적 복잡도가 아닌 심리적 거리로 정의했습니다. 각 단계의 한계가 다음 단계의 동기가 되도록 설계:

1단계. Zapier → "코드 없이도 자동화가 된다"는 첫 성공 경험
  └ 한계: 복잡한 분기가 어려움
2단계. Slack 자동화 → 매일 쓰는 도구의 새로운 면 발견
  └ 한계: 외부 데이터 연동 제한
3단계. GAS → 익숙한 구글 환경에서 코드를 처음 만남
  └ 한계: 자연어 처리 불가
4단계. Claude → "비정형 데이터도 자동화할 수 있다"
  └ 자생적 활용 단계로 연결

■ 핵심 의사결정: 왜 Python이 아닌 Zapier에서 시작?
→ 첫 성공 경험이 학습의 모든 것을 결정합니다.
→ Python부터 시작했다면 비개발 직군 대부분이 첫 주에 이탈했을 것.

■ 핵심 의사결정: 왜 Claude(LLM)를 마지막에?
→ LLM의 진짜 가치를 알아보려면 이전 단계의 한계를 먼저 경험해야 합니다.
→ "정형 데이터 처리에는 한계가 있다"를 체득한 후에야 "비정형 텍스트를 다룬다"는 LLM의 진가를 이해할 수 있습니다.

■ 생성형 AI 만화 콘텐츠 제작
핵심 키워드: "공감". 신규 기술 도입에서 가장 큰 저항은 심리적 두려움이었습니다.
생성형 AI로 업무 중 가장 흔한 상황을 담은 만화 콘텐츠 제작 → "나도 그렇지!" 반응 유도 → 초기 관심 견인.
→ 콘텐츠 자체로 "AI는 이런 걸 만들 수 있다"를 증명.

■ 실무 ↔ 교안 순환 구조
[비개발 팀의 실제 페인포인트] → [자동화 도구로 해결]
→ [해당 사례를 교안에 반영] → [다른 팀에서도 유사 사례 발굴]
→ [자발적 도입] = 자생적 AX 환경 조성

일반 교육과의 결정적 차이: "이런 도구가 있어요"가 아니라 "옆 팀의 이 문제를 이렇게 풀었어요".`,
    results: `■ 정량적 성과
• 전사 구성원 82% 수료율 달성 (측정 인프라로 검증)
• 다수 구성원의 실무 자동화 역량 확보
• 비개발 직군의 자발적 자동화 사례 발생

■ 정성적 성과
• "AI가 막연했는데 실무에 적용할 용기가 생겼다" — 피드백
• 구성원 스스로 업무 파이프라인을 점검·개선하는 자생적 AX 문화 조성
• "AI/자동화는 개발자의 것"이라는 사내 인식 전환

■ 이 프로젝트에서 배운 것
• AI 도입의 진짜 병목은 모델의 성능이 아니라 기존 실무자의 심리적 장벽
• 도구별로 언제 적합하고 언제 부족한지에 대한 실전 판단 기준 체득 (도구별 한계 매트릭스)
• 같은 기술도 듣는 사람의 직군·맥락에 따라 다르게 설명되어야 함 = "기술 번역가" 역할

■ 확장 효과
이 프로젝트에서 형성된 사내 신뢰가 ADS팀 자동화 의뢰, 나아가 사내 봇 시스템으로 이어졌습니다.`,
    detailImageUrls: ['/project1-comic-email.png', '/project1-comic-files.png', '/project1-comic-collab.png', '/project1-comic-sales.png'],
    keywords: ['AX 전환', '교육 설계', 'Zapier', 'Google Apps Script', '변화 관리', '기술 번역가'],
  },
  {
    id: 2,
    year: '2026.02 – 2026.07',
    category: '데이터 파이프라인 · 자동화',
    title: 'ADS팀 거래처 데이터 자동화',
    description: 'Notion API + GAS로 거래처별 자동 분류. 휴먼 에러 0%, 추출 시간 10초.',
    imageUrl: 'https://picsum.photos/seed/ads/800/600?grayscale',
    situation: `ADS팀(분양광고팀)은 노션 DB의 광고사·거래처 데이터를 관리하고 있었습니다. 거래처별 현황 공유를 위해 매번 수동으로 조건을 필터링한 후, 복사·붙여넣기로 개별 시트에 옮기고 있었습니다.

■ 식별된 문제 3가지
1. 휴먼에러(비효율적 수동 작업): 필터링·복사·분류에 매번 상당한 운영 리소스 소요
2. 데이터 정합성 이슈: 수동 이관 과정의 휴먼 에러로 광고 집행 지표 신뢰도 저하
3. 리포팅 지연: 거래처별 맞춤 데이터 추출에 시간이 걸려 실시간 최적화 불가`,
    task: `■ 표면 요청 vs 진짜 문제
첫 요청: "데이터를 자동으로 옮겨주세요"
인터뷰 후: "거래처별 분류와 정합성 유지가 매번 부담"

→ 표면 요청만 들어줬다면 단순 동기화 스크립트로 끝났을 것.
→ 진짜 문제를 찾았기에 거래처별 자동 분류 + 에러 핸들링 + 로그 시스템까지 설계했습니다.`,
    action: `■ 도구 선택: 왜 Zapier가 아닌 GAS인가?
AX 사내 교육에서 배운 Zapier로는 해결할 수 없는 영역이었습니다.

ADS팀 요구사항:
• 거래처별 시트 자동 분류
• 조건부 필터링
• 에러 추적

Zapier 검토:
❌ No-code 분기 한계
❌ 동적 시트 생성 불가
✓ 단순 1:1 동기화만 가능

GAS 검토:
✓ 완전한 로직 제어
✓ 동적 시트 생성
✓ 에러 핸들링 자유

→ 최종 선택: GAS + Notion API 직접 연동
→ "거래처별 시트로 자동 분류"라는 요구는 Zapier의 No-code 분기로는 해결할 수 없는 영역. GAS 채택의 명확한 근거.

■ 스케줄링 전략: Pull vs Push
선택: 정해진 스케줄(GAS Trigger)로 동기화하는 Pull 방식

이유:
• Notion API의 Webhook 안정성·제한 고려
• GAS Trigger의 신뢰성과 디버깅 용이성
• ADS팀이 "실시간"보다 "정확한 최신"을 더 중요시함 (분 단위 지연 허용)

■ 에러 핸들링: 로그를 시트에 함께 기록
더 중요한 결정은 로그를 시트에 함께 기록한 것이었습니다.

일반적 접근: 로그를 GAS Logger.log에 기록
채택한 접근: 로그 시트를 별도로 만들어 ADS팀이 직접 확인 가능

→ ADS팀(비개발 직군)이 "왜 안 됐는지"를 스스로 확인할 수 있게 만든 결정 = 지속 가능하고 인계 가능한 시스템

■ 시스템 아키텍처
Notion DB (원본) → GAS Trigger (스케줄 기반 Pull)
→ GAS 파이프라인 [API 호출 → 전처리/분류 → 에러 핸들링 → 로그 기록]
→ Google Sheets [거래처 A 시트, 거래처 B 시트, 전체 데이터 시트, 로그 시트(운영자 확인용)]
→ ADS팀 (결과만 확인)`,
    results: `■ Before → After

| 지표 | Before | After |
| 추출 소요 시간 | 거래처별 수동 처리 | 10초 내외 |
| 휴먼 에러 | 수동 작업으로 종종 발생 | 0% |
| 최신 데이터 반영 | 수동 업데이트 시점 의존 | 실시간 (스케줄 기반) |
| ADS팀 운영 리소스 | 반복 작업에 시간 소진 | 광고 전략 분석 등 고부가가치 업무로 전환 |

■ 정성적 성과
• 데이터 신뢰도 회복: 광고 집행 의사결정의 근거 지표 정합성 확보
• ADS팀의 자생적 활용: ADS팀이 직접 GAS 코드 일부를 수정·확장할 수 있도록 주석·문서화 (시트 기반 운영 가이드 포함)

■ 비개발 직군 협업에서 체득한 원칙

1. 표면 요청 ≠ 진짜 문제
비개발 직군은 자신의 워크플로우를 기술적 해결을 위한 개발 언어로 번역해 본 경험이 적습니다.
→ 개발 지식 + 소통 능력을 가진 사람이 인터뷰로 끌어내야 했습니다.

2. "인계 가능한" 시스템 만들기
비개발 직군과의 협업에서 가장 중요한 건 "내가 떠나도 이 시스템이 살아남는가"입니다.
• 주석을 코드 옆이 아닌 시트에: ADS팀은 GAS 코드보다 시트가 익숙
• 에러 메시지를 사람의 언어로: "401 Unauthorized"가 아니라 "노션 연결 토큰이 만료되었어요. [재설정 가이드 링크]"
• 수정 가능한 영역 명시: "이 셀의 값만 바꿔도 거래처 추가 가능"

3. 자동화 시스템이 살아남는 건 정교한 코드가 아니라 "운영자가 이해할 수 있는 인터페이스"
→ 이후 사내 봇 프로젝트에서 모달의 가독성, 에러 메시지의 인간 언어화, DB 필드의 자기 설명력 같은 모든 결정의 기준이 되었습니다.

■ 확장 효과
이 프로젝트와 같은 자동화 의뢰가 사내에서 누적되며 비공식 채널의 한계가 드러났습니다.
→ 이 문제 인식이 다음 프로젝트인 사내 자동화 봇 + RAG 시스템으로 이어졌습니다.`,
    detailImageUrls: [],
    keywords: ['Notion API', 'Google Apps Script', '데이터 파이프라인', '비개발 직군 협업', '인터뷰 기반', '인계 가능한 시스템'],
  },
  {
    id: 3,
    year: '2026.03 – 현재',
    category: '사내 시스템 · LLM',
    title: '사내 자동화 요청 봇 + RAG 봇',
    description: 'Slack 봇으로 워크플로우 표준화, Claude API 기반 RAG로 지식 자산화.',
    imageUrl: '/project3-1.png',
    situation: `■ 기존 문제 진단

1. 자동화 요청 거버넌스 부재
   부서장 승인 없이 실무자에게 직접 요청이 가고 있어, 팀-팀원 간 우선순위 조율이 불가능했습니다.

2. 히스토리 휘발성
   DM으로 처리된 요청은 검색되지 않고, 담당자가 바뀌면 그대로 사라졌습니다.

3. 데이터 자산화의 실패
   "어떤 업무가 자동화되어야 하는가"라는 가장 중요한 질문에 답할 데이터가 없었습니다.`,
    task: `■ 같은 데이터 인프라 위의 두 봇

| 시스템 | 역할 | 상태 |
| 자동화 요청 봇 | 요청·승인·채널 생성 운영 파이프라인 | 실 운영 중 |
| RAG 지식 봇 | 축적된 협업 데이터 기반 사내 지식 검색 | 설계 완료, 구현 진행 중 |

설계 목표: 운영 시스템과 신규 AI 기능이 독립적으로 진화할 수 있는 구조.`,
    action: `■ 통합 아키텍처
사용자 인터페이스 (Slack): /autorequest, /rag-backfill, /ip-find 명령어
→ AWS Lambda + API Gateway
→ 데이터 계층: DynamoDB (IP-FLOW-TABLE), RAG 인덱스 (S3/DynamoDB)
→ 외부 LLM: Anthropic Claude API

■ 설계 결정 1: CQRS — 읽기/쓰기 분리
결정: RAG 봇은 IP-FLOW-TABLE에 읽기 전용으로만 접근, 자기 결과는 별도 저장소에 기록.

이유:
• 운영 중인 자동화 요청 시스템의 신뢰성 보장
• 신규 봇의 버그·실패가 핵심 운영 흐름에 전염되지 않도록 격리
• IAM 권한 분리로 인프라 레벨에서 강제

비교:
❌ 단일 테이블 공유 (R/W): 단순하지만 운영 시스템 영향 위험
✓ 별도 테이블 + 읽기 전용 참조: 운영 격리, IAM 강제 가능
❌ 완전 분리 (DynamoDB 복제): 최고 격리지만 동기화 비용 과다

■ 설계 결정 2: 결정론(Deterministic) vs 확률론(Probabilistic) 영역 분리
결정: 같은 시스템 안에서 코드로 처리할 영역과 LLM이 판단할 영역을 명확히 구분.

| 작업 | 처리 방식 | 이유 |
| 부서장 승인 매핑 | 코드 (결정론) | 권한·거버넌스는 흔들리면 안 됨 |
| DynamoDB 트랜잭션 | 코드 (결정론) | 데이터 무결성 |
| Slack 채널 생성·초대 | 코드 (결정론) | API 호출 결과의 일관성 |
| 자동화 요청 카테고리 분류 | LLM (확률론) | 자연어 의미 이해 필요 |
| 채널 메시지에서 메타데이터 추출 | LLM (확률론) | 비정형 텍스트 해석 |
| 검색 질문에 대한 답변 생성 | LLM (확률론) | 컨텍스트 종합 |

핵심 인사이트: 좋은 AI 시스템은 "LLM을 어디에 쓸 것인가"보다 "어디에 쓰지 않을 것인가"를 정확히 판단하는 데서 출발합니다.

■ 설계 결정 3: Human-in-the-Loop
결정: LLM이 추출한 메타데이터는 DB에 즉시 저장하지 않고, 반드시 운영자의 검증 모달을 거친 후 저장.

이유:
• LLM의 환각·오추출 위험 완화
• "바이브 코딩의 한계": LLM은 초안을 만들고, 최종적으로 사람이 결정
• 검증 과정에서 사용자가 잘못된 추출을 수정 → 시스템 신뢰도 점진적 향상

■ 설계 결정 4: 점진적 메타데이터 보강 (Progressive Enrichment)
결정: 등록 시점에 사용자가 입력하지 않은 필드는 LLM이 자동 추출하거나, 나중에 비동기로 보강.

예시:
• 사용자가 모달에서 입력: 제목, 팀
• LLM이 자동 추출: 카테고리, 한 줄 요약, 사용 도구 추정
• 시간 경과 후 자동 계산: 리드타임, 메시지 수, 활성도

■ 설계 결정 5: 멱등성과 방어적 에러 처리
결정: 신규 기능 추가가 기존 운영 흐름을 막지 않도록 중첩 try-catch 구조 적용.

원칙: "채널 ID 기록은 부가 기능, 채널 생성·초대·환영 메시지는 핵심 기능"이라는 우선순위를 코드 구조로 표현.

■ 트러블슈팅 기록

Issue 1. 협업 채널 ID가 DynamoDB에 저장되지 않고 있었음
증상: approve_2nd 분기에서 Slack 채널 생성 후, 채널 ID를 변수로만 사용하고 DB에는 기록하지 않고 있었음. 채널은 슬랙에 존재하지만, 시스템이 "어떤 요청이 어떤 채널로 갔는지" 추적 불가.
영향: RAG 봇이 나중에 어떤 채널을 인덱싱해야 할지 알 방법 없음; 운영 관점에서 요청→채널→해결의 전체 흐름 단절.
해결: approve_2nd 분기에 DynamoDB UpdateCommand 추가, 채널 ID·채널명·생성 시각을 함께 기록.
배운 점: "미래의 기능을 위해 지금부터 데이터를 쌓아두는 사고"의 중요성. 현재 봇만 동작하면 되는 게 아니라, 향후 그 데이터를 누가 어떻게 쓸 것인가를 미리 설계해야 함.

Issue 2. DynamoDB는 스키마리스 — 코드 배포만으로 속성이 추가되지 않음
증상: projectChannelId 저장 코드를 추가했지만, 기존 DynamoDB 항목들에는 해당 속성이 자동으로 추가되지 않음.
원인: DynamoDB는 RDB와 달리 스키마리스 구조. UpdateCommand가 실행되는 순간 그 항목에만 속성이 동적으로 추가됨.
해결: 신규 요청은 코드 배포 후 자동 기록 (해결됨). 기존 요청 (운영 중인 협업 채널 3건)은 수동 백필 + /rag-backfill LLM 자동 추출 도구 병행.
배운 점: RDB와 NoSQL의 차이를 이론이 아니라 운영 상황에서 체득. "새로운 컬럼 추가하면 끝"이 아니라 "기존 데이터를 어떻게 채울 것인가"가 더 중요한 문제.

Issue 3. 비공식 DM 요청으로 시작된 협업 채널 — 메타데이터 자체가 없음
증상: 기존 협업 채널 중 일부는 정식 요청 봇을 거치지 않고 DM으로 직접 요청받아 시작된 건이라, DynamoDB에 해당 요청 항목 자체가 존재하지 않음. 채널만 슬랙에 떠 있는 상태.
문제의 본질: RAG 봇이 검색·답변하려면 "이 채널은 어떤 자동화 건인가"라는 메타데이터가 필요한데, 옛 기억을 수기로 채워넣는 건 비효율적이고 부정확.
해결책 (설계): /rag-backfill 슬래시 커맨드를 신규 RAG Lambda에 구현.
흐름: 레거시 채널에서 /rag-backfill 입력 → Lambda가 메시지 100개 fetch → Claude에게 "메타데이터를 JSON으로 추출해줘" 요청 → 추출된 결과를 검증 모달로 표시 → 사용자 검토·수정·승인 → DynamoDB PUT
설계 포인트: "수동 입력" 대신 "LLM 보조 + 사람 검증"의 협업 패턴. 미래의 레거시 케이스에도 재사용 가능.

Issue 4. 운영 중인 자동화 봇을 수정하지 않고 신규 RAG 봇을 만들 방법
증상: RAG 봇 동작에 필요한 정보가 있지만 운영 봇 코드를 대규모로 수정하는 건 리스크가 큼.
해결책 (설계): 운영 봇과 RAG 봇을 물리적으로 분리된 Lambda 함수로 두고, 공유 데이터는 읽기 전용으로만 참조, RAG 봇 결과는 별도 저장소에 기록. 운영 봇 코드는 최소 수정(채널 ID 저장 한 줄 추가)만 적용.
아키텍처 원칙: "부가 기능 때문에 핵심 운영이 망가지지 않는 것"을 시스템 설계의 첫 번째 원칙으로.

Issue 5. Google Workspace / 외부 도구 링크 처리 범위
증상: 협업 채널 메시지에는 Google Drive·Sheets·Notion·GitHub 등 외부 도구 링크가 자주 공유됨. RAG 봇이 답변할 때 어디까지 인덱싱할 것인지 결정 필요.
결정: MVP는 "슬랙 메시지 + 외부 링크 카탈로그"로 제한. 외부 문서 통합은 향후 확장 단계로 분리.
설계 철학: "모든 외부 문서를 한 번에 인덱싱하는 완벽주의는 MVP의 적. 무엇을 안 할지 정하는 것도 시스템 설계의 일부."

■ 기술 스택

자동화 요청 봇 (운영 중):
• 인터페이스: Slack Block Kit (Interactive Modals)
• 로직: AWS Lambda (Node.js, ESM)
• 데이터: Amazon DynamoDB (NoSQL)
• API: Slack Web API
• 인프라: API Gateway, IAM, CloudWatch Logs

RAG 지식 봇 (구현 진행 중):
• 인터페이스: Slack Slash Commands, Block Kit Modals
• 로직: AWS Lambda (Node.js)
• 데이터 (참조): DynamoDB IP-FLOW-TABLE (읽기 전용)
• 데이터 (자체): DynamoDB 별도 항목 / S3
• LLM: Anthropic Claude API
• 메시지 소스: Slack conversations.history API
• (확장) 벡터 DB: OpenSearch Serverless / pgvector 후보

■ 의도적으로 현재 단계에서 채택하지 않은 것
| 미채택 기술 | 이유 |
| 임베딩 기반 벡터 검색 | 초기 데이터 규모(채널 3건)에서 Claude 컨텍스트 윈도우로 충분. 운영 단계에서 데이터 증가 시 점진 도입. |
| LangChain / LangGraph | RAG MVP 수준에서는 직접 구현이 더 명확하고 의존성이 가벼움. Agent 단계 진입 시 도입 검토. |
| OAuth 기반 외부 문서 통합 | 권한 모델·재인덱싱 전략 확정 후 단계적 확장 예정. |`,
    results: `■ 정량적 성과
• 자동화 요청 봇 실 운영 중 (협업 채널 3건 생성)
• 비정형 요청(이메일·DM)을 표준화된 워크플로우로 흡수하는 인프라 확보
• 1차 승인(부서장) → 2차 검토(IP팀) → 채널 자동 생성의 전 과정 자동화

운영 기간이 길지 않아 절대 건수는 적지만, 건수 자체보다 비정형 요청을 정형화하는 거버넌스 인프라를 확립한 것이 핵심 가치.

■ 정성적 학습
• NoSQL의 스키마리스 특성을 운영 상황에서 체득 (Issue 2)
• 운영 시스템을 건드리지 않고 부가 기능을 확장하는 설계 사고 (Issue 4)
• LLM의 한계를 시스템 구조로 보완하는 패턴 — Human-in-the-Loop, 결정론/확률론 분리 (Issue 3, 설계 결정 2)
• "무엇을 안 할지 정하는 것"이 MVP의 핵심 (Issue 5)

■ 향후 확장 계획
[Phase 1] MVP (현재)
  └ RAG 봇 단순 검색 (Claude 컨텍스트 윈도우 직접 사용)
    /ip-find 명령어로 채널 메시지 종합 답변

[Phase 2] 임베딩 기반 검색
  └ 메시지 단위 임베딩 + 벡터 검색
    OpenSearch Serverless 또는 pgvector 도입
    검색 정확도·속도 향상

[Phase 3] 외부 도구 통합
  └ Google Workspace, Notion, GitHub 본문 인덱싱
    OAuth 기반 권한 인지 검색

[Phase 4] Agent 진화
  └ "이 자동화 건 해결책 추천해줘" 같은 의사결정형 질의
    적합 도구(Zapier/GAS/Lambda) 추천 + 예상 공수 산정
    LangGraph 기반 다단계 추론`,
    detailImageUrls: ['/project3-1.png', '/project3-2.png', '/project3-3.png'],
    keywords: ['AWS Lambda', 'DynamoDB', 'Slack 봇', 'Claude API', 'RAG', 'CQRS', 'Human-in-the-Loop', '거버넌스'],
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
