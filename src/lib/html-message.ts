import Message from './message';

interface HtmlMessage extends Message {
    printToElement(element: Element): void
}

export default HtmlMessage;
