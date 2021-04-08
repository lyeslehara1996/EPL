import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsignataireService {
  public host :String ="http://localhost:8070"

  constructor(public httpClient:HttpClient) { }


  
  public getConsign (url:any):Observable <any>{
    
    return this.httpClient.get(this.host+url );
      }
    
      public DeleteConsign (url:any):Observable<any>{
        return this.httpClient.delete(url)
      }
    
      public AddConsign(cons:Object) :Observable<any>{
        return this.httpClient.post(this.host+"/AddConsignataire", cons);
      }
    
      public getConsignID(url:any) :Observable<any>{
        return this.httpClient.get(this.host+url)
      }
    
      public updateConsign(id:any,navir:Object){
        return this.httpClient.put(this.host+"/UpdateConsignataire/"+id,navir);
      }
}
