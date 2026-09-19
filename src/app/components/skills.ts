import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION, STRENGTHS, TOOLS } from '../content/profile';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-skills',
  template: `
    <section class="section" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <header class="section-head">
          <p class="label">03 / Skills</p>
          <h2 id="skills-title">Tools and <em>training</em></h2>
        </header>

        <div class="cols">
          <div>
            <h3>Tools and reporting</h3>
            <dl class="pairs">
              @for (tool of tools; track tool.label) {
                <div class="pair">
                  <dt class="label">{{ tool.label }}</dt>
                  <dd>{{ tool.value }}</dd>
                </div>
              }
            </dl>
          </div>
          <div>
            <h3>Education and languages</h3>
            <dl class="pairs">
              @for (item of education; track item.label) {
                <div class="pair">
                  <dt class="label">{{ item.label }}</dt>
                  <dd>{{ item.value }}</dd>
                </div>
              }
            </dl>
          </div>
        </div>

        <h3 class="strengths-title">Ways of working</h3>
        <ul class="chips" role="list">
          @for (strength of strengths; track strength) {
            <li>{{ strength }}</li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .cols {
      display: grid;
      gap: var(--s-7);
    }

    .pairs {
      margin-top: var(--s-4);
    }

    .pair {
      display: grid;
      gap: var(--s-1);
      padding-block: var(--s-4);
      border-top: 1px solid var(--line);
    }

    .strengths-title {
      margin-top: var(--s-8);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
      margin-top: var(--s-4);
    }

    .chips li {
      padding: var(--s-2) var(--s-4);
      background: var(--accent-soft);
      border-radius: 999px;
      font-size: var(--fs-small);
    }

    @media (min-width: 768px) {
      .cols {
        grid-template-columns: 1fr 1fr;
        column-gap: var(--s-7);
      }
    }
  `,
})
export class Skills {
  protected readonly tools = TOOLS;
  protected readonly education = EDUCATION;
  protected readonly strengths = STRENGTHS;
}
