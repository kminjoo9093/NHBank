export const global = () => {
  const globalBtn = document.querySelector('.global');
  const dialog = document.querySelector('.dialog__global');

  const handleGlobalBtn = ()=>{
    globalBtn.classList.toggle('active');
    dialog.hasAttribute('open') ? dialog.close() : dialog.show();
  }

  globalBtn.addEventListener('click', handleGlobalBtn);
}