import { Injectable } from '@angular/core';

export interface groupe {
  id: number;
  idProjet: number;
  nomGroupe: string;
  jeton:  number;
}

@Injectable()
export class GroupeService {

  constructor() { }

}
