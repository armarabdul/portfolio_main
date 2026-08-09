import { Publication } from "@/types/research";

export const publications: Publication[] = [
  {
    id: "blockchain-enabled-decentralized-data-marketplace",
    slug: "blockchain-enabled-decentralized-data-marketplace",
    title:
      "Blockchain-Enabled Decentralized Data Marketplace for Secure Machine Learning Dataset Sharing",
    authors: ["Abdul Muqeet Armar"],
    type: "conference",
    status: "under-review",
    featured: true,
    abstract:
      "This research proposes a blockchain-enabled decentralized data marketplace designed for secure machine learning dataset sharing. The system leverages Ethereum smart contracts for transparent and immutable transactions, IPFS for decentralized storage, and MetaMask for wallet-based authentication. The marketplace enables data providers to list, rent, and sell ML datasets while ensuring data provenance, security, and fair compensation through smart contract automation.",
    keywords: [
      "Blockchain",
      "Decentralized Marketplace",
      "Machine Learning",
      "Dataset Sharing",
      "Smart Contracts",
      "Ethereum",
      "IPFS",
      "Data Ownership",
      "Secure Data Sharing",
    ],
    researchAreas: [
      "Blockchain",
      "Machine Learning Dataset Sharing",
      "Decentralized Data Marketplaces",
      "Smart Contracts",
      "Ethereum",
      "IPFS",
      "Data Ownership",
      "Secure Data Sharing",
    ],
    technologies: [
      "Next.js",
      "Django",
      "Django REST Framework",
      "Ethereum",
      "Solidity",
      "Hardhat",
      "Sepolia Test Network",
      "IPFS",
      "Pinata",
      "MetaMask",
      "VS Code Extension",
    ],
    pdfUrl: undefined, // Placeholder — add PDF when available
    doiUrl: undefined, // Placeholder — add DOI when published
    externalUrl: undefined, // Placeholder
  },
  {
    id: "adversarial-prompting-llm",
    slug: "adversarial-prompting-llm",
    title:
      "Adversarial Prompting and Jailbreak Attacks in Large Language Models: Detection and Mitigation Strategies",
    authors: ["Abdul Muqeet Armar"],
    type: "conference",
    status: "under-review",
    featured: true,
    abstract:
      "This research investigates adversarial prompting and jailbreak attacks targeting large language models (LLMs). It explores detection mechanisms and mitigation strategies to enhance the safety and reliability of LLM-based systems. The study examines prompt injection techniques, evaluates existing defense mechanisms, and proposes strategies for improving AI safety in production deployments.",
    keywords: [
      "Large Language Models",
      "Adversarial Prompting",
      "Jailbreak Attacks",
      "Prompt Injection",
      "LLM Security",
      "AI Safety",
    ],
    researchAreas: [
      "AI Safety",
      "LLM Security",
      "Adversarial Machine Learning",
      "Prompt Engineering",
      "Natural Language Processing",
    ],
    technologies: [
      "Python",
      "LLMs",
      "NLP",
      "Machine Learning",
    ],
    pdfUrl: undefined, // Placeholder
    doiUrl: undefined, // Placeholder
    externalUrl: undefined, // Placeholder
  },
];
