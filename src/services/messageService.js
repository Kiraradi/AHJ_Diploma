import { BehaviorSubject,Subject } from "rxjs";
import Message from "../models/Message";
import { WEBSOCKETURL } from '../constants';
import RequestService from "./requestService";

export default class MessageService {

    constructor() {
        this.messagesSubject = new BehaviorSubject({});
        this.messageNumberSubject = new BehaviorSubject(0);
        this.fixedMessadeSubject = new Subject(false);
        this.createWebSocket();
    }

    sendMessage(text, geolocation = null, type = 'text') {
        
        RequestService.sendMessage({text: text, geolocation: geolocation, type: type});
    }

    createWebSocket() {
        this.ws = new WebSocket(WEBSOCKETURL);
        this.ws.addEventListener('message', (e) => {
            const obj = JSON.parse(e.data);
            const messages = obj.response.map(item => new Message(item));
            
            this.messagesSubject.next({status: obj.status, messages: messages});
        });
    }

    async getMessadesArray(lastMessageNumber) {
        const respons = await RequestService.getMessages(lastMessageNumber);
        const messagesArray = respons.messages.map(item => new Message(item));

        return messagesArray
    }

    async downloadFile(address, name) {
        const respons = await RequestService.downloadFile(address, name);

        return respons;
    }

}