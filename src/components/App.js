import { PlusOutlined, TableOutlined } from '@ant-design/icons';
import {Alert, Layout, Menu, Space, theme} from 'antd';

import React, { useState } from 'react';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const { Content, Footer, Sider } = Layout;

const App = () => {

    const addContact = (data) => {
        setList([
            ...list,
            data,
        ]);
        setAlert(true);
    };

    const [alert, setAlert] = useState(false);
    const [content, setContent] = useState(<ContactForm addContact={addContact} />);
    const [list, setList] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const {token: { colorBgContainer }} = theme.useToken();

    const items = [
        {
            key: '1',
            icon: <PlusOutlined />,
            label: 'Add a new Contact',
            onClick: () =>  setContent(<ContactForm addContact={addContact} />)
        },
        {
            key: '2',
            icon: <TableOutlined />,
            label: 'List of Contacts',
            onClick: () =>  {
                setAlert(false);
                setContent(<ContactList list={list} setList={setList} />)
            }
        },
    ];

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        style={{
                            margin: '16px 0',
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {
                            alert && (
                                <Space direction="vertical" style={{ width: '100%' }}>
                                    <Alert
                                        onClose={() => setAlert(false)}
                                        message="Contact created"
                                        type="success"
                                        showIcon
                                        closable
                                    />
                                </Space>
                            )
                        }
                        {content}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Copyright ©2023 Created by Julio Esquivel.
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;