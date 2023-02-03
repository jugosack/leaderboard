const id = '77zt5vjBvubUkAonDu7q';
const root = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const baseUrl = `${root}/games/${id}/scores`;

export const getScores = async () => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  return response.result;
};

export const postScore = async (name, point) => {
  const postObj = {
    user: name,
    score: point,
  };
  const request = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postObj),
  });
  const response = await request.json();
  return response.result;
};

export const display = (game) => {
  const displ = document.getElementById('displ');
  const tbody = document.createElement('tbody');
  const gameElement = document.createElement('tr');
  gameElement.innerHTML = `
        <td>${game.user}: ${game.score}</td>
      `;
  tbody.appendChild(gameElement);
  displ.appendChild(tbody);
};
