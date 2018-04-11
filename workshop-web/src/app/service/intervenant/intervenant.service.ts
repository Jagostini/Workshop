import { Injectable } from '@angular/core';

interface intervenant {
  id: number;
  idProjet: number;
  nom: string;
  prenom: string;
  competence: string;
  disponibilite: string;
  // a voir en prog
  tempsRealise: string;
}

@Injectable()
export class IntervenantService {

  constructor() { }

}
