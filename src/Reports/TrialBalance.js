import React from "react";
import { Card, Table, Input, Select, DatePicker, Button, Row, Col, Typography, Flex, Badge, Tag, Space } from "antd";
import { FilePdfOutlined, FileExcelOutlined, PrinterOutlined, FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const dataSource = [
    {
        key: "1",
        accountName: "Rent or Lease",
        debitAmount: "$24,241",
        creditAmount: "$0.00",
    },
    {
        key: "2",
        accountName: "Salary",
        debitAmount: "$3,872",
        creditAmount: "$0.00",
    },
    {
        key: "3",
        accountName: "Expense",
        debitAmount: "$0.00",
        creditAmount: "$2,587",
    },
    {
        key: "4",
        accountName: "Revenue",
        debitAmount: "$2,587",
        creditAmount: "$0.00",
    },
    {
        key: "5",
        accountName: "Supply Returns",
        debitAmount: "$22,587",
        creditAmount: "$0.00",
    },
    {
        key: "6",
        accountName: "Travel",
        debitAmount: "$0.00",
        creditAmount: "$9,753",
    },
    {
        key: "7",
        accountName: "Miscellaneous",
        debitAmount: "$0.00",
        creditAmount: "$14,474",
    },
    {
        key: "8",
        accountName: "Total",
        debitAmount: "$74,357",
        creditAmount: "$74,357",
    },
];

const columns = [
    {
        title: "Account Name",
        dataIndex: "accountName",
        key: "accountName",
    },
    {
        title: "Debit Amount",
        dataIndex: "debitAmount",
        key: "debitAmount",
    },
    {
        title: "Credit Amount",
        dataIndex: "creditAmount",
        key: "creditAmount",
    },
];

const TrialBalance = () => {
    return (
        <div style={{ padding: "24px", background: "#f9fafc" }}>
            {/* Header */}

            <Row gutter={16} style={{ marginBottom: "16px" }}>
                <Col span={16}>
                    <Title level={4}>Trial Balance</Title>
                </Col>

                <Col span={6}>
                    <RangePicker style={{ width: "100%" }} />
                </Col>
                <Col span={2}>
                    <Button danger block type="primary">Find</Button>
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
                title={() => "Account Details"}
                style={{ background: "#fff" }}
            />
        </div>
    );
};





export default TrialBalance