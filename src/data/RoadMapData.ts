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
];

export default road_map_data;