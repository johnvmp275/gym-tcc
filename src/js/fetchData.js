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
  async getDadosOfMenus() {
    try {
      const data = await this.fetchData('http://localhost:3000/menus')
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
  },
  async getDadosOfVitrines() {
    try {
      const data = await this.fetchData('http://localhost:3000/vitrines')
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  },
  async getDetailsProduct() {
    try {
      const data = await this.fetchData('http://localhost:3000/produtos')
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  }
}