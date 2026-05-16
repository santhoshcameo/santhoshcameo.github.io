import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'dkfz-phd',
    company: 'University of Heidelberg & German Cancer Research Center (DKFZ)',
    location: 'Heidelberg, Germany',
    role: 'PhD Student — Medical AI & Agentic Systems (Prof. Klaus Maier-Hein Lab)',
    period: 'May 2023 – Present',
    bullets: [
      'Developed and validated foundation model fine-tuning workflows (Mistral, Qwen, LLaMA via LoRA/QLoRA) and agentic AI systems as production-ready services for clinical environments, with rigorous LLM benchmarking ensuring compliance and reliability for end users.',
      'Designed and deployed an agentic GraphRAG system combining a Neo4j knowledge graph with ChromaDB semantic search, BM25 retrieval, and cross-encoder re-ranking; LangChain query router dynamically blends graph traversal with vector retrieval, enabling traceable, relationship-aware retrieval over structured clinical data with Qwen synthesizing grounded, source-attributable responses.',
      'Built a V1 agentic early warning system for inpatient deterioration, streaming MIMIC-IV EHR data (vitals, labs, clinical notes) via a FastAPI service; orchestrated multi-step tool-using agents with OpenClaw and the Claude API for risk synthesis and autonomous Telegram alerting, demonstrating production-ready agentic architecture with monitoring and traceability for privacy-sensitive clinical environments.',
      'Designed ontology-aligned knowledge graph retrieval systems combining Neo4j, RDF-based semantic modelling, and GraphRAG hybrid retrieval approaches for structured clinical data access via LLM-optimised API layers.',
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
