import { Button, Card, Col, DatePicker, Form, Input, Row, Select, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

function PaymentVocher() {
    return (
        <Card title="Voucher">
            <Form layout='vertical'>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Group">
                            <Select>
                                <Select.Option>1</Select.Option>
                                <Select.Option>2</Select.Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Status">
                            <Select>
                                <Select.Option>1</Select.Option>
                                <Select.Option>2</Select.Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Voucher Number">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Account">
                            <Select>
                                <Select.Option>1</Select.Option>
                                <Select.Option>2</Select.Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Payment Type
"> <Select>
                                <Select.Option>1</Select.Option>
                                <Select.Option>2</Select.Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Amount">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Date">
                            <DatePicker style={{ width: "100%" }} placement={"bottomRight"} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Reference">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Payment Receipt" >
                            <Upload accept='.png' >
                                <Button block > Upload File</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label=" Payment Note">
                            <TextArea style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Button type='primary'>
                            Create  Voucher
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}


export default PaymentVocher