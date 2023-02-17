// react native Udemy course

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App(props) {
   const [modalIsVisible, setModalIsVisible] = useState(false);
   const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');

   const startAddGoalHandler = () => {
     setModalIsVisible(true);
   };

  const endAddGoalHandler = (e) => {
     setModalIsVisible(false);
    // e.preventDefault();
    // e.target.reset();
   };

  // useEffect(() => {
  //   setEnteredGoalText('');
  // }, [enteredGoalText]);


   const addGoalHandler = (enteredGoalText) => {
     setCourseGoals(currentCourseGoals => [
       ...currentCourseGoals,
       { text: enteredGoalText, id: Math.random().toString() },
     ]);
     endAddGoalHandler();
    //  resetGoalHandler();
   };

   const deleteGoalHandler = (id) => {
     setCourseGoals((currentCourseGoals) => {
       return currentCourseGoals.filter((goal) => goal.id !== id);
     });
   }

  return (
    <>
      <StatusBar style="auto" />
    <View style={styles.appContainer}>
      <View style={styles.goalItem}>
      <Button
          title='Add New Task'
        color="e97335"
        onPress={startAddGoalHandler}
      />
      </View>
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
          onSubmit={endAddGoalHandler}
          // onReset={resetGoalHandler}
      />
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
    </>
    );
 }


          
const styles = StyleSheet.create({
    appContainer: {
    flex: 1,
    paddingTop: 70,
      paddingHorizontal: 16,

  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    font: 'bold',
    borderRadius: 6,
    backgroundColor: '#e97335',
  },
});
    
