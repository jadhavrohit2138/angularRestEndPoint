import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularServiceService } from '../service/angular-service.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-updatae-comp',
  templateUrl: './updatae-comp.component.html',
  styleUrls: ['./updatae-comp.component.css']
})
export class UpdataeCompComponent implements OnInit {
  @Input() empId:any
  @Input() name:string
@Input() loc:string
message:string
issueForm: FormGroup;

submit(){
  this.updateIssue(this.empId,this.name,this.loc);
  this.httpService.updateData(this.issueForm.value,this.empId).subscribe(data=>{
    if(data){
      this.message="Data is Updated"
    }
    else{
      this.message="Undefined data"
    }
    this.empId=""
    this.name=""
    this.loc=""
  })
}
updateIssue(userId:number,userName:string,userLoc:string) {
  this.issueForm = this.fb.group({
    empId: [`${userId}`],
    name: [`${userName}`],
    loc: [`${userLoc}`],
  });
}

  constructor(private httpService: AngularServiceService,    public fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
