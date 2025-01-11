import { Button, Card, Col, Form, Input, Row, Select, Upload } from 'antd'
import React from 'react'

function User() {
    return (
        <Card title="Add New User">
            <Form layout='vertical'>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Name">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Email">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Phone">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Gender">
                            <Select>
                                <Select.Option>Male</Select.Option>
                                <Select.Option>Female</Select.Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Username">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Password">
                            <Input.Password />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Gender">
                            <Select>
                                <Select.Option>Manager</Select.Option>
                                <Select.Option>Data Enter</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Attached File (Optional)" >
                            <Upload accept='.png' >
                                <Button block > Upload File</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Button type='primary'>
                            Create User
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default User