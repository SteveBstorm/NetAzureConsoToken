import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {

  }
  login() {
    this.auth.Login()
  }

  getMovies() {
    this.auth.getAllMovie().subscribe({
      next : (data : any) => console.log(data),
      error : (error) => console.log(error)
    })
  }

  logout() {
    this.auth.Logout()
  }
}
