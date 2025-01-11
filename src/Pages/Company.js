import React, { useState } from 'react';
import { Table, Button, Input, Dropdown, Menu, Pagination, Card, Flex, Modal, Form, Space } from 'antd';
import { FilterOutlined, FileExcelOutlined, FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';

const CompanyList = () => {
    const [searchText, setSearchText] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCompanyModalVisible, setIsCompanyModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [form] = Form.useForm();
    const [companyForm] = Form.useForm();
    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Registration No',
            dataIndex: 'registrationNo',
            key: 'registrationNo',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
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
            companyName: 'Tech Corp',
            registrationNo: '12345',
            address: '123 Tech Street, NY',
            phone: '+1 234 567 890',
        },
        {
            key: '2',
            companyName: 'Biz Solutions',
            registrationNo: '67890',
            address: '456 Biz Avenue, CA',
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

    const handleAddCompany = () => {
        companyForm.validateFields().then((values) => {
            console.log('New Company:', values);
            setIsCompanyModalVisible(false);
            companyForm.resetFields();
        });
    };

    return (
        <Card title="Company List">
            <div>
                <Space style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={() => setIsCompanyModalVisible(true)}>+ Add Company</Button>
                </Space>
                <Flex justify={"space-between"} align={"center"}>
                    <Input.Search
                        placeholder="Search Company"
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
                <Modal
                    title="Edit Company Details"
                    open={isModalVisible}
                    onCancel={handleCancel}
                    onOk={handleSave}
                >
                    <Form form={form} layout="vertical">
                        <Form.Item name="companyName" label="Company Name" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="registrationNo" label="Registration No" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="address" label="Address" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}> <Input /> </Form.Item>
                    </Form>
                </Modal>
                <Modal
                    title="Add Company"
                    open={isCompanyModalVisible}
                    onCancel={() => setIsCompanyModalVisible(false)}
                    onOk={handleAddCompany}
                >
                    <Form form={companyForm} layout="vertical">
                        <Form.Item name="companyName" label="Company Name" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="registrationNo" label="Registration No" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="address" label="Address" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}> <Input /> </Form.Item>
                    </Form>
                </Modal>
            </div>
        </Card>
    );
};

export default CompanyList;
