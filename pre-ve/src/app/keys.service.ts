import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {   Root2 } from './models';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  


  constructor(private http:HttpClient) { }

  SearchProk(){
    const url = `https://danbooru.donmai.us/posts.json?page=k3xEkDZM5VP5SNH5noRLvF88`
    let obsprod = this.http.get<Root2>(url);
    return obsprod;
  }
}
