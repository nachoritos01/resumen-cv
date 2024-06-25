import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PricesComponent } from '../../core/components/organisms/prices/prices.component';
import { RecomendationsComponent } from '../../core/components/organisms/recomendations/recomendations.component';
import { ContactComponent } from '../../core/components/organisms/contact/contact.component';
import { SkillsComponent } from '../../core/components/organisms/skills/skills.component';
import { JobCardComponent } from '../../core/components/molecules/job-card/job-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PricesComponent,
    RecomendationsComponent,
    ContactComponent,
    SkillsComponent,
    JobCardComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
