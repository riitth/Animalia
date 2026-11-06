/**
 * Toast Notification System for Animalia UI
 */

export function showToast(message: string, type: 'success' | 'error' | 'info' | 'gold' = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);

  window.setTimeout(() => {
    toast.classList.add('toast-fade-out');
    window.setTimeout(() => {
      toast.remove();
    }, 400);
  }, 2600);
}

