import { BarChartOutlined, BugOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';

import { Avatar, Button, Card, Col, Flex, List, Row, Table, Tag, Typography } from 'antd'
import React from 'react'
const { Text, Title } = Typography
function Dashboard() {
    const cardData = [
        {
            icon: <BarChartOutlined style={{ fontSize: '24px', color: '#004085' }} />,
            value: '714k',
            label: 'Weekly Sales',
            bgColor: '#D6EAF8',
            textColor: '#004085',
        },
        {
            icon: <UserOutlined style={{ fontSize: '24px', color: '#004085' }} />,
            value: '1.35m',
            label: 'New Users',
            bgColor: '#D4F1F9',
            textColor: '#004085',
        },
        {
            icon: <ShoppingOutlined style={{ fontSize: '24px', color: '#0E6655' }} />,
            value: '1.72m',
            label: 'Item Orders',
            bgColor: '#E9F7EF',
            textColor: '#0E6655',
        },
        {
            icon: <BugOutlined style={{ fontSize: '24px', color: '#7B241C' }} />,
            value: '234',
            label: 'Bug Reports',
            bgColor: '#FDEDEC',
            textColor: '#7B241C',
        },
    ];
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
        },
        {
            title: 'Voucher No',
            dataIndex: 'voucherNo',
            key: 'voucherNo',
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },
        {
            title: 'Mode',
            dataIndex: 'mode',
            key: 'mode',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = '';
                switch (status) {
                    case 'Completed':
                        color = 'green';
                        break;
                    case 'Unpaid':
                        color = 'red';
                        break;
                    case 'Partial':
                        color = 'purple';
                        break;
                    default:
                        color = 'default';
                }
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];

    const data = [
        {
            key: '1',
            date: '30/12/2021',
            customer: 'Peter',
            voucherNo: '58755',
            dueDate: '30/12/2021',
            mode: 'Cheque',
            status: 'Completed',
            amount: '$4,582',
        },
        {
            key: '2',
            date: '28/12/2021',
            customer: 'Wileen Mylchreest',
            voucherNo: '53755',
            dueDate: '28/07/2021',
            mode: '------',
            status: 'Unpaid',
            amount: '$5,582',
        },
        {
            key: '3',
            date: '25/12/2021',
            customer: 'Steve Walken',
            voucherNo: '58725',
            dueDate: '25/04/2021',
            mode: 'Transfer',
            status: 'Completed',
            amount: '$6,882',
        },
        {
            key: '4',
            date: '30/12/2021',
            customer: 'Peter',
            voucherNo: '58755',
            dueDate: '20/03/2021',
            mode: 'Cheque',
            status: 'Completed',
            amount: '$4,582',
        },
        {
            key: '5',
            date: '18/01/2021',
            customer: 'Maria Elizabeth',
            voucherNo: '65755',
            dueDate: '06/02/2021',
            mode: 'Cash',
            status: 'Partial',
            amount: '$5,540',
        },
    ];
    const users = [
        { name: 'John David', role: 'Manager', signInTime: '09:30', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Killiyan Ampa', role: 'Manager', signInTime: '09:25', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Brandon Tylors', role: 'Manager', signInTime: '09:20', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=3' },
        { name: 'Killidyan Ampa', role: 'Manager', signInTime: '09:25', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=2' },
        // { name: 'Branfdon ', role: 'Manager', signInTime: '09:20', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=3' },
        // { name: 'Branfdon ', role: 'Manager', signInTime: '09:20', status: 'Online', avatar: 'https://i.pravatar.cc/150?img=3' },

    ];

    return (
        <div >

            <Row gutter={[16, 16]}>
                {cardData.map((card, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                        <Card
                            style={{
                                borderRadius: '8px',
                                textAlign: 'center',
                                backgroundColor: card.bgColor,
                                padding: '20px',
                            }}
                            bodyStyle={{ padding: 0 }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '16px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {card.icon}
                                </div>
                            </div>
                            <h2 style={{ color: card.textColor }}>{card.value}</h2>
                            <p style={{ color: card.textColor, margin: 0 }}>{card.label}</p>
                        </Card>
                    </Col>
                ))}
                <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                    <Card
                        title={
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Recent Voucher</span>
                                <Button type="primary" size="small">List 5</Button>
                            </div>
                        }
                        bordered={false}
                        style={{ width: '100%', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)', padding: 0 }}
                    >
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            className='dashboard-table'
                            scroll={{ x: 'max-content' }} // Makes the table horizontally scrollable on smaller screens
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                    <Card
                        title={
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Recent Voucher</span>
                                <Button type="primary" size="small">List 5</Button>
                            </div>
                        }
                        bordered={false}
                        style={{ width: '100%', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)', padding: 0 }}
                    >

                        <List
                            dataSource={users}
                            renderItem={(user, index) => (
                                <List.Item key={index} style={{ padding: 0, marginBottom: 8, display: 'flex', alignItems: 'center' }}>
                                    <Avatar src={user.avatar} size={47} style={{ marginRight: 16 }} />
                                    <div style={{ flex: 1 }}>
                                        <Text level={5} style={{ margin: 0 }}>{user.name}</Text>

                                    </div>
                                    <Tag bordered={false} color={user.status === 'Online' ? 'green' : 'red'}>{user.status}</Tag>
                                </List.Item>
                            )}
                        />
                    </Card>

                </Col>
            </Row>

        </div>
    )
}

export default Dashboard