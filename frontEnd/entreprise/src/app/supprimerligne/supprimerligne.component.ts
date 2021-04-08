import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LigneServiceService } from '../Service/ligne-service.service';

@Component({
  selector: 'app-supprimerligne',
  templateUrl: './supprimerligne.component.html',
  styleUrls: ['./supprimerligne.component.css']
})
export class SupprimerligneComponent implements OnInit {
lign:any
  constructor(public ligneService:LigneServiceService, public route:Router) { }

  ngOnInit() {
    this.ligneService.getLigne("/listligne").subscribe(data=>{
      this.lign=data;
    },err=>{
      console.log(err)
    })
  }
onDelete(lgncod:any){
  this.ligneService.DeleteLigne(lgncod).subscribe(data=>{
    this.ligneService.getLigne("/listligne");
    this.route.navigate(["/listeligne"]);
  },err=>{
    console.log(err);
  })
}

onUpdateLigne(lgncod){
this.route.navigate(['/modifierligne/'+btoa(lgncod)])
}

}
