// Simular lentidão do website
(() => {
  document.body.style.opacity = "0"

  window.setTimeout(() => {
    document.body.style.opacity = "1"
  }, 2000)
})();

// Exibir o popup de cookies
window.setTimeout(() => {
  document.getElementById('popup')?.showModal()
}, 4000)

// Exibir um popup a cada 20 segundos
window.setInterval(() => {
  window.alert("Compre agora 2 litros de coca zero por apenas R$ 5,99")
}, 20000)

// Tocar áudio
document.getElementById("audio").play()
