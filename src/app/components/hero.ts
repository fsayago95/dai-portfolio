import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO, PROFILE } from '../content/profile';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hero',
  template: `
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="container grid">
        <div class="copy">
          <p class="label">Media planner · Paid and social · Malta</p>
          <h1 id="hero-title">
            {{ hero.headlineStart }}<em>{{ hero.headlineEmphasis }}</em>
          </h1>
          <p class="lead">{{ hero.lead }}</p>
          <div class="ctas">
            <a class="btn btn-primary" [href]="'mailto:' + profile.email"
              >Email me <span class="arrow" aria-hidden="true">→</span></a
            >
            <a class="btn btn-secondary" href="#experience">See my experience</a>
          </div>
        </div>
        <dl class="card">
          @for (fact of hero.facts; track fact.label) {
            <div class="row">
              <dt class="label">{{ fact.label }}</dt>
              <dd>{{ fact.value }}</dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
  styles: `
    .hero {
      padding-block: var(--s-8);
    }

    .grid {
      display: grid;
      gap: var(--s-7);
    }

    .copy {
      display: grid;
      gap: var(--s-5);
      align-content: start;
    }

    h1 {
      max-width: 14ch;
    }

    .lead {
      max-width: 60ch;
      font-size: var(--fs-lead);
      line-height: 1.5;
    }

    .ctas {
      display: grid;
      gap: var(--s-3);
      margin-top: var(--s-3);
    }

    .card {
      align-self: start;
      background: var(--surface);
      border: 1px solid var(--line);
      border-top: 2px solid var(--ink);
    }

    .row {
      display: grid;
      gap: var(--s-1);
      padding: var(--s-4) var(--s-5);
    }

    .row + .row {
      border-top: 1px solid var(--line);
    }

    @media (min-width: 640px) {
      .ctas {
        display: flex;
        flex-wrap: wrap;
      }
    }

    @media (min-width: 640px) and (max-width: 1023px) {
      .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .row:nth-child(2) {
        border-top: 0;
      }

      .row:nth-child(n + 3) {
        border-top: 1px solid var(--line);
      }
    }

    @media (min-width: 1024px) {
      .hero {
        padding-block: var(--s-9) var(--s-8);
      }

      .grid {
        grid-template-columns: repeat(12, 1fr);
        column-gap: var(--s-5);
      }

      .copy {
        grid-column: 1 / span 8;
      }

      .card {
        grid-column: 9 / span 4;
      }
    }
  `,
})
export class Hero {
  protected readonly hero = HERO;
  protected readonly profile = PROFILE;
}
