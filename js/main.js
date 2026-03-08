const modalWindow = document.querySelector('.modal');
const modalInner = modalWindow.querySelector('.modal__inner');
const buttonsModal = document.querySelectorAll('.button-play');
const iframeSrc = modalInner.querySelector('iframe').src;

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    modalInner.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.width = '560';
    iframe.height = '315';
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    modalInner.appendChild(iframe);
});