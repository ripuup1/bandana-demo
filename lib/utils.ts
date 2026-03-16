export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculateTax(subtotal: number, rate = 0.08): number {
  return Math.round(subtotal * rate * 100) / 100;
}

export function calculateShipping(subtotal: number): number {
  return subtotal >= 50 ? 0 : 5.95;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
