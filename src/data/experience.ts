import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'dkfz-phd',
    company: 'University of Heidelberg & German Cancer Research Center (DKFZ)',
    location: 'Heidelberg, Germany',
    role: 'PhD Student — Privacy-Preserving Medical AI',
    period: 'May 2023 – Present',
    bullets: [
      'Discovered that 18–40% of patients exhibit high memorization risk in rare disease data by auditing foundation model fine-tuning across ViT, ResNet50, MAE, and MedSAM on 5 different medical imaging datasets.',
      'Demonstrated patient privacy leakage in LLMs fine-tuned on radiology reports through federated training, including tokenizer-driven privacy risks and compliance-aware mitigation strategies (Magna Cum Laude Award, RSNA Chicago 2024).',
      'Pioneered novel 3D with 2D adversarial medical image reconstruction on federated learning in medical imaging, exposing critical client-side security failures (published at MICCAI 2024 Morocco).',
      'Architected a compliance-aware federated learning framework with adaptive differential privacy that adjusts noise based on client compliance, achieving up to 15% accuracy improvement over traditional FL.',
    ],
  },
  {
    id: 'dkfz-scientist',
    company: 'German Cancer Research Center (DKFZ)',
    location: 'Heidelberg, Germany',
    role: 'Scientist — Federated Learning & Secure Computation',
    period: 'Aug 2020 – Feb 2023',
    bullets: [
      'Architected the Trusted Federated Data Analytics (TFDA) platform with CISPA Helmholtz Center, enabling secure multi-institutional ML workflows.',
      'Co-developed the Federated Tumor Segmentation Challenge (FeTS 2022) platform powered by TFDA, with University of Pennsylvania and Intel, attracting submissions from 50+ countries.',
      'Contributor to Kaapana, an open-source medical imaging toolkit deployed in 36+ university clinics across Germany and the USA.',
      'Supervised and mentored Master students on thesis research in cloud vulnerabilities and monitoring.',
    ],
  },
  {
    id: 'softgarden',
    company: 'Softgarden',
    location: 'Berlin, Germany',
    role: 'Data Scientist',
    period: 'Aug 2019 – Jul 2020',
    bullets: [
      'Deployed end-to-end salary prediction and job-matching models for a recruiting platform, scaling from pilot to production in under 2 months.',
      'Served as the primary technical liaison to C-level stakeholders, driving alignment on AI-powered recruiting features.',
    ],
  },
  {
    id: 'kaspersky',
    company: 'Kaspersky Lab R&D',
    location: 'Dublin, Ireland',
    role: 'Data Scientist (R&D)',
    period: 'Feb 2019 – Jun 2019',
    bullets: [
      'Developed lateral movement detection algorithms using neural networks, improving cybersecurity threat identification within enterprise networks.',
    ],
  },
  {
    id: 'fiserv',
    company: 'Fiserv',
    location: 'Dublin, Ireland',
    role: 'Data Scientist (R&D)',
    period: 'Mar 2018 – Dec 2018',
    bullets: [
      'Served on the internal investigation team following a malware attack, leveraging AI-driven analysis to identify root cause and support remediation efforts.',
      'Developed a deep-learning-based credit/debit card fraud detection system on large-scale banking transaction datasets.',
    ],
  },
  {
    id: 'tcs',
    company: 'Tata Consultancy Services',
    location: 'Cochin, India',
    role: 'Big Data Developer — Client: Hewlett-Packard',
    period: 'Oct 2014 – Dec 2016',
    bullets: [
      'Improved Hadoop job performance by 11% by optimizing HBase/Hive caching logic and data partitioning strategies for terabyte-scale datasets.',
      'Managed a 4-member team in an agile environment, delivering data pipeline solutions on AWS infrastructure.',
    ],
  },
];
