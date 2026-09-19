import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NAV } from './content/profile';

describe('App', () => {
  async function render(): Promise<HTMLElement> {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders a single h1 and one main landmark', async () => {
    const page = await render();
    expect(page.querySelectorAll('h1')).toHaveLength(1);
    expect(page.querySelectorAll('main')).toHaveLength(1);
  });

  it('has a section for every navigation link', async () => {
    const page = await render();
    for (const item of NAV) {
      expect(page.querySelector(`section#${item.id}`), item.id).not.toBeNull();
      expect(page.querySelector(`nav a[href="#${item.id}"]`), item.id).not.toBeNull();
    }
  });

  it('gives every section a labelled heading', async () => {
    const page = await render();
    for (const section of Array.from(page.querySelectorAll('main section'))) {
      const labelledBy = section.getAttribute('aria-labelledby');
      expect(labelledBy).toBeTruthy();
      expect(section.querySelector(`#${labelledBy}`)?.tagName).toMatch(/^H[12]$/);
    }
  });

  it('never publishes a phone number', async () => {
    const page = await render();
    expect(page.textContent).not.toMatch(/\+\d[\d\s().-]{7,}|\b\d{3}[\s.-]\d{3}[\s.-]\d{3,4}\b/);
    expect(page.querySelector('a[href^="tel:"]')).toBeNull();
  });
});
