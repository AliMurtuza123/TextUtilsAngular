import {Component} from '@angular/core'
import { MainService } from '../main.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent{

    mode = 'light';

    constructor(private mainService: MainService){

    }

    onClickMode(){
        this.mode == 'light' ? this.mode = 'dark' : this.mode = 'light';
        this.mainService.togClicked.next(this.mode);
        this.mainService.palert.next('Enabled '+this.mode+' Mode')
    }
}