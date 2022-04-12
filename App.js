import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [inputGoal,setInputGoal] =useState('')
  function goalInputHandler(inputGoal){
    setInputGoal(inputGoal)
  }
  const [courseGoalsArray, setCourseGoalsArray]= useState([])
  function addButtonHandler(){
    setCourseGoalsArray([...courseGoalsArray,inputGoal])
    setInputGoal('')
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={inputGoal} placeholder='Your New Goal Here !' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addButtonHandler}/>
      </View>
      <View style={styles.goalList}>
        <ScrollView >
          <Text>List Of Goals :</Text>
            {courseGoalsArray.map((goal)=>
            <View style={styles.eachGoal}>
              <Text key={courseGoalsArray.indexOf(goal)}>{goal}</Text>
            </View>)}  
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer :{
    flex : 1,
    paddingTop: 50,
    paddingHorizontal : 16
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom: 24,
    borderBottomColor:'grey',
    borderBottomWidth : 1
  },
  textInput:{
    borderWidth:1,
    borderColor: 'grey',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalList:{
    flex: 6
  },
  eachGoal :{
    margin : 8,
    padding : 8,
    borderRadius : 6,
    backgroundColor : 'grey',
    alignItems : 'center'
  }
});
