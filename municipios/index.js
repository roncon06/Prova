function generateInfoSection(sprites, estados) {
    const imagens = Object.values(sprites)
      .filter(sprite => typeof sprite === 'string')
  
    const h2 = document.createElement('h2')
    h2.id = "info-estados-label"
    h2.textContent = `Municipios de ${estados}`

  
    const section = document.querySelector('#info-estados')
  
    section.appendChild(h2)
   

  }
  
  async function getMunicipios(name) {
    
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios`)
  
      const jsonData = await data.json()

     let i = 0;

  }