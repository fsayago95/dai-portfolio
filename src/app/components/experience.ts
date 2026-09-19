import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  EXPERIENCE,
  FLIGHT_AXIS,
  FLIGHT_PLAN,
  HOSPITALITY,
} from '../content/profile';

const SPAN = FLIGHT_AXIS.end - FLIGHT_AXIS.start;
const YEARS = Math.ceil(SPAN);
const pct = (year: number): number => ((year - FLIGHT_AXIS.start) / SPAN) * 100;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-experience',
  template: `
    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="container">
        <header class="section-head">
          <p class="label">01 / Experience</p>
          <h2 id="experience-title">Where I have <em>worked</em></h2>
        </header>

        <div class="plan" aria-hidden="true">
          <div class="ticks">
            @for (year of years; track year) {
              <span class="tick label" [style.left.%]="year.left">{{ year.label }}</span>
            }
          </div>
          @for (lane of lanes; track lane.label) {
            <div class="lane">
              <span class="lane-label label">{{ lane.label }}</span>
              <div class="track">
                @for (seg of lane.segments; track seg.left) {
                  <span
                    class="bar"
                    [class.outline]="seg.tone === 'outline'"
                    [style.left.%]="seg.left"
                    [style.width.%]="seg.width"
                  ></span>
                }
              </div>
            </div>
          }
        </div>

        <ol class="roles" role="list">
          @for (role of roles; track role.organisation + role.from.iso) {
            <li class="role">
              <p class="period">
                <time [attr.datetime]="role.from.iso">{{ role.from.label }}</time>
                <span aria-hidden="true">–</span><span class="sr-only"> to </span>
                @if (role.to; as to) {
                  <time [attr.datetime]="to.iso">{{ to.label }}</time>
                } @else {
                  Present
                }
              </p>
              <div class="body">
                <h3>{{ role.title }}</h3>
                <p class="org">{{ role.organisation }}</p>
                <ul class="bullets" role="list">
                  @for (bullet of role.bullets; track bullet) {
                    <li>{{ bullet }}</li>
                  }
                </ul>
              </div>
            </li>
          }
        </ol>

        <div class="note">
          <h3>{{ hospitality.heading }}</h3>
          <p>{{ hospitality.text }}</p>
        </div>
      </div>
    </section>
  `,
  styles: `
    .plan {
      margin-bottom: var(--s-8);
    }

    .ticks {
      position: relative;
      height: 1.5rem;
      margin-left: 0;
    }

    .tick {
      position: absolute;
      top: 0;
    }

    .lane {
      display: grid;
      gap: var(--s-1);
      padding-top: var(--s-3);
    }

    .track {
      position: relative;
      height: 1.75rem;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .bar {
      position: absolute;
      top: 2px;
      bottom: 2px;
      background: var(--bar);
      border-left: 2px solid var(--accent);
      transform-origin: left;
    }

    .bar.outline {
      outline: 1px solid var(--accent);
      outline-offset: -1px;
    }

    @keyframes grow {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      @supports (animation-timeline: view()) {
        .bar {
          animation: grow linear both;
          animation-timeline: view();
          animation-range: entry 0% entry 80%;
        }
      }
    }

    .roles {
      display: grid;
    }

    .role {
      display: grid;
      gap: var(--s-2);
      padding-block: var(--s-6);
      border-top: 1px solid var(--line);
    }

    .period {
      font-size: var(--fs-small);
      font-weight: 500;
      color: var(--muted);
    }

    .org {
      margin-top: var(--s-1);
      font-weight: 500;
    }

    .bullets {
      display: grid;
      gap: var(--s-2);
      margin-top: var(--s-4);
      max-width: 65ch;
    }

    .bullets li {
      position: relative;
      padding-left: var(--s-5);
    }

    .bullets li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.75em;
      width: 0.75rem;
      height: 1px;
      background: var(--ink);
    }

    .note {
      display: grid;
      gap: var(--s-3);
      max-width: 65ch;
      margin-top: var(--s-6);
      padding: var(--s-5);
      background: var(--surface);
      border: 1px solid var(--line);
    }

    .note h3 {
      font-size: 1.0625rem;
    }

    .note p {
      color: var(--muted);
      font-size: var(--fs-small);
    }

    @media (max-width: 639px) {
      .tick:nth-child(even) {
        display: none;
      }
    }

    @media (forced-colors: active) {
      .bar {
        background: Highlight;
      }
    }

    @media (min-width: 768px) {
      .note {
        margin-left: 11rem;
      }

      .lane {
        grid-template-columns: 6rem 1fr;
        align-items: center;
        gap: var(--s-4);
      }

      .ticks {
        margin-left: calc(6rem + var(--s-4));
      }

      .role {
        grid-template-columns: 11rem 1fr;
        gap: var(--s-5);
      }
    }

    @media (min-width: 1024px) {
      .note {
        margin-left: 13rem;
      }

      .role {
        grid-template-columns: 13rem 1fr;
        gap: var(--s-6);
      }
    }
  `,
})
export class Experience {
  protected readonly roles = EXPERIENCE;
  protected readonly hospitality = HOSPITALITY;

  protected readonly years = Array.from({ length: YEARS }, (_, i) => ({
    label: String(FLIGHT_AXIS.start + i),
    left: pct(FLIGHT_AXIS.start + i),
  }));

  protected readonly lanes = FLIGHT_PLAN.map((lane) => ({
    label: lane.label,
    segments: lane.segments.map((seg) => ({
      tone: seg.tone,
      left: pct(seg.from),
      width: pct(seg.to) - pct(seg.from),
    })),
  }));
}
