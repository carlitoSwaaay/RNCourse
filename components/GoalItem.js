import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#efefef' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      > 
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({

  goalItem: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#e97335',
    paddingLeft: 8,
    marginBottom: 8,
    backgroundColor: '#e97335',
    color: 'white',
  },
  goalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 4,
  },

});