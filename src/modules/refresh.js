import { getScores, display } from './api.js';

export const refresh = async () => {
  const displ = document.getElementById('displ');
  displ.innerHTML = '';
  const games = await getScores();
  games.forEach((game) => {
    display(game);
  });
};

export const refreshEventHandler = (e) => {
  e.preventDefault();
  refresh();
};
