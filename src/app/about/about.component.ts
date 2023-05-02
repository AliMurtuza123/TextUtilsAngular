import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { MainService } from '../main.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit{
    accState1 = true;
    accState2 = false;
    accState3 = false;

    mode = 'light';

    constructor(private mainService: MainService){
        
    }

    ngOnInit(): void {
        this.mainService.togClicked.subscribe(
            (val) => {
                this.mode = val;
            }
        );
    }
    onClickAcc1(){
        this.accState1 = !this.accState1;
    }
    onClickAcc2(){
        this.accState2 = !this.accState2;
    }
    onClickAcc3(){
        this.accState3 = !this.accState3;
    }
}