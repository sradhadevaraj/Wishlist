import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStackNavigator from "./Navigation/AppStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./Navigation/DrawerContent";

const Drawer = createDrawerNavigator();
function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="AppStackNavigator" component={AppStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <ProfileDetails />
  );
}

export default App;
