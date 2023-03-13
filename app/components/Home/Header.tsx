import { FC } from "react";
import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { shadow } from "../UI/shadow";

export const Header: FC = () => {
  return (
    <View className="p-[20px] flex justify-between items-center flex-row">
      <Text className="font-[SemiBold] text-[20px]">
        Hello,
        <Text className="text-[#59CE8F]"> John</Text>
      </Text>
      <View
        className="w-[38px] h-[38px] rounded-[7px] bg-white flex justify-center items-center"
        style={shadow}
      >
        < Feather name="search" size={18} color="rgba(0, 0, 0, 0.5)" />
      </View>
    </View >
  )
}