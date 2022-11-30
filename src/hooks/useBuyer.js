import { useQuery } from "@tanstack/react-query";

const useSeller = email => {

    const url = `http://localhost:5000/users/buyer/${email}`;

    const { data: useB = [], isLoading, refetch } = useQuery({
        queryKey: ['useB', email],
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
    return [useB, isLoading, refetch];
}

export default useSeller;