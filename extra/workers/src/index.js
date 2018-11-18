import Worker from 'worker-loader!./worker';

const el = document.createElement('p');
const worker = Worker();
const state = { text: 'foo' };

worker.addEventListener('message', ({ data: { text }}) => {
  state.text = text;
  el.innerHTML = text;
});

el.innerHTML = state.text;

el.onclick = () => worker.postMessage({ text: state.text });

document.body.appendChild(el);