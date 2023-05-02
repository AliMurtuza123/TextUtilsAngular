import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class MainService{
    togClicked = new Subject<any>();
    palert = new Subject<any>();




}