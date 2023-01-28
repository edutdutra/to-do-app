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

    function deleteTask(taskDeletedDescription: string) {
        setTasks(prevState => prevState.filter(task => task.description !== taskDeletedDescription))
    }

    function checkTask(taskCheckedDescription: string) {
        setTasks((prevState) => prevState.map(task => {
            if (task.description === taskCheckedDescription) {
                task.isChecked = !task.isChecked
            }

            return task
        }));
    }

    // function checkTask(taskCheckedDescription: string) {
    //     setTasks((prevState) => {
    //         const task = prevState.find(task => task.description === taskCheckedDescription)
    //
    //         if (task) {
    //             task.isChecked = !task.isChecked;
    //         }
    //
    //         return prevState
    //     });
    // }

    return (
        <View style={styles.container}>

            <Header/>
            <Input onAddNewTask={setTasks}/>

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
                        <Task
                            description={item.description}
                            isChecked={item.isChecked}
                            onDelete={deleteTask}
                            onCheck={checkTask}
                        />
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