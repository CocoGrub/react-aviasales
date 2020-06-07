import * as axios from "axios";
import axiosRetry from 'axios-retry';
axiosRetry(axios, { retries: 3 });

const LoadTicket='app-reducer/LoadTicket'
const FILTER='app-reduce/FILTER'

const initialState={
    filter:'SHOW_ALL',
    tickets:[

    ]

}
function appReducer(state=initialState,action) {
    switch (action.type) {
        case LoadTicket:return {...state,tickets: action.payload}
        case FILTER:return {...state,filter: action.payload}

        default:return state

    }

}
export const SetFilterAC=(x)=>{


    return{
        type:FILTER,
        payload:x
    }
}


export const LoadTicketsAC=(list)=>{
    return{
        type:LoadTicket,
        payload:list
    }
}
export const ThunkLoadTicketsData=()=> {
    return (dispatch)=>{
         axios.get(`https://front-test.beta.aviasales.ru/search`)
            .then((response) => {
                  axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${response.data.searchId}`).then((response)=>{
                      dispatch(LoadTicketsAC(response.data.tickets))
                  })

        })

    }
}
export default appReducer