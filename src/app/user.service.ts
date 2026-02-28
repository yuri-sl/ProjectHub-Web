import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { createNewUserDTO } from './types/dto/createNewUserDTO';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(
    private http:HttpClient
  ){}
  apiUrl:string = "http://localhost:8080/users"


  getAllClients():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl+"/listall");
  }
  postCreateNewClient(body:any):Observable<User>{
    return this.http.post<User>(this.apiUrl,body)

  }

  
}
