import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoalsArray, setCourseGoalsArray] = useState([]);
  function addButtonHandler(inputGoal) {
    setCourseGoalsArray([...courseGoalsArray, inputGoal]);
    // setInputGoal("");
}

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addButtonHandler}/>
      <View style={styles.goalList}>
        <Text>List Of Goals :</Text>
        <FlatList
          data={courseGoalsArray}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item}/>
            );
          }}
          keyExtractor={(item, index) => {
            return Math.random(0);
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
  goalList: {
    flex: 6,
  }
});
