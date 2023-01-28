import {useState} from "react";
import {FlatList, Text, View} from "react-native";

import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {Task} from "../../components/Task";
import {ListEmpty} from "../../components/ListEmpty";

import {styles} from "./styles";

export interface ITask {
    description: string;
    isChecked: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [newTask, setNewTask] = useState<string>();
    // const [tasks, setTasks] = useState<ITask[]>([{description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.', isChecked: true}, {description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.', isChecked: false}]);


    return (
        <View style={styles.container}>

            <Header/>
            <Input onAddNewTask={setTasks} />

            <View>
                {/*Header List*/}
                <View style={styles.headerList}>
                    <View style={styles.headerListItem}>
                        <Text style={styles.textTasksCreated}>
                            Criadas
                        </Text>
                        <View style={styles.numberOfTasks}>
                            <Text style={styles.textNumberOfTasks}>
                                {tasks.filter(task => task.isChecked === false).length}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.headerListItem}>
                        <Text style={styles.textTasksDone}>
                            Concluídas
                        </Text>
                        <View style={styles.numberOfTasks}>
                            <Text style={styles.textNumberOfTasks}>
                                {tasks.filter(task => task.isChecked === true).length}
                            </Text>
                        </View>
                    </View>
                </View>

                {/*List*/}
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.description}
                    renderItem={({item}) => (
                        <Task description={item.description} isChecked={item.isChecked} />
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