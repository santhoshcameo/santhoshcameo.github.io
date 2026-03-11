import { Award } from '@/types';

export const awards: Award[] = [
  // Awards
  {
    id: 'rsna-award',
    title: 'RSNA 2024 Magna Cum Laude Award',
    description:
      'Patient Privacy Leaks in LLMs After Federated Training on Medical Reports — awarded at RSNA Chicago 2024.',
    year: '2024',
    icon: 'FaTrophy',
    category: 'award',
  },
  {
    id: 'ireland-ai-finalist',
    title: 'Ireland AI Student of the Year — Finalist',
    description: 'Award Finalist at the AI Awards, 2018.',
    year: '2018',
    icon: 'FaAward',
    category: 'award',
  },
  {
    id: 'ireland-datasci-finalist',
    title: 'Ireland Data Scientist Student of the Year — Finalist',
    description: 'Award Finalist at the DatSci Awards, 2018.',
    year: '2018',
    icon: 'FaAward',
    category: 'award',
  },

  // Invited Talks, Conferences & Presentations
  {
    id: 'rsna-talk',
    title: 'RSNA Chicago',
    description: 'Presentation at the Radiological Society of North America annual meeting.',
    year: '2024',
    icon: 'FaMicrophone',
    category: 'talk',
  },
  {
    id: 'miccai-talk',
    title: 'MICCAI — Marrakesh, Morocco',
    description:
      'Presentation at the International Conference on Medical Image Computing and Computer Assisted Intervention.',
    year: '2024',
    icon: 'FaMicrophone',
    category: 'talk',
  },
  {
    id: 'pet-summit',
    title: 'Privacy-Enhancing Technology Summit — Zurich',
    description: 'Invited speaker at the 2nd Privacy-Enhancing Technology Summit, Zurich, Switzerland.',
    year: '2022',
    icon: 'FaMicrophone',
    category: 'talk',
  },
  {
    id: 'ml-dl-day',
    title: 'Machine Learning & Deep Learning Day — Dublin',
    description: 'Speaker at Machine Learning and Deep Learning Day in Dublin.',
    year: '2020',
    icon: 'FaMicrophone',
    category: 'talk',
  },
  {
    id: 'ml-summit',
    title: 'World Machine Learning Summit — Dublin',
    description: 'Speaker at the World Machine Learning Summit, Dublin.',
    year: '2019',
    icon: 'FaMicrophone',
    category: 'talk',
  },
  {
    id: 'ai-awards-talk',
    title: 'AI Awards — Ireland',
    description: 'Presentation at the AI Awards, Ireland.',
    year: '2018',
    icon: 'FaMicrophone',
    category: 'talk',
  },
  {
    id: 'aws-sme',
    title: 'AWS ML Specialty Exam — SME Workshop, Austin TX',
    description:
      'Subject matter expert (SME) for the AWS Certified Machine Learning Specialty examination item development workshop.',
    year: '2018',
    icon: 'FaChalkboardTeacher',
    category: 'talk',
  },

  // Certifications
  {
    id: 'course-mentor',
    title: 'Course Mentor — University of Texas',
    description:
      'Part-time Course Mentor for the AI & ML Postgraduate Diploma at the University of Texas.',
    icon: 'FaChalkboardTeacher',
    category: 'certification',
  },
  {
    id: 'stanford-cert',
    title: 'Stanford University — Machine Learning',
    description: 'Machine Learning certification from Stanford University.',
    icon: 'FaCertificate',
    category: 'certification',
  },
  {
    id: 'cloudera-cert',
    title: 'Cloudera Certified Developer for Hadoop (CCDH)',
    description: 'Certified developer for Apache Hadoop ecosystem.',
    icon: 'FaCertificate',
    category: 'certification',
  },
  {
    id: 'aws-cert',
    title: 'AWS Certified Cloud Developer — Associate',
    description: 'Amazon Web Services Cloud Developer Associate certification.',
    icon: 'FaCertificate',
    category: 'certification',
  },
];
