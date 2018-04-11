import { Injectable } from '@angular/core';

interface Administration{
  id: number;
  nom: string;
  prenom: string;
}

@Injectable()
export class AdministrationService {

  constructor() { }

}
