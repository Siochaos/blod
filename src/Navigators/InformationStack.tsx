import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Information, Requirements, DonationTypes } from "@screens";
import React from "react";

const Stack = createNativeStackNavigator<InformationStackParamList>();

export const InformationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="DonationRequirements" component={Requirements} />
      <Stack.Screen name="DonationTypes" component={DonationTypes} />
    </Stack.Navigator>
  );
};
