import Message from './message';

interface HtmlMessage extends Message {
    printToElement(element: Element)
}

export default HtmlMessage;
