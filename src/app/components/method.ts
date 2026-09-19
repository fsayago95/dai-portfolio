import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KPI_HEADING, KPI_TERMS, METHOD_INTRO, PRACTICES } from '../content/profile';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-method',
  template: `
    <section class="section" id="method" aria-labelledby="method-title">
      <div class="container">
        <header class="section-head">
          <p class="label">02 / Method</p>
          <h2 id="method-title">How I <em>work</em></h2>
          <p class="intro">{{ intro }}</p>
        </header>

        <div class="practices">
          @for (practice of practices; track practice.code) {
            <article class="practice">
              <p class="label code">{{ practice.code }}</p>
              <h3>{{ practice.title }}</h3>
              @if (practice.ordered) {
                <ol class="items ordered" role="list">
                  @for (item of practice.items; track item) {
                    <li>{{ item }}</li>
                  }
                </ol>
              } @else {
                <ul class="items" role="list">
                  @for (item of practice.items; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              }
            </article>
          }
        </div>

        <h3 class="kpi-heading">{{ kpiHeading }}</h3>
        <ul class="kpis" role="list">
          @for (kpi of kpis; track kpi) {
            <li class="kpi">
              <span class="term">{{ kpi }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .intro {
      max-width: 65ch;
      font-size: var(--fs-lead);
      line-height: 1.5;
    }

    .practice {
      display: grid;
      gap: var(--s-3);
      padding-block: var(--s-6);
      border-top: 1px solid var(--line);
      align-content: start;
    }

    .items {
      display: grid;
      gap: var(--s-2);
      max-width: 65ch;
    }

    .items li {
      position: relative;
      padding-left: var(--s-5);
    }

    .items li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.75em;
      width: 0.75rem;
      height: 1px;
      background: var(--ink);
    }

    .ordered {
      counter-reset: step;
    }

    .ordered li {
      counter-increment: step;
    }

    .ordered li::before {
      content: counter(step);
      top: 0;
      width: auto;
      height: auto;
      background: none;
      color: var(--muted);
      font-weight: 500;
    }

    .kpi-heading {
      margin-top: var(--s-8);
      padding-top: var(--s-6);
      border-top: 2px solid var(--ink);
    }

    .kpis {
      display: grid;
      margin-top: var(--s-5);
    }

    .kpi {
      display: grid;
      gap: var(--s-1);
      padding-block: var(--s-5);
      border-top: 1px solid var(--line);
    }

    .term {
      font: 400 clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem) / 1 var(--font-display);
      letter-spacing: -0.02em;
    }

    @media (min-width: 768px) {
      .practices {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: var(--s-6);
      }

      .kpis {
        grid-template-columns: 1fr 1fr;
        column-gap: var(--s-6);
      }
    }

    @media (min-width: 1024px) {
      .kpis {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class Method {
  protected readonly intro = METHOD_INTRO;
  protected readonly practices = PRACTICES;
  protected readonly kpiHeading = KPI_HEADING;
  protected readonly kpis = KPI_TERMS;
}
