import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0D0D0D",
        flex: 1,
        padding: 24,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 16
    },
    input: {
        backgroundColor: '#262626',
        flex: 1,
        height: 54,
        padding: 16,
        fontSize: 16,
        color: '#F2F2F2',
        borderRadius: 6,
        borderColor: '#0D0D0D',
        marginRight: 4
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
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
        marginBottom: 12
    },
    headerListItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    textTasksDone: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#4EA8DE',
    },
    textTasksCreated: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#8284FA'

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
    // eventName: {
    //     color: '#FFF',
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginTop: 48
    // },
    // eventDate: {
    //     color: '#6B6B6B',
    //     fontSize: 16
    // },
    // listEmptyText: {
    //     color: '#FFF',
    //     fontSize: 14,
    //     textAlign: 'center'
    // }
});