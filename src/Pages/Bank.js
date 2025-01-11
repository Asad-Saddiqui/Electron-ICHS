import React from 'react'
import { Button, Card, Col, Form, Input, Row, Select, Upload } from 'antd'

function Bank() {
    return (
        <Card title="Add New Bank">
            <Form layout='vertical'>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Bank Name">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Branch">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Account Name">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Account Holder">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Account No">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Phone">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Button type='primary'>
                            Create Bank
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default Bank