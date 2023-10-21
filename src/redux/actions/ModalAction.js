import { LOGIN_MODAL, REGESTER_MODAL, SEARCH_MODAL} from "../types/ModalType";

export const LoginModalAction = (status) => {
    return {
        type: LOGIN_MODAL,
        status,
    }
}
export const RegisterModalAction = (status) => {
    return {
        type: REGESTER_MODAL,
        status,
    }
}
export const SearchModalAction = (status) => {
    return {
        type: SEARCH_MODAL,
        status,
    }
}
