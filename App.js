// react native Udemy course

import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, Text, ScrollView } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


 export default function App() {
   const [enteredGoalText, setEnteredGoalText] = useState('');
   const [courseGoals, setCourseGoals] = useState([]);

   const goalInputHandler = (enteredText) => {
     setEnteredGoalText(enteredText);
   };

   const addGoalHandler = () => {
     setCourseGoals(currentCourseGoals => [
       ...currentCourseGoals,
       enteredGoalText,
     ]);
   };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={item => {
            return (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
            );
          }}
          alwaysBounceVertical={false}
        />   
      </View> 
    </View>    
    );
 }


          
const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,

    },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
      flex: 5,
  },  
  goalItem: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#e97335',
    paddingLeft: 8,
    marginBottom: 8,
    padding: 4,
    backgroundColor: '#e97335',
    color: 'white',
  },
  goalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

});
    
