import './style.css';

import Github from './images/github.svg';
import submitEventHandler from './modules/submit.js';
import { refresh, refreshEventHandler } from './modules/refresh.js';

const loadGithubIcon = () => {
  const github = document.getElementById('github');
  github.src = Github;
  github.alt = 'github';
  github.setAttribute('class', 'github-icon');
};

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');

refreshBtn.addEventListener('click', refreshEventHandler);
submitBtn.addEventListener('click', submitEventHandler);

window.onload = () => {
  refresh();
  loadGithubIcon();
};
