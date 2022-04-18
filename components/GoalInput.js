import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [inputGoal, setInputGoal] = useState("");
  function goalInputHandler(inputGoal) {
    setInputGoal(inputGoal);
  }
  function addButtonHandler2() {
    props.onAddGoal(inputGoal);
    setInputGoal("");
  }


  return (
    <Modal visible={props.isVisible.value}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputGoal}
          placeholder="Your New Goal Here !"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
        <Button title="Add Goal" onPress={addButtonHandler2} />
        <Button title='Cancel' color={'red'} onPress={props.onCancel}/>
        </View>
         </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 24,
    paddingBottom : 30,
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
  buttonContainer :{
    flexDirection:'row',
    padding : 8,
    justifyContent:'space-around',
    paddingHorizontal : 10
  }
});
