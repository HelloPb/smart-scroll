import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  scrollTarget(id: string, duration: number): void {

    const docHeight = document.body.offsetHeight;
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const ele = document.getElementById(id);
    let to = ele.offsetTop;

    let diff = to - window.scrollY;

    if (diff > 0) {

      if (docHeight - to < viewportHeight) {
        diff = docHeight - window.scrollY - viewportHeight;
        diff = diff + ele.offsetHeight + 15;
        to = window.scrollY + diff;
      }
    }

    const scrollStep = Math.PI / (duration / 10);
    let count = 0, currPos;
    const start = window.scrollY;
    currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
    const scrollInterval = setInterval(function () {

      let bFlag = 0;

      if (diff > 0) {

        if (window.scrollY < to) {
          bFlag++;
        }

        if (currPos <= window.scrollY + 1) {
          bFlag++;
        }

      } else {

        if (window.scrollY > to) {
          bFlag++;
        }

        if (currPos >= window.scrollY - 1) {
          bFlag++;
        }
      }

      if (bFlag === 2) {
        count = count + 1;
        currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));

        if (currPos > window.scrollY || diff < 0) {
          window.scrollTo(0, currPos);
        } else {
          clearInterval(scrollInterval);
        }

      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  }
}
