import { INC } from "../types/counter.type"

export const counterIncrement = async (dispatch, getState) => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.log(getState())
            dispatch({
                type: INC,
                payload: json
            })
        }
        )

}