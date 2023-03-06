import { MovieData , TheatreData } from "./interface";
import { useDispatch } from "react-redux";
import { setCurrentMovieData, setMovieData , setTheatreData  } from "./action";
import axios from "axios";

function App() {
    const dispatch = useDispatch()
    const fetchData = () => {
        const baseURL = "http://10.0.2.2:8080";
        axios.get(`${baseURL}/movies`)
        .then(
        (response) => {
            console.log(response.data)
        })
        .catch((err)=>console.log(err))
    };
    function movieDataUpdate(){
      var MovieDataList : MovieData[] = []
      let list = [
          {
              key: 0,
              name:'Matrix',
              language: 'English',
              image: require('~/assets/images/Matrix.png'),
              headImage : require('~/assets/images/MatrixHeader.png'),
              tags: [
                  'English',
                  'U/A',
                  '2021',
                  'Si-fi/Action',
                  '2h 28m'
                ],
                comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
            },
            {
                key: 1,
                name: '83',
                language: 'Hindi',
                image: require('~/assets/images/83.png'),
                headImage : require('~/assets/images/83.png'),
                tags: [
                    'Hindi',
                    'U/A',
                    '2021',
                    'Si-fi/Action',
                    '2h 28m'
                ],
                comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
            },
            {
                key: 2,
                name: 'Saamanyudu',
                language: 'Telugu',
                image: require('~/assets/images/Saamanyudu.png'),
                headImage : require('~/assets/images/Saamanyudu.png'),
                tags: [
                    'Telugu',
                    'U/A',
                    '2021',
                    'Si-fi/Action',
                    '2h 28m'
                ],
                comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
            },
            {
                key: 3,
                name: 'Pushpa',
                language: 'Telugu',
                image: require('~/assets/images/Pushpa.png'),
                headImage : require('~/assets/images/Pushpa.png'),
                tags: [
                    'Telugu',
                    'U/A',
                    '2021',
                    'Si-fi/Action',
                    '2h 28m'
                ],
                comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
                
            }
        ]
        for(let i in list){
            let inData = list[i]
            let tmpList: MovieData = {
                key: inData.key,
                name: inData.name,
                language: inData.language,
                image: inData.image,
                headImage : inData.headImage,
                tags: inData.tags,
                comment: inData.comment
            }
            MovieDataList.push(tmpList)
        }
        // console.log(MovieDataList)
        dispatch(setMovieData(MovieDataList))
        dispatch(setCurrentMovieData(MovieDataList))
    }
    
    function theatreDataUpdate(){
        var TheatreDataList : TheatreData [] = []
        let list = [
            {
                id: "0",
                name:'Urvashi Cinema Hall',
                comment: 'Shivaji Nagar',
                image: require('~/assets/images/UrvashiCinemaHall.png'),
                timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            },
            {
                id: "1",
                name:'Inox',
                comment: '1mg Mall',
                image: require('~/assets/images/Theatre.png'),
                timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            },
            {
                id: "2",
                name:'Cinepolis',
                comment: 'Herbal',
                image: require('~/assets/images/Theatre.png'),
                timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            }
            ,{
                id: "3",
                name:'Matrix',
                comment: 'English',
                image: require('~/assets/images/Theatre.png'),
                timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            },
            {
                id: "4",
                name:'Cinema Hall',
                comment: 'SLN Mall',
                image: require('~/assets/images/Theatre.png')
                ,timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            }
            ,{
                id: "5",
                name:'Cinema Hall',
                comment: 'SLN Mall',
                image: require('~/assets/images/Theatre.png')
                ,timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            },
            {
                id: "6",
                name:'Cinema Hall',
                comment: 'SLN Mall',
                image: require('~/assets/images/Theatre.png')
                ,timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            },
            {
                id: "7",
                name:'Cinema Hall',
                comment:'DLF Mall',
                image: require('~/assets/images/Theatre.png'),
                timings : [
                    '2:00 PM',
                    '5:30 PM',
                    '7:00 PM',
                    '9:30 PM',
                ]
            }
        ]
        for ( let i in list) {
            let inData = list[i]
            let tmpList : TheatreData = {
                id: inData.id,
                name: inData.name,
                image: inData.image,
                comment: inData.comment,
                timings: inData.timings,
            }
            TheatreDataList.push(tmpList)
        }
        dispatch(setTheatreData(TheatreDataList))
    }
        
    // fetchData()
    movieDataUpdate()
    theatreDataUpdate()
}
export default App;