import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private activatedRouted: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  loginHandler(): void {
    this.authService.user = {
      username: 'John',
    } as any;

    const returnUrl =
      this.activatedRouted.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}
