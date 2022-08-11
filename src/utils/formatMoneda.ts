export const formatMoneda = (number: number) => {
  return new Intl.NumberFormat('es-AR').format(number)
}
