import React, { useState } from 'react';
import { Table, Button, Input, Dropdown, Menu, Pagination, Card, Flex, Modal, Form, Space } from 'antd';
import { FilterOutlined, FileExcelOutlined, FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';

const PaymentListInvoice = () => {
    const [searchText, setSearchText] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isTenantModalVisible, setIsTenantModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [form] = Form.useForm();
    const [tenantForm] = Form.useForm();

    const columns = [
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'tenanDatetName',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Group Name',
            dataIndex: 'Group Name',
            key: 'Group Name',
        },
        {
            title: 'Invoice',
            dataIndex: 'Invoice',
            key: 'Invoice',
        },
        {
            title: 'Account',
            dataIndex: 'Account',
            key: 'Account',
        },
        {
            title: 'Payment Type',
            dataIndex: 'Payment Type',
            key: 'Payment Type',
        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
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
            Date: '2024-08-01',
            Name: 'John Doe',
            'Group Name': 'Finance',
            Invoice: 'INV-001',
            Account: '123456',
            'Payment Type': 'Credit Card',
            Amount: '$500.00',
        },
        {
            key: '2',
            Date: '2024-08-02',
            Name: 'Jane Smith',
            'Group Name': 'Operations',
            Invoice: 'INV-002',
            Account: '654321',
            'Payment Type': 'Bank Transfer',
            Amount: '$750.00',
        },
        {
            key: '3',
            Date: '2024-08-03',
            Name: 'Robert Brown',
            'Group Name': 'HR',
            Invoice: 'INV-003',
            Account: '987654',
            'Payment Type': 'Cash',
            Amount: '$300.00',
        },
        {
            key: '4',
            Date: '2024-08-04',
            Name: 'Emily Johnson',
            'Group Name': 'IT',
            Invoice: 'INV-004',
            Account: '456789',
            'Payment Type': 'Online Payment',
            Amount: '$1,200.00',
        },
        {
            key: '5',
            Date: '2024-08-05',
            Name: 'Michael Davis',
            'Group Name': 'Marketing',
            Invoice: 'INV-005',
            Account: '112233',
            'Payment Type': 'Cheque',
            Amount: '$950.00',
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

    const handleAddTenant = () => {
        tenantForm.validateFields().then((values) => {
            console.log('New Tenant:', values);
            setIsTenantModalVisible(false);
            tenantForm.resetFields();
        });
    };

    return (
        <Card title="Invoice">
            <div>
                {/* <Space style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={() => setIsTenantModalVisible(true)}>+ Add Pa</Button>
                </Space> */}
                <Flex justify={"space-between"} align={"center"}>
                    <Input.Search
                        placeholder="Search Tenant"
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
                    title="Edit Tenant Details"
                    open={isModalVisible}
                    onCancel={handleCancel}
                    onOk={handleSave}
                >
                    <Form form={form} layout="vertical">
                        <Form.Item name="tenantName" label="Tenant Name" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="unitNumber" label="Unit Number" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="leaseStart" label="Lease Start" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="leaseEnd" label="Lease End" rules={[{ required: true }]}> <Input /> </Form.Item>
                    </Form>
                </Modal>

                {/* Modal for Adding Tenant */}
                <Modal
                    title="Add Tenant"
                    open={isTenantModalVisible}
                    onCancel={() => setIsTenantModalVisible(false)}
                    onOk={handleAddTenant}
                >
                    <Form form={tenantForm} layout="vertical">
                        <Form.Item name="tenantName" label="Tenant Name" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="unitNumber" label="Unit Number" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="leaseStart" label="Lease Start" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="leaseEnd" label="Lease End" rules={[{ required: true }]}> <Input /> </Form.Item>
                    </Form>
                </Modal>
            </div>
        </Card>
    );
};



export default PaymentListInvoice