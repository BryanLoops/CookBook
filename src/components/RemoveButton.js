import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RemoveButton = ({ onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Image source={ require('../images/lixeira.png') } style={ styles.buttonImage }/>
            </TouchableOpacity>
        </View>
    );
};

export default RemoveButton;

const styles = StyleSheet.create({
    buttonImage: {
      height: 20,
      width: 20,
    },
  });
