import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  listaUsuarios: User[] = [];


  constructor(
    private userService:UserService
  ){
  }

  ngOnInit(): void {
    this.fetchAllUsers();
    
  }

  fetchAllUsers():void{
    this.userService.getAllClients().subscribe({
      next:(res) => {
        console.log(res);
        this.listaUsuarios = res;
      },
      error:(err) => {
        console.error(err)
      }
    });
  }

}
