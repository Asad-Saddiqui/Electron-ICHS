import React, { useState } from 'react';
import { Table, Button, Input, Dropdown, Menu, Pagination, Card, Flex, Modal, Form, Space } from 'antd';
import { FilterOutlined, FileExcelOutlined, FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';

const TenantsList = () => {
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
            title: 'Tenant Name',
            dataIndex: 'tenantName',
            key: 'tenantName',
        },
        {
            title: 'Unit Number',
            dataIndex: 'unitNumber',
            key: 'unitNumber',
        },
        {
            title: 'Lease Start',
            dataIndex: 'leaseStart',
            key: 'leaseStart',
        },
        {
            title: 'Lease End',
            dataIndex: 'leaseEnd',
            key: 'leaseEnd',
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
            tenantName: 'John Doe',
            unitNumber: 'A101',
            leaseStart: '2024-01-01',
            leaseEnd: '2025-01-01',
        },
        {
            key: '2',
            tenantName: 'Jane Smith',
            unitNumber: 'B202',
            leaseStart: '2023-06-15',
            leaseEnd: '2024-06-15',
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
        <Card title="Tenants List">
            <div>
                <Space style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={() => setIsTenantModalVisible(true)}>+ Add Tenant</Button>
                </Space>
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

export default TenantsList;
