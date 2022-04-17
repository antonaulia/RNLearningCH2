import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {

  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.eachGoal}>
        <Text>{props.item}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  eachGoal: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "grey",
    alignItems: "center",
  },
});
