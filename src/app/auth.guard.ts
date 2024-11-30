import {
  CanActivateFn, CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
Injectable({
  providedIn: 'root',
})

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  return true;
};
