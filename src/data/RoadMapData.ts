interface DataType {
   id: number;
   sub_title: string;
   title: string;
   desc: string;
}[];

const road_map_data: DataType[] = [
   {
      id: 1,
      sub_title: "Phase 1",
      title: "Concept & Research",
      desc: "We began with deep research into biometric authentication, payment infrastructure, and regulatory compliance across markets. Our mission: to make identity the foundation of secure financial transactions. Goal: Validate technology and user need for biometric banking.",
   },
   {
      id: 2,
      sub_title: "Phase 2",
      title: "Design & Prototype",
      desc: "The Biotap experience was shaped through UI/UX design, focusing on simplicity, accessibility, and user trust. We developed prototypes for biometric login, instant payments, and AI risk detection systems. Goal: Create a functional MVP for internal testing and validation.",
   },
   {
      id: 3,
      sub_title: "Phase 3",
      title: "Security & Infrastructure",
      desc: "We integrated end-to-end encryption, multi-layer biometric verification, and AI-driven fraud monitoring into Biotap's backend systems. Our infrastructure meets global standards for financial data protection and compliance. Goal: Achieve enterprise-grade security and scalability.",
   },
   {
      id: 4,
      sub_title: "Phase 4",
      title: "Beta Launch & Testing",
      desc: "BioTap enters controlled beta testing with select users and partners. We gather real-world feedback, optimize performance, and refine user experience. This phase includes merchant integration, payment processing validation, and regulatory compliance testing. Goal: Launch public beta with 10,000+ users and 100+ merchant partners.",
   },
   {
      id: 5,
      sub_title: "Phase 5",
      title: "Global Rollout & Expansion",
      desc: "Full-scale launch of BioTap across multiple markets with advanced features including cross-border payments, business accounts, and API integrations. We expand partnerships with major financial institutions worldwide. Goal: Reach 1M+ active users across 25+ countries with $1B+ in processed transactions.",
   },
];

export default road_map_data;