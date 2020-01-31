import {message}  from 'antd';
window.message = message

export default class Notification {
    static success = (msg) =>{
        return message.success(msg);
    }
    static error = (msg) =>{
        return message.error (msg);
    }
    static warning = (msg) =>{
        return message.warning (msg);
    }
}