// react native Udemy course

import React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import GoalItem from './components/goalItem';


 export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentcourseGoals) => [
      ...currentcourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput}
            placeholder="Your course goals!" 
            onChangeText={goalInputHandler}/>
          <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem />;
            }}  
          keyExtractor={(item, index) => {
            return item.id;
          }}
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
      flex: 4,
  },   

  })
    
