import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pomodoro 25 minutos</Text>
        <View style={styles.areaTimer}>
          <Text style={styles.timer}>25:00</Text>
        </View>
        <View style={styles.areaButtons}>
          <Button style={styles.btn} title='INICIAR' color="#38af64" />
          <Button style={styles.btn} title='PAUSAR' color="#7871aa" />
          <Button style={styles.btn} title='RESETAR' color="#cc4635" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9bbf9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  areaTimer: {
    height: 400,
    width: 400,
    marginTop: 20,
    borderWidth: 10,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  areaButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4e5283'
  },

  timer: {
    color: '#4e5283',
    fontWeight: 'bold',
    fontSize: 80  
  }
});
