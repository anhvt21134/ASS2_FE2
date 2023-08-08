import { useAddProductMutation } from "@/api/product";
import { pause } from "@/utils/pause";
import { Button, Form, Input, message } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
type FieldType = {
    name?: string;
    price?: number;
    image?: string;
    desc?: string;
};

const AdminProductAdd = () => {
    const [addProduct, { isLoading: isAddLoading }] = useAddProductMutation();
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        addProduct(values)
            .unwrap()
            .then(async () => {
                form.resetFields();
                messageApi.open({
                    type: "success",
                    content: "Thêm sản phẩm thành công.",
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
                        { max: 21, message: "Sản phẩm tối thiểu 21 ký tự" }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Giá sản phẩm"
                    name="price"
                    rules={[
                        { required: true, message: "Vui lòng nhập giá sản phẩm" },
                        {
                            validator: (rule, value) => {
                                if (value < 0) {
                                    return Promise.reject("Giá sản phẩm không được âm");
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Mô tả sản phẩm"
                    name="desc"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm" },
                        { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                        { max: 21, message: "Sản phẩm tối thiểu 21 ký tự" }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Ảnh"
                    name="image"
                    rules={[
                        { required: true, message: "Vui lòng upload ảnh" },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isAddLoading ? (
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        ) : (
                            "Thêm"
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

        </>
    );
};

export default AdminProductAdd;
