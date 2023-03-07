import { FC } from "react";
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface IProps {
  title: string;
  press?: () => void;
  width?: string;
}

export const GreenBtn: FC<IProps> = ({ title, press, width = '[100%]' }) => {
  return (
    <TouchableOpacity
      className={`w-${width} h-[45px] bg-[#59CE8F] bg-btn rounded-[10px] justify-center items-center mt-5 overflow-hidden drop-shadow-xl`}
      activeOpacity={0.4}
      onPress={() => { press ? press() : null }}
      disabled={false}
    >
      <ImageBackground
        resizeMode="cover" source={require('../../../assets/images/btn-color.png')}
        className="w-[100%] h-[100%] flex-1 items-center justify-center flex-row"
      >
        <Text className="font-[Bold] text-white mr-5 text-[14px]">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </ImageBackground>
    </TouchableOpacity>
  )
}