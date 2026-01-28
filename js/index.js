function syncNewCollectionHeight() {
  const contentBlock = document.querySelector('.newCollectionContent');
  const imgBlock = document.querySelector('.newCollection__img img');
  
  if (!contentBlock || !imgBlock) return;
  
  const contentScrollHeight = contentBlock.scrollHeight;
  const computedStyle = window.getComputedStyle(contentBlock);
  const paddingBottom = parseFloat(computedStyle.paddingBottom);
  const fullHeight = contentScrollHeight + paddingBottom;
  
  imgBlock.style.height = fullHeight + 'px';
  imgBlock.style.objectFit = 'cover';
}

// запуск после загрузки и при ресайзе
if (document.readyState === 'loading') {
  window.addEventListener('load', syncNewCollectionHeight);
} else {
  syncNewCollectionHeight();
}
window.addEventListener('resize', syncNewCollectionHeight);
