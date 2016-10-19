import DefaultHtmlMessage from './default-html-message';
import HtmlMessage from './html-message';

class HtmlLinkMessage extends DefaultHtmlMessage implements HtmlMessage {
    constructor(private _url: string, messageText?: string) {
      super(messageText? messageText : _url);
    }
    get url() {
      return this._url;
    }
    public print() {
        let element: Element = document.body;
        this.printToElement(element);
    }
    public printToElement(element: Element) {
        let linkElement: HTMLAnchorElement = document.createElement('a');
        linkElement.href = this.url;
        let textNode: Text = document.createTextNode(this.messageText);
        linkElement.appendChild(textNode);
        element.appendChild(linkElement);
    }
}

export default HtmlLinkMessage;
