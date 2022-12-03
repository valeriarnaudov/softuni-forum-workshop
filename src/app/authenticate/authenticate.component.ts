import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {

  isAuthenticating = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (user) => {
        this.authService.user = user;
        this.isAuthenticating = false
      },
      error: () => {
        this.authService.user = null;
        this.isAuthenticating = false;
      },
    });
  }
}
