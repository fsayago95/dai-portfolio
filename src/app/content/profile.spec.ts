import { EXPERIENCE, FLIGHT_AXIS, FLIGHT_PLAN, NAV, PROFILE } from './profile';

describe('profile content', () => {
  it('has unique navigation ids', () => {
    const ids = NAV.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('exposes email as the only contact channel', () => {
    expect(Object.keys(PROFILE)).not.toContain('phone');
    expect(PROFILE.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/i);
  });

  it('lists roles newest first', () => {
    const starts = EXPERIENCE.map((role) => role.from.iso);
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it('keeps every flight-plan segment inside the axis and in order', () => {
    for (const lane of FLIGHT_PLAN) {
      for (const seg of lane.segments) {
        expect(seg.from).toBeGreaterThanOrEqual(FLIGHT_AXIS.start);
        expect(seg.to).toBeLessThanOrEqual(FLIGHT_AXIS.end);
        expect(seg.to).toBeGreaterThan(seg.from);
      }
    }
  });
});
