import RNFS from 'react-native-fs';

class IngredientListViewModel {
  loadIngredients = async () => {
    try {
      const path = RNFS.DownloadDirectoryPath + '/items.json';
      if (await RNFS.exists(path)) {
        const fileContent = await RNFS.readFile(path);
        console.log(JSON.parse(fileContent));
        return JSON.parse(fileContent);
      }
      return [];
    } catch (error) {
      console.error('Error loading items:', error);
      return [];
    }
  };
}

export default IngredientListViewModel;
