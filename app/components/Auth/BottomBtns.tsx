import { FC } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GreenBtn } from "../UI/GreenBtn";

interface IProps {
  disabled: boolean;
  step: number;
  endStep: number;
}

export const BottomBtns: FC<IProps> = ({ step, endStep }) => {
  return (
    <View className="flex justify-between items-center w-[100%] flex-row">
      <TouchableOpacity
        className="w-[48%] flex-row-reverse justify-center items-center mt-5"
        activeOpacity={0.4}
        onPress={() => { /* dispatch(step - 1) */ }}
      >
        <Text className="font-[Bold] text-[#59CE8F] ml-5 text-[14px]">Back</Text>
        <AntDesign name="arrowleft" size={24} color="#59CE8F" />
      </TouchableOpacity>
      <GreenBtn
        title={step === endStep ? "Finish" : "Next"}
        width="[48%]"
        press={() => { /* dispatch(step + 1) */ }}
      />
    </View>
  )
}