import React, { useState } from 'react';
import { Table, Button, Input, Dropdown, Menu, Pagination, Card, Flex, Modal, Form, Space } from 'antd';
import { FilterOutlined, FileExcelOutlined, FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';

const BankList = () => {
    const [searchText, setSearchText] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [form] = Form.useForm();

    const columns = [
        {
            title: 'Bank Name',
            dataIndex: 'bankName',
            key: 'bankName',
        },
        {
            title: 'Branch',
            dataIndex: 'branch',
            key: 'branch',
        },
        {
            title: 'Account No',
            dataIndex: 'accountNo',
            key: 'accountNo',
        },
        {
            title: 'Account Name',
            dataIndex: 'accountName',
            key: 'accountName',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item onClick={() => handleEdit(record)}>Edit</Menu.Item>
                        <Menu.Item>Delete</Menu.Item>
                    </Menu>
                }>
                    <Button>Action</Button>
                </Dropdown>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            bankName: 'ABC Bank',
            branch: 'Downtown Branch',
            accountNo: '12345678',
            accountName: 'John Doe',
            phone: '+1 234 567 890',
        },
        {
            key: '2',
            bankName: 'XYZ Bank',
            branch: 'Uptown Branch',
            accountNo: '87654321',
            accountName: 'Jane Smith',
            phone: '+1 987 654 321',
        },
    ];

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    const handleEdit = (record) => {
        setEditingRecord(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = () => {
        form.validateFields().then((values) => {
            console.log('Updated Record:', { ...editingRecord, ...values });
            setIsModalVisible(false);
        });
    };

    return (
        <Card title="Bank List">
            <div>
                <Button type="primary" style={{ marginBottom: 16 }}>+ Add Bank</Button>
                <Flex justify={"space-between"} align={"center"}>
                    <Input.Search
                        placeholder="Search List"
                        onChange={handleSearch}
                        style={{ width: 500, marginBottom: 16 }}
                    />
                    <div style={{ marginBottom: 16 }}>
                        <Button variant={'outlined'} color={'danger'} icon={<FilterOutlined />} style={{ marginRight: 8 }}>Filter</Button>
                        <Button variant={'outlined'} color={"primary"} icon={<FileExcelOutlined />} style={{ marginRight: 8 }} />
                        <Button variant={'outlined'} icon={<FilePdfOutlined />} style={{ marginRight: 8, borderColor: "green", color: "green" }} />
                        <Button variant={'outlined'} style={{ borderColor: "orange", color: "orange" }} icon={<PrinterOutlined />} />
                    </div>
                </Flex>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    rowSelection={{ type: 'checkbox' }}
                />
                <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
                    <span>Rows per page: </span>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={data.length}
                        onChange={handlePageChange}
                        showSizeChanger
                    />
                </div>

                {/* Modal for Editing */}
                <Modal
                    title="Edit Bank Details"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    onOk={handleSave}
                >
                    <Form form={form} layout="vertical">
                        <Form.Item name="bankName" label="Bank Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="branch" label="Branch" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="accountNo" label="Account No" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="accountName" label="Account Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </Card>
    );
};

export default BankList;
