import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-data-button',
  templateUrl: './get-data-button.component.html',
  styleUrls: ['./get-data-button.component.css']
})
export class GetDataButtonComponent implements OnInit {



  callGetByName(){
    this.router.navigateByUrl('home/get/name')
  }

  callGetById(){
    this.router.navigateByUrl('home/get/id')

  }

  callHome(){
    this.router.navigateByUrl('home')
  }
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

}
