import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ligne } from '../model/ligne';
import { LigneServiceService } from '../Service/ligne-service.service';

@Component({
  selector: 'app-ajouterligne',
  templateUrl: './ajouterligne.component.html',
  styleUrls: ['./ajouterligne.component.css']
})
export class AjouterligneComponent implements OnInit {
lign:any
  constructor(public route:Router, public ligneService: LigneServiceService ) { }

  ngOnInit(): void {
  }


get code(){
  return this.navirForm.get('code');
}
get libelle(){
  return this.navirForm.get('libelle');
}

ligne :Ligne =new Ligne();
submitted =false;
  navirForm= new FormGroup({
    code : new FormControl(),
    libelle: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
  });

  saveLigne(F){
    this.ligne= new Ligne();
    this.ligne.lgncod=this.code.value;
    this.ligne.lgnlig=this.libelle.value;
    this.ligneService.AddLigne(this.ligne).subscribe(data=>{
      this.lign=data
      this.route.navigate(['/listeligne']);
      this.submitted=true;
    },err=>{
      console.log(err);
    })

}
}