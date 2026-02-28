import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(
    private http:HttpClient
  ){}
  apiUrl:string = "http://localhost:8080/users/listall"


  getAllClients():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  
}
