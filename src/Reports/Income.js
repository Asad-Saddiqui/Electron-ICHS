import React from "react";
import { Card, Table, Input, Select, DatePicker, Button, Row, Col, Typography, Flex, Badge, Tag, Space } from "antd";
import { FilePdfOutlined, FileExcelOutlined, PrinterOutlined, FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const dataSource = [
    {
        key: "1",
        incomeSource: "Product Sale",
        January: "$0.00",
        February: "$2,587",
        March: "$0.00",
        April: "$0.00",
        May: "$0.00",
        June: "$14,210",
        July: "$0.00",
        August: "$0.00",
        September: "$2,587",
        October: "$3,587",
        November: "$2,257",
        December: "$4,132",
    },
    {
        key: "2",
        incomeSource: "Service",
        January: "$0.00",
        February: "$1,500",
        March: "$0.00",
        April: "$0.00",
        May: "$0.00",
        June: "$0.00",
        July: "$0.00",
        August: "$2,387",
        September: "$1,587",
        October: "$4,165",
        November: "$3,985",
        December: "$2,635",
    },
];

const columns = [
    {
        title: "Income Source",
        dataIndex: "incomeSource",
        key: "incomeSource",
    },
    {
        title: "January",
        dataIndex: "January",
        key: "January",
    },
    {
        title: "February",
        dataIndex: "February",
        key: "February",
    },
    {
        title: "March",
        dataIndex: "March",
        key: "March",
    },
    {
        title: "April",
        dataIndex: "April",
        key: "April",
    },
    {
        title: "May",
        dataIndex: "May",
        key: "May",
    },
    {
        title: "June",
        dataIndex: "June",
        key: "June",
    },
    {
        title: "July",
        dataIndex: "July",
        key: "July",
    },
    {
        title: "August",
        dataIndex: "August",
        key: "August",
    },
    {
        title: "September",
        dataIndex: "September",
        key: "September",
    },
    {
        title: "October",
        dataIndex: "October",
        key: "October",
    },
    {
        title: "November",
        dataIndex: "November",
        key: "November",
    },
    {
        title: "December",
        dataIndex: "December",
        key: "December",
    },
];


const dataSourcetotal = [{
    key: "1",
    incomeSource: "Product Sale",
    January: "$0.00",
    February: "$2,587",
    March: "$0.00",
    April: "$0.00",
    May: "$0.00",
    June: "$14,210",
    July: "$0.00",
    August: "$0.00",
    September: "$2,587",
    October: "$3,587",
    November: "$2,257",
    December: "$4,132",
},]

const Income = () => {
    return (
        <div style={{ padding: "24px", background: "#f9fafc" }}>
            {/* Header */}

            <Row gutter={16} style={{ marginBottom: "16px" }}>
                <Col span={16}>
                    <Title level={4}>Income</Title>
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
                                <div style={{ color: "#9aa3c4" }}>Revenue</div>
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
                                <div style={{ color: "#d48806" }}>Invoice</div>
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
                                <div style={{ color: "#52c41a" }}>Total Income</div>
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
                title={() => <h3>Revenue - Jan - Dec 2022</h3>}
                style={{ background: "#fff" }}
            />
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered
                title={() => <h3>Invoice - Jan - Dec 2022</h3>}
                style={{ background: "#fff" }}
            />
            <Table
                columns={columns}
                dataSource={dataSourcetotal}
                pagination={false}
                bordered
                title={() => <>
                    <h3>Total </h3>
                    <p>Revenue + Invoice</p>
                </>}
                style={{ background: "#fff" }}
            />

        </div>
    );
};



export default Income