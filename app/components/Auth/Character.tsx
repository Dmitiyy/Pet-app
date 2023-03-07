import { FC, Fragment } from "react";
import { CheckBox } from "../UI/CheckBox";
import { Indicator } from "../UI/Indicator";
import { Label } from "../UI/Label";
import { BottomBtns } from "./BottomBtns";

export const Character: FC = () => {
  return (
    <Fragment>
      <Indicator step={2} numberOfSteps={3} />
      <Label title="What are you looking for?" />
      <CheckBox data={['Jobs', 'Pet sitters']} />
      <BottomBtns step={2} endStep={3} disabled={false} />
    </Fragment>
  )
}