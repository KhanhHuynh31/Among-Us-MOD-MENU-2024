import { IS_LOADING } from "../types/LoadingType";

export const LoadingAction = (status) => {
    return {
        type: IS_LOADING,
        status,
    }
}

