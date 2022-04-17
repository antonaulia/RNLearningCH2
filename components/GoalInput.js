import { StyleSheet, View, TextInput, Button } from "react-native";
import {useState} from 'react'

function GoalInput(props) {
    const [inputGoal, setInputGoal] = useState("");
    function goalInputHandler(inputGoal) {
      setInputGoal(inputGoal);
    }
function addButtonHandler2 (){
    props.onAddGoal(inputGoal)
    setInputGoal('')
}
    
    
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={inputGoal}
        placeholder="Your New Goal Here !"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addButtonHandler2} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
      }
});
