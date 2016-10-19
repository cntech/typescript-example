import DefaultMessage from './default-message';
import HtmlMessage from './html-message';

class DefaultHtmlMessage extends DefaultMessage implements HtmlMessage {
    public print() {
        let element: Element = document.body;
        this.printToElement(element);
    }
    public printToElement(element: Element) {
        let textNode: Text = document.createTextNode(this.messageText);
        element.appendChild(textNode);
    }
}

export default DefaultHtmlMessage;
