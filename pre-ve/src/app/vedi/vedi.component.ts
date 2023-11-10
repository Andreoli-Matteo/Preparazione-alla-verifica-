import { Component } from '@angular/core';
import { Root2 } from '../models';
import { Observable } from 'rxjs';
import { KeysService } from '../keys.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vedi',
  templateUrl: './vedi.component.html',
  styleUrls: ['./vedi.component.css']
})
export class VediComponent {
  prodotto !:string | null  ;
  obsProd!:Observable<Root2>;
  ris !: any;
  constructor(public vedi:KeysService , private route: ActivatedRoute ){ 
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  getRouterParam = (params: ParamMap) =>
  {
    this.prodotto = params.get('id');
    this.obsProd= this.vedi.getProk(this.prodotto)
    this.obsProd.subscribe((data : any)=>{this.ris=data;})
  }
}

