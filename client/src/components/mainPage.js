import React from 'react'
import { Row, Col, Button, Icon, Drawer} from 'antd'
import APIService from '../common/api'
import UserTable from './userTable'
import Notification from '../common/notification'
import AddUserComponent from './userAdd'



class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userTableData:[],
            editRowState: null,
            addUserWindowVisible: false
        }
    }    
    
    
    deleteFunctionAPI =(rowData) =>{
        try {
            APIService.deleteDataAPI(rowData)
                .then((res) => {
                this.userListFetchAPI()
                Notification.success('User deleted successfully.')
                }, (err) => {
                console.log(err)
                Notification.error('Something went wrong.');
                });
    
        } catch (error) {
            console.log(error)
            Notification.error('Error')
        } 
    }
    userEditDataSaveAPI = (data) =>{
        try {
            APIService.saveEditedDataAPI(data)
                .then((res) => {
                this.userListFetchAPI()
                Notification.success('User data edited successfully.');
                }, (err) => {
                console.log(err);
                Notification.error('Something went wrong.')
                });
    
        } catch (error) {
            console.log(error)
            Notification.error('Error')
        } 
    }
    userListFetchAPI=()=>{
        try {
            APIService.getUserList()
                .then((res) => {
                    this.setState({
                        userTableData: res.data.data
                    })
                }, (err) => {
                console.log(err)
                Notification.error('Something went wrong.')
                });
    
        } catch (error) {
            console.log(error)
            Notification.error('Error')
        }      
    }
    componentDidMount = () =>{
        // const tableData= [  {key: '1',name: 'John Brown',age: 32,address: 'New York No. 1 Lake Park',},
        //                     {key: '2',name: 'Jim Green',age: 42,address: 'London No. 1 Lake Park'},
        //                     {key: '3',name: 'Joe Black',age: 32,address: 'Sidney No. 1 Lake Park',}
        //                 ];
        // this.setState({
        //     userTableData: tableData
        // })
        this.userListFetchAPI()
    }
    saveData = (row) =>{
        this.setState({
            editRowState:null
        });
        this.userEditDataSaveAPI(row)
    }
    handleChange = (e,rec) =>{
        // console.log(e.target.name , e.target.value, '=>>', rec)
        const {name,value} = e.target
        this.setState(state =>({
            userTableData: state.userTableData.map((row,i) => row.key === rec.key ? ({...row, [name]:value}) : row),
        }))
    }
    deleteFunction = (rowData) =>{
        // this.setState(state =>({
        //     userTableData : state.userTableData.filter((x,j) => x.key!== a.key)
        // }));
        this.deleteFunctionAPI(rowData)
    }
    editFunction = (rowData) =>{
        this.setState({
            editRowState:rowData.key
        })
    }
    showAddUserWindowDrawer = () => {
        this.setState({
            addUserWindowVisible: true,
        });
    }
    onCloseAddUserWindow = () => {
        this.setState({
            addUserWindowVisible: false,
        });
        
    }
    render(){
        return(
            <div>
                <Row type="flex" justify="end" style={{padding:'10px 0px'}}>
                    <Col span={8}>
                        <span><h1>List of Users</h1></span>
                    </Col>
                    <Col span={8} offset={8}>
                        <Button 
                            type="primary" 
                            style={{float:"right"}}  
                            onClick={this.showAddUserWindowDrawer}
                        ><Icon type="plus" /> Add User</Button>
                        <Drawer
                            title="Create a new user"
                            width={400}
                            onClose={this.onCloseAddUserWindow}
                            visible={this.state.addUserWindowVisible}
                            bodyStyle={{ paddingBottom: 80 }}
                            >
                            <AddUserComponent 
                                closeWindow={this.onCloseAddUserWindow} 
                                tableListUpdate={this.userListFetchAPI}/>
                            
                        </Drawer>
                    </Col>
                </Row>
                <Row>
                    <Col style={{}}>
                        <UserTable  
                            data={this.state.userTableData} 
                            size="middle"
                            editfunc = {(row)=>this.editFunction(row)} 
                            delefunc = {(row)=>this.deleteFunction(row)}
                            editIdx = {this.state.editRowState}
                            handleChange = {this.handleChange}
                            checkfunc= {(row) =>this.saveData(row)}
                        />   
                    </Col>
                </Row>
            </div>
        );
    }
}




export default MainPage;