import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  listaUsuarios: User[] = [];
  criarNovoUsuarioForm!:FormGroup;
  confirmarsenha:string = '';


  constructor(
    private userService:UserService,
    private fb:FormBuilder
  ){
    this.criarNovoUsuarioForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.email],
      passwordHash:['',Validators.required]
    })
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

  enviarFormularion(){
    if(
      this.criarNovoUsuarioForm.valid
    ){
      this.userService.postCreateNewClient(this.criarNovoUsuarioForm).subscribe({
        next:(res) => console.log(res),
        error:(err) => console.error(err)
      })
    }
  }

}
