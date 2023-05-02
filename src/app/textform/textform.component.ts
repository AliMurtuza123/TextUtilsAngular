import {Component, OnInit} from '@angular/core';
import { MainService } from '../main.service';

@Component({
    selector: 'app-textform',
    templateUrl: 'textform.component.html'
})

export class TextformComponent implements OnInit{
    text: string = '';
    readTime: number = 0;
    mode = 'light';
    wordCount: number = 0 ;
    charCount: number = 0 ;

    constructor(private mainService: MainService){
       
    }

    ngOnInit(): void {
        this.mainService.togClicked.subscribe(
            (mode) =>{
                this.mode = mode;
            }
        );
    }

    wordCounter(){
        this.wordCount = this.text.split(/\s+/).filter(elm => elm.length !== 0).length;
        this.charCount = this.text.length;
        this.readTime =  this.wordCount* 0.0032;
    }

    onCopy(){
        navigator.clipboard.writeText(this.text);
        // let cptxt = 'String copied successfully';
        // this.palert.next(cptxt);
        this.mainService.palert.next('Text copied successfully');
    }

    onXSpace = ()=>{
        let newText = this.text.split(/[ ]+/);
        this.text = newText.join(" ");
        this.mainService.palert.next('Extra space removed successfully');

    }

    handleOnClick = ()=>{
        this.text = this.text.toUpperCase();
        this.mainService.palert.next('Text converted to uppercase successfully'); 
    }

    handleOnLowClick = ()=>{
        this.text = this.text.toLowerCase();
        this.mainService.palert.next('Text converted to lowercase successfully');
    }

    handleOnCap(){
        let bap = this.text.toLowerCase();
        let dap = bap.split(" ");
        let cap = "";
        dap.forEach(
            (aap)=>{
                let taap = aap.charAt(0).toUpperCase() + aap.slice(1);
                cap = cap + taap + " ";
            }
        );
        this.text = cap;
        this.mainService.palert.next('Text Capitalized successfully');
    }

    handleOnClearClick(){
        this.text = "";
        this.mainService.palert.next('Text cleared successfully');
        this.wordCount = 0;
        this.charCount = 0;
        this.readTime = 0;
    }
}