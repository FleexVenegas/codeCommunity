import axios from "axios";


export const postAxiosApi = async (url: string, form: FormData | null) => {
    try {
        if (form === null) {
            throw new Error("FormData is null");
        }

        const server = import.meta.env.VITE_BACKEND_URL;

        const response = await axios.post(`${server}${url}`, form, {
            withCredentials: true,
        });
        return response;
        
    } catch (error) {
        return error;
    }
}