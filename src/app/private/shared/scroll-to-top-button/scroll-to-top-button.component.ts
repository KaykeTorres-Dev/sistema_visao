import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top-button.component.html',
  styleUrl: './scroll-to-top-button.component.scss',
})
export class ScrollToTopButtonComponent {
  windowScrolled: boolean | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }


  scrollToTop() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = 50;

    function animate() {
      if (scrollTop > 0) {
        scrollTop -= speed;
        speed *= 1;
        window.scrollTo(0, scrollTop);
        setTimeout(animate, 10);
      } else {
        window.scrollTo(0, 0);
      }
    }

    animate();
  }
}
