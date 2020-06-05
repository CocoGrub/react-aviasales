import * as axios from "axios";

const LoadTicket='app-reducer/LoadTicket'

const initialState={
    tickets:[

    ]

}
function appReducer(state=initialState,action) {
    switch (action.type) {
        case LoadTicket:return {...state,tickets: [...state.tickets,action.payload]}
        default:return state

    }

}

export const LoadTicketsAC=(list)=>{
    return{
        type:LoadTicket,
        payload:list
    }
}
export const ThunkLoadTicketsData=()=> {
    return (dispatch) =>{
        axios.get(`https://front-test.beta.aviasales.ru/search`).then((response)=>{
            if(response.searchId){
                const {id}=response.searchId

            }
        }).then((id)=>{
            axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=4niyd${id}`)
                .then((response)=>{
                    const tickets=response.tickets
                    dispatch(LoadTicketsAC(tickets))
                    console.log(tickets)
                })

        })
    }
}

export default appReducer