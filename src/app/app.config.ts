import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {USERS_FEATURE_KEY, usersReducer} from "./+state/users.reducer";
import {provideEffects} from "@ngrx/effects";
import * as userEffects from "./+state/users.effects";
import {API_URL} from "@services/api-url.token";
import {environment} from "@environment/environment.development";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideEffects(userEffects),
    provideStore(
      {
        [USERS_FEATURE_KEY]: usersReducer,
      }
    ),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
  ]
};
