import { useFlag, useFlagsStatus, useUnleashContext, useVariant } from "@unleash/proxy-client-react";
import { FC, useEffect } from "react";
import { withLoader } from "../hocs/withLoader";
import { ConditionallyView } from "./ConditionallyView";

const ConditionallyViewWithLoader = withLoader(ConditionallyView)

export const RolloutStrategy: FC = () => {

  const condition = useFlag('rollout-flag')
 
  const { flagsReady, flagsError } = useFlagsStatus();

  const variant = useVariant('rollout-flag')

  const updateContext = useUnleashContext()

  console.log({condition, flagsReady, flagsError, variant})

  const renderTrue = <button className="btn btn-primary">{variant?.payload?.value || 'default'}</button>;
  const renderFalse = <button className="btn btn-danger">False</button>;

  useEffect(() => {
    updateContext({userId: '1'})
  }, [])

  return (
    <div>
      <p className="h1">Rollout Strategy</p>
      <ConditionallyViewWithLoader
				isLoading={!flagsReady}
        condition={condition}
        showForTrue={renderTrue}
        showForFalse={renderFalse}
      />
    </div>
  );
};
