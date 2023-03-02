import { Button, Form, Input } from 'antd';
import Title from "antd/lib/typography/Title";


const ContactForm = ({addContact}) => {
    const [form] = Form.useForm();

    const getNewID = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = (values) => {
        addContact({
            key: getNewID(),
            ...values,
            createdAt: new Date().getTime(),
        });
        form.resetFields();
    };

    return (
        <>
            <Title style={{margin: '24px'}}>Add Contact</Title>
            <Form form={form} layout={'vertical'} initialValues={{layout: 'vertical'}}
                  onFinish={onFinish}
                  autoComplete="off"
            >
                <Form.Item name="email" label="Email" tooltip="This is a required field"
                           rules={[{required: true, type: "email", message: "Invalid Email Format"}]}
                >
                    <Input placeholder="Enter Contact Email" />
                </Form.Item>
                <Form.Item name="name" label="Name" tooltip="This is a required field"
                           rules={[{required: true, message: "Name is required"}]}>
                    <Input placeholder="Enter Contact Name" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                    <Button type="default" onClick={onReset}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default ContactForm;
