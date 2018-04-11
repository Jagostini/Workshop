import { Injectable } from '@angular/core';

interface groupe {
  id: number;
  idProjet: number;
  nomGroupe: string;
  jeton:  number;
}

@Injectable()
export class GroupeService {

  constructor() { }

}
