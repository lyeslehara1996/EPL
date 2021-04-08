import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consignataire } from '../model/consignataire';
import { ConsignataireService } from '../Service/consignataire.service';

@Component({
  selector: 'app-ajoutercons',
  templateUrl: './ajoutercons.component.html',
  styleUrls: ['./ajoutercons.component.css']
})
export class AjouterconsComponent implements OnInit {

  constructor(public consignataireService:ConsignataireService,public route :Router) { }

  ngOnInit(): void {
  }

  get code(){
    return this.ConsForm.get('code');
  }
  get nom(){
    return this.ConsForm.get('nom');
  }
  get ville(){
    return this.ConsForm.get('ville');
  }
  
  get adresse(){
    return this.ConsForm.get('adresse');
  }
  get telephone(){
    return this.ConsForm.get('telephone');
  }
  get email(){
    return this.ConsForm.get('email');
  }
  get libelle(){
    return this.ConsForm.get('libelle');
  }
 
  consignataire :Consignataire=new Consignataire();
  submitted =false;
    ConsForm= new FormGroup({
      code : new FormControl(),
      nom: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
      ville : new FormControl(''),
      adresse : new FormControl(''),
      telephone : new FormControl(''),
      email : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
      libelle : new FormControl(''),

    });
   
    saveCons(F){
    this.consignataire= new Consignataire();
    this.consignataire.concod=this.code.value;
    this.consignataire.conadr=this.adresse.value;
   this.consignataire.conlib=this.libelle.value;
   this.consignataire.conmel=this.email.value;
   this.consignataire.connom=this.nom.value;
   this.consignataire.contel=this.telephone.value
   this.consignataire.convil=this.ville.value  

   this.consignataireService.AddConsign(this.consignataire)
  .subscribe(data=>{
    this.consignataire=data;
 this.route.navigate(['/listcons'])
    
   
  },err=>{
    console.log(err);
  })
  }


  
}
