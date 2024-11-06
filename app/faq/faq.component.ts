import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  readonly panelOpenState = signal(false);
}
