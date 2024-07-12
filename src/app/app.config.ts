import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};

//O método provideAnimationsAsync() é um método de fábrica que retorna um 
//objeto de configuração para o módulo de animações usado pelo angular material.