import { Injectable } from '@angular/core';

interface Projet {
  id:number;
  sujet: string;
  description: string;
  document: string;
}

@Injectable()
export class ProjetService {

  constructor() { }

}
