import { Image, MovieData , TheatreData } from "./interface";
import { useDispatch } from "react-redux";
import { setCurrentMovieData, setMovieData , setTheatreData  } from "./action";
import axios from "axios";
import { useEffect } from "react";

function InitialCall() {
    useEffect(() => {
      fetchData()
      fetchTheatre()
    }, [])
    
    const dispatch = useDispatch()

    // const baseURL = "http://192.168.0.119:8080";
    const baseURL = "http://10.0.2.2:8080"
    // const baseURL = "http://192.168.119.45:8080"
    const fetchData = () => {
        console.log("entered")
        var MovieDataList : MovieData[] = []
        axios.get(`${baseURL}/movies`)
        .then((response) => {
            var Data = response.data;
            // for ( var inData in Data) {
            //     var tmpMovie: MovieData = {
            //         key: Data[inData].key,
            //         name: Data[inData].name,
            //         language: Data[inData].language,
            //         image: Data[inData].image,
            //         headImage : Data[inData].headImage,
            //         tags: Data[inData].tags,
            //         comment: Data[inData].comment
            //     }
            //     MovieDataList.push(tmpMovie)
            // }
            dispatch(setMovieData(Data))
            // console.log(Data)
        })
        .catch((err)=>console.log(err))
    };
    const fetchTheatre = () => {
        var TheatreDataList: TheatreData[] = []
        axios.get(`${baseURL}/theatres`)
        .then((response)=>{
            var Theatre = response.data;
            // for (var i in Theatre) {
            //     var tmpTheatre: TheatreData = {
            //         id:  Theatre[i].id,
            //         name:  Theatre[i].name,//  "Urvashi Cinema Hall",
            //         location: Theatre[i].location,//"Shivaji Nagar",
            //         image:   Theatre[i].image,//"https://ik.imagekit.io/2h0gcydui/images/UrvashiCinemaHall.png",
            //         timings: Theatre[i].timings,
            //     }
            //     TheatreDataList.push(tmpTheatre);
            // }
            dispatch(setTheatreData(Theatre))
            // console.log("fetch",Theatre)
        })
        .catch((err)=>console.log(err))
    }
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
    console.log("hello")
    // movieDataUpdate()
    // theatreDataUpdate()
}
export default InitialCall;