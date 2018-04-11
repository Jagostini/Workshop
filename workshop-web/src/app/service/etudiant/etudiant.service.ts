import { Injectable } from '@angular/core';

interface Etudiant {
  id: number;
  idGroupe: number;
  prenom: string;
  nom: string;
  annee: number;
  email: string;
}

@Injectable()
export class EtudiantService {

  constructor() { }

}
