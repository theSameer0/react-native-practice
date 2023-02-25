import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
    body: {
        // backgroundColor : '#e9ecf0'
        backgroundColor: '#000',
        marginTop:10,
        paddingTop: 10,
        flexDirection: 'row',
    }
    ,image:{
        width:100,
        height:100,
        margin: 10,
        borderRadius: 14,
    }
    ,content:{
        width: 300,
        height: 100,
        marginTop: 10,
        flexDirection: 'column',
        borderRadius: 14,
    }
    ,title:{
        width: 250,
        height: 10,
        marginBottom: 10,
    }
    ,comment:{
        width: 100,
        height: 10,
        marginBottom : 10,
    }
})