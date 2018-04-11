import { Injectable } from '@angular/core';

export interface intervenant {
  id: number;
  idProjet: number;
  nom: string;
  prenom: string;
  competence: string;
  disponibilite: string;
  // a voir en prog
  tempsRealise: number;
  motDePasse: string;
}

@Injectable()
export class IntervenantService {

  constructor() { }

}
