import {View, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import {styles} from "./styles";


export function ListEmpty() {
    return (
        <View style={styles.container}>
            <Ionicons name="md-clipboard-outline" size={56} color="#808080" />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.message}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}