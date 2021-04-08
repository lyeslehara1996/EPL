import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigneServiceService {

  public host :String ="http://localhost:8070"
  constructor(private httpClinet:HttpClient) { }

  public getLigne(url:any):Observable <any>{
return this.httpClinet.get(this.host+url);
  }

  public getLigneID(url:any):Observable <any>{
    return this.httpClinet.get(this.host+url);
      }
  public DeleteLigne(id:any):Observable<any>{
    return this.httpClinet.delete(this.host+"/DeleteLigne/"+id)
  }

  public AddLigne(ligne:Object) :Observable<any>{
    return this.httpClinet.post(this.host+"/AddLigne", ligne);
  }
  public updateLigne(id:any,Ligne:Object){
    return this.httpClinet.put(this.host+"/UpdateLigne/"+id,Ligne);
  }
}
