import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule, MessageModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private loginService = inject(LoginService);
  protected loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', Validators.required),
  });

  protected onSubmit() {
    if (this.loginForm.invalid) return;
    const formValue = this.loginForm.getRawValue();
    if (!formValue.email || !formValue.password) return;
    this.loginService.login(formValue.email, formValue.password);
  }
}
