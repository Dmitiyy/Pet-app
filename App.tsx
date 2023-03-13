import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StatusBar as StatusBarRN } from 'react-native';
import { SafeAreaView } from 'react-native';
import {
  useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { AuthPage } from './app/pages/Auth';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Authorized } from './app/pages/Authorized';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Regular': Montserrat_400Regular, // font-[Regular]
    'Medium': Montserrat_500Medium, // font-[Medium]
    'SemiBold': Montserrat_600SemiBold, // font-[SemiBold]
    'Bold': Montserrat_700Bold // font-[Bold]
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBarRN.currentHeight || 0 }}>
        <NavigationContainer theme={{
          ...DefaultTheme, colors: { ...DefaultTheme.colors, background: '#fff' }
        }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthPage} />
            <Stack.Screen name="Authorized" component={Authorized} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}