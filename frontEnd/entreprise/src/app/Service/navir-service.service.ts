import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Navir } from '../model/navir';

@Injectable({
  providedIn: 'root'
})


  
export class NavirServiceService {
  public host :String ="http://localhost:8070"
  public hosts: string="http://localhost:8070/navirs"

  constructor(public httpClient:HttpClient) { }

 

  public getNavir (url:any):Observable <any>{
    
return this.httpClient.get(this.host+url );
  }

  public DeleteNavir (url:any):Observable<any>{
    return this.httpClient.delete(url)
  }

  public AddNavir(navir:Object) :Observable<any>{
    return this.httpClient.post(this.host+"/AddNavire", navir);
  }

  public getNavirID(url:any) :Observable<any>{
    return this.httpClient.get(this.host+url)
  }

  public updateNavir(id:any,navir:Object){
    return this.httpClient.put(this.host+"/UpdateNavir/"+id,navir);
  }
  //Json
  public GETNavir(){
    return this.httpClient.get(this.hosts+"/navirs");
  }

}
