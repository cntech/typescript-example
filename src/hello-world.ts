import Message from './lib/message';

class HelloWorld implements Message {
    constructor(private messageText: string) {}
    public print() {
        console.log(this.messageText);
    }
}

export default HelloWorld;
