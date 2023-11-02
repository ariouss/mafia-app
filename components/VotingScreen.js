import React from 'react';
import {View, Text, Button} from 'react-native';

function VotingScreen({players, onPlayerVote, onEndVoting}) {
  return (
    <View>
      <Text>Select a player to vote for elimination:</Text>
      {players.map(player => (
        <Button
          key={player.id}
          title={player.name}
          onPress={() => onPlayerVote(player.id)}
        />
      ))}
      <Button title="End Voting" onPress={onEndVoting} />
    </View>
  );
}

export default VotingScreen;
