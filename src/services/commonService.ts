import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../enviorment/env';
@Injectable({
    providedIn: 'root',
  })

  export class CommonService{
    private url = env.apiUrl;
    constructor(private http: HttpClient) {}

    public signUp(body:any): Observable<any> {
        const endpoint = `${this.url}user/sign-up`;  
        return this.http.post<any>(endpoint, body);  
      }

      
  }