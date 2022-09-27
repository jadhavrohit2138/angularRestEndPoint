import { Component, OnInit,Input } from '@angular/core';
import { AngularServiceService } from '../service/angular-service.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-comp',
  templateUrl: './post-comp.component.html',
  styleUrls: ['./post-comp.component.css']
})
export class PostCompComponent implements OnInit {
@Input() name:string
@Input() loc:string
message:string
issueForm: FormGroup;



  submit(){
    this.addIssue(this.name,this.loc);
    this.httpService.postData(this.issueForm.value).subscribe(data=>{
      if(data){
        this.message="Data is added"
      }
      else{
        this.message="Undefined data"
      }
      this.name=""
      this.loc=""
    })
  }

  addIssue(userName:string,userLoc:string) {
    this.issueForm = this.fb.group({
      name: [`${userName}`],
      loc: [`${userLoc}`],
    });
  }
  constructor(private httpService: AngularServiceService,    public fb: FormBuilder) {}

  ngOnInit(): void {
  }

}
