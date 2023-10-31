import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, StyleSheet, Text } from 'react-native';
import IngredientListViewModel from '../../viewModels/IngredientViewModel/IngredientListViewModel';
import IngredientRegisterViewModel from '../../viewModels/IngredientViewModel/IngredientRegisterViewModel';
import RemoveButton from '../../components/RemoveButton';

const IngredientListScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]);

  //useEffect(() => {
  //  loadIngredients();
  //}, []);

  const loadIngredients = async () => {
    const viewModel = new IngredientListViewModel();
    const loadedIngredients = await viewModel.loadIngredients();
    setIngredients(loadedIngredients);
  };

  const handleDelete = async (id) => {
    const viewModel = new IngredientRegisterViewModel();
    await viewModel.deleteIngredient(id);

    setIngredients(prevIngredients => prevIngredients.filter(item => item.id !== id));
  };

  return (
    <View>
      <Button
        title="Go to Ingredient Register"
        onPress={() => navigation.navigate('IngredientRegister')}
      />
      <Button title="Search" onPress={loadIngredients} />
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.ingredientContainer}>
            <Text>Name: {item.name}</Text>
            <RemoveButton onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default IngredientListScreen;

const styles = StyleSheet.create({
  ingredientContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 8,
    justifyContent: 'space-between',
    width: 300,
    borderColor: 'black',
    borderRadius: 16,
    borderWidth: 2,
    alignSelf: 'center',
  },
});
