import { useGetProductsQuery } from "@/api/product";
// import { useAppDispatch } from "@/store/hook";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Home = () => {
    // const dispatch= useAppDispatch();
    const { data: products, error, isLoading: isHomeLoading } = useGetProductsQuery()

    if (isHomeLoading) return <Skeleton count={3} />;
    if (error) {
        if ("data" in error && "status" in error) {
            return (
                <div>
                    {error.status} - {JSON.stringify(error.data)}
                </div>
            );
        }
    }
    return (
        <div>
            <div className="container mx-auto">
                <img className="w-[1900px] h-[500px] pl-16 py-7" src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/08/03/1200x382.jpg" alt="" />
                <h1 className="text-xl py-6 font-bold">SẢN PHẨM NỔI BẬT NHẤT</h1>
                <div className="grid grid-cols-4 gap-3 ">
                    {products?.map((product: any) => (
                        <div key={product.id} className="mb-3">
                            <Link to={`/${product.id}/detail`}><img src={product.image} alt="" className="text-right w-[200px]" /></Link>

                            <h4 className="mt-4 font-bold "><Link to={`/${product.id}/detail`}>{product.name}</Link>

                            </h4>

                            <p className="mt-2 font-mono font-bold text-red-500 float-left mr-2 text-xm">
                                {product.price} ₫
                            </p>
                        </div>
                    ))}
                </div>
                <hr className="pb-10" />
            </div>



        </div>
    );
};

export default Home