import React from "react";
import { Card, Descriptions, Table, Input, Select, DatePicker, Button, Row, Col, Typography, Flex, Badge, Tag, Space, Divider } from "antd";
import { FilePdfOutlined, FileExcelOutlined, PrinterOutlined, FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const dataSource = [
    {
        key: "1",
        account: "Accounts Receivable",
        amount: "$241",
    },
    {
        key: "2",
        account: "Cash on Hand",
        amount: "$273",
    },

    {
        key: "5",
        account: "Total Current Assets",
        amount: "$1,892",
    },
];

// Columns for the table
const columns = [
    {
        title: "Account",
        dataIndex: "account",
        key: "account",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
    },
];

const BalanceSheet = () => {
    return (
        <div style={{ padding: "24px", background: "#f9fafc" }}>

            <Row gutter={16} style={{ marginBottom: "16px" }}>
                <Col span={16}>
                    <Title level={4}>Balance Sheet </Title>
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
                                <div style={{ color: "#9aa3c4" }}>Total Assets</div>
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
                                <div style={{ color: "#d48806" }}>Total Liabilities</div>
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
                                <div style={{ color: "#52c41a" }}>Total Income </div>
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
                                <div style={{ color: "#eb2f96" }}> Total Expense</div>
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
                                <div style={{ color: "#1890ff" }}>Total Equity </div>
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



            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Flex align="center" style={{ height: "40px", background: "pink" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Assets</h4>
                    </Flex>
                    <Flex align="center" justify="center" vertical style={{ border: "1px solid rgb(227, 227, 227)", marginTop: "10px" }}>
                        <Row align={"middle"} style={{ width: "100%" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Current Assets</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>
                        <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">None Current Assets</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>

                        <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Fixed Assets</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>
                        {/* <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Other Assets</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row> */}

                    </Flex>
                    <Flex align="center" justify="space-between" style={{ height: "40px", background: "rgb(227, 227, 227)", paddingLeft: "10px", paddingRight: "10px" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Total</h4>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>$40</h4>

                    </Flex>
                </Col>
                <Col span={12}>
                    <Flex align="center" style={{ height: "40px", background: "pink" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Liabilities</h4>
                    </Flex>
                    <Flex align="center" justify="center" vertical style={{ border: "1px solid rgb(227, 227, 227)", marginTop: "10px" }}>
                        <Row align={"middle"} style={{ width: "100%" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Current Liabilities</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>
                        <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">None Current Liabilities</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>

                        <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Other Liabilities</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>
                    </Flex>
                    <Flex align="center" justify="space-between" style={{ height: "40px", background: "rgb(227, 227, 227)", paddingLeft: "10px", paddingRight: "10px" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Total</h4>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>$40</h4>

                    </Flex>
                </Col>
                <Col span={12}>
                    <Flex align="center" style={{ height: "40px", background: "pink" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Income</h4>
                    </Flex>
                    <Flex align="center" justify="center" vertical style={{ border: "1px solid rgb(227, 227, 227)", marginTop: "10px" }}>
                        <Row align={"middle"} style={{ width: "100%" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Revenue</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>
                        <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Sales</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>


                    </Flex>
                    <Flex align="center" justify="space-between" style={{ height: "40px", background: "rgb(227, 227, 227)", paddingLeft: "10px", paddingRight: "10px" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Total</h4>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>$40</h4>

                    </Flex>
                </Col>
                <Col span={12}>
                    <Flex align="center" style={{ height: "40px", background: "pink" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Expense</h4>
                    </Flex>
                    <Flex align="center" justify="center" vertical style={{ border: "1px solid rgb(227, 227, 227)", marginTop: "10px" }}>
                        <Row align={"middle"} style={{ width: "100%" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Revenue</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>

                        <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Direct Cost</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>
                        <Row align={"middle"} style={{ width: "100%", borderTop: "1px solid rgb(227, 227, 227)" }}>
                            <Col span={8}>
                                <h5 style={{ marginLeft: "10px" }} level={5} type="secondary">Expense</h5>
                            </Col>
                            <Col span={16}>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={false}
                                    bordered
                                />
                            </Col>


                        </Row>



                    </Flex>
                    <Flex align="center" justify="space-between" style={{ height: "40px", background: "rgb(227, 227, 227)", paddingLeft: "10px", paddingRight: "10px" }}>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>Total</h4>
                        <h4 level={5} style={{ paddingLeft: "10px", }}>$40</h4>

                    </Flex>
                </Col>
            </Row>



        </div>
    );
};




export default BalanceSheet