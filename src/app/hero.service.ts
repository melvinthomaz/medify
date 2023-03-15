import { Injectable } from '@angular/core';
import { diagnostic, durable,  medical, surgery } from 'src/assets/data/data';
import { singlediagnostic, singledurable, singleicu, singlelaboratory } from 'src/assets/data/singledata';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return diagnostic;
  }
  getMedical(){
    return medical;
  }
  getSurgery(){
    return surgery;
  }
  getDurable(){
    return durable;
  }
  getDiagnostic(){
    return singlediagnostic;
  }
  getLaboratory(){
    return singlelaboratory;
  }
  getIcu(){
    return singleicu;
  }
  getStrectcher(){
    return singledurable;
  }
  
}
