import { FC } from "react";
import { View } from 'react-native';

interface IProps {
  step: number;
  numberOfSteps: number;
}

export const Indicator: FC<IProps> = ({ step, numberOfSteps }) => {
  return (
    <View className='flex flex-row h-[5px] w-[100%] mt-5 gap-x-1'>
      {
        new Array(numberOfSteps).fill(1).map((item, index) => {
          const color = index < step ? '#59CE8F' : '#C9E8EF';
          return (
            <View
              key={item + index} className="h-[5px] rounded-full flex-1"
              style={{ backgroundColor: color }}
            />
          )
        })
      }
    </View>
  )
}