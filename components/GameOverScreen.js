import React from 'react';
import {View, Text} from 'react-native';

function GameOverScreen({result}) {
  return (
    <View>
      <Text>Game Over</Text>
      <Text>Result: {result}</Text>
    </View>
  );
}

export default GameOverScreen;
