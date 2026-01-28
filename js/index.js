function syncNewCollectionHeight() {
  const imgBlock = document.querySelector('.newCollection__img img');
  const contentBlock = document.querySelector('.newCollectionContent');
  
  // ждём полного рендера
  requestAnimationFrame(() => {
    const contentHeight = contentBlock.offsetHeight;
    
    // задаём высоту картинке напрямую
    imgBlock.style.height = contentHeight + 'px';
    imgBlock.style.objectFit = 'cover';
  });
}

// с задержкой, чтобы стили точно применились
function initHeightSync() {
  setTimeout(syncNewCollectionHeight, 100);
}

// запускаем
window.addEventListener('load', initHeightSync);
window.addEventListener('resize', syncNewCollectionHeight);
