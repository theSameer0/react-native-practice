import { SET_LANG } from "./action";
import { SET_CURRENT_MOVIE } from "./action";

let initialState = {
    lang: 'All',
    currentMovie: '',
    Data: [
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
            headImage : require('~/assets/images/MatrixHeader.png'),
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
            key: 2,
            name: 'Saamanyudu',
            language: 'Telugu',
            image: require('~/assets/images/Saamanyudu.png'),
            headImage : require('~/assets/images/MatrixHeader.png'),
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
            lanugage: 'Telugu',
            image: require('~/assets/images/Pushpa.png'),
            headImage : require('~/assets/images/MatrixHeader.png'),
            tags: [
              'Telugu',
              'U/A',
              '2021',
              'Si-fi/Action',
              '2h 28m'
            ],
            comment: 'To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\'s learned anything, it\'s that choice, while an illusion...',
        
        }
    ],
    TheatreData: [
        {
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
    ],
}

function langReducer (state=initialState, action) {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.payload,
            }
            break;
        case SET_CURRENT_MOVIE:
            return {
                ...state,
                currentMovie: action.payload,
            }
        default:
            return state
            break;
    }
}

export default langReducer;