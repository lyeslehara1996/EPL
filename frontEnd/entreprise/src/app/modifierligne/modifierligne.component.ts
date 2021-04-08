import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ligne } from '../model/ligne';
import { LigneServiceService } from '../Service/ligne-service.service';

@Component({
  selector: 'app-modifierligne',
  templateUrl: './modifierligne.component.html',
  styleUrls: ['./modifierligne.component.css']
})
export class ModifierligneComponent implements OnInit {

ligne:any;
lgncod:String;
  constructor(public ligneSevice:LigneServiceService, public route:Router, public Activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.lgncod =atob(this.Activated.snapshot.params.id);

    this.ligneSevice.getLigneID("/listLigne/"+this.lgncod)
.subscribe(data=>{
  this.ligne=data;
},err=>{
  console.log(err)
})

  }


  
get code(){
  return this.ligneForm.get('code');
}
get libelle(){
  return this.ligneForm.get('libelle');
}

Ligne :Ligne =new Ligne();
submitted =false;
ligneForm= new FormGroup({
    code : new FormControl(),
    libelle: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
  });

  UpdateLigne(F){
    this.ligne= new Ligne();
    this.ligne.lgncod=this.code.value;
    this.ligne.lgnlig=this.libelle.value;
    this.ligneSevice.updateLigne(this.ligne.lgncod,this.ligne).subscribe(data=>{

      this.route.navigate(['/listeligne']);
      this.submitted=true;
    },err=>{
      console.log(err);
    })

}

}
