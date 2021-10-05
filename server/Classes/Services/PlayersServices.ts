import PlayersData from '../Data/PlayersData'
import errors from '../../common/errors'
import { serviceResult } from './../../types/serviceResult';
import { UploadedFile } from 'express-fileupload';
import { playerType } from './../../types/playerType';
import { v4 as uuidv4 } from 'uuid'


export default class PlayersServices {
  private readonly data: PlayersData;
  private dirMain: string = process.env.MAIN_IMAGE_FOLDER || 'images';
  private dirPlayerPhoto: string = process.env.PLAYERS_IMAGE_FOLDER || 'players';
  private serverURL: string = process.env.SERVER_URL || 'localhost';
  private serverPort: string = process.env.EXPRESS_PORT || '5000';
  private defaultPhoto: string = 'http://localhost:5000/images/players/default.png';

  constructor() {
    this.data = new PlayersData();
  }

  public async getAllPlayers(): Promise<serviceResult> {
    const result = await this.data.getAllPlayers();

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    return {error: null, data: result};
  }

  public async createPlayer(playerData: playerType, photoFile?: UploadedFile): Promise<serviceResult> {
    const checkPlayer = await this.data.checkPlayerNumber(playerData.number);

    if (checkPlayer) {
      return {error: errors.DUPLICATE_RECORD, data: null}
    }

    if (photoFile) {
      let fileExtension: string | string[] = photoFile.name.split('.');
      fileExtension = fileExtension[fileExtension.length - 1];
      const newFileName = `${uuidv4()}.${fileExtension}`;
      playerData.photoURL = `http://${this.serverURL}:${this.serverPort}/${this.dirMain}/${this.dirPlayerPhoto}/${newFileName}`;
      await photoFile.mv(`./${this.dirMain}/${this.dirPlayerPhoto}/${newFileName}`)
    } else {
      playerData.photoURL = `http://${this.serverURL}:${this.serverPort}/${this.dirMain}/${this.dirPlayerPhoto}/default.png`;
    }

    const result = await this.data.createPlayer(playerData);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    return {error: null, data: result[0]};
  }

  public async getPlayerById(id: number): Promise<serviceResult> {
    const result = await this.data.getPlayerById(id);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    if (!result.length) {
      return {error: errors.NOT_FOUND, data: null}
    }
    
    return {error: null, data: result[0]};
  }

  public async deletePlayerById(id: number): Promise<serviceResult> {
    const checkPlayer = await this.data.getPlayerById(id);

    if (!checkPlayer.length) {
      return {error: errors.NOT_FOUND, data: null}
    }

    const result = await this.data.deletePlayerById(id);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    return {error: null, data: checkPlayer[0]};
  }

  public async updatePlayerById(id: number, playerData: playerType, photoFile?: UploadedFile): Promise<serviceResult> {
    const checkPlayer = await this.data.getPlayerById(id);

    if (!checkPlayer.length) {
      return {error: errors.NOT_FOUND, data: null}
    }

    const checkNumber = await this.data.checkPlayerNumber(playerData.number, id);
    
    if (checkNumber) {
      return {error: errors.DUPLICATE_RECORD, data: null}
    }

    if (photoFile) {
      let fileExtension: string | string[] = photoFile.name.split('.');
      fileExtension = fileExtension[fileExtension.length - 1];
      if (this.defaultPhoto === checkPlayer[0].photoURL) {
        const newFileName = `${uuidv4()}.${fileExtension}`;
        playerData.photoURL = `http://${this.serverURL}:${this.serverPort}/${this.dirMain}/${this.dirPlayerPhoto}/${newFileName}`;
        await photoFile.mv(`./${this.dirMain}/${this.dirPlayerPhoto}/${newFileName}`);
      } else {
        let oldFileName = checkPlayer[0].photoURL.split('/');
        oldFileName = oldFileName[oldFileName.length - 1].split('.')[0];
        oldFileName = `${oldFileName}.${fileExtension}`;
        playerData.photoURL = `http://${this.serverURL}:${this.serverPort}/${this.dirMain}/${this.dirPlayerPhoto}/${oldFileName}`;
        await photoFile.mv(`./${this.dirMain}/${this.dirPlayerPhoto}/${oldFileName}`);
      }
    }

    const result = await this.data.updatePlayerById(id, playerData);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    return {error: null, data: result[0]};
  }
}