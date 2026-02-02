export interface Benefit {
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export const benefits: Benefit[] = [
  {
    title: "Lower Electricity Bills",
    description: "Save up to 70–90% on monthly bills for the next 25+ years",
    iconName: "Wallet",
    color: "bg-green-500",
  },
  {
    title: "Reliable Power Every Day",
    description: "No interruptions for work, study, or appliances",
    iconName: "Zap",
    color: "bg-amber-500",
  },
  {
    title: "Affordable & EMI Options",
    description: "Designed for middle-class budgets with subsidy support",
    iconName: "IndianRupee",
    color: "bg-blue-500",
  },
  {
    title: "Zero Maintenance Stress",
    description: "Installation, monitoring, and support handled by SolarX",
    iconName: "Wrench",
    color: "bg-purple-500",
  },
  {
    title: "Higher Home Value",
    description: "A modern, future-ready solar-powered home",
    iconName: "Home",
    color: "bg-teal-500",
  },
  {
    title: "Better Future for Your Family",
    description: "Save money while protecting the environment",
    iconName: "Leaf",
    color: "bg-emerald-500",
  },
];
