import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../enviorment/env';
@Injectable({
    providedIn: 'root',
  })

  export class commonService{
    private url = env.apiUrl;
    constructor(private http: HttpClient) {}

    public signUp(body:any): Observable<any> {
        const endpoint = `${this.url}/sign-up`;  // Full URL for the signup endpoint
        return this.http.post<any>(endpoint, body);  // POST request with the body
      }

      
  }