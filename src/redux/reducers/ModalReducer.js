import { LOGIN_MODAL, REGESTER_MODAL, SEARCH_MODAL } from "../types/ModalType";

const initialState = {
    "loginModal": false,
    "regesterModal": false,
    "searchModal": false
}

export const ModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_MODAL: {
            if (action.status) {
                state.loginModal = true;
                state.regesterModal = false;
            }
            else {
                state.loginModal = false;
            }
            return { ...state }

        }
        case REGESTER_MODAL: {
            if (action.status) {
                state.regesterModal = true;
                state.loginModal = false;
            }
            else {
                state.regesterModal = false;
            }
            return { ...state }

        }
        case SEARCH_MODAL: {
            if (action.status) {
                state.searchModal = true;
            }
            else {
                state.searchModal = false;
            }
            return { ...state }

        }
        default: return { ...state }
    }
}