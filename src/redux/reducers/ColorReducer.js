const initialState = {
    colorList: [],
}

export const ColorReducer =  (state = initialState, action) => {
    switch (action.type) {
        
        case "GET_COLOR_LIST_API": {
            state.colorList = action.palette;
            console.log(state.colorList)
            return { ...state}
        }


        case "GET_COLOR_LIST_API_SPACE": {
            state.colorList = action.palette;
            console.log(state.colorList)
            return { ...state}
        }

        default: {
            return {...state}

        }
    }
}
