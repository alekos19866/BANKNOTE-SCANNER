import { analyzeBanknote } from '../src/analysis.js';

test('analyzeBanknote returns expected fields', async () => {
  const result = await analyzeBanknote(null, null);
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('grade');
  expect(result).toHaveProperty('estimatedValue');
});
