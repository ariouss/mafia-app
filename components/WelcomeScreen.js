import React from 'react';
import {View, Text, Button} from 'react-native';

function WelcomeScreen({onStartGame}) {
  return (
    <View>
      <Text>Welcome to Mafia Game</Text>
      <Button title="Start Game" onPress={onStartGame} />
    </View>
  );
}

export default WelcomeScreen;
