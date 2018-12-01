import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ROUTES } from './app.routes';
import { PricingComponent } from './routes/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
