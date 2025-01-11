import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Select, Space, Typography, Upload } from 'antd'
import React from 'react'
const { Option } = Select
function File() {
    const [form] = Form.useForm();
    return (

        <>
            <Typography.Title level={3}>
                Add New File
            </Typography.Title>
            <Form layout='vertical'


                form={form}
                name="dynamic_form_complex"
                autoComplete="off"
                initialValues={{ items: [{}] }}>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <Card title="Membership Details">

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Select Phase"
                                        name="good"
                                        rules={[{ required: true, message: 'Please select a phase!' }]}
                                    >
                                        <Space.Compact style={{ width: '100%' }}>
                                            <Select placeholder="Select Phase">
                                                <Select.Option value="phase1">Phase 1</Select.Option>
                                                <Select.Option value="phase2">Phase 2</Select.Option>
                                            </Select>
                                            <Button type="primary">
                                                <PlusOutlined />
                                            </Button>
                                        </Space.Compact>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Select Block">
                                        <Space.Compact style={{ width: '100%' }}>
                                            <Select placeholder="Select Block">
                                                <Select.Option value="Block1">Block 1</Select.Option>
                                                <Select.Option value="Block2">Block 2</Select.Option>
                                            </Select>
                                            <Button type="primary">
                                                <PlusOutlined />
                                            </Button>
                                        </Space.Compact>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Plot #">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Select Purpose">
                                        <Space.Compact style={{ width: '100%' }}>
                                            <Select placeholder="Select Sell">
                                                <Select.Option value="Sell1">Sell </Select.Option>
                                                <Select.Option value="Rent">Rent</Select.Option>
                                            </Select>
                                            <Button type="primary">
                                                <PlusOutlined />
                                            </Button>
                                        </Space.Compact>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Select Property">
                                        <Space.Compact style={{ width: '100%' }}>
                                            <Select placeholder="Select Sell">
                                                <Select.Option value="Sell1">Home </Select.Option>
                                                <Select.Option value="Rent">Plot</Select.Option>
                                            </Select>
                                            <Button type="primary">
                                                <PlusOutlined />
                                            </Button>
                                        </Space.Compact>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Select Property Type">
                                        <Space.Compact style={{ width: '100%' }}>
                                            <Select placeholder="Select Sell">
                                                <Select.Option value="Sell1">Home </Select.Option>
                                                <Select.Option value="Rent">Plot</Select.Option>
                                            </Select>
                                            <Button type="primary">
                                                <PlusOutlined />
                                            </Button>
                                        </Space.Compact>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Category">
                                        <Space.Compact style={{ width: '100%' }}>
                                            <Select placeholder="Select Sell">
                                                <Select.Option value="Sell1">Home </Select.Option>
                                                <Select.Option value="Rent">Plot</Select.Option>
                                            </Select>
                                            <Button type="primary">
                                                <PlusOutlined />
                                            </Button>
                                        </Space.Compact>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Status">
                                        <Select>
                                            <Select.Option>Active</Select.Option>
                                            <Select.Option>Closed</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card></Col>
                    <Col span={24}>
                        <Card title="Land Location and Price">
                            <Form layout='vertical'>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Form.Item label="Land Size">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="Land Unit">
                                            <Select>
                                                <Select.Option>Marla</Select.Option>
                                                <Select.Option>Kanal</Select.Option>

                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>

                                        <Form.Item label="Covered Area">
                                            <Space.Compact>
                                                <Form.Item
                                                    name={['Covered Area', 'province']}
                                                    noStyle
                                                    rules={[{ required: true, message: 'Province is required' }]}
                                                >
                                                    <Input style={{ width: '50%' }} />

                                                </Form.Item>
                                                <Form.Item
                                                    name={['address', 'street']}
                                                    noStyle
                                                    rules={[{ required: true, message: 'Street is required' }]}
                                                >
                                                    <Input style={{ width: '50%' }} />
                                                </Form.Item>
                                            </Space.Compact>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="Land Cost">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="Discount">
                                            <Space.Compact>
                                                <Form.Item
                                                    name={['Discount', 'province']}
                                                    noStyle
                                                    rules={[{ required: true, message: 'Province is required' }]}
                                                >
                                                    <Input style={{ width: '50%' }} />

                                                </Form.Item>
                                                <Form.Item
                                                    name={['Discount', 'street']}
                                                    noStyle
                                                    rules={[{ required: true, message: 'Street is required' }]}
                                                >
                                                    <Input style={{ width: '50%' }} />
                                                </Form.Item>
                                            </Space.Compact>
                                        </Form.Item>
                                    </Col>

                                    <Col span={8}>
                                        <Form.Item label="Country">
                                            <Select>
                                                <Select.Option>Pakistan</Select.Option>
                                                <Select.Option>Kashmir</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Province/State" >
                                            <Select>
                                                <Select.Option>Pakistan</Select.Option>
                                                <Select.Option>Kashmir</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="City" >
                                            <Select>
                                                <Select.Option>Pakistan</Select.Option>
                                                <Select.Option>Kashmir</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="Street" >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={16}>
                                        <Form.Item label="Address" >
                                            <Input />
                                        </Form.Item>
                                    </Col>

                                </Row>
                            </Form>
                        </Card></Col>

                    <Col span={24}>
                        <Card title="Owner Details">
                            <Form.List name="items">
                                {(fields, { add, remove }) => (
                                    <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                                        <Button type="dashed" onClick={() => add()} block>
                                            + Add Owner
                                        </Button>
                                        {fields.map((field) => (
                                            <Card
                                                size="small"
                                                title={`Owner ${field.name + 1}`}
                                                key={field.key}
                                                extra={
                                                    <CloseOutlined
                                                        onClick={() => {
                                                            remove(field.name);
                                                        }}
                                                    />
                                                }
                                            >
                                                <Row gutter={[16, 16]}>
                                                    <Col span={12}>  <Form.Item label="Name" name={[field.name, 'name']}>
                                                        <Space.Compact style={{ width: '100%' }}>
                                                            <Select placeholder="Select Sell">
                                                                <Select.Option value="Sell1">Owner 1 </Select.Option>
                                                                <Select.Option value="Rent">Owner 2</Select.Option>
                                                            </Select>
                                                            <Button type="primary">
                                                                <PlusOutlined />
                                                            </Button>
                                                        </Space.Compact>
                                                    </Form.Item>
                                                    </Col>
                                                    <Col span={12}>  <Form.Item label="Share" name={[field.name, 'share']}>
                                                        <Input />
                                                    </Form.Item>
                                                    </Col>
                                                    <Col span={12}>  <Form.Item label="Name" name={[field.name, 'Nomeenee']}>
                                                        <Space.Compact style={{ width: '100%' }}>
                                                            <Select placeholder="Select Sell">
                                                                <Select.Option value="Sell1">Nomineee 1 </Select.Option>
                                                                <Select.Option value="Rent">Nominee 2</Select.Option>
                                                            </Select>
                                                            <Button type="primary">
                                                                <PlusOutlined />
                                                            </Button>
                                                        </Space.Compact>
                                                    </Form.Item>
                                                    </Col>
                                                    <Col span={12}>  <Form.Item label="Relationship" name={[field.name, 'Relation']}>
                                                        <Input />
                                                    </Form.Item>
                                                    </Col>
                                                </Row>


                                            </Card>
                                        ))}


                                    </div>
                                )}
                            </Form.List>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <Space>
                                <Button color="default" variant="solid">
                                    Reset File
                                </Button>
                                <Button type='primary'>
                                    Save File
                                </Button>
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Form>

        </>
    )
}

export default File