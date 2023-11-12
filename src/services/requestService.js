import { SERVERURL } from '../constants';

export default class RequestService {
    static sendMessage(message) {
        fetch(`${SERVERURL}/message/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(message)
        });
    }

    static uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch(`${SERVERURL}/file/upload`, {
            method: 'POST',
            body: formData
        });
    }

    static async downloadFile(address, name) {
        let request = await fetch(`${SERVERURL}/file/download?path=${address}&fileName=${name}`, {
            method: 'GET'
        });

        return await request.blob();
    }

    static async getMessages(lastMessageNumber) {
        let request = await fetch(`${SERVERURL}/messages?lastMessageNumber=${lastMessageNumber}`, {
            method: 'GET',
        });

        return request.json();
    }

    static async fixedMessage(messageNumber) {
        let request = await fetch(`${SERVERURL}/fixedMessage?messageNumber=${messageNumber}`, {
            method: 'GET',
        });

        return request.json();
    }
}