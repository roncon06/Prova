function generateInfoSection(sprites, estados) {
    const imagens = Object.values(sprites)
      .filter(sprite => typeof sprite === 'string')
  
    const h2 = document.createElement('h2')
    h2.id = "info-estados-label"
    h2.textContent = `Municipios de ${estados}`
  
    
  
    const section = document.querySelector('#info-estados')
  
    section.appendChild(h2)
   
    let indiceAtual = 0;
  
    img.addEventListener('click', () => {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      img.src = imagens[indiceAtual];
    });
  }
  
  
  async function getEstados(name) {
    
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
  
      const jsonData = await data.json()

     let i = 0;

     for(i; jsonData.length; i++){
        const lista:
     }



  }