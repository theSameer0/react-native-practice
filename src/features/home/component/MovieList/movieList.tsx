import { 
    Text, 
    View,
    SectionList,
} from 'react-native'
import React from 'react'
import CustomHeader from '../CustomHeader/CustomHeader'

const Data = [
    {
        title:'Movies',
        data: [
            {
                name:'Bahubali',
                language: 'Hindi',
            }
        ]
    }
]
export default function MovieList() {
  return (
    <SectionList 
        sections={Data}
        keyExtractor = {(item)=>item.toString()}
        renderItem = {
            ({item})=>(
                <View>
                    <Text>
                        {item.name}
                    </Text>
                    <Text>
                        {item.language}
                    </Text>
                </View>
            )
        }
        renderSectionHeader = {
            ({section})=>(
                <CustomHeader title = {section.title}/>
            )
        }
    />
  )
}
