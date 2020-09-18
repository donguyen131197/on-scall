import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

import { AlertService } from './alert.service';


@Injectable()
export class ApiService {

  protected apiServer={
    api_url : 'https://channel.vngcloud.tech/',
  }

  private timeOut = 1000 * 60 * 2;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private translateService: TranslateService,
    private alertService: AlertService,
  ) {
  }

  /**Set header api */
  private setHeaders(): HttpHeaders {
    let header = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );

    header = header.append('Authorization', localStorage.getItem('Authorization'));
    return header;
  }

  /**Set header method get */
  private setHeadersGet(): HttpHeaders {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('Authorization'));
    return header;
  }

  /**Handle while api response error */
  private formatErrors(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {

      } else {

        switch (error.status) {
          case 401:      //login
            this.navigateLogin();
            break;
          case 403:     //forbidden
            this.router.navigateByUrl("/not-access");
            // if(error.error && error.error.code) this.errorHandling(error.error.code, error.error.message);
            break;
          default:
            if(error.error && error.error.code) this.errorHandling(error.error.code, error.error.message);
        }
      }
    } else {

    }
    return throwError(error);
  }

  /** Handle error code*/
  errorHandling (errorCode, message = '') {

    let msg = errorCode ? this.translateService.instant(errorCode.toString()) : null;
    if(msg == errorCode){
      this.alertService.error(message);
    }else if(msg != errorCode){
      this.alertService.error(msg);
    }else{
      this.alertService.error(this.translateService.instant('lbl_serve_error'));
    }
  }

  /**Redirect to page login */
  navigateLogin() {
    localStorage.clear()
    //this.sharedService.setFlagLogin(false);
    this.router.navigate(['/login']);
  }

  /**Method get */
  get({ path, params }: { path: string; params?: HttpParams; }): Observable<any> {
    return this.httpClient.get(
      `${this.apiServer.api_url}${path}`,
      {
        headers: this.setHeadersGet(),
        // tslint:disable-next-line:object-literal-shorthand
        params: params
      }
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => res),
      catchError(err => this.formatErrors(err))
    );
  }

  /**Method put */
  put(path: string, body: Object = {}): Observable<any> {
    return this.httpClient.put(
      `${this.apiServer.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .pipe(
        timeout(this.timeOut),
        map((res: Response) => res),
        catchError(err => this.formatErrors(err))
      );
  }

/**Method post */
  post(path: string, body: Object = {}): Observable<any> {
    return this.httpClient.post(
      `${this.apiServer.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => res),
      catchError(err => this.formatErrors(err))
    );
  }

/**Method delete */
  delete({ path, params }: { path: string; params?: HttpParams; }): Observable<any> {
    return this.httpClient.delete(
      `${this.apiServer.api_url}${path}`,
      {
        headers: this.setHeaders(),
        params: params
      }
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => res),
      catchError(err => this.formatErrors(err))
    );
  }

  /**Get user */
  getUser(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {

    return this.httpClient.get(`${this.apiServer.api_url}${path}`, { headers: this.setHeadersGet() }).pipe(
      timeout(this.timeOut),
      map((res: Response) => res),
      catchError(err => this.formatErrors(err))
    );
  }

  /**Method delete async  */
  async deleteAsync({ path, params }: { path: string; params?: HttpParams; }): Promise<any> {
    try {
      const data = await this.httpClient.delete(
        `${this.apiServer.api_url}${path}`,
        {
          headers: this.setHeaders(),
          params: params
        }).toPromise();
      return data;
    } catch (e) {
      if (e.status == 200) {

      } else {

      }

      return e.error;
    }
  };

  /**Method get sub  */
  getSub({ path, params }: { path: string; params?: HttpParams; }): Observable<any> {
    return this.httpClient.get(
      `${this.apiServer.api_url}${path}`,
      {
        headers: this.setHeadersGet(),
        // tslint:disable-next-line:object-literal-shorthand
        params: params
      }
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => res),
      catchError(err => throwError(err))
    );
  }
}
