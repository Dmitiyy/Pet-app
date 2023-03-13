import { FC, Fragment, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCharacter as setCharacterSlice } from "../../store/slices/auth";
import { CheckBox } from "../UI/CheckBox";
import { Indicator } from "../UI/Indicator";
import { Label } from "../UI/Label";
import { BottomBtns } from "./BottomBtns";
import { ImageAuth } from "./ImageAuth/ImageAuth";

export const Character: FC = () => {
  const { step, endStep, character } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleData = useCallback((data: string) => {
    dispatch(setCharacterSlice(data));
  }, []);

  return (
    <Fragment>
      <ImageAuth />
      <Indicator step={step} numberOfSteps={endStep} />
      <Label title="What are you looking for?" />
      <CheckBox
        handleData={handleData}
        data={['Jobs', 'Pet sitters']}
        initial={character.split(', ')}
      />
      <BottomBtns disabled={character.length === 0} />
    </Fragment>
  )
} 