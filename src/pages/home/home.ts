import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cpf: any = "";
  cnpj: any = "";
  nmask: any;

  constructor(public navCtrl: NavController) {
    this.nmask = {
      cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
      cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    };
  }

  salvar() {
    //REMOVE AS MASCARAS DOS CAMPOS
    let removeMask = {
      cpf: this.cpf.replace(/\D+/g, ''),
      cnpj: this.cnpj.replace(/\D+/g, '')
    };
  }
}
