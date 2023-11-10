import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {  MediaAsset, Root2, Variant } from '../models';
import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
  obs!: Observable<Root2> 
  x !: any
  constructor(private keys:KeysService){
  }

  cerca(){
    this.obs=this.keys.SearchProk()
    this.obs.subscribe(
      (data: Root2)=> 
      {
        this.x=data;
        console.log(data)
      }
      
      )
    
  }
  vai(url:string){
    const parts =url.split('/');
    console.log(parts)
    return parts.at(-2)
  }

}
