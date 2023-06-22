export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });
};
