import { createContext } from 'react';

const PlayersFilterContext = createContext({
  playersFilter: null,
  setPlayersFilter: () => {}
});

export default PlayersFilterContext;
