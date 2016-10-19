import Message from './lib/message';
import HtmlMessage from './lib/html-message';
import DefaultMessage from './lib/default-message';
import DefaultHtmlMessage from './lib/default-html-message';
import HtmlLinkMessage from './lib/html-link-message';

if(typeof window === 'undefined') {
    // node js
    let helloWorldMessage: Message = new DefaultMessage('hello, nxa-world');
    helloWorldMessage.print();
} else {
    // browser window
    let headingMessage: HtmlMessage = new DefaultHtmlMessage('hello, nxa-world');
    let bodyMessage: Message = new DefaultHtmlMessage(
      `This is a simple TypeScript example.
       Visit the following link to see the README.md file: `);
    let linkMessage: Message = new HtmlLinkMessage(
      'https://github.com/cntech/typescript-example',
      'typescript-example'
    );
    let headingElement: HTMLElement = document.getElementById('heading');
    headingMessage.printToElement(headingElement);
    bodyMessage.print();
    linkMessage.print();
}
