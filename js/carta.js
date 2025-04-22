document.addEventListener("DOMContentLoaded", () => {
    // Manejo de pestañas de la carta
    const cartaTabs = document.querySelectorAll(".carta-tab")
    const cartaCategorias = document.querySelectorAll(".carta-categoria")
  
    cartaTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remover clase active de todas las pestañas
        cartaTabs.forEach((t) => t.classList.remove("active"))
        // Añadir clase active a la pestaña clickeada
        tab.classList.add("active")
  
        // Mostrar la categoría correspondiente
        const categoria = tab.dataset.categoria
        cartaCategorias.forEach((cat) => {
          if (cat.id === categoria) {
            cat.classList.add("active")
          } else {
            cat.classList.remove("active")
          }
        })
  
        // Actualizar carrusel para mostrar imágenes de la categoría seleccionada
        actualizarCarrusel(categoria)
      })
    })
  
    // Carrusel de imágenes
    const slides = document.querySelectorAll(".carousel-slide")
    const prevBtn = document.querySelector(".carousel-button.prev")
    const nextBtn = document.querySelector(".carousel-button.next")
    const indicators = document.querySelector(".carousel-indicators")
  
    let activeSlideIndex = 0
    let slidesFiltered = []
  
    // Crear indicadores para el carrusel
    function crearIndicadores() {
      indicators.innerHTML = ""
      slidesFiltered.forEach((_, index) => {
        const dot = document.createElement("span")
        dot.classList.add("carousel-dot")
        if (index === 0) dot.classList.add("active")
        dot.addEventListener("click", () => {
          mostrarSlide(index)
        })
        indicators.appendChild(dot)
      })
    }
  
    // Mostrar slide específico
    function mostrarSlide(index) {
      slidesFiltered.forEach((slide) => slide.classList.remove("active"))
      document.querySelectorAll(".carousel-dot").forEach((dot) => dot.classList.remove("active"))
  
      activeSlideIndex = index
      slidesFiltered[activeSlideIndex].classList.add("active")
      document.querySelectorAll(".carousel-dot")[activeSlideIndex].classList.add("active")
    }
  
    // Actualizar carrusel según la categoría
    function actualizarCarrusel(categoria) {
      slidesFiltered = Array.from(slides).filter((slide) => slide.dataset.categoria === categoria)
  
      // Ocultar todos los slides
      slides.forEach((slide) => slide.classList.remove("active"))
  
      // Si hay slides para esta categoría
      if (slidesFiltered.length > 0) {
        activeSlideIndex = 0
        slidesFiltered[activeSlideIndex].classList.add("active")
        crearIndicadores()
      }
    }
  
    // Event listeners para botones de navegación
    prevBtn.addEventListener("click", () => {
      activeSlideIndex = (activeSlideIndex - 1 + slidesFiltered.length) % slidesFiltered.length
      mostrarSlide(activeSlideIndex)
    })
  
    nextBtn.addEventListener("click", () => {
      activeSlideIndex = (activeSlideIndex + 1) % slidesFiltered.length
      mostrarSlide(activeSlideIndex)
    })
  
    // Inicializar carrusel con la primera categoría activa
    const categoriaInicial = document.querySelector(".carta-tab.active").dataset.categoria
    actualizarCarrusel(categoriaInicial)
  })
  