import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$
    .asObservable()
    .pipe(filter((val): val is IUser | null => val !== undefined));

  user: IUser | null = null;
  // = {
  //   username: 'John',
  //   email: 'johnbro@gmail.bg',
  //   tel: '00359123123123',
  // } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel?: string
  ) {
    return this.http
      .post<IUser>('/api/register', {
        username,
        password,
        email,
        rePassword,
        tel,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<any>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http
      .get<IUser>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<void>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(null)));
  }
}
