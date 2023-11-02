import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';

import WelcomeScreen from './components/WelcomeScreen';
import RoleAssignmentScreen from './components/RoleAssignmentScreen';
import GameScreen from './components/GameScreen';
import VotingScreen from './components/VotingScreen';
import GameOverScreen from './components/GameOverScreen';

export default function App() {
    const [gameState, setGameState] = useState('not_started');
    const [players, setPlayers] = useState([]);
    const [votingResults, setVotingResults] = useState({});

    const startGame = () => {
        const players = initializePlayers();
        setPlayers(players);
        setGameState('role_assignment');
    };

    const handleNightActions = (targetPlayerId) => {
        const eliminated = determineElimination(targetPlayerId);
        setGameState('day');
    };

    const handlePlayerVote = (voterId, votedPlayerId) => {
        setVotingResults((prevResults) => ({
            ...prevResults,
            [voterId]: votedPlayerId,
        }));
    };

    const determineGameOutcome = () => {
        setGameState('game_over');
    };

    const handleRoleAssignmentComplete = () => {
        setGameState('night');
    };

    useEffect(() => {
        if (gameState === 'night') {
        } else if (gameState === 'day') {
        } else if (gameState === 'game_over') {
        }
    }, [gameState]);

    return (
        <SafeAreaView>
            <ScrollView>
                {gameState === 'not_started' && (
                    <WelcomeScreen onStartGame={startGame} />
                )}
                {gameState === 'role_assignment' && (
                    <RoleAssignmentScreen
                        players={players}
                        onStartGame={handleRoleAssignmentComplete}
                    />
                )}
                {gameState === 'night' && (
                    <GameScreen gameState={gameState} onNightActions={handleNightActions} />
                )}
                {gameState === 'day' && (
                    <VotingScreen players={players} onPlayerVote={handlePlayerVote} />
                )}
                {gameState === 'game_over' && (
                    <GameOverScreen
                        gameState={gameState}
                        result={determineGameOutcome()}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

function initializePlayers() {
    const roles = ['Mafia', 'Townspeople', 'Townspeople', 'Townspeople', 'Townspeople'];

    const shuffledRoles = shuffleArray(roles);

    const players = shuffledRoles.map((role, index) => ({
        id: index,
        name: `Player ${index + 1}`,
        role,
    }));

    return players;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function determineElimination(targetPlayerId) {
}
