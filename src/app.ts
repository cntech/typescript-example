import Message from './lib/message';
import HtmlMessage from './lib/html-message';
import HelloWorld from './hello-world';
import HtmlHelloWorld from './html-hello-world';

if(typeof window === 'undefined') {
    // node js
    let helloWorld: Message = new HelloWorld('hello, nxa-world');
    helloWorld.print();
} else {
    // browser window
    let bodyHelloWorld: Message = new HtmlHelloWorld('hello, nxa-world from <body>');
    let divHelloWorld: HtmlMessage = new HtmlHelloWorld('hello, nxa-world from <div#main>');
    bodyHelloWorld.print();
    let mainDiv: HTMLElement = document.getElementById('main');
    divHelloWorld.printToElement(mainDiv);
}
