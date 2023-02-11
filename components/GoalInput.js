import React from 'react';
import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";


const GoalInput = (props) => {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(' ');
  };

  return (

      <Modal visible={props.visible} animationType="fade" >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
        style={styles.textInput}
          placeholder="Your Honeydo!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button1}>
            <Button title="Add Goal" color="black" onPress={addGoalHandler} />
          </View>
          <View style={styles.button2}>
            <Button title="Cancel" color="black" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>

  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e97335',
    borderRadius: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    backgroundColor: '#e97335',
    width: '80%',
    padding: 8,
    color: 'white'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button1: {
    width: '30%',
    color: '#e97335',
    marginHorizontal: 8
  },
  button2: {
    width: '30%',
    // backgroundColor: '#e97335',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});
