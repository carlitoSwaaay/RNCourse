// react native Udemy course

import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


 export default function App() {
   const [modalIsVisible, setModalIsVisible] = useState(false);
   const [courseGoals, setCourseGoals] = useState([]);

   const startAddGoalHandler = () => {
     setModalIsVisible(true);
   };

   const addGoalHandler = (enteredGoalText) => {
     setCourseGoals(currentCourseGoals => [
       ...currentCourseGoals,
       { text: enteredGoalText, id: Math.random().toString() },
     ]);
   };

   const deleteGoalHandler = (id) => {
     setCourseGoals(currentCourseGoals => {
       console.log('deleteGoalHandler');
       return currentCourseGoals.filter((goal) => goal.id !== id);
     });
   }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color="e97335"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id; 
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
    
