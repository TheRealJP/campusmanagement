import {Type} from './type';

export class Room {
  naam: string;
  type: Type;
  bezet: boolean;
  capaciteit?: [number, string];
  beamer?: string;
  drukte?: number;
}
