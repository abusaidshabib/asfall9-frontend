import { useQuery } from "@tanstack/react-query";

const useSeller = email => {

    const url = `https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/users/seller/${email}`;

    const { data: datas = [], isLoading, refetch } = useQuery({
        queryKey: ['datas', email],
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
    return [datas, isLoading, refetch];
}

export default useSeller;