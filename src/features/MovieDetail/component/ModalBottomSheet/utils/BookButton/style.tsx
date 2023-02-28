import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
    bookView: {
        alignItems:'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        paddingTop: 5,
        paddingBottom: 5,
        height:'8%',
    },
    book: {
        width: '90%',
        backgroundColor: '#4A148C',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookText:{
        color: '#fff',
        fontSize: 20,
        fontFamily: 'NotoSans-SemiBold'
    }
})