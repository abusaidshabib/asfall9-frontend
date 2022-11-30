import { useQuery } from "@tanstack/react-query";

const useSeller = email => {

    const url = `http://localhost:5000/users/admin/${email}`;

    const { data: useA = [], isLoading, refetch } = useQuery({
        queryKey: ['useA', email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return [useA, isLoading, refetch];
}

export default useSeller;