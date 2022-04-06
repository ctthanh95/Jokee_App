import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('error', e);
  }
};

const getMultiple = async () => {
  try {
    const values = await AsyncStorage.multiGet([
      'Joke no 1',
      'Joke no 2',
      'Joke no 3',
      'Joke no 4',
    ]);
    console.log(values);
  } catch (e) {
    console.log('error', e);
  }
};
export {storeData, getMultiple};
