import { Component, OnInit,NgZone ,Input } from '@angular/core';
import { AngularServiceService } from '../service/angular-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
  
  // declarations
  @Input() name:any;
  posts : any;
  show:boolean;


  // methods

foo($event:any){
  if($event.keyCode == 13) 
  {
    this.press();
  }
}

press(){
  this.show=true;
  if(this.name==undefined){
    this.name=""
  }
  this.httpService.getData(this.name).subscribe(data=>
    {
      this.posts=data
	});
}

constructor(private httpService: AngularServiceService) {}
ngOnInit(): void {}
}
