import {View, Text, TouchableOpacity} from "react-native";

import {Ionicons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import {ITask} from "../../screens/Home";

import {styles} from "./styles";


type Props = ITask & {
    onDelete: (description: string) => void;
    onCheck: (description: string) => void;
}

export function Task({description, isChecked, onDelete, onCheck}: Props) {

    function handleDeleteTask() {
        onDelete(description);
    }

    function handleCheckTask() {
        onCheck(description);
    }

    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                color={isChecked ? '#5E60CE' : '#4EA8DE'}
                onValueChange={handleCheckTask}
            />

            <View style={styles.content}>
                <Text
                    style={isChecked ? styles.descriptionTaskDone : styles.descriptionTaskTodo}
                >
                    {description}
                </Text>

            </View>

            <TouchableOpacity
                style={styles.icon}
                onPress={handleDeleteTask}
            >
                <Ionicons
                    name="md-trash-outline"
                    size={20}
                    color="#808080"
                />
            </TouchableOpacity>
        </View>
    )
}