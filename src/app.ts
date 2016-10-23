import Message from './lib/message';
import HtmlMessage from './lib/html-message';
import DefaultMessage from './lib/default-message';
import DefaultHtmlMessage from './lib/default-html-message';
import HtmlLinkMessage from './lib/html-link-message';

function htmlLineBreak(n?: number) {
  let _n = n? n : 1;
  for(let i = 0; i < _n; i++) {
    document.body.appendChild(document.createElement('br'));
  }
}

if(typeof window === 'undefined') {
    // NODE JS
    let helloWorldMessage: Message = new DefaultMessage('hello, nxa-world');
    helloWorldMessage.print();
} else {
    // BROWSER WINDOW
    // prepare messages
    let headingMessage: HtmlMessage = new DefaultHtmlMessage('hello, nxa-world');
    let firstBodyMessage: Message = new DefaultHtmlMessage(
        `This is a simple TypeScript example.
         All you can see here was printed by a compiled TypeScript program.`);
    let secondBodyMessage: Message = new DefaultHtmlMessage(
         `Visit the following page to see the README.md file:`);
    let linkMessage: Message = new HtmlLinkMessage(
        'https://github.com/cntech/typescript-example');
    let headingElement: HTMLElement = document.getElementById('heading');
    // write messages
    headingMessage.printToElement(headingElement);
    firstBodyMessage.print();
    htmlLineBreak(2);
    secondBodyMessage.print();
    htmlLineBreak();
    linkMessage.print();
}
