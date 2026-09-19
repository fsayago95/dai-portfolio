import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT, PROFILE } from '../content/profile';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contact',
  template: `
    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="container">
        <header class="section-head">
          <p class="label">05 / Contact</p>
          <h2 id="contact-title">{{ contact.heading }}</h2>
        </header>
        <p class="text">{{ contact.text }}</p>
        <div class="actions">
          <a class="btn btn-primary" [href]="'mailto:' + profile.email"
            >Email me <span class="arrow" aria-hidden="true">→</span></a
          >
          <a class="link" [href]="'mailto:' + profile.email">{{ profile.email }}</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .text {
      max-width: 60ch;
      font-size: var(--fs-lead);
      line-height: 1.5;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-5);
      margin-top: var(--s-6);
    }
  `,
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly profile = PROFILE;
}
