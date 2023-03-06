import { FC, Fragment, useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ImageAuth } from '../components/ImageAuth/ImageAuth';
import { GreenBtn } from '../components/GreenBtn';
import { Label } from '../components/Label';

export const AuthPage: FC = () => {
  const [step, setStep] = useState<number>(1);
  const endStep: number = 3;

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className='p-[20px] flex-1 flex-col justify-center items-center'>
        <ImageAuth />
        {
          step === 1 && (
            <Fragment>
              <Text className='font-[Bold] text-[18px] mt-5'>Pet sitting. Dog walking</Text>
              <Text className='font-[Medium] text-[14px] text-center w-[260px] leading-6 mt-3'>
                Easy and actionable solutions for you. Find the best right now!
              </Text>
            </Fragment>
          )
        }
        <View className='flex flex-row h-[5px] w-[100%] mt-5 gap-x-1'>
          {
            [0, 1, 2].map(item => {
              const color = item < step ? '#59CE8F' : '#C9E8EF';
              return (
                <View
                  key={item} className="h-[5px] rounded-full flex-1"
                  style={{ backgroundColor: color }}
                />
              )
            })
          }
        </View>
        {
          step === 2 && (
            <Fragment>
              <Label title="What are you looking for?" />
            </Fragment>
          )
        }
        {
          step === 1 && (
            <GreenBtn
              title="Start exploring"
              press={() => { setStep(prev => prev + 1) }}
            />
          )
        }
        {
          step >= 2 && (
            <View className="flex justify-between items-center w-[100%] flex-row">
              <TouchableOpacity
                className="flex-1 flex-row-reverse justify-center items-center ml-5 mt-5"
                activeOpacity={0.4}
                onPress={() => { setStep(prev => prev - 1) }}
              >
                <Text className="font-[Bold] text-[#59CE8F] ml-5 text-[14px]">Back</Text>
                <AntDesign name="arrowleft" size={24} color="#59CE8F" />
              </TouchableOpacity>
              <GreenBtn
                title={step === endStep ? "Finish" : "Next"}
                width="[auto]"
                press={() => { setStep(prev => prev + 1) }}
              />
            </View>
          )
        }
        <Text className="mt-3 font-[Medium] text-[14px]">
          Already have an account? <Text className="font-[Bold]">Login</Text>
        </Text>
      </View>
    </ScrollView>
  )
}