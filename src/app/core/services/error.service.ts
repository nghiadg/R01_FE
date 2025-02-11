import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IHttpErrorResponse } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private messageService = inject(MessageService);

  handleError(error: IHttpErrorResponse): void {
    const errorMessage =
      error.error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';

    this.messageService.add({
      severity: 'error',
      summary: 'Lỗi',
      detail: errorMessage,
    });
  }
}
