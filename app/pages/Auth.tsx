import { FC, Fragment } from 'react';
import { Text, View } from 'react-native';
import { ImageAuth } from '../components/Auth/ImageAuth/ImageAuth';
import { GreenBtn } from '../components/UI/GreenBtn';
import { Indicator } from '../components/UI/Indicator';
import { Character } from '../components/Auth/Character';
import { useAppDispatch, useAppSelector } from '../store';
import { setStep } from '../store/slices/auth';
import { Form } from '../components/Auth/Form';

export const AuthPage: FC = () => {
  const step = useAppSelector(state => state.auth.step);
  const dispatch = useAppDispatch();

  return (
    <View className='p-[20px] flex-1 flex-col justify-center items-center'>
      {(
        () => {
          switch (step) {
            case 1:
              return (
                <Fragment>
                  <ImageAuth />
                  <Text className='font-[Bold] text-[18px] mt-5'>Pet sitting. Dog walking</Text>
                  <Text className='font-[Medium] text-[14px] text-center w-[260px] leading-6 mt-3'>
                    Easy and actionable solutions for you. Find the best right now!
                  </Text>
                  <Indicator step={step} numberOfSteps={3} />
                  <GreenBtn
                    title="Start exploring"
                    press={() => { dispatch(setStep(step + 1)) }}
                  />
                  <Text className="mt-3 font-[Medium] text-[14px]">
                    Already have an account? <Text className="font-[Bold]">Login</Text>
                  </Text>
                </Fragment>
              );
            case 2:
              return <Character />;
            case 3:
              return <Form />
            default:
              return null;
          }
        }
      )()}
    </View>
  )
}