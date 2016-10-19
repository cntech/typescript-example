import HelloWorld from './hello-world';
import HtmlMessage from './lib/html-message';

class HtmlHelloWorld extends HelloWorld implements HtmlMessage {
    public print() {
        let element: Element = document.body;
        this.printToElement(element);
    }
    public printToElement(element: Element) {
        let textNode: Text = document.createTextNode(this.messageText);
        element.appendChild(textNode);
    }
}

export default HtmlHelloWorld;
