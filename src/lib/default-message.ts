import Message from './message';

class DefaultMessage implements Message {
    constructor(private _messageText: string) {}
    get messageText(): string {
      return this._messageText
    }
    public print() {
        console.log(this.messageText);
    }
}

export default DefaultMessage;
