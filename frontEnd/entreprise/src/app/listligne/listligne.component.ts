import { Component, OnInit } from '@angular/core';
import { LigneServiceService } from '../Service/ligne-service.service';

@Component({
  selector: 'app-listligne',
  templateUrl: './listligne.component.html',
  styleUrls: ['./listligne.component.css']
})
export class ListligneComponent implements OnInit {

  public lignes :any=undefined;
  constructor(private ligneService :LigneServiceService ) { }

  ngOnInit() {

    this.ligneService.getLigne("/listligne")
    .subscribe(data=>{
      this.lignes=data;
    },err=>{
      console.log(err);
    })
  }

 

    

}
