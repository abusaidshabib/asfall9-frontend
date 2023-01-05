import { useQuery } from "@tanstack/react-query";

const useSeller = email => {

    const url = `https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/users/buyer/${email}`;

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