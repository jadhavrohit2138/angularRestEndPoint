import { Component, OnInit ,Input} from '@angular/core';
import { AngularServiceService } from '../service/angular-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-comp',
  templateUrl: './delete-comp.component.html',
  styleUrls: ['./delete-comp.component.css']
})
export class DeleteCompComponent implements OnInit {
  @Input() empId:any;
  posts : any;
  show:boolean;
  message:any

  foo($event:any){
    if($event.keyCode == 13) 
    {
      this.press();
    }
  }
  
  press(){
    this.show=true;
    if(this.empId==undefined){
      this.message="please enter id"
      this.empId=""
    }
    else{
    this.httpService.deleteData(this.empId).subscribe(data=>
      {
        if(data){
          this.message="Employee id "+this.empId+" is deleted"
          this.empId=""

        }else{
          this.message=this.empId+" is not present in the table!"
          this.empId=""
        }
      });
    }
  }
  
  constructor(private httpService: AngularServiceService) { }

  ngOnInit(): void {
  }

}
