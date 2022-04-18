import { StyleSheet, View, Text, Pressable } from "react-native";
import { Picker } from "react-native-web";
import ColorPropType from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.item.goalId)}>
      <View style={styles.eachGoal}>
        <Text>{props.item.goaltext}</Text>
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
    backgroundColor: 'grey',
    alignItems: "center",
  },
});
