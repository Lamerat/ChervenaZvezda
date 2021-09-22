import { serviceResult } from './../../types/serviceResult';
import { teamData } from './../../types/teamsTypes';
import TeamsData from '../Data/TeamsData';
import errors from '../../common/errors'
import { UploadedFile } from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid'


export default class TeamsServices {
  private readonly data: TeamsData;
  private dirMain: string = process.env.MAIN_IMAGE_FOLDER || 'images';
  private dirLogos: string = process.env.TEAMS_LOGOS_FOLDER || 'teams';
  private serverURL: string = process.env.SERVER_URL || 'localhost';
  private serverPort: string = process.env.EXPRESS_PORT || '5000';
  private defaultLogo: string = 'http://localhost:5000/images/teams/default.png';

  constructor() {
    this.data = new TeamsData();
  }


  public async getAllTeams(): Promise<serviceResult> {
    const result = await this.data.getAllTeams();

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    return {error: null, data: result};
  }


  public async getTeamById(id: number): Promise<serviceResult> {
    const result = await this.data.getTeamById(id);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    if (result === undefined) {
      return {error: errors.NOT_FOUND, data: null}
    }

    return {error: null, data: result};
  }


  public async createTeam (teamData: teamData, logoFile?: UploadedFile): Promise<serviceResult> {
    const checkTeam = await this.data.getTeamByName(teamData.name);
    
    if (checkTeam === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    if (checkTeam === true) {
      return {error: errors.DUPLICATE_RECORD, data: null}
    }
    
    if (logoFile) {
      let fileExtension: string | string[] = logoFile.name.split('.');
      fileExtension = fileExtension[fileExtension.length - 1];
      const newFileName = `${uuidv4()}.${fileExtension}`;
      teamData.logoURL = `http://${this.serverURL}:${this.serverPort}/${this.dirMain}/${this.dirLogos}/${newFileName}`;
      await logoFile.mv(`./${this.dirMain}/${this.dirLogos}/${newFileName}`)
    } else {
      teamData.logoURL = `http://${this.serverURL}:${this.serverPort}/${this.dirMain}/${this.dirLogos}/default.png`;
    }

    const result = await this.data.createTeam(teamData);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    return {error: null, data: result};
  }


  public async deleteTeamById(id: number): Promise<serviceResult> {
    const checkTeam = await this.data.getTeamById(id);

    if (checkTeam === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    if (checkTeam === undefined) {
      return {error: errors.NOT_FOUND, data: null}
    }

    const result = await this.data.deleteTeam(id);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    return {error: null, data: checkTeam};
  }


  public async updateTeamById(id: number, teamData: teamData, logoFile?: UploadedFile): Promise<serviceResult> {
    const checkTeam = await this.data.getTeamByName(teamData.name, id);
    
    if (checkTeam === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }

    if (checkTeam === true) {
      return {error: errors.DUPLICATE_RECORD, data: null}
    }

    const fileName = await this.data.getTeamById(id) || {logoURL: this.defaultLogo};

    if (logoFile) {
      let fileExtension: string | string[] = logoFile.name.split('.');
      fileExtension = fileExtension[fileExtension.length - 1];      
      let newFileName: string = (fileName.logoURL.slice(fileName.logoURL.lastIndexOf('/') + 1)).toString();
      if (fileName.logoURL === this.defaultLogo){
        newFileName = `${uuidv4()}.${fileExtension}`;
      }
      teamData.logoURL = `http://${this.serverURL}:${this.serverPort}/${this.dirMain}/${this.dirLogos}/${newFileName}`;
      await logoFile.mv(`./${this.dirMain}/${this.dirLogos}/${newFileName}`)
    } else {
      teamData.logoURL = fileName.logoURL.toString();
    }

    const result = await this.data.updateTeamById(id, teamData);

    if (result === null) {
      return {error: errors.SERVER_ERROR, data: null}
    }
    
    return {error: null, data: result};
  }
}