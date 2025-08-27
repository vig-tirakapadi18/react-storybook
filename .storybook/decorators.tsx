import { Decorator } from "@storybook/react-vite";

export const withPaddingAndBgLightBlue: Decorator = (Story: any) => {
  return (
    <div className="p-12 bg-blue-500 rounded-lg">
      <Story />
    </div>
  );
};
