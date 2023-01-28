import {useState} from "react";
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";

import {Header} from "../../components/Header";

import {AntDesign} from '@expo/vector-icons';

import {styles} from "./styles";
import {Task} from "../../components/Task";
import {ListEmpty} from "../../components/ListEmpty";
import {Input} from "../../components/Input";

export function Home() {
    const [tasks, setTasks] = useState<string[]>(['test1', 'test2']);
    // const [tasks, setTasks] = useState<string[]>([]);

    return (
        <View style={styles.container}>

            <Header/>
            <Input/>

            <View>
                {/*Header List*/}
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

                {/*List*/}
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Task/>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <ListEmpty/>
                    )}
                />

            </View>
        </View>
    )
}