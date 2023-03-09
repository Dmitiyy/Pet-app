import { FC, useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';

interface IProps {
  data: [string, string];
  handleData: (data: string) => void;
  multiple?: boolean;
}

export const CheckBox: FC<IProps> = ({ data, handleData, multiple = false }) => {
  // const [active, setActive] = useState<number>(data.indexOf(initial));
  const [multipleValue, setMultipleValue] = useState<string[]>([]);

  const onHandleClick = (index: number, item: string) => {
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
              onPress={() => { onHandleClick(index, item) }}
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