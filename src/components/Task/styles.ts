import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        marginBottom: 10,
        padding: 12
    },
    content: {
        flex: 1,
        // width: 235,
        // height: 40
    },
    descriptionTaskTodo: {
        fontSize: 14,
        color: '#D9D9D9'
    },
    descriptionTaskDone: {
        fontSize: 14,
        color: '#808080',
        textDecorationLine: "line-through"
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 999,
        marginRight: 10
    },
    icon: {
        marginLeft: 8
    }
})