import React from 'react';
import {View, Text, Button} from 'react-native';

function GameScreen({gameState, onVote, onEndGame}) {
  return (
    <View>
      <Text>Game Progress: {gameState}</Text>
      <Button title="Vote" onPress={onVote} />
      <Button title="End Game" onPress={onEndGame} />
    </View>
  );
}

export default GameScreen;
