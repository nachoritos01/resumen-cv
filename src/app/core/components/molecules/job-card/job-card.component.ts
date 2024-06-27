import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JobInterface, jobs } from '../../../../pages/home/store/job.store';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent implements OnInit {
  public lastJobs: JobInterface[] = [];
  ngOnInit(): void {
    this.lastJobs = jobs();
  }
}
