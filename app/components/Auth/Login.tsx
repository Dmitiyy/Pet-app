import { FC } from 'react';
import { TextInput, View } from 'react-native';
import { useAppSelector } from '../../store';
import { Indicator } from '../UI/Indicator';
import { Label } from '../UI/Label';
import { BottomBtns } from './BottomBtns';
import { ImageAuth } from './ImageAuth/ImageAuth';

export const Login: FC = () => {
  const { step, endStep } = useAppSelector(state => state.auth);
  const inputStyles = 'w-[100%] h-[45px] bg-[#E0F6FB] pl-[13px] pr-[13px] font-[Medium] text-[13px] rounded-[10px] mt-3';

  return (
    <View>
      <Label title='Email' compulsory />
      <TextInput
        className={inputStyles}
        placeholder="Enter your email"
      />
      <Label title='Password' compulsory />
      <TextInput
        className={inputStyles}
        placeholder="********"
      />
      <BottomBtns disabled={false} start />
    </View>
  )
}