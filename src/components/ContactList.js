import {Table} from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const ContactList = ({list}) => {
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    return (
        <>
            <Title style={{margin: '24px'}}>List of Contacts</Title>
            <Table dataSource={list} columns={columns} />
        </>
    );
};

export default ContactList;
