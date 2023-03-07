import { FC, Fragment, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ImageAuth } from '../components/Auth/ImageAuth/ImageAuth';
import { GreenBtn } from '../components/UI/GreenBtn';
import { Indicator } from '../components/UI/Indicator';
import { Character } from '../components/Auth/Character';

export const AuthPage: FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className='p-[20px] flex-1 flex-col justify-center items-center'>
        <ImageAuth />
        {(
          () => {
            switch (step) {
              case 1:
                return (
                  <Fragment>
                    <Text className='font-[Bold] text-[18px] mt-5'>Pet sitting. Dog walking</Text>
                    <Text className='font-[Medium] text-[14px] text-center w-[260px] leading-6 mt-3'>
                      Easy and actionable solutions for you. Find the best right now!
                    </Text>
                    <Indicator step={step} numberOfSteps={3} />
                    <GreenBtn
                      title="Start exploring"
                      press={() => { setStep(prev => prev + 1) }}
                    />
                    <Text className="mt-3 font-[Medium] text-[14px]">
                      Already have an account? <Text className="font-[Bold]">Login</Text>
                    </Text>
                  </Fragment>
                );
              case 2:
                return <Character />;
              default:
                return null;
            }
          }
        )()}
      </View>
    </ScrollView>
  )
}