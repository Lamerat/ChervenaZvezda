export const getAllPlayers = async () => {
  return fetch('http://localhost:5000/players/').then(x => x.json()).catch();
}