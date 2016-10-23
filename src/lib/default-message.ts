import Message from './message';

class DefaultMessage implements Message {
    constructor(private _messageText: string) {}
    public get messageText(): string {
      return this._messageText;
    }
    public print(): void {
        console.log(this.messageText);
    }
}

export default DefaultMessage;
