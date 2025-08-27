import { HomeIcon } from "lucide-react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export const Primary = {
  args: {
    children: "Primnary Button",
    variant: "primary",
    disabled: true,
    onClick: () => console.log("Primary Button clicked!"),
    iconPosition: "right",
    size: "sm",
    loader: true,
    icon: <HomeIcon />,
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        // Base
        { name: "dark", value: "#111827" }, // Tailwind gray-900
        { name: "light", value: "#f9fafb" }, // Tailwind gray-50

        // Slate
        { name: "slate-dark", value: "#0f172a" }, // slate-900
        { name: "slate", value: "#1e293b" }, // slate-800
        { name: "slate-light", value: "#64748b" }, // slate-500

        // Stone
        { name: "stone-dark", value: "#1c1917" }, // stone-900
        { name: "stone", value: "#292524" }, // stone-800
        { name: "stone-light", value: "#78716c" }, // stone-500

        // Functional / Brand
        { name: "primary", value: "#2563eb" }, // Blue-600
        { name: "secondary", value: "#9333ea" }, // Purple-600
        { name: "success", value: "#16a34a" }, // Green-600
        { name: "warning", value: "#f59e0b" }, // Amber-500
        { name: "danger", value: "#dc2626" }, // Red-600

        // Neutral / Utility
        { name: "neutral", value: "#f5f5f5" }, // Gray-100
        { name: "muted", value: "#6b7280" }, // Gray-500
        { name: "accent", value: "#06b6d4" }, // Cyan-500
      ],
    },
  },
};

// export const Secondary = () => <Button variant="secondary">Secondary</Button>;

// export const Danger = () => <Button variant="danger">Danger</Button>;

// export const Success = () => <Button variant="success">Success</Button>;

// export const Ghost = () => <Button variant="ghost">Ghost</Button>;
