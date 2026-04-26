/* ============================================================
   EcoGuard · data.js
   All static data used by script.js to render dynamic content
   ============================================================ */

const ZONES = [
  { id: 'ZONE A', pressure: 142, status: 'normal', pct: 71, eng: 'Frimpong H.' },
  { id: 'ZONE B', pressure: 138, status: 'normal', pct: 69, eng: 'Baah R.' },
  { id: 'ZONE C', pressure: 187, status: 'alert',  pct: 94, eng: 'Dzubey J.' },
  { id: 'ZONE D', pressure: 128, status: 'normal', pct: 64, eng: 'Apraku L.' },
  { id: 'ZONE E', pressure: 145, status: 'normal', pct: 73, eng: 'Henry F.' },
  { id: 'ZONE F', pressure: 131, status: 'normal', pct: 66, eng: 'Baah R.' },
];

const TEAM = [
  { role: 'General Overseer',         name: 'Eng. Amoah Anshel',             bio: 'Provides overall leadership and strategic direction, making key decisions and ensuring long-term growth.' },
  { role: 'Assisting CEO',            name: 'Eng. Jennifer S. Yindaanpoka',  bio: 'Supports the CEO in executing company strategies and managing high-level operations.' },
  { role: 'Public Relations Officer', name: 'Eng. Twumasi Christabel',       bio: 'Manages the company\'s public image and communicates with stakeholders.' },
  { role: 'Marketing Specialist',     name: 'Eng. Adu Gyamfi Beatrice',      bio: 'Develops strategies to promote the company\'s products and increase market reach.' },
  { role: 'Advertising Manager',      name: 'Eng. Joachim Dzubey',           bio: 'Manages advertising campaigns and all promotional activities.' },
  { role: 'IT Specialist',            name: 'Eng. Richard Adongo Adiba',     bio: 'Provides technical support and maintains the company\'s IT infrastructure.' },
  { role: 'Project Manager',          name: 'Eng. Agnes Abrefi Ahwiren',     bio: 'Oversees planning, execution, and closure of projects for on-time, on-budget delivery.' },
  { role: 'Assisting Project Manager',name: 'Eng. Adu Deborah Gyamfi',       bio: 'Supports the Project Manager in coordinating activities and timely delivery.' },
  { role: 'Accountant',               name: 'Eng. Egyima Nana Yaa',          bio: 'Manages financial records and ensures compliance with accounting standards.' },
  { role: 'Logistics',                name: 'Eng. Frimpong Henry',           bio: 'Manages logistics operations and ensures efficient supply chain management.' },
  { role: 'Operations Coordinator',   name: 'Eng. Buneraah Martin Anbanbieo',bio: 'Coordinates operational activities across zones, supporting timely project delivery.' },
  { role: 'Human Resources Manager',  name: 'Eng. Richmond Baah',            bio: 'Manages human resources and ensures compliance with employment laws.' },
  { role: 'Customer Service Manager', name: 'Eng. Louisa Anima Apraku',      bio: 'Manages customer inquiries and ensures high-quality service delivery.' },
  { role: 'HSE Officer',              name: 'Eng. Boakye Egyima Nana Yaa',   bio: 'Ensures compliance with health, safety, and environmental regulations.' },
  { role: 'Field Engineer',           name: 'Eng. Chukwuka Oluoma Marian',   bio: 'Specializes in field operations and on-site pipeline monitoring, ensuring rapid response to zone alerts and maintaining equipment integrity.' },
  { role: 'Systems Engineer',         name: 'Eng. Jessica Anaba',            bio: 'Manages system infrastructure and technical operations, ensuring reliable telemetry data flow and maintaining 24/7 system availability.' },
];

const LOGIN_CREDENTIALS = [
  { email: 'amoah.anshel@ecoguard.com', password: 'EcoGuard2024!', name: 'Eng. Amoah Anshel', role: 'General Overseer' },
  { email: 'jennifer.yindaanpoka@ecoguard.com', password: 'EcoFlow2024!', name: 'Eng. Jennifer S. Yindaanpoka', role: 'Assisting CEO' },
  { email: 'twumasi.christabel@ecoguard.com', password: 'EcoPR2024!', name: 'Eng. Twumasi Christabel', role: 'Public Relations Officer' },
  { email: 'adu.beatrice@ecoguard.com', password: 'EcoMarket2024!', name: 'Eng. Adu Gyamfi Beatrice', role: 'Marketing Specialist' },
  { email: 'joachim.dzubey@ecoguard.com', password: 'EcoAds2024!', name: 'Eng. Joachim Dzubey', role: 'Advertising Manager' },
  { email: 'richard.adiba@ecoguard.com', password: 'EcoIT2024!', name: 'Eng. Richard Adongo Adiba', role: 'IT Specialist' },
  { email: 'agnes.ahwiren@ecoguard.com', password: 'EcoPM2024!', name: 'Eng. Agnes Abrefi Ahwiren', role: 'Project Manager' },
  { email: 'adu.deborah@ecoguard.com', password: 'EcoAPM2024!', name: 'Eng. Adu Deborah Gyamfi', role: 'Assisting Project Manager' },
  { email: 'egyima.yaa@ecoguard.com', password: 'EcoFinance2024!', name: 'Eng. Egyima Nana Yaa', role: 'Accountant' },
  { email: 'frimpong.henry@ecoguard.com', password: 'EcoLogistics2024!', name: 'Eng. Frimpong Henry', role: 'Logistics' },
  { email: 'buneraah.martin@ecoguard.com', password: 'EcoOps2024!', name: 'Eng. Buneraah Martin Anbanbieo', role: 'Operations Coordinator' },
  { email: 'richmond.baah@ecoguard.com', password: 'EcoHR2024!', name: 'Eng. Richmond Baah', role: 'Human Resources Manager' },
  { email: 'louisa.apraku@ecoguard.com', password: 'EcoService2024!', name: 'Eng. Louisa Anima Apraku', role: 'Customer Service Manager' },
  { email: 'boakye.yaa@ecoguard.com', password: 'EcoHSE2024!', name: 'Eng. Boakye Egyima Nana Yaa', role: 'HSE Officer' },
  { email: 'chukwuka.marian@ecoguard.com', password: 'EcoField2024!', name: 'Eng. Chukwuka Oluoma Marian', role: 'Field Engineer' },
  { email: 'jessica.anaba@ecoguard.com', password: 'EcoSystems2024!', name: 'Eng. Jessica Anaba', role: 'Systems Engineer' },
];

const COMPANIES = [
  {
    name: 'Tano Energy',
    subtitle: 'Primary Ghana operator',
    color: '#2563eb',
    desc: 'Local operator identity for national pipeline management, field response workflows, and executive reporting.',
    features: ['Command center-ready interface', 'Secure access for pipeline teams'],
  },
  {
    name: 'Volta Flow',
    subtitle: 'West African transport tenant',
    color: '#0ea5e9',
    desc: 'Teal-accented tenant profile built for shared corridor operations and regional fleet management.',
    features: ['Cross-border operational readiness', 'Distinct tenant branding with secure boundaries'],
  },
  {
    name: 'Savannah Pipeworks',
    subtitle: 'Enterprise monitoring brand',
    color: '#1e40af',
    desc: 'Deep blue enterprise theme for advanced analytics, integration-ready reporting, and governance workflows.',
    features: ['Executive and field reporting', 'Structured tenant access control'],
  },
];

const TESTIMONIALS = [
  {
    initials: 'AA',
    quote: '"EcoGuard\'s real-time alerts helped us catch a leak in Zone C within 45 seconds. This system is a game-changer for our operations."',
    name: 'Eng. Amoah Anshel',
    title: 'General Overseer, Tano Energy',
  },
  {
    initials: 'JY',
    quote: '"As a field engineer, having clear zone-specific visibility means I know exactly where to go and what alerts matter. The mobile integration is seamless."',
    name: 'Eng. Jennifer S. Yindaanpoka',
    title: 'Senior Engineer, Volta Flow',
  },
  {
    initials: 'TC',
    quote: '"The multi-tenant security model gives us confidence that our operational data is protected while keeping the interface intuitive for our entire team."',
    name: 'Eng. Twumasi Christabel',
    title: 'Operations Lead, Savannah Pipeworks',
  },
  {
    initials: 'RA',
    quote: '"The automated engineer assignment logic has reduced our response time by 30%. The system just works, and that\'s what we need in critical infrastructure."',
    name: 'Eng. Richard Adongo Adiba',
    title: 'IT Infrastructure Manager',
  },
];
