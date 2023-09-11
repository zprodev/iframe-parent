const iframeChildOrigin = 'https://zprodev.github.io/iframe-child/';

const iframeElement = document.createElement("iframe");
iframeElement.src = iframeChildOrigin;
document.body.appendChild(iframeElement);

const buttonElement = document.createElement('button');
document.body.appendChild(buttonElement);
buttonElement.append('子iframeにUI表示リクエスト');
buttonElement.addEventListener('click', () => {
    iframeElement.contentWindow.postMessage({message:'showUI'}, iframeChildOrigin);
});

window.addEventListener("message", (message) => {
    // childからボタン押下後にテキスト入力の値を送ってくるイベント
    if(message.data.type == '決定ボタン押下')
    {
        console.log(message.data.value);
        iframeElement.contentWindow.postMessage({message:'hideUI'}, iframeChildOrigin);
    }
});
