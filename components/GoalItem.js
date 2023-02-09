import { Text, View, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
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