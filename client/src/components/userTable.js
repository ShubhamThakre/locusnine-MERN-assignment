
import React from 'react';
import 'antd/dist/antd.css';
import { Table, Icon,Input } from 'antd';




const userTable = ({data,editfunc,delefunc, handleChange,editIdx,checkfunc}) =>{

    const getUserTableColumn = () =>{
        return[
            {
                title: 'Key',
                dataIndex: 'key',
                render: (text,record) => <span>{text}</span>,
            },
            {
                title: 'Name',
                dataIndex: 'name',
                render: (text,record) => record.key === editIdx ? 
                                            <Input 
                                                name='name' 
                                                defaultValue={text} 
                                                onChange={(event)=>handleChange(event, record)}
                                            />
                                            : <span>{text}</span>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                render: (text,record) => record.key === editIdx ? 
                                            <Input 
                                                name='age' 
                                                defaultValue={text} 
                                                onChange={(event)=>handleChange(event, record)}
                                            />
                                            : <span>{text}</span>,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                render: (text,record) => record.key === editIdx ? 
                                            <Input 
                                                name='address' 
                                                defaultValue={text} 
                                                onChange={(event)=>handleChange(event, record)}
                                            />
                                            : <span>{text}</span>,
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                render: (text, record) => {
                        return (
                            <div>
                                {record.key === editIdx  ? 
                                    <Icon type="check" onClick={() => checkfunc(text,record)} /> : 
                                    <Icon type="edit" onClick={(e) => editfunc(text,record)} />
                                } | 
                                <Icon type="delete" onClick={() => delefunc(text,record)}/>
                            </div>
                        );
                }
            },
        ]
    }
    
    return(
        <React.Fragment>
            <Table 
                columns={getUserTableColumn()}  
                dataSource={data || []} 
                size="middle" 
            />    
        </React.Fragment>
    );
}

          
export default userTable