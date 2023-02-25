import {
    StyleSheet
} from 'react-native'


export const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContent: {
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: '83%',
        maxHeight: '85%',
        paddingBottom: 20,
    },
    header: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        color: '#14171A',
        fontFamily: 'NotoSans-SemiBold'
    },
    content: {
        fontSize: 14,
        color: '#14171A',
        paddingTop: 8,
        // borderWidth: 1,
        flexWrap: 'wrap',
    },
    bullet: {
        fontSize: 5,
    },
    icon: {
        // borderWidth: 1, 
        paddingTop: 12,
        paddingLeft: 8,

    },
    subTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    theatreHall: {

    },
    stage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        fontFamily: 'NatoSans-SemiBold',
        color: '#C0C6CC',
        fontSize: 11,
    },
    screen : {
        width: '70%',
        height: '15%',
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#dfe3e6',
        borderRadius: 3,
    },
    seat: {
        flexDirection: 'row',
    },
    true:{
        width: 20,
        height: 20,
        backgroundColor: '#eaf7f2',
        borderWidth: 1,
        borderColor: '#45b67b',
        margin: 4,
        borderRadius: 5,
    },
    col:{
        flex: 1,
        flexDirection: 'column',
    },
    false: {
        width: 20,
        height: 20,
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#dfe3e6',
        margin: 4,
        borderRadius: 5,
    },
    visible: {
        backgroundColor: '#fff',
        width: 20,
        height: 20,
    }
});





