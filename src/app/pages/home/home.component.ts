// filepath: /home/nachoritos/projects/personal-cv/src/app/pages/home/home.component.ts
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PricesComponent } from '../../core/components/organisms/prices/prices.component';
import { RecomendationsComponent } from '../../core/components/organisms/recomendations/recomendations.component';
import { ContactComponent } from '../../core/components/organisms/contact/contact.component';
import { SkillsComponent } from '../../core/components/organisms/skills/skills.component';
import { JobCardComponent } from '../../core/components/molecules/job-card/job-card.component';
import { JobInterface, jobs } from './store/job.store';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

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
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  public translate = inject(TranslateService);
  public jobsData: JobInterface[] = [];
  public lang: string = 'es';

  constructor() {
    this.translate.onLangChange.subscribe(({ lang }) => {
      this.lang = lang;
      console.log(lang);
      this.updateJobsData();
    });
  }

  ngOnInit(): void {
    this.updateJobsData();
  }

  updateJobsData() {
    this.jobsData = [
      {
        skilSets: ['angular 18', 'Tailwild', 'SSO'],
        companyName: 'Procetti',
        timePeriod: this.translate.instant('PROCETTI_TIME_PERIOD'),
        title: this.translate.instant('PROCETTI_TITLE'),
        description: [
          this.translate.instant('PROCETTI_DESCRIPTION_1'),
          this.translate.instant('PROCETTI_DESCRIPTION_2'),
          this.translate.instant('PROCETTI_DESCRIPTION_3'),
        ],
        socialMedia: ['https://www.linkedin.com/company/proceti'],
      },
      {
        skilSets: ['angular', 'Tailwild', 'Jira'],
        companyName: 'Neoris',
        timePeriod: this.translate.instant('NEORIS_TIME_PERIOD'),
        title: this.translate.instant('NEORIS_TITLE'),
        description: [
          this.translate.instant('NEORIS_DESCRIPTION_1'),
          this.translate.instant('NEORIS_DESCRIPTION_2'),
        ],
        socialMedia: ['https://www.linkedin.com/company/neoris'],
      },
      {
        skilSets: ['angular', 'bootstrap', 'gitlab', 'scrum'],
        companyName: 'Nova Solutions Systems',
        timePeriod: this.translate.instant('NOVA_TIME_PERIOD'),
        title: this.translate.instant('NOVA_TITLE'),
        description: [
          this.translate.instant('NOVA_DESCRIPTION_1'),
          this.translate.instant('NOVA_DESCRIPTION_2'),
        ],
        socialMedia: ['https://www.linkedin.com/company/novasolutionsystems/'],
      },
      {
        skilSets: ['angular', 'angular material', 'expressJs', 'nodeJs'],
        companyName: 'Relappro',
        timePeriod: this.translate.instant('RELAPPRO_TIME_PERIOD'),
        title: this.translate.instant('RELAPPRO_TITLE'),
        description: [this.translate.instant('RELAPPRO_DESCRIPTION_1')],
        socialMedia: ['https://www.linkedin.com/company/relap'],
      },
      {
        skilSets: ['PhP', 'symfony framework', 'Jira', 'twig'],
        companyName: 'Simetrical',
        timePeriod: this.translate.instant('SIMETRICAL_TIME_PERIOD'),
        title: this.translate.instant('SIMETRICAL_TITLE'),
        description: [
          this.translate.instant('SIMETRICAL_DESCRIPTION_1'),
          this.translate.instant('SIMETRICAL_DESCRIPTION_2'),
        ],
        socialMedia: ['https://www.linkedin.com/company/simdatagroup/'],
      },
      {
        skilSets: ['PHP', 'codeigniter framework', 'mysql', 'mvc', 'angularjs'],
        companyName: 'Efisense Interactive',
        timePeriod: this.translate.instant('EFISENSE_TIME_PERIOD'),
        title: this.translate.instant('EFISENSE_TITLE'),
        description: [
          this.translate.instant('EFISENSE_DESCRIPTION_1'),
          this.translate.instant('EFISENSE_DESCRIPTION_2'),
        ],
        socialMedia: ['https://www.linkedin.com/company/efisense/'],
      },
    ];
  }
}
