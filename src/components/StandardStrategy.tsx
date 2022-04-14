import { useFlag, useFlagsStatus } from "@unleash/proxy-client-react";
import { FC } from "react";
import { withLoader } from "../hocs/withLoader";
import { ConditionallyView } from "./ConditionallyView";

const ConditionallyViewWithLoader = withLoader(ConditionallyView)

export const StandardStrategy: FC = () => {
  const condition = useFlag('simple-flag');

  const { flagsReady, flagsError } = useFlagsStatus();

  console.log({condition, flagsReady, flagsError})

  const renderTrue = <button className="btn btn-primary">True</button>;
  const renderFalse = <button className="btn btn-danger">False</button>;



  return (
    <div>
      <p className="h1">Standard Strategy</p>
      <ConditionallyViewWithLoader
				isLoading={!flagsReady}
        condition={condition}
        showForTrue={renderTrue}
        showForFalse={renderFalse}
      />
    </div>
  );
};
