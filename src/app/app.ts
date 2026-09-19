import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { Hero } from './components/hero';
import { Method } from './components/method';
import { SiteHeader } from './components/site-header';
import { Skills } from './components/skills';
import { PROFILE } from './content/profile';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [SiteHeader, Hero, Experience, Method, Skills, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = PROFILE;
}
