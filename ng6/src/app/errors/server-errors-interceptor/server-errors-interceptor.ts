import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { catchError } from "rxjs/operators";

import { map, tap, delay, retryWhen, delayWhen } from "rxjs/operators";

import { ErrorsService } from "../errors-service/errors.service";

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
  constructor(private router: Router, private errorsService: ErrorsService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request);
  }
}
