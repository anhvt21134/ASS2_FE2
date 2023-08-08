import { useGetProductByIdQuery, useUpdateProductMutation } from "@/api/product";
import { pause } from "@/utils/pause";
import { Button, Form, Input, Skeleton, message } from "antd";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

type FieldType = {
    name?: string;
    price?: string;
    image?: string;
    desc?: string;
};

const AdminProductEdit = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { idProduct } = useParams<{ idProduct: string }>();
    const [updateProduct, { isLoading: isUpdateLoading }] = useUpdateProductMutation();
    const { data: productData, isLoading: isProductLoading } = useGetProductByIdQuery(
        idProduct || ""
    );
    useEffect(() => {
        // lấy dữ liệu từ api và fill vào form
        form.setFieldsValue(productData);
    }, [productData]);
    const onFinish = (values: any) => {
        updateProduct({ ...values, id: idProduct })
            .unwrap()
            .then(async () => {
                messageApi.open({
                    type: "success",
                    content: "Cập nhật sản phẩm thành công !",
                });
                await pause(1000);
                navigate("/admin/product");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
            </header>
            {contextHolder}
            {isProductLoading ? (
                <Skeleton />
            ) : (
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[
                            { required: true, message: "Vui lòng nhập tên sản phẩm" },
                            { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[
                            { required: true, message: "Vui lòng giá tên sản phẩm" },
                            {
                                validator: (rule, value) => {
                                    if (value < 0) {
                                        return Promise.reject("Giá sản phẩm không được âm");
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Mô tả sản phẩm"
                        name="desc"
                        rules={[
                            { required: true, message: "Vui lòng nhập tên sản phẩm" },
                            { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Ảnh"
                        name="image"
                        rules={[
                            { required: true, message: "Vui lòng upload ảnh" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" danger htmlType="submit">
                            {isUpdateLoading ? (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            ) : (
                                "Cập nhật"
                            )}
                        </Button>
                        <Button
                            className="ml-2"
                            type="primary"
                            danger
                            htmlType="submit"
                            onClick={() => navigate("/admin/product")}
                        >
                            Quay lại
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </>
    );
};

export default AdminProductEdit;
