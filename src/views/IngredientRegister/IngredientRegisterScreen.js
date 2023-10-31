import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import IngredientRegisterViewModel from '../../viewModels/IngredientViewModel/IngredientRegisterViewModel';
import UUIDGenerator from 'react-native-uuid-generator';

const IngredientRegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const handleRegister = async () => {
    const uuid = await UUIDGenerator.getRandomUUID();
    const viewModel = new IngredientRegisterViewModel();
    viewModel.saveIngredient( uuid, name);
    setName('');
  };

  const handleDelete = async () => {
    const viewModel = new IngredientRegisterViewModel();
    viewModel.deleteAll();
  }

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
        title="Delete All"
        onPress={ handleDelete }
      />
      <Button
        title="Go to Ingredient Search"
        onPress={() => navigation.navigate('IngredientList')}
      />
    </View>
  );
};

export default IngredientRegisterScreen;
