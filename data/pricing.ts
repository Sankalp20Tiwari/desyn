import { Crown, Infinity, Zap } from "lucide-react";

export const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for individuals and small teams getting started",
      features: [
        "Up to 3 projects",
        "Real-time collaboration",
        "Basic drawing tools",
        "Comment system",
        "Export to PNG/SVG"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false,
      icon: Zap
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "For growing teams who need advanced features",
      features: [
        "Unlimited projects",
        "Advanced drawing tools",
        "Video chat integration",
        "Version history",
        "Premium templates",
        "Priority support"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
      icon: Crown
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Pro",
        "SSO integration",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee"
      ],
      color: "from-orange-500 to-red-500",
      popular: false,
      icon: Infinity
    }
  ];