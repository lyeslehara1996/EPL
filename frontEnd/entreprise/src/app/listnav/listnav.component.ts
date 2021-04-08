import { Component, OnInit } from '@angular/core';
import { NavirServiceService } from '../Service/navir-service.service';

@Component({
  selector: 'app-listnav',
  templateUrl: './listnav.component.html',
  styleUrls: ['./listnav.component.css']
})
export class ListnavComponent implements OnInit {
public navirs:any=undefined;

  constructor(private navirService: NavirServiceService) { }

  ngOnInit() {
    this.navirService.getNavir("/listnavir")
    .subscribe(data=>{
      this.navirs=data;
   
    },err=>{
      console.log(err);
    })
  }
  }


 
    


