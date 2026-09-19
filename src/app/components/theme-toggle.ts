import { ChangeDetectionStrategy, Component, afterNextRender, signal } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-theme-toggle',
  template: `
    <button type="button" class="toggle" [attr.aria-pressed]="dark()" (click)="toggle()">
      Dark mode
    </button>
  `,
  styles: `
    .toggle {
      min-height: 2.75rem;
      padding: 0 var(--s-4);
      border: 1.5px solid var(--ink);
      border-radius: var(--radius);
      background: none;
      color: var(--ink);
      font: 500 var(--fs-small) var(--font-ui);
      cursor: pointer;
    }

    .toggle[aria-pressed='true'] {
      background: var(--ink);
      color: var(--bg);
    }

    @media (forced-colors: active) {
      .toggle[aria-pressed='true'] {
        background: Highlight;
        color: HighlightText;
      }
    }
  `,
})
export class ThemeToggle {
  protected readonly dark = signal(false);

  constructor() {
    afterNextRender(() => {
      const explicit = document.documentElement.dataset['theme'];
      this.dark.set(
        explicit ? explicit === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches,
      );
    });
  }

  protected toggle(): void {
    const next = !this.dark();
    this.dark.set(next);
    document.documentElement.dataset['theme'] = next ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be blocked; the choice still applies for this visit.
    }
  }
}
