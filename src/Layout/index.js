import React, { useState } from 'react';
import {
    AppstoreOutlined,
    BankOutlined,
    CalendarOutlined,
    FileOutlined,
    MailOutlined,
    MoneyCollectOutlined,
    PlusOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Flex, Layout, Menu, Switch, Dropdown, Drawer } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Sider, Footer } = Layout;
function Index() {
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light');
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(false)
    const toggleTheme = (checked) => {
        setTheme(checked ? 'dark' : 'light');
    };

    const items = [
        {
            key: '',
            label: 'Dashboard',
            icon: <AppstoreOutlined />
        },
        {
            key: 'file ',
            label: 'File ',
            icon: <FileOutlined />,
            children: [
                {
                    key: 'File',
                    label: 'Create File'
                },
                {
                    key: 'file-list',
                    label: 'File List'
                }
            ]

        },
        {
            key: 'user',
            label: 'User ',
            icon: <UserOutlined />,
        },

        {
            key: 'company',
            label: 'Company ',
            icon: <BankOutlined />,
            children: [
                {
                    key: 'Tenants',
                    label: 'Tenants'
                },
                {
                    key: 'company',
                    label: 'Company'
                }
            ]
        },
        {
            key: 'bank',
            label: 'Bank ',
            icon: <BankOutlined />,
            children: [
                {
                    key: 'bank',
                    label: 'Add Bank'
                },
                {
                    key: 'bank-list',
                    label: ' Bank List'
                },

            ]
        },
        {
            key: 'Payment',
            label: 'Payment ',
            icon: <MoneyCollectOutlined />,
            children: [
                {
                    key: 'payment-Voucher',
                    label: 'Payment Voucher'
                },
                {
                    key: 'payment-list-Voucher',
                    label: 'Payment list Voucher'
                },
                {
                    key: 'payment-Invoice',
                    label: ' Payment Invoice'
                },
                {
                    key: 'payment-list-Invoice',
                    label: ' Payment list Invoice'
                },

            ]
        },
        {
            key: 'Reports',
            label: 'Reports ',
            icon: <BankOutlined />,
            children: [
                {
                    key: 'Transaction',
                    label: 'Transection'
                },
                {
                    key: 'Account Balance',
                    label: 'Account Balance'
                },
                {
                    key: 'Income',
                    label: 'Income'
                }, {
                    key: 'Expense',
                    label: 'Expense'
                },
                {
                    key: 'Trial Balance',
                    label: 'Trial Balance'
                }, 
                {
                    key: 'Balance Sheet',
                    label: 'Balance Sheet'
                }
            ]
        },
    ];

    const profileMenu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: 'Account Settings'
                },
                {
                    key: '2',
                    label: 'Logout'
                }
            ]}
        />
    );
    const handleChangeMeue = (path) => {
        setOpen(false)
        navigate(path?.key)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout >
                <Sider
                    collapsed={true}
                    theme='dark'
                    style={{ marginTop: "40px" }}
                >


                    <Menu
                        mode='inline'
                        theme={"dark"}
                        items={items}
                        onClick={handleChangeMeue}
                    />


                </Sider>
                <Header
                    style={{
                        position: 'fixed',
                        top: 0,
                        width: `100%`,
                        zIndex: 1000,
                        height: "40px",
                        background: theme === 'dark' ? '#001529' : 'white',
                        color: theme === 'dark' ? 'white' : '#001529',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 20px'
                    }}
                >
                    <div style={{ fontWeight: 'bold' }}>Dashboard</div>
                    <Flex gap={10} align='center'>

                        {/* <Button onClick={() => setOpen(true)}>
                            <PlusOutlined />
                        </Button> */}
                        <Switch
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                            checkedChildren='Dark'
                            unCheckedChildren='Light'
                        />
                        <Dropdown overlay={profileMenu} trigger={['click']}>
                            <Avatar style={{ cursor: 'pointer' }}>U</Avatar>
                        </Dropdown>
                    </Flex>
                </Header>

                <Drawer open={open} onClose={() => setOpen(false)} placement='left' width={300}
                    title={<Header style={{ background: "white" }} >Header</Header>}
                    footer={<Footer >Footer</Footer>}
                    closeIcon={false}

                >

                    <Menu
                        mode='inline'
                        theme={theme}
                        items={items}
                        onClick={handleChangeMeue}
                    />
                </Drawer>
                <Content
                    style={{
                        padding: '20px',
                        marginTop: 40,
                        minHeight: 'calc(100vh - 40px)',
                        background: theme === 'dark' ? '#111111' : '#f0f0f0',
                        color: theme === 'dark' ? '#ffffff' : '#000000'
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Index;
