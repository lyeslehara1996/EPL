import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NavirServiceService } from '../Service/navir-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimernav',
  templateUrl: './supprimernav.component.html',
  styleUrls: ['./supprimernav.component.css']
})
export class SupprimernavComponent implements OnInit {
  public navirs:any=undefined;
  constructor(public navirservice: NavirServiceService, private _route:Router) { }

  ngOnInit() {
    this.navirservice.getNavir("/listnavir")
    .subscribe(data=>{
      this.navirs=data;
   
    },err=>{
      console.log(err);
    })
  }

  selectIt(){
    this.navirservice.getNavir("/listnavir")
    .subscribe(data=>{
      this.navirs=data;
   
    },err=>{
      console.log(err);
    })
  }

  onDelete(navnum:any){
    let conf=confirm("vous voulez vraiment supprimer cette etudiant?");
    if(conf){
    this.navirservice.DeleteNavir("http://localhost:8070/DeleteNavir/"+navnum)
   .subscribe(data=>{
     this.navirservice.getNavir("/listnavr")
    this._route.navigate(['/listenav']);
   },err=>{
console.log(err);
   })    

   
  }
}
       gotoliste(){
         this._route.navigate(['/listenav'])
       }

       onUpdate(navnum:any){
         this._route.navigate(['/modifiernav/'+btoa(navnum)])
       }
}
