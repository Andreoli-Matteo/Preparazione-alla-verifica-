import { Component } from '@angular/core';

@Component({
  selector: 'app-vedi',
  templateUrl: './vedi.component.html',
  styleUrls: ['./vedi.component.css']
})
export class VediComponent {
  prodotto !:string | null  ;
  obsProd!:Observable<Pokemoninfo>;
  ris !: Pokemoninfo;
  constructor(public vedi:PokemonService , private route: ActivatedRoute ){ 
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  getRouterParam = (params: ParamMap) =>
  {
    this.prodotto = params.get('id');
    this.obsProd = this.vedi.getpok(this.prodotto);
    this.obsProd.subscribe((data : Pokemoninfo)=>{this.ris=data;})
  }
}
}
