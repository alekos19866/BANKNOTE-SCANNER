export async function analyzeBanknote(frontBlob, backBlob) {
  // Simulate AI-powered analysis
  await new Promise((res) => setTimeout(res, 500));
  return {
    id: 'USD-1-1981',
    country: 'USA',
    denomination: 1,
    year: 1981,
    grade: 'Fine',
    estimatedValue: 3.5
  };
}
