import { TestBed } from '@angular/core/testing';
import { ThemeToggle } from './theme-toggle';

describe('ThemeToggle', () => {
  afterEach(() => {
    delete document.documentElement.dataset['theme'];
    localStorage.clear();
    vi.unstubAllGlobals();
  });

  async function setup(prefersDark: boolean) {
    vi.stubGlobal('matchMedia', () => ({ matches: prefersDark }));
    const fixture = TestBed.createComponent(ThemeToggle);
    await fixture.whenStable();
    return fixture.nativeElement.querySelector('button') as HTMLButtonElement;
  }

  it('follows the system preference when nothing is stored', async () => {
    const button = await setup(true);
    expect(button.getAttribute('aria-pressed')).toBe('true');
  });

  it('switches theme, reflects it on the root and remembers it', async () => {
    const button = await setup(false);
    expect(button.getAttribute('aria-pressed')).toBe('false');

    button.click();
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    button.click();
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('lets an explicit theme on the page win over the system preference', async () => {
    document.documentElement.dataset['theme'] = 'light';
    const button = await setup(true);
    expect(button.getAttribute('aria-pressed')).toBe('false');
  });
});
