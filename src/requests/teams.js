export const getAllTeams = async () => {
  try {
    const elka = await fetch('http://localhost:5000/teams/');
    return elka.json();
  } catch (e) {
    throw new Error ('None')
  }
}

export const deleteTeamById = (id) => {
  return fetch(`http://localhost:5000/teams/${id}`,
  {
    method: 'DELETE'
  }).then(x => x.json());
}