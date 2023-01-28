import React from "react";
import { Card, List } from 'antd';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

function Admin({ files }) {
    return (
        <div>
            <Card title="Not Assigned Yet">
                <List
                    dataSource={files}
                    renderItem={(file) => (
                        <List.Item>
                            {file.name}.{file.type}
                            <button>Verify</button>
                            <button>Reject</button>
                        </List.Item>
                    )}
                />
            </Card>
            <Card title="Rejected Files">
                <List
                    dataSource={files}
                    renderItem={(file) => (
                        <List.Item>
                            {file.name}.{file.type}
                            <Button disabled type="danger" shape="round" icon={<CloseOutlined />}>
                                Rejected
                            </Button>
                        </List.Item>
                    )}
                />
            </Card>
            <Card title="verified Files">
                <List
                    dataSource={files}
                    renderItem={(file) => (
                        <List.Item>
                            {file.name}.{file.type}
                            <Button disabled type="primary" shape="round" icon={<CheckOutlined />}>
                                Verified
                            </Button>
                        </List.Item>
                    )}
                />

            </Card>
        </div>
    )
};
export default Admin;

