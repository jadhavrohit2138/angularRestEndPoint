import { Component, OnInit, Input } from '@angular/core';
import { AngularServiceService } from '../service/angular-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {
  @Input() empId:any;
  posts :any;
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
  this.httpService.getDataById(this.empId).subscribe(data=>
    {
      this.posts = [data]
	});
}

constructor(private httpService: AngularServiceService) {}
ngOnInit(): void {}
}
