
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IngredientRegisterScreen from './src/views/IngredientRegister/IngredientRegisterScreen';
import IngredientListScreen from './src/views/IngredientList/IngredientListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IngredientRegister" component={IngredientRegisterScreen} />
        <Stack.Screen name="IngredientList" component={IngredientListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
