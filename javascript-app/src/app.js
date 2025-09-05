import { analyzeBanknote } from './analysis.js';

// Navigation handling
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('#nav button');
navButtons.forEach((btn) => {
  btn.addEventListener('click', () => showScreen(btn.dataset.screen));
});

function showScreen(id) {
  screens.forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'history') renderHistory();
  if (id === 'catalog') renderCatalog();
  if (id === 'valuation') renderValuation();
}

// Camera setup
const video = document.getElementById('camera');
const canvas = document.getElementById('snapshot');
let frontImage = null;
let backImage = null;
const previewFront = document.getElementById('preview-front');
const previewBack = document.getElementById('preview-back');
const captureFrontBtn = document.getElementById('capture-front');
const captureBackBtn = document.getElementById('capture-back');

navigator.mediaDevices
  .getUserMedia({ video: { facingMode: 'environment' } })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => console.error('Camera error', err));

function updateAnalyzeButton() {
  analyzeBtn.disabled = !(frontImage && backImage);
}

function capture(side) {
  const ctx = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0);
  canvas.toBlob((blob) => {
    if (side === 'front') {
      frontImage = blob;
      previewFront.src = URL.createObjectURL(blob);
      previewFront.classList.remove('hidden');
      captureFrontBtn.textContent = 'Retake Front';
    } else {
      backImage = blob;
      previewBack.src = URL.createObjectURL(blob);
      previewBack.classList.remove('hidden');
      captureBackBtn.textContent = 'Retake Back';
    }
    updateAnalyzeButton();
  }, 'image/jpeg');
}

captureFrontBtn.onclick = () => capture('front');
captureBackBtn.onclick = () => capture('back');

const analyzeBtn = document.getElementById('analyze');
analyzeBtn.onclick = async () => {
  const result = await analyzeBanknote(frontImage, backImage);
  showResults(result);
  showScreen('results');
};

function showResults(result) {
  const div = document.getElementById('result-data');
  div.innerHTML = `
    <p><strong>ID:</strong> ${result.id}</p>
    <p><strong>Grade:</strong> ${result.grade}</p>
    <p><strong>Estimated Value:</strong> $${result.estimatedValue}</p>
  `;
  document.getElementById('save-scan').onclick = () => saveScan(result);
}

function saveScan(result) {
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  history.push(result);
  localStorage.setItem('history', JSON.stringify(history));
}

function renderHistory() {
  const list = document.getElementById('history-list');
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  list.innerHTML = history
    .map((r) => `<li>${r.id} - $${r.estimatedValue}</li>`)
    .join('');
}

function renderCatalog() {
  const list = document.getElementById('catalog-list');
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  const byId = {};
  history.forEach((r) => {
    byId[r.id] = (byId[r.id] || 0) + 1;
  });
  list.innerHTML = Object.entries(byId)
    .map(([id, count]) => `<li>${id} x${count}</li>`)
    .join('');
}

function renderValuation() {
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  const total = history.reduce((sum, r) => sum + (r.estimatedValue || 0), 0);
  document.getElementById('total-value').textContent = total.toFixed(2);
}
