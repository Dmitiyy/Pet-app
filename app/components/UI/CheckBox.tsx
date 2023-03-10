import { FC, useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface IProps {
  data: [string, string];
  handleData: (data: string) => void;
  multiple?: boolean;
}

export const CheckBox: FC<IProps> = ({ data, handleData, multiple = false }) => {
  const [multipleValue, setMultipleValue] = useState<string[]>([]);

  const onHandleClick = (item: string) => {
    let result: string[] = [...multipleValue];

    if (multiple) {
      if (!result.includes(item)) result.push(item);
      else result = result.filter(elem => elem !== item);
    } else {
      result = [item];
    }

    setMultipleValue(result);
    handleData(result.join(', '));
  }

  return (
    <View className="flex w-[100%] justify-between mt-3 flex-row">
      {
        data.map((item, index) => {
          const isActive = multipleValue.includes(item);
          return (
            <TouchableOpacity
              key={item + index}
              className="w-[48%] h-[45px] rounded-[10px] flex flex-row items-center"
              style={{ backgroundColor: isActive ? "#94EABC" : "#E0F6FB" }}
              activeOpacity={0.4}
              onPress={() => { onHandleClick(item) }}
            >
              <View
                className="w-[20px] h-[20px] rounded-full border-4 border-[#C9E8EF] ml-3"
                style={{ backgroundColor: (isActive && !multiple) ? "#000" : "#C9E8EF" }}
              >
                <FontAwesome
                  name="check" size={13}
                  color={(isActive && multiple) ? "black" : "transparent"}
                />
              </View>
              <Text className="ml-2 font-[SemiBold] text-[13px]">{item}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}