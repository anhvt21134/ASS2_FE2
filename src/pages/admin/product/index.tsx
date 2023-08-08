import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { Table, Button, Popconfirm, Skeleton, message, Image } from "antd"
import { Link } from "react-router-dom";

const AdminProduct = () => {
    const { data, error, isLoading: isProductLoading } = useGetProductsQuery();
    const [removeProduct] = useRemoveProductMutation()
    const [messageApi, contextHolder] = message.useMessage();
    const dataSource = data?.map((item: any) => ({
        key: item.id,
        name: item.name,
        price: item.price,
        image: item.image

    }))
    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá sản phẩm',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (image: string) => <Image src={image} width={100} />,
        },


        {
            render: ({ key: id }: { key: number | string }) => (
                <div>
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc muốn xóa không ?"
                        onConfirm={() => {
                            removeProduct(id).unwrap().then(() => {
                                messageApi.open({
                                    type: "success",
                                    content: "Xóa sản phẩm thành công",
                                });
                            });
                        }}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button className="bg-emerald-500" >Xóa</Button>
                    </Popconfirm>
                    <Button className="bg-indigo-500 ml-2" type="primary" >
                        <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
                    </Button>
                </div>
            )
        }

    ];


    return (
        <div>
            <header className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>
            {contextHolder}
            {isProductLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    )
}

export default AdminProduct