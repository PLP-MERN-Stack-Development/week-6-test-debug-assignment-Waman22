import { formatDate } from '../../utils/formatDate';

describe('formatDate', () => {
  test('formats date correctly', () => {
    const date = new Date('2025-07-08');
    expect(formatDate(date)).toBe('Jul 8, 2025');
  });
});