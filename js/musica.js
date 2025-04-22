document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = new Audio()
    let currentTrack = null
    let isPlaying = false
  
    // Añadir icono de música a cada elemento de la playlist
    document.querySelectorAll(".playlist-item").forEach((track) => {
      const trackInfo = track.querySelector(".track-info")
      const trackIcon = document.createElement("div")
      trackIcon.className = "track-icon"
      trackIcon.innerHTML = '<i class="fas fa-music"></i>'
      trackInfo.insertBefore(trackIcon, trackInfo.firstChild)
    })
  
    // Función para actualizar la barra de progreso
    function updateProgressBar() {
      const progress = document.querySelector(".progress")
      const currentTime = document.querySelector(".current-time")
      const totalTime = document.querySelector(".total-time")
  
      if (audioPlayer.duration) {
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100
        progress.style.width = `${percentage}%`
  
        // Actualizar tiempos
        currentTime.textContent = formatTime(audioPlayer.currentTime)
        totalTime.textContent = formatTime(audioPlayer.duration)
      }
    }
  
    // Función para formatear el tiempo
    function formatTime(seconds) {
      if (isNaN(seconds)) return "0:00"
  
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = Math.floor(seconds % 60)
      return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }
  
    // Función para reproducir/pausar
    function togglePlay(trackElement) {
      const audioSrc = trackElement.dataset.audio
      const playBtn = trackElement.querySelector(".play-btn i")
  
      // Remover clase 'playing' de todos los elementos
      document.querySelectorAll(".playlist-item").forEach((item) => {
        item.classList.remove("playing")
      })
  
      if (currentTrack === trackElement) {
        if (isPlaying) {
          audioPlayer.pause()
          playBtn.classList.remove("fa-pause")
          playBtn.classList.add("fa-play")
        } else {
          audioPlayer.play()
          playBtn.classList.remove("fa-play")
          playBtn.classList.add("fa-pause")
          trackElement.classList.add("playing")
        }
        isPlaying = !isPlaying
      } else {
        // Detener la reproducción actual
        if (currentTrack) {
          const prevPlayBtn = currentTrack.querySelector(".play-btn i")
          prevPlayBtn.classList.remove("fa-pause")
          prevPlayBtn.classList.add("fa-play")
        }
  
        // Iniciar nueva reproducción
        audioPlayer.src = audioSrc
        audioPlayer
          .play()
          .then(() => {
            // Reproducción exitosa
            currentTrack = trackElement
            isPlaying = true
            playBtn.classList.remove("fa-play")
            playBtn.classList.add("fa-pause")
            trackElement.classList.add("playing")
          })
          .catch((error) => {
            console.error("Error al reproducir el audio:", error)
            // Mostrar mensaje de error al usuario
            alert("No se pudo reproducir el audio. Verifica que el archivo exista.")
          })
      }
    }
  
    // Event listeners
    document.querySelectorAll(".playlist-item").forEach((track) => {
      const playBtn = track.querySelector(".play-btn")
      playBtn.addEventListener("click", () => togglePlay(track))
    })
  
    // Actualizar barra de progreso
    audioPlayer.addEventListener("timeupdate", updateProgressBar)
  
    // Manejar el final de la reproducción
    audioPlayer.addEventListener("ended", () => {
      if (currentTrack) {
        const playBtn = currentTrack.querySelector(".play-btn i")
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
        currentTrack.classList.remove("playing")
        isPlaying = false
      }
    })
  
    // Permitir clic en la barra de progreso para cambiar el tiempo
    const progressBar = document.querySelector(".progress-bar")
    progressBar.addEventListener("click", (e) => {
      const rect = progressBar.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = x / rect.width
  
      if (audioPlayer.duration) {
        audioPlayer.currentTime = percentage * audioPlayer.duration
      }
    })
  
    // Inicializar los tiempos
    document.querySelector(".current-time").textContent = "0:00"
    document.querySelector(".total-time").textContent = "0:00"
  
    // Manejar errores de carga de audio
    audioPlayer.addEventListener("error", () => {
      console.error("Error al cargar el audio")
      if (currentTrack) {
        const playBtn = currentTrack.querySelector(".play-btn i")
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
        currentTrack.classList.remove("playing")
        isPlaying = false
      }
    })
  })
  