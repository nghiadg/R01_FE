import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorService } from '../../../../core/services/error.service';
import { AuthApiService } from '../../apis/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private authApi = inject(AuthApiService);
  private errorService = inject(ErrorService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  private redirectUrl: string = '/';

  constructor() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.redirectUrl = params['redirect'] || '/';
    });
  }

  login(email: string, password: string) {
    this.authApi.login(email, password).subscribe({
      next: (response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        this.messageService.add({
          severity: 'success',
          summary: 'Thành công',
          detail: 'Đăng nhập thành công.',
        });

        this.router.navigate([this.redirectUrl]);
      },
      error: (error) => {
        this.errorService.handleError(error);
      },
    });
  }
}
