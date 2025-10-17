// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
  }
  
  // Función para activar animaciones cuando la sección es visible
  function handleScrollAnimations() {
    const section = document.querySelector("#sobremi")
    const animateItems = section.querySelectorAll(".animate-item")
  
    if (isElementInViewport(section)) {
      // Añadir clase 'animate' a todos los elementos animables
      animateItems.forEach((item) => {
        item.classList.add("animate")
      })
    } else {
      // Remover clase 'animate' cuando la sección no está visible
      // para reiniciar las animaciones la próxima vez
      animateItems.forEach((item) => {
        item.classList.remove("animate")
      })
    }
  }
  
  // Ejecutar al cargar la página y en cada scroll
  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", handleScrollAnimations)
    // Verificar también al cargar la página
    handleScrollAnimations()
  })
  
  // Función para mostrar/ocultar el menú móvil
  const toggleBtn = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  
  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })
  
  // Función para cambiar el estilo del navbar al hacer scroll
  function handleNavbarScroll() {
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled")
    } else {
      navbar.classList.remove("navbar-scrolled")
    }
  }
  
  // Función para mostrar/ocultar el botón de volver arriba
  function handleBackToTopButton() {
    const backToTopButton = document.getElementById("back-to-top")
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  }
  
  // Función para animar los contadores
  function animateCounters() {
    const counters = document.querySelectorAll(".counter")
  
    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-target"))
      const duration = 2000 // duración en milisegundos
      const step = target / (duration / 16) // 60fps
  
      let current = 0
      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          counter.textContent = target
          clearInterval(timer)
        } else {
          counter.textContent = Math.floor(current)
        }
      }, 16)
    })
  }
  
  // Función para cambiar entre tabs de habilidades
  function setupTabs() {
    const techTab = document.getElementById("tab-tech")
    const softTab = document.getElementById("tab-soft")
    const techSkills = document.getElementById("tech-skills")
    const softSkills = document.getElementById("soft-skills")
  
    techTab.addEventListener("click", () => {
      techTab.classList.add("active")
      softTab.classList.remove("active")
      techSkills.classList.remove("hidden")
      softSkills.classList.add("hidden")
    })
  
    softTab.addEventListener("click", () => {
      softTab.classList.add("active")
      techTab.classList.remove("active")
      softSkills.classList.remove("hidden")
      techSkills.classList.add("hidden")
    })
  }
  
  // Función para crear partículas en el fondo
  function createParticles() {
    const container = document.querySelector(".particles-container")
    if (!container) return
  
    const particleCount = 50
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")
  
      // Tamaño aleatorio
      const size = Math.random() * 5 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
  
      // Posición aleatoria
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
  
      // Opacidad aleatoria
      particle.style.opacity = Math.random() * 0.5 + 0.1
  
      // Animación
      particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`
      particle.style.animationDelay = `${Math.random() * 5}s`
  
      container.appendChild(particle)
    }
  }
  
  // Ejecutar al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    // Eventos de scroll
    window.addEventListener("scroll", handleScrollAnimations)
    window.addEventListener("scroll", handleNavbarScroll)
    window.addEventListener("scroll", handleBackToTopButton)
  
    // Verificar también al cargar la página
    handleScrollAnimations()
    handleNavbarScroll()
    handleBackToTopButton()
  
    // Configurar tabs de habilidades
    setupTabs()
  
    // Crear partículas
    createParticles()
  
    // Animar contadores cuando la sección "Sobre mí" es visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )
  
    const statsSection = document.querySelector(".stat-card")?.parentElement
    if (statsSection) {
      observer.observe(statsSection)
    }
  
    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden")
      })
    })
  })
  
  // Añadir estilos CSS para la animación de partículas
  const style = document.createElement("style")
  style.textContent = `
    @keyframes float {
      0% {
        transform: translateY(0) translateX(0);
      }
      25% {
        transform: translateY(-20px) translateX(10px);
      }
      50% {
        transform: translateY(0) translateX(20px);
      }
      75% {
        transform: translateY(20px) translateX(10px);
      }
      100% {
        transform: translateY(0) translateX(0);
      }
    }
  `
  document.head.appendChild(style)
  