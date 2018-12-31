import {Type} from './type';

export class Room {
  naam: string;
  type: Type;
  bezet: boolean;
  capaciteit?: [number, string];
  beamer: boolean;
  drukte: number;

  hoogte: number;
  breedte: number;
}
