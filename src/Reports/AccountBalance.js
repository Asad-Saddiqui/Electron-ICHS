import React from "react";
import { Card, Table, Input, Select, DatePicker, Button, Row, Col, Typography, Flex, Badge, Tag, Space } from "antd";
import { FilePdfOutlined, FileExcelOutlined, PrinterOutlined, FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const dataSource = [
    {
        key: "1",
        date: "01/01/2021",
        accountName: "Cash",
        openingAmount: "$57,855",
        addAmount: "$57,855",
        totalAmount: "$57,855",
        expense: "$57,855",
        closingBalance: "$57,855",
    },
    {
        key: "2",
        date: "01/01/2021",
        accountName: "Royal Bank of Scotland",
        openingAmount: "$36,147",
        addAmount: "$36,147",
        totalAmount: "$36,147",
        expense: "$36,147",
        closingBalance: "$36,147",
    },
    {
        key: "3",
        date: "01/01/2021",
        accountName: "Cash",
        openingAmount: "$31,147",
        addAmount: "$31,147",
        totalAmount: "$31,147",
        expense: "$31,147",
        closingBalance: "$31,147",
    },
    {
        key: "4",
        date: "03/01/2021",
        accountName: "Fadeweek Central Bank",
        openingAmount: "$21,147",
        addAmount: "$21,147",
        totalAmount: "$21,147",
        expense: "$21,147",
        closingBalance: "$21,147",
    },
    {
        key: "5",
        date: "03/01/2021",
        accountName: "Eastern Bank Ltd.",
        openingAmount: "$41,147",
        addAmount: "$41,147",
        totalAmount: "$41,147",
        expense: "$41,147",
        closingBalance: "$41,147",
    },
];

const columns = [
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Account Name",
        dataIndex: "accountName",
        key: "accountName",
    },
    {
        title: "Opening Amount",
        dataIndex: "openingAmount",
        key: "openingAmount",
    },
    {
        title: "Add Amount",
        dataIndex: "addAmount",
        key: "addAmount",
    },
    {
        title: "Total Amount",
        dataIndex: "totalAmount",
        key: "totalAmount",
    },
    {
        title: "Expense",
        dataIndex: "expense",
        key: "expense",
    },
    {
        title: "Closing Balance",
        dataIndex: "closingBalance",
        key: "closingBalance",
    },
];
const AccountBalance = () => {
    return (
        <div style={{ padding: "24px", background: "#f9fafc" }}>
            {/* Header */}

            <Row gutter={16} style={{ marginBottom: "16px" }}>
                <Col span={16}>
                    <Title level={4}>Account Balance</Title>
                </Col>
                <Col span={4}>
                    <Select defaultValue="Monthly" style={{ width: "100%" }}>
                        <Option value="Monthly">Monthly</Option>
                        <Option value="Weekly">Weekly</Option>
                    </Select>
                </Col>
                <Col span={4}>
                    <RangePicker style={{ width: "100%" }} />
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>

                <Col span={8}>
                    <Card style={{ background: "#f3f6fe", color: "#3b60db" }} bordered={false}>
                        <Flex justify={'space-between'}>
                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "bold" }}>$241,575</div>
                                <div style={{ color: "#9aa3c4" }}>Total Transaction</div>
                            </div>
                            <div>
                                <Tag color="#9aa3c4">+99%</Tag>
                            </div>
                        </Flex>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={{ background: "#fff7e6", color: "#d48806" }} bordered={false}>


                        <Flex justify={'space-between'}>

                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "bold" }}>$54,472</div>
                                <div style={{ color: "#d48806" }}>Cash</div>
                            </div>
                            <div>
                                <Tag color="#d48806">+44%%</Tag>
                            </div>
                        </Flex>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={{ background: "#f6ffed", color: "#52c41a" }} bordered={false}>
                        <Flex justify={'space-between'}>

                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "bold" }}>$74,247</div>
                                <div style={{ color: "#52c41a" }}>Bank</div>
                            </div>
                            <div>
                                <Tag color="#52c41a">+44%%</Tag>
                            </div>
                        </Flex>

                    </Card>
                </Col>
            </Row>

            <Flex justify={"space-between"} style={{ marginBottom: "10px" }}>
                <div>
                    <Input placeholder="Search List" style={{ width: "400px" }} />
                </div>
                <div >
                    <Button variant={'outlined'} color={'danger'} icon={<FilterOutlined />} style={{ marginRight: 8 }}>Filter</Button>
                    <Button variant={'outlined'} color={"primary"} icon={<FileExcelOutlined />} style={{ marginRight: 8 }} />
                    <Button variant={'outlined'} icon={<FilePdfOutlined />} style={{ marginRight: 8, borderColor: "green", color: "green" }} />
                    <Button variant={'outlined'} style={{ borderColor: "orange", color: "orange" }} icon={<PrinterOutlined />} />
                </div>
            </Flex>

            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered
                style={{ background: "#fff" }}
            />
        </div>
    );
};



export default AccountBalance