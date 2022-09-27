import { Component } from '@angular/core';
import { AngularServiceService } from './service/angular-service.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export  class  AppComponent {
title = 'Practice purpose';
posts : any;
flagButton:boolean=true;
flagResetButton:boolean=false;


reset(){
	this.flagButton=true
	this.flagResetButton=false
	this.router.navigateByUrl('')


}
callHome(){
    this.router.navigateByUrl('home')
  }
getAPiCall(){
	this.flagButton=false
	this.flagResetButton=true
	this.router.navigateByUrl('get')
}

postAPiCall(){
	this.flagButton=false
	this.flagResetButton=true
	this.router.navigateByUrl('post')

}
updateAPiCall(){
	this.flagButton=false
	this.flagResetButton=true
	this.router.navigateByUrl('update')

}
deleteAPiCall(){
	this.flagButton=false
	this.flagResetButton=true
	this.router.navigateByUrl('delete')
}
constructor(private httpService: AngularServiceService, private router:Router) { }
ngOnInit() {}
}