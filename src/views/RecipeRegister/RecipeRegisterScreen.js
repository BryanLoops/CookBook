import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import IngredientRegisterViewModel from '../../viewModels/IngredientViewModel/IngredientRegisterViewModel';
import UUIDGenerator from 'react-native-uuid-generator';

const IngredientRegisterScreen = ({navigation}) => {
    // id, name, ingredients, instructions, tips
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [tips, setTips] = useState('');

  const handleRegister = async () => {
    const uuid = await UUIDGenerator.getRandomUUID();
    const viewModel = new IngredientRegisterViewModel();
    viewModel.saveIngredient( uuid, name, ingredients, instructions, tips );
    setName('');
    setIngredients([]);
    setInstructions([]);
    setTips('');
  };

  return (
    <View>
      <TextInput
        placeholder="Ingredient Name"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Register"
        onPress={ handleRegister}
      />
      <Button
        title="Go to Ingredient Search"
        onPress={() => navigation.navigate('IngredientList')}
      />
    </View>
  );
};

export default IngredientRegisterScreen;
