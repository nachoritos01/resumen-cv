import { Injectable, signal } from '@angular/core';
export interface JobInterface {
  skilSets: string[];
  companyName: string;
  timePeriod: string;
  title: string;
  socialMedia: string[];
  description: string[];
}

export const jobs = signal<JobInterface[]>([]);

@Injectable({
  providedIn: 'root',
})
export class JobService {}
