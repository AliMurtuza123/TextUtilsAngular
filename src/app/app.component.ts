import { Component, OnDestroy } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  title = 'text-utils-ang';
  alert: string = '';
  mode = 'light';

  constructor(private mainService: MainService){
    mainService.palert.subscribe(
      (val)=>{
        this.alert = val;
        setTimeout(()=>{
          this.alert = '';
        },2000);
      }
    );

    mainService.togClicked.subscribe(
      (val) => {
        this.mode = val;
        if(val == 'dark'){
          document.body.style.backgroundColor = '#151B54';
        }else{
          document.body.style.backgroundColor = 'white';
        }
      }
    );    
  }

  ngOnDestroy(): void {
    this.mainService.palert.unsubscribe();
  }
}
