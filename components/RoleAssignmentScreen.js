import React from 'react';
import { View, Text, Button } from 'react-native';

const RoleAssignmentScreen = ({ players, onStartGame }) => {
    return (
        <View>
            <Text>Role Assignment</Text>
            {players.map((player) => (
                <View key={player.id}>
                    <Text>{player.name}</Text>
                    <Text>Role: {player.role}</Text>
                </View>
            ))}
            <Button title="Start Game" onPress={onStartGame} />
        </View>
    );
};

export default RoleAssignmentScreen;
