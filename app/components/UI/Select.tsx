import { FC, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

interface IProps {
  multiple?: boolean;
  data: string[];
}

export const Select: FC<IProps> = ({ multiple = false, data }) => {
  const [active, setActive] = useState<number>(0);

  return (
    <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
      <FlatList
        className='w-[100%] flex-1 p-[13px] bg-[#E0F6FB] rounded-[10px] mt-2 max-h-[120px]'
        data={data}
        nestedScrollEnabled
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {
              setActive(index);
            }}>
              <View className='flex flex-row justify-between mb-[18px]'>
                <Text>{item}</Text>
                <View
                  className="w-[20px] h-[20px] rounded-full border-[#90E3E9] ml-3"
                  style={{
                    backgroundColor: active === index ? "#90E3E9" : "transparent",
                    borderWidth: active === index ? 4 : 3
                  }}
                >
                  <FontAwesome
                    name="check" size={13}
                    color={active === index ? "black" : "transparent"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item, index) => (item + index).toString()}
      />
    </ScrollView>
  )
}