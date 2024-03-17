import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface AuthModel {
  username: string,
  password: string,
  email?: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  ngOnInit(){
    localStorage.setItem('isLoggedIn', 'false');
  }

  constructor(private http: HttpClient, private router: Router) {}

  signupUser(username: string, password: string, email: string){
    const authData: AuthModel = {username: username, password: password, email: email};

    this.http.post<{message: string, result: {_id: string, name: string}}>('http://localhost:3000/auth/signup', authData).subscribe(res => {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userId', res.result._id)
      localStorage.setItem('username', res.result.name)

      window.location.href = `/user/${res.result._id}`
    })

  }

  loginUser(username: string, password: string){
    const authData: AuthModel = {username: username, password: password};

    this.http.post<{token: string, name: string, id: string}>('http://localhost:3000/auth/login', authData)
        .subscribe(res => {
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('userId', res.id)
            localStorage.setItem('username', res.name)
            window.location.href = `/user/${res.id}`
    })
}
}
