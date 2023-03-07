import { FC, useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';

export const CheckBox: FC<{ data: [string, string] }> = ({ data }) => {
  const [active, setActive] = useState<number>(2);

  return (
    <View className="flex w-[100%] justify-between mt-5 flex-row">
      {
        data.map((item, index) => {
          const isActive = active === index;
          return (
            <TouchableOpacity
              key={item + index}
              className="w-[48%] h-[45px] rounded-[10px] flex flex-row items-center"
              style={{ backgroundColor: isActive ? "#94EABC" : "#E0F6FB" }}
              activeOpacity={0.4}
              onPress={() => { setActive(index) }}
            >
              <View
                className="w-[20px] h-[20px] rounded-full border-4 border-[#C9E8EF] ml-3"
                style={{ backgroundColor: isActive ? "#000" : "#C9E8EF" }}
              />
              <Text className="ml-2 font-[SemiBold] text-[13px]">{item}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}