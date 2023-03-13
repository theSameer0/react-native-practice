import {
    StyleSheet
} from 'react-native'


export const styles = StyleSheet.create({
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
        flexDirection: 'column',
        justifyContent:'space-evenly',
        marginLeft: 8,
        marginRight: 8,
    },
    cell:{
        width: 20,
        height: 20,
        borderWidth: 1,
        marginLeft: 4,
        marginRight:4,
        marginBottom: 8,
        borderRadius: 5,
    },
    col:{
        flex: 1,
        flexDirection: 'row',
    },
    visible: {
        backgroundColor: '#fff',
        width: 20,
        height: 20,
        margin:0,
    },
});





