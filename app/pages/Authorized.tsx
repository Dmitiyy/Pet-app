import { FC } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { Home } from "./Home";
import { Messages } from "./Messages";
import { Profile } from "./Profile";

const Tab = createBottomTabNavigator();

export const Authorized: FC = () => {
  return (
    <Tab.Navigator screenOptions={
      ({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: 55 },
        tabBarShowLabel: false,
        tabBarIcon({ focused }) {
          const color: string = focused ? "#59CE8F" : "#212121";

          switch (route.name) {
            case 'Home':
              return (
                <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
                  <Path
                    d="M9.74695 1.06093C10.7595 0.206639 12.2405 0.206639 13.2531 1.06093L21.4093 7.94183C22.0217 8.45841 22.375 9.21874 22.375 10.0199V21.8651C22.375 23.0329 21.4283 23.9797 20.2604 23.9797H16.6354C15.4676 23.9797 14.5208 23.0329 14.5208 21.8651V15.8234C14.5208 15.3229 14.1151 14.9172 13.6146 14.9172H9.38542C8.88491 14.9172 8.47917 15.3229 8.47917 15.8234V21.8651C8.47917 23.0329 7.53244 23.9797 6.36458 23.9797H2.73958C1.57173 23.9797 0.625 23.0329 0.625 21.8651V10.0199C0.625 9.21874 0.978329 8.45841 1.59065 7.94183L9.74695 1.06093Z"
                    fill={color}
                  />
                </Svg>
              );
            case 'Messages':
              return (
                <Svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                  <Path
                    d="M24.75 9.684V18.8438C24.75 20.7934 23.2239 22.3866 21.3012 22.4943L21.0937 22.5H5.90625C3.95659 22.5 2.36334 20.9739 2.25578 19.0512L2.25 18.8438V9.684L13.1085 15.3725C13.3537 15.5008 13.6462 15.5008 13.8915 15.3725L24.75 9.684ZM5.90625 4.5H21.0937C22.989 4.5 24.5476 5.94215 24.7318 7.78899L13.5 13.6725L2.26821 7.78899C2.44559 6.01055 3.89736 4.60738 5.6971 4.50588L5.90625 4.5Z"
                    fill={color}
                  />
                </Svg>
              );
            case 'Profile':
              return (
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M17.7543 13.9997C18.9963 13.9997 20.0032 15.0065 20.0032 16.2486V17.167C20.0032 17.7404 19.8239 18.2994 19.4906 18.7659C17.9447 20.9292 15.4204 22.0008 12.0001 22.0008C8.57915 22.0008 6.05619 20.9287 4.51403 18.7643C4.18207 18.2984 4.00366 17.7406 4.00366 17.1685V16.2486C4.00366 15.0065 5.01052 13.9997 6.25254 13.9997H17.7543ZM12.0001 2.00439C14.7615 2.00439 17.0001 4.24297 17.0001 7.00439C17.0001 9.76582 14.7615 12.0044 12.0001 12.0044C9.2387 12.0044 7.00012 9.76582 7.00012 7.00439C7.00012 4.24297 9.2387 2.00439 12.0001 2.00439Z"
                    fill={color}
                  />
                </Svg>
              )
          }
        }
      })
    }>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}