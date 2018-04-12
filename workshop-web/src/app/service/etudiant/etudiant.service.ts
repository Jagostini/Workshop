import { Injectable } from '@angular/core';

export interface Etudiant {
  id: number;
  idGroupe: number;
  prenom: string;
  nom: string;
  classe: string;
  email: string;
  motDePasse: string;
}

@Injectable()
export class EtudiantService {

  constructor() { }

}
