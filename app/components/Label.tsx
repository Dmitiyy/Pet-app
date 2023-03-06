import { FC } from "react";
import { Text } from "react-native";

interface IProps {
  title: string;
  compulsory?: boolean;
}

export const Label: FC<IProps> = ({ title, compulsory = false }) => {
  return (
    <Text className='font-[Bold] text-[14px] mt-5 w-[100%]'>
      {title}
      {
        compulsory && (
          <Text className="font-[Bold] text-[#FF1E00] text-[20px]"> *</Text>
        )
      }
    </Text>
  )
}