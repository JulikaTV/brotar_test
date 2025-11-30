const form = document.getElementById('newTopicForm');
const topicsList = document.getElementById('topicsList');
const modalEl = document.getElementById('newTopicModal');

function createTopicCard(title, body) {
    const card = document.createElement('div');
    card.className = 'card-topico card shadow-sm w-100 p-2';
    let cardEl = `
                    <div class="card-body">
                        <div>
                            <h5 class="card-title text-dark">${title}</h5>
                            <p class="card-text text-body-secondary">${body}</p>
                        </div>
                        <hr class="my-3">
                        <div class="d-flex flex-wrap align-items-center gap-3">
                            <div class="d-flex align-items-center gap-2">
                                <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                    style="width: 35px; aspect-ratio: 1/1; font-size: 0.8rem;">VO</div>
                                <p class="mb-0 fw-medium">Você</p>
                            </div>
                            <p class="mb-0 small text-body-secondary">0 respostas • Agora</p>
                        </div>
                    </div>`;
    card.innerHTML = cardEl;
    return card;
}

if (form && topicsList) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('topicTitle').value.trim();
        const body = document.getElementById('topicBody').value.trim();

        const newCard = createTopicCard(title, body);

        topicsList.insertBefore(newCard, topicsList.firstChild);

        form.reset();

        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modal.hide();
    });
}