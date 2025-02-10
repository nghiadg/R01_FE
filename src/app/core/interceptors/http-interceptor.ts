import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export function httpInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  if (req.url.startsWith('api')) {
    const cloneReq = req.clone({
      url: [environment.apiUrl, req.url].join('/'),
    });

    return next(cloneReq);
  }
  return next(req);
}
