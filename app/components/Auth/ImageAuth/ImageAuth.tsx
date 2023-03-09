import { FC } from "react";
import { View, Image } from "react-native";

export const ImageAuth: FC = () => {
  return (
    <View className="w-[100%] flex items-center">
      <View
        className="w-[260px] h-[260px] rounded-full p-[20px]"
        style={{
          borderColor: '#59CE8F',
          borderStyle: 'dashed',
          borderWidth: 3
        }}
      >
        <View className="w-[100%] h-[100%] bg-[#59CE8F] rounded-full p-[15px]">
          <View className="w-[100%] h-[100%] bg-[#94EABC] rounded-full flex justify-center items-center">
            <Image source={require('./auth.png')} className="scale-[0.75]" />
          </View>
        </View>
      </View>
    </View>
  )
}