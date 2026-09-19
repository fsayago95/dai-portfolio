import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { NAV, PROFILE } from '../content/profile';
import { ThemeToggle } from './theme-toggle';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-site-header',
  imports: [ThemeToggle],
  template: `
    <header class="bar">
      <div class="container inner">
        <a class="brand" href="#top">{{ profile.name }}</a>
        <nav class="nav" aria-label="Primary">
          <ul role="list">
            @for (item of nav; track item.id) {
              <li>
                <a [href]="'#' + item.id" [attr.aria-current]="active() === item.id ? 'true' : null">{{
                  item.label
                }}</a>
              </li>
            }
          </ul>
        </nav>
        <div class="actions">
          <app-theme-toggle />
          <a class="btn btn-primary cta" [href]="'mailto:' + profile.email">Email me</a>
        </div>
      </div>
    </header>
  `,
  styles: `
    .bar {
      background: var(--bg);
      border-bottom: 1px solid var(--line);
    }

    .inner {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas: 'brand actions' 'nav nav';
      align-items: center;
      column-gap: var(--s-4);
    }

    .brand {
      grid-area: brand;
      display: inline-flex;
      align-items: center;
      min-height: 2.75rem;
      font: 400 1.375rem/1 var(--font-display);
      color: var(--ink);
      text-decoration: none;
    }

    .actions {
      grid-area: actions;
      display: flex;
      align-items: center;
      gap: var(--s-3);
    }

    .cta {
      display: none;
      min-height: 2.75rem;
    }

    .nav {
      grid-area: nav;
      padding-bottom: var(--s-2);
    }

    .nav ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: var(--s-4);
    }

    .nav a {
      display: inline-flex;
      align-items: center;
      min-height: 2.75rem;
      padding-inline: var(--s-1);
      color: var(--ink);
      font-size: var(--fs-small);
      font-weight: 500;
      text-decoration: none;
      text-underline-offset: 6px;
      text-decoration-thickness: 2px;
    }

    .nav a:hover {
      text-decoration-line: underline;
      text-decoration-color: var(--ink);
    }

    .nav a[aria-current='true'] {
      font-weight: 600;
      text-decoration-line: underline;
      text-decoration-color: var(--accent);
    }

    @media (min-width: 1024px) {
      .bar {
        position: sticky;
        top: 0;
        z-index: 10;
      }

      .inner {
        min-height: var(--header-h);
        grid-template-columns: auto 1fr auto;
        grid-template-areas: 'brand nav actions';
      }

      .nav {
        padding: 0;
        justify-self: center;
      }

      .nav ul {
        column-gap: var(--s-5);
      }

      .cta {
        display: inline-flex;
      }
    }
  `,
})
export class SiteHeader {
  protected readonly profile = PROFILE;
  protected readonly nav = NAV;
  protected readonly active = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const visible = new Map<string, boolean>();
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting);
          const current = this.nav.find((item) => visible.get(item.id));
          this.active.set(current?.id ?? null);
        },
        { rootMargin: '-35% 0px -55% 0px' },
      );
      for (const item of this.nav) {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
