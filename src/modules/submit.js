import { postScore } from './api.js';

const submitEventHandler = async (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const point = form.elements.point.value;
  await postScore(name, point);

  form.reset();
};

export default submitEventHandler;