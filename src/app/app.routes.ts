import { Routes } from '@angular/Router';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { PricingComponent} from './routes/pricing/pricing.component';

export const ROUTES: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'pricing', component: PricingComponent },
    { path: '**', component: PortfolioComponent },
]