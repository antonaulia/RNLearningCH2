import { StyleSheet, View, Text } from 'react-native';

function GoalItem (props) {
    return(
    <View style={styles.eachGoal}>
        <Text>{props.item}</Text>
    </View>
    ) 
}

export default GoalItem;

const styles = StyleSheet.create({
  eachGoal: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "grey",
    alignItems: "center",
  }
})