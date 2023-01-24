import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {Header} from "../../components/Header";
import {AntDesign} from '@expo/vector-icons';

export function Home() {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="pluscircleo" size={16} color="#F2F2F2"/>
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.headerList}>

                    <View style={styles.headerListItem}>
                        <Text style={styles.textTasksCreated}>
                            Criadas
                        </Text>
                        <View style={styles.numberOfTasks}>
                            <Text style={styles.textNumberOfTasks}>0</Text>
                        </View>
                    </View>

                    <View style={styles.headerListItem}>
                        <Text style={styles.textTasksDone}>
                            Concluídas
                        </Text>
                        <View style={styles.numberOfTasks}>
                            <Text style={styles.textNumberOfTasks}>0</Text>
                        </View>
                    </View>

                </View>

            </View>
        </View>
    )
}

// GRAY 200 #D9D9D9
// GRAY 400 #333333