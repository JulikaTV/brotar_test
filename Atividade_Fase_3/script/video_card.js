var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerProposta;
var playerNavegacao;

// Esta função é chamada automaticamente quando a API do YouTube está pronta
function onYouTubeIframeAPIReady() {
    playerProposta = new YT.Player('youtubePlayerProposta', {
        events: {
            'onReady': onPlayerReady
        }
    });
    playerNavegacao = new YT.Player('youtubePlayerNavegacao', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Opcional: Você pode adicionar lógica aqui quando o player estiver pronto
    // console.log("Player is ready:", event.target.a.id);
}

// Lógica para pausar/tocar o vídeo ao abrir/fechar o modal
document.addEventListener("DOMContentLoaded", function() {
    var modalProposta = document.getElementById('modalVideoProposta');
    var modalNavegacao = document.getElementById('modalVideoNavegacao');

    // Eventos para o modal de Proposta
    if (modalProposta) {
        modalProposta.addEventListener('shown.bs.modal', function () {
            if (playerProposta && typeof playerProposta.playVideo === 'function') {
                playerProposta.playVideo();
            }
        });
        modalProposta.addEventListener('hide.bs.modal', function () {
            if (playerProposta && typeof playerProposta.pauseVideo === 'function') {
                playerProposta.pauseVideo();
            }
        });
    }

    // Eventos para o modal de Navegação
    if (modalNavegacao) {
        modalNavegacao.addEventListener('shown.bs.modal', function () {
            if (playerNavegacao && typeof playerNavegacao.playVideo === 'function') {
                playerNavegacao.playVideo();
            }
        });
        modalNavegacao.addEventListener('hide.bs.modal', function () {
            if (playerNavegacao && typeof playerNavegacao.pauseVideo === 'function') {
                playerNavegacao.pauseVideo();
            }
        });
    }
});