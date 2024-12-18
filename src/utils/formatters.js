export const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'CLP'
    }).format(value)
  }
  
  export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES')
  }