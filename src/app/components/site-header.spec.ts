import { TestBed } from '@angular/core/testing';
import { NAV } from '../content/profile';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  let trigger: (id: string, isIntersecting: boolean) => void;

  beforeEach(() => {
    class FakeObserver {
      constructor(private readonly callback: IntersectionObserverCallback) {
        trigger = (id, isIntersecting) =>
          this.callback(
            [{ target: { id }, isIntersecting } as unknown as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          );
      }
      observe(): void {}
      disconnect(): void {}
    }
    vi.stubGlobal('IntersectionObserver', FakeObserver);
    for (const item of NAV) {
      const section = document.createElement('section');
      section.id = item.id;
      document.body.append(section);
    }
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.unstubAllGlobals();
  });

  it('marks only the visible section as current', async () => {
    const fixture = TestBed.createComponent(SiteHeader);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('[aria-current]')).toBeNull();

    trigger('about', true);
    await fixture.whenStable();

    const current = root.querySelectorAll('[aria-current="true"]');
    expect(current).toHaveLength(1);
    expect(current[0].getAttribute('href')).toBe('#about');
  });
});
