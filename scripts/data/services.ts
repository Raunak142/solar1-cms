export interface Service {
  title: string;
  description?: string;
  iconName: string;
}

export const services: Service[] = [
  {
    title: "Residential Solar Systems",
    iconName: "Sun",
  },
  {
    title: "Rooftop Solar Installation",
    iconName: "Grid3X3",
  },
  {
    title: "On-Grid & Off-Grid Systems",
    iconName: "Zap",
  },
  {
    title: "Solar with Battery Backup",
    iconName: "Battery",
  },
  {
    title: "Maintenance & AMC",
    iconName: "Settings",
  },
  {
    title: "Government Subsidy Support",
    iconName: "FileCheck",
  },
];
