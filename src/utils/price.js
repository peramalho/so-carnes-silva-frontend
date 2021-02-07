export const formatPrice = (price) => {
  return price.toFixed(2).toString().replace('.', ',').replace(/^/, 'R$ ');
};
