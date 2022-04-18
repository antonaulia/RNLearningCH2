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
    setCourseGoalsArray([
      ...courseGoalsArray,
      { goaltext: inputGoal, goalId: Math.random() },
    ]);
    setModalIsVisible()
  }

  function onTapDeleteItemHandler(goalIdChoosed) {
    // console.log(goalIdChoosed);
    setCourseGoalsArray((courseGoalsArray) => {
      return courseGoalsArray.filter((goal) => goal.goalId !== goalIdChoosed);
    });
  }

  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  function modalIsVisibleHandler(){
    setModalIsVisible(true)
  }
  function modalIsNotVisibleHandler(){
    setModalIsVisible(false)
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={modalIsVisibleHandler} />
      {modalIsVisible && (
        <GoalInput
          onAddGoal={addButtonHandler}
          onDeleteItem={onTapDeleteItemHandler}
          isVisible={modalIsVisible}
          onCancel={modalIsNotVisibleHandler}
        />
      )}
      <View style={styles.goalList}>
        <Text>List Of Goals :</Text>
        <FlatList
          data={courseGoalsArray}
          renderItem={(itemData) => {
            return (
              <GoalItem
                item={itemData.item}
                onDeleteItem={onTapDeleteItemHandler}
              />
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
    paddingTop: 24
  },
});
