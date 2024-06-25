import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isScrolled = false;
  public isResized = false;
  public isCollapsed = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 100;
  }

  collapse() {
    console.log(this.isCollapsed);
  }
}
