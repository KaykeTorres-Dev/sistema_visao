import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LoaderService } from './loader/loader.service';
import { environment } from '../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient,
    private loader: LoaderService
  ) { }

  get<T = any>(
    path: string,
    options?: {
      headers?: HttpHeaders | { [p: string]: string | string[] };
      context?: HttpContext;
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [p: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Promise<T> {
    this.loader.push();
    return firstValueFrom<T>(
      this.http.get<T>(`${environment.serverBackoffice}${path}`, options)
    ).finally(() => this.loader.pop());
  }

  post<T = any>(
    path: string,
    body: any,
    options?: {
      headers?: HttpHeaders | { [p: string]: string | string[] };
      context?: HttpContext;
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [p: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Promise<T> {
    this.loader.push();
    delete body.id;
    return firstValueFrom<T>(
      this.http.post<T>(`${environment.serverBackoffice}${path}`, body, options)
    ).finally(() => this.loader.pop());
  }

  save<T = any>(
    path: string,
    body: any,
    options?: {
      headers?: HttpHeaders | { [p: string]: string | string[] };
      context?: HttpContext;
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [p: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Promise<T> {
    return body.id
      ? this.put<T>(path, body, options)
      : this.post(path, body, options);
  }

  put<T = any>(
    path: string,
    body: any,
    options?: {
      headers?: HttpHeaders | { [p: string]: string | string[] };
      context?: HttpContext;
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [p: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Promise<T> {
    this.loader.push();
    const id = body.id;
    delete body.id;
    return firstValueFrom<T>(
      this.http.put<T>(
        `${environment.serverBackoffice}${path}/${id}`,
        body,
        options
      )
    ).finally(() => this.loader.pop());
  }

  patch<T = any>(
    path: string,
    body: any,
    options?: {
      headers?: HttpHeaders | { [p: string]: string | string[] };
      context?: HttpContext;
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [p: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Promise<T> {
    this.loader.push();
    return firstValueFrom<T>(
      this.http.patch<T>(
        `${environment.serverBackoffice}${path}`,
        body,
        options
      )
    ).finally(() => this.loader.pop());
  }
}
