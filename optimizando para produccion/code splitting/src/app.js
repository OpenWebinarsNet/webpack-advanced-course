const el = document.createElement('div');

el.innerHTML = 'Hello World';

el.addEventListener('click', async event => {
  try {
    const component = await import('./component');
    el.innerHTML = component.str;
  }
  catch(error) {
    console.error(error);
  }
});

document.body.appendChild(el);
