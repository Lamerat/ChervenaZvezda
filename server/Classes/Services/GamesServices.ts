import { serviceResult } from './../../types/serviceResult';
import GamesData from '../Data/GamesData';
import errors from '../../common/errors'


export default class GamesServices {
  private readonly data: GamesData;

  constructor() {
    this.data = new GamesData();
  }
  
  async getEventById (id: number): Promise<serviceResult> {
    const result = await this.data.getGameById(id);
    
    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    if (result === undefined) {
      return {error: errors.NOT_FOUND, data: null}
    }
    
    const score: Array<any> = [result.firstPartScore, result.secondPartScore, result.thirdPartScore];
    result.finalScore = this.sumFinalScore(score);
    
    return {error: null, data: result};
  }

  sumFinalScore(parts: Array<any>): any {
    const finalScore = parts.map(x => x.split('-').map(Number));
    let firstScore: number = finalScore.reduce((acc, el) => el[0] + acc, 0);
    let secondScore: number = finalScore.reduce((acc, el) => el[1] + acc, 0);
    return `${firstScore}-${secondScore}` as any;
  }

}