import {Popconfirm, Space, Table} from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const ContactList = ({list, setList}) => {
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (_, record) => <a onClick={() => console.log('record', record)}>{record.email}</a>
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Created',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (time) => {
                const createdAt = new Date(time);
                const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
                return createdAt.toLocaleDateString('en-US', options);
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="Delete the Contact"
                        description="Are you sure?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => {
                            const tempList = list.filter(contact => contact.key !== record.key);
                            setList([...tempList]);
                        }}
                    >
                        <a href="#">Delete</a>
                    </Popconfirm>
                </Space>
            ),
        }
    ];

    return (
        <>
            <Title style={{margin: '24px'}}>List of Contacts</Title>
            <Table dataSource={list} columns={columns} />
        </>
    );
};

export default ContactList;
