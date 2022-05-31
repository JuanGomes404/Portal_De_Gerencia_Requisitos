import { Requisito } from './../models/requisito';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastraRequisitoService {
  public contPR = 0;
  public contIN = 0;
  public contPL = 0;
  constructor() {}
      //futuramente, será utilizado um banco de dados
     public reqs: Requisito[] = [];

      getListaReqs(){
          return of(this.reqs);
    }

  public uparRequisito(r: Requisito){
      this.reqs.push(r);
  }
}
