export default {
  async getDadosOfCategories() {
    try {
      const req = await fetch('http://localhost:3000/rotes')
      const data = await req.json()

      this.rotes = data
      this.categories = data.find((item) => item.categories)
    } catch (error) {
      console.error('Não foi possivel buscar os dados pedidos', error)
    }
  }
}
