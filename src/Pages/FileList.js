import React, { useState } from 'react';
import { Table, Button, Input, Dropdown, Menu, Pagination, Card, Flex, Modal, Form, Space } from 'antd';
import { FilterOutlined, FileExcelOutlined, FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const FileList = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate()
  const columns = [
    { title: 'Phase', dataIndex: 'phase', key: 'phase' },
    { title: 'Block', dataIndex: 'block', key: 'block' },
    { title: 'Plot', dataIndex: 'plotNumber', key: 'plotNumber' },
    { title: 'Purpose', dataIndex: 'purpose', key: 'purpose' },
    { title: 'Property', dataIndex: 'property', key: 'property' },
    { title: 'Property Type', dataIndex: 'propertyType', key: 'propertyType' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Land Size', dataIndex: 'landSize', key: 'landSize' },
    { title: 'Land Unit', dataIndex: 'landUnit', key: 'landUnit' },
    { title: 'Covered Area', dataIndex: 'coveredArea', key: 'coveredArea' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
    { title: 'City', dataIndex: 'city', key: 'city' },
    { title: 'Street', dataIndex: 'street', key: 'street' },
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
      phase: 'Phase 1',
      block: 'A',
      plotNumber: '101',
      purpose: 'Residential',
      property: 'House',
      propertyType: 'Single Family',
      category: 'Luxury',
      status: 'Available',
      landSize: '500',
      landUnit: 'sqft',
      coveredArea: '3000',
      landCost: '500000',
      discount: '5%',
      country: 'USA',
      province: 'California',
      city: 'Los Angeles',
      street: 'Main St',
      address: '101 Main St',
      nameShare: 'John Doe',
      nominee: 'Jane Doe',
      relation: 'Spouse',
    },
  ];

  const handleSearch = (e) => setSearchText(e.target.value);

  const handleEdit = (record) => {
  };



  return (
    <Card title="File List">
      <div>
        <Space style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={() => navigate('/file')}>+ Add File</Button>
        </Space>
        <Flex justify={"space-between"} align={"center"}>
          <Input.Search
            placeholder="Search File"
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
          pagination={{ pageSize: 10 }}
          rowSelection={{ type: 'checkbox' }}
        />


      </div>
    </Card>
  );
};

export default FileList;
