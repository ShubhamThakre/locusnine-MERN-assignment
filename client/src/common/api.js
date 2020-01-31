import axios from 'axios'
window.axios = axios

const userDataListAPIURL = '/api/userListFetch';
const saveUserDataAPIURL = '/api/saveDataApi';
const saveEditedDataAPIURL = '/api/udpateRecord'
const deleteDataAPIURL = '/api/deleteRecord'

export default class RestApi {
    static getUserList(){
        return axios.get(userDataListAPIURL);
    }
    static saveUserDataAPI(data){
        return axios.post(saveUserDataAPIURL,data);
    }
    static saveEditedDataAPI(rowData){
        let data = {
                name: rowData.name,
                age: rowData.age,
                address: rowData.address,
                key: rowData.key
            
        }
        return axios.post(saveEditedDataAPIURL,data)
    }
    static deleteDataAPI(rowData){
        let data = {
                key: rowData.key,
                active: false    
        }
        return axios.post(deleteDataAPIURL,data)
    }
}