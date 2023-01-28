import {useState} from "react";
import {TextInput, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

import {ITask} from "../../screens/Home";

import {styles} from "./styles";

type Props = {
    onAddNewTask: (tasks: (prevState: ITask[]) => any[]) => void // Resolveu o problema do ts
}

export function Input({onAddNewTask} : Props) {
    const [newTask, setNewTask] = useState<string>();

    function handleNewTask() {
        onAddNewTask(prevState => [...prevState, {description: newTask, isChecked: false}])
        setNewTask('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                onChangeText={setNewTask}
                value={newTask}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleNewTask}
            >
                <AntDesign name="pluscircleo" size={16} color="#F2F2F2"/>
            </TouchableOpacity>
        </View>
    )
}