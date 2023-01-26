import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0D0D0D",
        flex: 1,
        padding: 24,
    },
    listContainer: {
      backgroundColor: '#262626'
    },
    headerList: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 20,
    },
    headerListItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    textTasksDone: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#8284FA'
    },
    textTasksCreated: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#4EA8DE',
    },
    numberOfTasks: {
        backgroundColor: '#333333',
        marginLeft: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        gap: 10
    },
    textNumberOfTasks: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: "bold",
    }
});

// borderBottomColor: '#333333',
//     borderWidth: 1