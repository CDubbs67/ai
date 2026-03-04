// ===== Review Page Logic =====
// Data is stored in localStorage under 'askNovaReviewAnswers'
// Each entry: { id, question, answer, topic, status: 'pending'|'approved'|'rejected', timestamp }

let reviewData = JSON.parse(localStorage.getItem('askNovaReviewAnswers') || '[]');
let currentTab = 'pending';

// DOM
const tabButtons = document.querySelectorAll('.tab');
const reviewList = document.getElementById('review-list');
const pendingCount = document.getElementById('pending-count');
const approvedCount = document.getElementById('approved-count');
const rejectedCount = document.getElementById('rejected-count');

function updateCounts() {
    pendingCount.textContent = reviewData.filter(r => r.status === 'pending').length;
    approvedCount.textContent = reviewData.filter(r => r.status === 'approved').length;
    rejectedCount.textContent = reviewData.filter(r => r.status === 'rejected').length;
}

function renderList() {
    const filtered = reviewData.filter(r => r.status === currentTab);
    updateCounts();

    if (filtered.length === 0) {
        const messages = {
            pending: { icon: '📭', text: 'No pending answers.', hint: 'Ask a question on the <a href="index.html">search page</a> that isn\'t in the built-in knowledge base — the Wikipedia answer will show up here for review.' },
            approved: { icon: '✅', text: 'No approved answers yet.', hint: 'Approve a pending answer and it will appear here. Approved answers are automatically reused when you ask the same question again.' },
            rejected: { icon: '🗑️', text: 'No rejected answers.', hint: 'Rejected answers won\'t be reused. You can restore them if you change your mind.' },
        };
        const msg = messages[currentTab];
        reviewList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${msg.icon}</div>
        <p class="empty-text">${msg.text}</p>
        <p class="empty-hint">${msg.hint}</p>
      </div>
    `;
        return;
    }

    reviewList.innerHTML = filtered.map(item => {
        const date = new Date(item.timestamp).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        let actions = '';
        let badge = '';

        if (currentTab === 'pending') {
            actions = `
        <button class="action-btn approve" onclick="setStatus('${item.id}', 'approved')">✓ Approve</button>
        <button class="action-btn reject" onclick="setStatus('${item.id}', 'rejected')">✗ Reject</button>
      `;
        } else if (currentTab === 'approved') {
            badge = '<span class="status-badge approved">Approved</span>';
            actions = `
        <button class="action-btn restore" onclick="setStatus('${item.id}', 'pending')">↩ Move to Pending</button>
        <button class="action-btn delete" onclick="deleteItem('${item.id}')">Delete</button>
      `;
        } else if (currentTab === 'rejected') {
            badge = '<span class="status-badge rejected">Rejected</span>';
            actions = `
        <button class="action-btn restore" onclick="setStatus('${item.id}', 'pending')">↩ Move to Pending</button>
        <button class="action-btn delete" onclick="deleteItem('${item.id}')">Delete</button>
      `;
        }

        return `
      <div class="review-card">
        ${badge}
        <div class="review-card-question">
          <span class="q-icon">❓</span>
          <span>${item.question}</span>
        </div>
        <div class="review-card-answer">${item.answer}</div>
        <div class="review-card-meta">Found via Wikipedia · ${date}</div>
        <div class="review-card-actions">${actions}</div>
      </div>
    `;
    }).join('');
}

function setStatus(id, status) {
    reviewData = reviewData.map(r => r.id === id ? { ...r, status } : r);
    save();
    renderList();
}

function deleteItem(id) {
    reviewData = reviewData.filter(r => r.id !== id);
    save();
    renderList();
}

function save() {
    localStorage.setItem('askNovaReviewAnswers', JSON.stringify(reviewData));
}

// Tab switching
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.dataset.tab;
        renderList();
    });
});

// Initial render
renderList();
