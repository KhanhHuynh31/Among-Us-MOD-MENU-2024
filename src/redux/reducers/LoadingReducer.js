import { IS_LOADING } from "../types/LoadingType";

const initialState = {
    "isLoading": false
}

export const LoadingReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_LOADING: {
            if (action.status) {
                state.isLoading = true;
            }
            else {
                state.isLoading = false;
            }
            return { ...state }
        }
        default: return { ...state }
    }
}