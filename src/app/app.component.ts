import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'clothing-store';
  loggedIn: boolean = false;
  username?: string | null = 'gg';
  userId?: string | null = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.username = localStorage.getItem('username');
    this.userId = localStorage.getItem('userId');
  }

  logOut(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.setItem('isLoggedIn', 'false');
  }
}
