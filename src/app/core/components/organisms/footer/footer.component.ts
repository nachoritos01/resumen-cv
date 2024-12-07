import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  //obtener la fecha  actual  para el copyright
  year: number = new Date().getFullYear();

  constructor() {}
  /**
   * Returns the copyright information for the current year.
   *
   * @return {string} The copyright information.
   */
  getData() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    const text = `© ${currentYear} All rights reserved.`;
    const algo = `           `;
    // Return the copyright information
    return `© ${currentYear} All rights reserved.`;
  }
}
