import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT } from '../content/profile';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-about',
  template: `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container">
        <header class="section-head">
          <p class="label">04 / About</p>
          <h2 id="about-title">About <em>me</em></h2>
        </header>
        <div class="text">
          @for (paragraph of paragraphs; track paragraph) {
            <p>{{ paragraph }}</p>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .text {
      display: grid;
      gap: var(--s-4);
      max-width: 65ch;
    }

    @media (min-width: 1024px) {
      .text {
        margin-left: 25%;
      }
    }
  `,
})
export class About {
  protected readonly paragraphs = ABOUT;
}
