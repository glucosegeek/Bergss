import { type SVGProps } from "react";
import { 
  Building2, 
  Rocket, 
  LineChart, 
  Users, 
  Bot,
  Brain
} from 'lucide-react';

const logos = [
  { name: "AI Solutions", id: 1, img: (props: SVGProps<SVGSVGElement>) => <Bot {...props} /> },
  { name: "Tech Innovators", id: 2, img: (props: SVGProps<SVGSVGElement>) => <Brain {...props} /> },
  { name: "Growth Corp", id: 3, img: (props: SVGProps<SVGSVGElement>) => <Building2 {...props} /> },
  { name: "Launch Pad", id: 4, img: (props: SVGProps<SVGSVGElement>) => <Rocket {...props} /> },
  { name: "Data Metrics", id: 5, img: (props: SVGProps<SVGSVGElement>) => <LineChart {...props} /> },
  { name: "Team Force", id: 6, img: (props: SVGProps<SVGSVGElement>) => <Users {...props} /> }
];

export { logos as allLogos };