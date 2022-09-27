import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  posts : any;
  flagButton:boolean=true;
  flagResetButton:boolean=false;
  
 
  getAPiCall(){
    this.flagButton=false
    this.router.navigateByUrl('home/get')
  }
  
  postAPiCall(){
    this.flagButton=false
    this.router.navigateByUrl('home/post')
  
  }
  updateAPiCall(){
    this.flagButton=false
    this.router.navigateByUrl('home/update')
  
  }
  deleteAPiCall(){
    this.flagButton=false
    this.router.navigateByUrl('home/delete')
  }
  constructor(private router:Router) { }
  ngOnInit() {}
  }
