import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Navir } from '../model/navir';
import { NavirServiceService } from '../Service/navir-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouternav',
  templateUrl: './ajouternav.component.html',
  styleUrls: ['./ajouternav.component.css']
})
export class AjouternavComponent implements OnInit {
// @ViewChild('F') form:NgForm;
// navirForm:FormGroup;

  constructor(private navirService:NavirServiceService, private _route:Router) { }

  ngOnInit(){
    this.submitted=false;
   
  }
get num(){
  return this.navirForm.get('num');
}
get nom(){
  return this.navirForm.get('nom');
}
get pav(){
  return this.navirForm.get('pav');
}

get tiran(){
  return this.navirForm.get('tiran');
}
get Jauge(){
  return this.navirForm.get('Jauge');
}
get port(){
  return this.navirForm.get('port');
}
get ctv(){
  return this.navirForm.get('ctv');
}
get ctp(){
  return this.navirForm.get('ctp');
}

get ctc(){
  return this.navirForm.get('ctc');
}

get long(){
  return this.navirForm.get('long');
}

get larg(){
  return this.navirForm.get('larg');
}

navir :Navir=new Navir();
submitted =false;
  navirForm= new FormGroup({
    num : new FormControl(),
    nom: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
    pav : new FormControl(''),
    tiran : new FormControl(''),
    Jauge : new FormControl(''),
    port : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
    ctv : new FormControl(''),
    ctp : new FormControl(''),
    ctc : new FormControl(''),
    long : new FormControl(''),
    larg : new FormControl('')

  });

  static nombrePositive(nombre){
    nombre>0
  }
 
saveNavir(F){
  this.navir= new Navir();
  this.navir.navnum=this.num.value;
  this.navir.navnom=this.nom.value;
 this.navir.pavinav=this.pav.value;
 this.navir.navctv=this.ctv.value;
 this.navir.navlarg=this.larg.value;
 this.navir.navlong=this.long.value
 this.navir.navctc=this.ctc.value;
 this.navir.navjb=this.Jauge.value
 this.navir.navtir=this.tiran.value;
 this.navir.navctp=this.ctp.value;
 this.navir.navport=this.port.value;                                  
 this.submitted=true;
this.save();
}


save(){
  this.navirService.AddNavir(this.navir)
  .subscribe(data=>{
 console.log(   this.navir=new Navir);
 this._route.navigate(['/listenav'])
    this.navir=data;
   
  },err=>{
    console.log(err);
  })
}
 


goto(){
  this._route.navigate(['/listenav'])
}

}
