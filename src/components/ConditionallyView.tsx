import { FC } from "react";

interface ConditionallyViewProps {
  condition: boolean;
  showForTrue: React.ReactNode;
  showForFalse?: React.ReactNode;
}

export const ConditionallyView: FC<ConditionallyViewProps> = ({
  condition,
  showForTrue,
  showForFalse,
}) => {
  if (condition) return <>{showForTrue}</>;
  return <>{showForFalse}</>;
};
