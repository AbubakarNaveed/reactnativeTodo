import { StatusBar } from "expo-status-bar";
import { mainBackgroundColor } from "./assets/colors";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Textcard from "./components/textCard";
import Keyboard from "./components/keyboardComponent";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [change, setChange] = useState(false);
  const handleAddtext = () => {
    if (text.length > 0) setTasks([...tasks, text]);
  };

  useEffect(() => {
    // console.log(tasks);
    // console.log(tasks.length);
  }, [tasks]);

  const handleDelete = (id) => {
    // console.log(tasks.splice(id, 1));
    let newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
    // console.log(tasks);
    // setTasks(newTasks);
    // setChange(!change);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "800", marginBottom: 30 }}>
        Todays tasks
      </Text>
      {/* <Textcard task="Learn React Native"></Textcard> */}
      {tasks.map((todo, index) => {
        return (
          <Textcard task={todo} index={index} del={handleDelete} key={index} />
        );
      })}

      {/* <Keyboard setTasks={setTasks} tasks={tasks} /> */}
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder="Write your tasks"
          onChangeText={(text) => {
            setText(text);
          }}
        />

        <TouchableOpacity
          style={styles.addWrapper}
          onPress={() => {
            handleAddtext();
          }}
        >
          <Text style={{ fontSize: 20, color: "gray" }}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: `${mainBackgroundColor}`,
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
    position: "relative",
  },
  wrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    marginRight: -25,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
