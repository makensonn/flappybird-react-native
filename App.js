import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, Button, Image } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import { Audio } from 'expo-av';
import { turquoise } from 'color-name';
//import Sound from 'react-native-sound';


export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [sound, setSound] = React.useState();

  async function playSound() {

    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/sound/gs.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  
  useEffect(() => {
    setRunning(false)
  }, []) 


  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20 }}>{currentPoints}</Text>
      <GameEngine
        ref={(ref) => { setGameEngine(ref) }}
        systems={[Physics]}
        entities={entities()}
        running={running}

        onEvent={(e) => {

          switch (e.type) {
            case 'game_over':
              setRunning(false)
              gameEngine.stop()
              break;
            case 'new_point':
              setCurrentPoints(currentPoints + 1)
              break;
          }

        }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <StatusBar style="auto" hidden={true} />

      </GameEngine>
      
      
      <TouchableOpacity onPress={playSound}>
        <Image style={{height:25, width:25, justifyContent: 'center' }} source={require("./assets/sound.png")} />
      </TouchableOpacity>


      {!running ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity style={{ backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10 }}
            onPress={() => {
              setCurrentPoints(0)
              setRunning(true)
              gameEngine.swap(entities())
            }}>

            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>
              Start Game
            </Text>
          </TouchableOpacity>
          <Text> Developed By Makenson Noel</Text>

        </View> : null}
    </View>
  );
}
