import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MediaComponent } from './media/media.component';
import { ResearchComponent } from './research/research.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'media', component: MediaComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'terms', component: TermsComponent },
];
