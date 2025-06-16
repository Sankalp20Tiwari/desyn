import { FeatureItem, StatItem, ValueItem } from "@/types/type";
import { Code, Globe, Layers, Palette, Shield, Target, Users, Zap } from "lucide-react";

 export const stats: StatItem[] = [
    { number: "50K+", label: "Active Designers", icon: Users, color: "from-blue-500 to-cyan-400", delay: 0 },
    { number: "1M+", label: "Projects Created", icon: Target, color: "from-purple-500 to-pink-400", delay: 0.1 },
    { number: "99.9%", label: "Uptime", icon: Zap, color: "from-orange-500 to-yellow-400", delay: 0.2 },
    { number: "150+", label: "Countries", icon: Globe, color: "from-green-500 to-emerald-400", delay: 0.3 }
  ];


 export const values: ValueItem[] = [
    {

      image: '/design-thinking.png',
      title: "Design-First Approach",
      description: "Every pixel matters. We obsess over the details that make great design possible, creating experiences that users fall in love with.",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "from-red-500/40 to-pink-500/40",
      iconColor: "text-red-400",
      delay: 0
    },
    {

      image: '/good-feedback.png',
      title: "Lightning Performance",
      description: "Built for speed and scale. No lag, no waiting - just pure creative flow that keeps up with your imagination.",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "from-blue-500/40 to-cyan-500/40",
      iconColor: "text-blue-400",
      delay: 0.1
    },
    {
      image: '/collaboration.png',
      title: "Seamless Collaboration",
      description: "Design is a team sport. We make working together feel effortless with real-time sync and intuitive sharing.",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "from-purple-500/40 to-violet-500/40",
      iconColor: "text-purple-400",
      delay: 0.2
    },
    {
      image: '/technology.png',
      title: "AI-Powered Innovation",
      description: "Always pushing boundaries with cutting-edge AI tools that don't exist anywhere else in the market.",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "from-emerald-500/40 to-teal-500/40",
      iconColor: "text-emerald-400",
      delay: 0.3
    }
  ];



export const features: FeatureItem[] = [
    { icon: Layers, text: "Advanced Layer System" },
    { icon: Palette, text: "Smart Color Palettes" },
    { icon: Code, text: "Code Generation" },
    { icon: Shield, text: "Enterprise Security" }
  ];

