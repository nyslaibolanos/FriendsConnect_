import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebaseInit.js';
import HomeStack from './components/HomeStack';
import SettingsPage from './components/SettingsPage';
import "react-native-reanimated";
import ProfileScreen from './components/ProfileScreen.js';
import SignInOutPScreen from './components/SignInOutPScreen.js';

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

/**
 * App component - The main component that sets up the navigation structure.
 * @returns JSX.Element
 */
export default function App() {
  // State variables for managing authentication state
  const [signedInUser, authLoading, authError] = useAuthState(auth);
  const initialRouteName = signedInUser && signedInUser.emailVerified ? "Profile" : "SignInOut";

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={initialRouteName} // Set the initial route to SignIn
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'HomeStack': iconName = focused ? 'home' : 'home-outline'; break;
              case 'Profile': iconName = focused ? 'flower' : 'flower-outline'; break;
              case 'SettingsPage': iconName = focused ? 'settings' : 'settings'; break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: true,
          tabBarInactiveTintColor: '#ffb2c2',
          tabBarStyle: {
            backgroundColor: '#fff6d4',
            height: 95,
            borderTopWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
        })}
      >
      {signedInUser&& signedInUser.emailVerified ? (
      <>
        <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false, tabBarLabel: 'Home' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, tabBarLabel: 'Profile' }} />
        <Tab.Screen name="SettingsPage" component={SettingsPage} options={{ headerShown: false, tabBarLabel: 'Settings' }} />
        </>
        ) : (
          <Tab.Screen name="SignInOut" component={SignInOutPScreen} options={{ headerShown: false, tabBarLabel: 'Profile' }} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
