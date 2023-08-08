import { useGetProductByIdQuery } from '@/api/product';
import { useParams } from 'react-router-dom';
import { decrease, increase, remove } from "../slices/Cart";

const ProductDetail = () => {
    const { iddetail } = useParams<{ iddetail: string }>();
    const { data: product, error, isLoading: isDetailLoading } = useGetProductByIdQuery(iddetail || "")

    if (isDetailLoading) return;
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
        <div className="mx-auto">
            <div className="ml-32 my-4">
                <a className="mx-4 text-gray-400" >Trang Chủ

                </a>

                <a className="mx-4 text-gray-400">{product?.name}</a>
            </div>
            {product && (
                <div key={product?.id} className="mb-3">
                    <h1 className="text-2xl ml-32 my-4 " >Sản Phẩm {product.name}</h1>
                    <hr />
                    <div className="flex flex-row mt-10 mb-32">
                        <div className="basis-3/5 ">
                            <img className="w-[350px] h-[400px] ml-32" src={product.image} alt="" />
                        </div>
                        <div className="basis-4/5" >
                            <p className="text-red-500 text-xl float-left mr-5 font-bold"> {product.price} ₫</p>
                            <div className="w-70 h-8  mt-4">
                                <br />
                                <h5>Dung Lượng</h5>
                                <div className=" w-14  h-7 border-solid rounded-md  bg-emerald-700">64GB</div>
                                <div className=" w-14  h-7 border-solid border-3 border-black mt-3 bg-emerald-700  rounded-md">128GB</div>
                                <div className=" w-14  h-7 border-solid border-3 border-black mt-3 bg-emerald-700 rounded-md">256GB</div>



                            </div>

                            <button className="bg-red-600 w-[200px] h-[45px] text-white mt-64 rounded-md float-left">Mua Ngay</button>
                            <img className="mt-64 pl-6 " src="icon.png" alt="" />

                        </div>


                    </div>
                    <div className="cauhinh bg-gray-200 h-[200px] w-[1300px] m-auto border-yellow-300">
                        <h1 className="text-red-600 text-center text-xm font-bold pt-2">ĐẶC ĐIỂM NỔI BẬT</h1>
                        <p className="ml-5 mt-3">
                            <ul className="ml-5 mt-3">
                            </ul>
                            <h5>{product.desc}</h5>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail