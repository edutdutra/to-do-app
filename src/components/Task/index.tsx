import {View, Text, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import {styles} from "./styles";

export function Task() {
    const isChecked = false;

    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                color={isChecked ? '#5E60CE' : '#4EA8DE'}
            />

            <View style={styles.content}>
                <Text
                    style={isChecked ? styles.descriptionTaskDone : styles.descriptionTaskTodo}
                >
                    Integer urna interdum massa libero auctor neque turpis turpis semper.
                </Text>

            </View>

            <TouchableOpacity style={styles.icon}>
                <Ionicons
                    name="md-trash-outline"
                    size={24}
                    color="#808080"
                />
            </TouchableOpacity>
        </View>
    )
}