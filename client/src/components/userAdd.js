import React from 'react'
import { Row, Button, Input} from 'antd'
import APIService from '../common/api'
import Notification from '../common/notification'


class AddUserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:null,
            key:null,
            address:null,
            age:null
        }
    }
    saveUserDataAPIFun=(data)=>{
        try {
            APIService.saveUserDataAPI(data)
                .then((res) => {
                console.log('response-> ',res)
                this.props.tableListUpdate()
                Notification.success('User data edited successfully.')
                }, (err) => {
                console.log(err)
                Notification.error('Something went wrong.')
                });
    
        } catch (error) {
            console.log(error)
            Notification.error('Error')
        }  
    }
    handleChangeUserAdd =(e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })

    }
    resetState=()=>{
        this.setState({
            name:null,
            key:null,
            address:null,
            age:null
        });
    } 
    addUserSubmitFunc = () =>{
        const data= {
            key:this.state.key !== '' || this.state.key !== null ? this.state.key : 0,
            address: this.state.address !== '' || this.state.address !== null ? this.state.address : '',
            name:this.state.name !== '' || this.state.name !== null ? this.state.name : '',
            age:this.state.age !== '' || this.state.age !== null ? this.state.age : 0
        }
        this.saveUserDataAPIFun(data)
        this.resetState()
        this.props.closeWindow()
    }
    render(){
        return(
            <React.Fragment>
                <Row>
                    <p>Please add the following details for adding the new user.</p>
                    <div style={{margin: '15px 0px'}}>
                        <label>Key:</label>
                        <Input placeholder="Enter Key" value={this.state.key} name="key" onChange={this.handleChangeUserAdd} />
                    </div>
                    <div style={{margin: '15px 0px'}}>
                        <label>Name</label>
                        <Input placeholder="Enter Name" value={this.state.name} name="name" onChange={this.handleChangeUserAdd} />
                    </div>
                    <div style={{margin: '15px 0px'}}>
                        <label>Age</label>
                        <Input placeholder="Enter Age" value={this.state.age} name="age" onChange={this.handleChangeUserAdd} />
                    </div>
                    <div style={{margin: '15px 0px'}}>
                        <label>Address</label>
                        <Input placeholder="Enter Address" value={this.state.address} name="address" onChange={this.handleChangeUserAdd} />
                    </div>
                </Row>
                <div className="addUser_box_footer">
                    <Button onClick={this.props.closeWindow} style={{ marginRight: 8 }}>
                    Cancel
                    </Button>
                    <Button onClick={this.addUserSubmitFunc} type="primary">
                    Submit
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

export default AddUserComponent;