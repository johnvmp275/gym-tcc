export default {
  async fetchData(url) {
    try {
      const req = await fetch(url)
      const data = await req.json()
      return data
    } catch (error) {
      console.error('Não foi possível buscar os dados', error)
      throw error
    }
  },
  async getDadosOfCategories() {
    try {
      const data = await this.fetchData('http://localhost:3000/categories')
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados de categorias', error)
      throw error
    }
  },
  async getDadosOfBanner() {
    try {
      const data = await this.fetchData('http://localhost:3000/banners')
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  },
  async getDadosOfDescription() {
    try {
      const data = await this.fetchData('http://localhost:3000/siteDescription')
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  }
}
