import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./screens/Dashboard";
import Done from "./screens/Done";
import SplashScreen from "./screens/SplashScreen";
import Transaction from "./screens/Transaction";

const App = () => {

  const stack = createStackNavigator();

  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false , animation: 'reveal_from_bottom'}} >
        <stack.Screen component={SplashScreen} name="Splash"/>
        <stack.Screen component={Dashboard} name="Dashboard"/>
        <stack.Screen component={Transaction} name="Transaction"/>
        <stack.Screen component={Done} name="Done"/>
      </stack.Navigator>
    </NavigationContainer>
  )

}

export default App;