import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Modal,
    Form,
    Input,
    DatePicker,
    Select,
} from "antd";

const AddExpense = ({
    isExpenseModalVisible,
    handleExpenseCancel,
    onFinish,
}) => {
    const [form] = Form.useForm();
    const tagValue = Form.useWatch('tag', form); // Watch the "tag" value

    return (
        <Modal
            style={{ fontWeight: 600 }}
            title="Add Expense"
            visible={isExpenseModalVisible}
            onCancel={handleExpenseCancel}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={(values) => {
                    onFinish(values, "expense");
                    form.resetFields();
                }}
            >
                <Form.Item
                    style={{ fontWeight: 600 }}
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input the name of the transaction!",
                        },
                    ]}
                >
                    <Input type="text" className="custom-input" />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 600 }}
                    label="Amount"
                    name="amount"
                    rules={[
                        { required: true, message: "Please input the expense amount!" },
                    ]}
                >
                    <Input type="number" className="custom-input" />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 600 }}
                    label="Date"
                    name="date"
                    rules={[
                        { required: true, message: "Please select the expense date!" },
                    ]}
                >
                    <DatePicker className="custom-input" format="YYYY-MM-DD" />
                </Form.Item>

                <Form.Item
                    label="Tag"
                    name="tag"
                    style={{ fontWeight: 600 }}
                    rules={[{ required: true, message: "Please select a tag!" }]}
                >
                    <Select className="select-input-2">
                        <Select.Option value="food">Food</Select.Option>
                        <Select.Option value="education">Education</Select.Option>
                        <Select.Option value="office">Office</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                    </Select>
                </Form.Item>

                {/* Conditionally rendered 'Other' field */}
                {tagValue === 'other' && (
                    <Form.Item
                        style={{ fontWeight: 600 }}
                        label="Other"
                        name="other"
                        rules={[
                            {
                                required: true,
                                message: "Please input the type of the transaction!",
                            },
                        ]}
                    >
                        <Input type="text" className="custom-input" />
                    </Form.Item>
                )}

                <Form.Item>
                    <Button className="btn btn-blue" type="primary" htmlType="submit">
                        Add Expense
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

AddExpense.propTypes = {
    isExpenseModalVisible: PropTypes.bool.isRequired,
    handleExpenseCancel: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
};

export default AddExpense;
