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

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  function goalInputHandler(inputGoal) {
    setInputGoal(inputGoal);
  }
  const [courseGoalsArray, setCourseGoalsArray] = useState([]);
  function addButtonHandler() {
    setCourseGoalsArray([...courseGoalsArray, inputGoal]);
    setInputGoal("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputGoal}
          placeholder="Your New Goal Here !"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addButtonHandler} />
      </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalList: {
    flex: 6,
  }
});
