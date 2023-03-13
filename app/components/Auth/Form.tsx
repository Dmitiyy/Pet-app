import { FC } from "react";
import { ScrollView, View } from "react-native";
import { useAppSelector } from "../../store";
import { Indicator } from "../UI/Indicator";
import { ImageAuth } from "./ImageAuth/ImageAuth";
import { Signin } from "./Signin";
import { Login } from "./Login";

export const Form: FC = () => {
  const { step, endStep, isLogin } = useAppSelector(state => state.auth);

  return (
    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false} horizontal={false}>
      <View className="min-h-screen flex justify-center">
        <ImageAuth />
        <Indicator step={step} numberOfSteps={endStep} />
        {
          !isLogin ? <Signin /> : <Login />
        }
      </View>
    </ScrollView>
  )
}