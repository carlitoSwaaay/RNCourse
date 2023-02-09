// react native Udemy course

import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


 export default function App() {

   const [courseGoals, setCourseGoals] = useState([]);

   const addGoalHandler = (enteredGoalText) => {
     setCourseGoals(currentCourseGoals => [
       ...currentCourseGoals,
       { text: enteredGoalText, id: Math.random().toString() },
     ]);
   };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id; //video uses item.id but that's not working for me
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
  goalsContainer: {
      flex: 5,
  }
});
    
