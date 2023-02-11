import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{ color: 'white' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      > 
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({

  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#e97335',
  },
  goalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  }

});