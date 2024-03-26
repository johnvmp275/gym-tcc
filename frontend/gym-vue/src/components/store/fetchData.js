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
    // const url = ['http://192.168.87.24:3000/menu']
    // const url = ['http://192.168.0.106:3000/menu']
    //const url = ['http://192.168.87.24:3000/menu']
    const url = ['http://10.67.7.97:3000/menu']

    try {
      const data = await this.fetchData(url)
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados de categorias', error)
      throw error
    }
  },
  async getDadosOfBanner() {
    //const url = ['http://192.168.87.24:3000/banners']
    //const url = ['http://192.168.0.106:3000/banners']
    //const url = ['http://192.168.87.24:3000/banners']
    const url = ['http://10.67.7.97:3000/banners']

    try {
      const data = await this.fetchData(url)
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  },
  async getDadosOfDescription() {
    //const url = ['http://192.168.87.24:3000/siteDescription']
    //const url = ['http://192.168.0.106:3000/siteDescription']
    //const url = ['http://192.168.87.24:3000/siteDescription']
    const url = ['http://10.67.7.97:3000/siteDescription']

    try {
      const data = await this.fetchData(url) 
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  },
  async getDadosOfVitrines() {
    //const url = ['http://192.168.87.24:3000/vitrines']
    //const url = ['http://192.168.0.106:3000/vitrines']
    //const url = ['http://192.168.87.24:3000/vitrines']
    const url = ['http://10.67.7.97:3000/vitrines']

    try {
      const data = await this.fetchData(url) 
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  },
  async getDadosOfCategories() {
    //const url = ['http://192.168.87.24:3000/produtos']
    // const url = ['http://192.168.0.106:3000/produtos']
    //const url = ['http://192.168.87.24:3000/produtos']
    const url = ['http://10.67.7.97:3000/produtos']

    try {
      const data = await this.fetchData(url) 
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  },
  async getDadosOfInstashop() {
    //const url = ['http://192.168.87.24:3000/instashop']
    //const url = ['http://192.168.0.106:3000/instashop']
    //const url = ['http://192.168.87.24:3000/instashop']
    const url = ['http://10.67.7.97:3000/instashop']

    try {
      const data = await this.fetchData(url) 
      return data
    } catch (error) {
      console.error('Erro ao buscar os dados do banner', error)
      throw error
    }
  },
}
