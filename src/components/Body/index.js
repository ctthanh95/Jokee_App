import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from './Button';
import data from '../../data';
import {storeData, getMultiple} from '../../untils';
import styles from './styles';

const Body = () => {
  const [index, setIndex] = useState(0);
  const handleFunny = () => {
    storeData(`Joke no ${index + 1}`, {
      ...data[index],
      isFunny: true,
    });
    setIndex(index + 1);
  };
  const handleNotFunny = () => {
    storeData(`Joke no ${index + 1}`, {
      ...data[index],
      isFunny: false,
    });
    setIndex(index + 1);
  };
  return (
    <View style={styles.container}>
      {index <= data.length - 1 ? (
        <>
          <Text style={styles.txtContent}>{data[index].content}</Text>
          <View style={styles.row}>
            <Button isFunny onPress={handleFunny} />
            <Button onPress={handleNotFunny} />
          </View>
        </>
      ) : (
        <Text style={styles.txtAll} onPress={getMultiple}>
          That's all the jokes for today! Come back another day!
        </Text>
      )}
    </View>
  );
};

export default Body;
