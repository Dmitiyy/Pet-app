import { FC, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const Select: FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
      <FlatList
        className='w-[100%] flex-1 p-[13px] bg-[#E0F6FB] rounded-[10px] mt-2 max-h-[120px]'
        data={[0, 1, 2, 3, 4, 5]}
        nestedScrollEnabled
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {
              setActive(index);
            }}>
              <View className='flex flex-row justify-between mb-[13px]'>
                <Text>United States (+1)</Text>
                <View
                  className="w-[20px] h-[20px] rounded-full border-4 border-[#90E3E9] ml-3"
                  style={{
                    backgroundColor: active === index ? "#90E3E9" : "transparent",
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
        keyExtractor={item => item.toString()}
      />
    </ScrollView>
  )
}