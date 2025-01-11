import React from "react";
import { Card, Table, Input, Select, DatePicker, Button, Row, Col, Typography, Flex, Badge, Tag, Space } from "antd";
import { FilePdfOutlined, FileExcelOutlined, PrinterOutlined, FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

// Sample table data
const tableData = [
  {
    key: "1",
    date: "01/01/2021",
    accountName: "National Bank",
    status: "Paid",
    payment: "Cash",
    remark: "Product Sales",
    amount: 1230,
  },
  {
    key: "2",
    date: "01/01/2021",
    accountName: "Royal Bank of Scotland",
    status: "Paid",
    payment: "Cash",
    remark: "Purchase",
    amount: 6970,
  },
  {
    key: "3",
    date: "01/01/2021",
    accountName: "Royal Bank of Scotland",
    status: "Paid",
    payment: "Cash",
    remark: "Purchase",
    amount: 6970,
  },
  {
    key: "4",
    date: "01/01/2021",
    accountName: "Royal Bank of Scotland",
    status: "Paid",
    payment: "Cash",
    remark: "Purchase",
    amount: 6970,
  },
  {
    key: "5",
    date: "01/01/2021",
    accountName: "Royal Bank of Scotland",
    status: "Paid",
    payment: "Cash",
    remark: "Purchase",
    amount: 6970,
  },
  // Add more data here...
];

// Table columns
const tableColumns = [
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Account Name", dataIndex: "accountName", key: "accountName" },
  { title: "Status", dataIndex: "status", key: "status" },
  { title: "Payment", dataIndex: "payment", key: "payment" },
  { title: "Remark", dataIndex: "remark", key: "remark" },
  { title: "Amount", dataIndex: "amount", key: "amount", align: "right" },
];

const Dashboard = () => {
  return (
    <div style={{ padding: "24px", background: "#f9fafc" }}>
      {/* Header */}

      <Row gutter={16} style={{ marginBottom: "16px" }}>
        <Col span={16}>
          <Title level={4}>Transaction</Title>
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
        <Col span={8}>
          <Card style={{ background: "#fff0f6", color: "#eb2f96" }} bordered={false}>
            <Flex justify={'space-between'}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>$24,201</div>
                <div style={{ color: "#eb2f96" }}>Card</div>
              </div>
              <div>
                <Tag color="#eb2f96">+44%%</Tag>
              </div>
            </Flex>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ background: "#e6f7ff", color: "#1890ff" }} bordered={false}>
            <Flex justify={'space-between'}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>$68,593</div>
                <div style={{ color: "#1890ff" }}>Cheque</div>
              </div>
              <div>
                <Tag color="#1890ff">+44%%</Tag>
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
        columns={tableColumns}
        dataSource={tableData}
        pagination={false}
        bordered
        style={{ background: "#fff" }}
      />
    </div>
  );
};

export default Dashboard;
