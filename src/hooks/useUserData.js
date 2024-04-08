import { useQuery, useMutation } from "@tanstack/react-query";
import { authStore } from "./zustand";
import { USER_PATH, USER_PROFILE_URL } from "../constants/ApiPath";
import { fetchUser, fetchUsersByQuery } from "../api/userRequests";



export const useGetCurrentUser = () => {

    const { data: authData } = authStore();

    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await fetchUser(USER_PROFILE_URL, authData.token);
            return await response.json();
        },
        enabled: !!authData?.token,
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        select: (data) => data.content
    })
}



export const useQueryUsers = (queryText, setQueryResult) => {

    const { data: authData } = authStore();

    const onSuccess = (data, variables, context) => {
        setQueryResult(data["content"]);
        console.log("user query success:", data);
    }

    const onError = (error, variables, context) => {
        console.log("error on querying users: ", error.message);
    }

    return useMutation({
        mutationFn: async () => {
            const response = await fetchUsersByQuery(USER_PATH, queryText, authData.token);
            return response.json();
        },
        onSuccess,
        onError,
    });
}