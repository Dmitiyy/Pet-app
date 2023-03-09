import { FC, useState } from "react";
import { ScrollView, TextInput, View, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useAppSelector } from "../../store";
import { Indicator } from "../UI/Indicator";
import { Label } from "../UI/Label";
import { ImageAuth } from "./ImageAuth/ImageAuth";
import { CheckBox } from "../UI/CheckBox";

export const Form: FC = () => {
  const { step, endStep, character } = useAppSelector(state => state.auth);
  const inputStyles = 'w-[100%] h-[45px] bg-[#E0F6FB] pl-[13px] pr-[13px] font-[Medium] text-[13px] rounded-[10px] mt-3';
  const [avatarName, setAvatarName] = useState<string>('');

  const findName = (initial: string): string => {
    const index = initial.split('').reverse().join('').indexOf('/');
    return initial.slice(index * -1);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      setAvatarName(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
      <ImageAuth />
      <Indicator step={step} numberOfSteps={endStep} />
      <Label title="Name" compulsory />
      <TextInput
        className={inputStyles}
        placeholder="Enter your name"
      />
      <Label title="Email" compulsory />
      <TextInput
        className={inputStyles}
        placeholder="Enter your email"
      />
      <Label title="Password" compulsory />
      <TextInput
        className={inputStyles}
        placeholder="Come up with a password"
      />
      <Label title="Would you like to add an avatar?" />
      <Pressable onPress={pickImage}>
        <TextInput
          className={inputStyles}
          style={{
            borderColor: '#000',
            borderStyle: 'dashed',
            borderWidth: 1
          }}
          editable={false}
          value={findName(avatarName)}
          placeholder="Press to add a photo"
        />
      </Pressable>
      <Label title="Age" compulsory />
      <TextInput
        className={inputStyles}
        keyboardType="numeric"
        placeholder="Enter your age"
      />
      <Label title="Phone number" compulsory />
      <TextInput
        className={inputStyles}
        placeholder="Example: +380111111111"
      />
      <Label title="Hourly and daily rate" compulsory />
      <View className="flex justify-between flex-row">
        <TextInput
          className={inputStyles + " w-[48%]"}
          placeholder="Hourly ($)"
          keyboardType="numeric"
        />
        <TextInput
          className={inputStyles + " w-[48%]"}
          placeholder="Daily ($)"
          keyboardType="numeric"
        />
      </View>
      <Label title="Services" compulsory />
      <CheckBox
        data={['Pet sitting', 'Dog walking']}
        handleData={(str) => { console.log(str) }}
        multiple
      />
    </ScrollView>
  )
}