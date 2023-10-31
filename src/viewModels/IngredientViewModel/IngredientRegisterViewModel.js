import IngredientModel from '../../models/IngredientModel/IngredientModel';
import RNFS from 'react-native-fs';

class IngredientRegisterViewModel {

  saveIngredient = async ( id, name ) => {
    const newIngredient = new IngredientModel( id, name );
    const path = RNFS.DownloadDirectoryPath + '/items.json';

    try {
      let ingredients = [];

      if (await RNFS.exists(path)) {
        const fileContent = await RNFS.readFile(path);
        ingredients = JSON.parse(fileContent);
      }

      ingredients.push(newIngredient);
      await RNFS.writeFile(path, JSON.stringify(ingredients));
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  deleteIngredient = async (id) => {
    const path = RNFS.DownloadDirectoryPath + '/items.json';

    try {
      let ingredients = [];

      if (await RNFS.exists(path)) {
        const fileContent = await RNFS.readFile(path);
        ingredients = JSON.parse(fileContent);
      }

      ingredients = ingredients.filter((item) => item.id !== id);
      console.log(ingredients);
      await RNFS.writeFile(path, JSON.stringify(ingredients));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };
}

export default IngredientRegisterViewModel;
