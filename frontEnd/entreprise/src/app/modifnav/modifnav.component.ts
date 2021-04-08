import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Navir } from '../model/navir';
import { NavirServiceService } from '../Service/navir-service.service';

@Component({
  selector: 'app-modifnav',
  templateUrl: './modifnav.component.html',
  styleUrls: ['./modifnav.component.css']
})
export class ModifnavComponent implements OnInit {

   navir: Navir;
  navire:any
  navnum: String ;
  constructor(private _route:Router , private activated:ActivatedRoute, private navirService:NavirServiceService) { }

  ngOnInit() {
    this.navnum =atob(this.activated.snapshot.params.id)


this.navirService.getNavirID("/listNavir/"+this.navnum)
.subscribe(data=>{
  this.navir=data;
},err=>{
  console.log(err)
})
 
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
  
   
    onUpdateNavir(F){
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

   this.navirService.updateNavir(this.navir.navnum,this.navir).subscribe(data=>{
    this.submitted=true;
    this._route.navigate(['/listenav']);
    
  },err=>{
  console.log(err);
  })
  
  
  }
  



//   onUpdateNavir(value:any){
//      this.navirService.updateNavir(this.navnum,value)
//     .subscribe(data=>{
// this.navire=data
//     this._route.navigate[('/listenav')]
//     },err=>{
//       console.log(err)
// //     })
//   }

}
