import { FC, useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GreenBtn } from "../UI/GreenBtn";
import { useAppDispatch, useAppSelector } from "../../store";
import { setStep } from "../../store/slices/auth";

interface IProps {
  disabled: boolean;
}

export const BottomBtns: FC<IProps> = ({ disabled }) => {
  const { step, endStep } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const isEnd: boolean = step === endStep;

  return (
    <View className="flex justify-between items-center w-[100%] flex-row">
      <TouchableOpacity
        className="w-[48%] flex-row-reverse justify-center items-center mt-5"
        activeOpacity={0.4}
        onPress={() => { dispatch(setStep(step - 1)) }}
      >
        <Text className="font-[Bold] text-[#59CE8F] ml-5 text-[14px]">Back</Text>
        <AntDesign name="arrowleft" size={24} color="#59CE8F" />
      </TouchableOpacity>
      <GreenBtn
        title={isEnd ? "Finish" : "Next"}
        width="[48%]"
        press={() => {
          if (!isEnd && !disabled) dispatch(setStep(step + 1));
        }}
      />
    </View>
  )
}