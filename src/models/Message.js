export default class Message {
  constructor(message) {
    this.number = message.number;
    this.text = message.text;
    this.date = message.creationTime;
    this.geolocation = message.geolocation;
    this.type = message.type;
    this.fileInfo = message.fileInfo;
    this.isFixed = message.isFixed;
  }
}
