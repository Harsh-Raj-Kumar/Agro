import { toast } from "react-toastify";

export const showSuccess = (message) => {
    return () => {
        toast.success(message,{
            position : "bottom-right",
            theme : "colored"
        });
    };
}

export const showError = (message) => {
    return () => {
        toast.error(message,{
            position : "bottom-right",
            theme : "colored"
        });
    };
}

export const showFailure = (message) => {
    return () => {
        toast.warning(message,{
            position : "bottom-right",
            theme : "colored"
        });
    };
}