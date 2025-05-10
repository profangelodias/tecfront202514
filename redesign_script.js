document.addEventListener('DOMContentLoaded', () => {
    const titulosAcordeao = document.querySelectorAll('.acordeao-titulo');

    titulosAcordeao.forEach(titulo => {
        titulo.addEventListener('click', () => {
            const itemAcordeao = titulo.closest('.acordeao-item');
            if (!itemAcordeao) return;

            const conteudo = itemAcordeao.querySelector('.acordeao-conteudo');
            if (!conteudo) return;

            const estaAtivo = titulo.classList.contains('ativo');

            document.querySelectorAll('.acordeao-item').forEach(item => {
                 if (item !== itemAcordeao) {
                    item.querySelector('.acordeao-titulo')?.classList.remove('ativo');
                    item.querySelector('.acordeao-conteudo')?.classList.remove('ativo');
                 }
            });

             if (!estaAtivo) {
                titulo.classList.add('ativo');
                conteudo.classList.add('ativo');
            } else {
                 titulo.classList.remove('ativo');
                 conteudo.classList.remove('ativo');
            }
        });
    });

    const cursorLight = document.querySelector('.cursor-light');
    if (cursorLight) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                 cursorLight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            });
        });

         document.addEventListener('mouseleave', () => {
             cursorLight.style.opacity = '0';
         });
         document.addEventListener('mouseenter', () => {
             cursorLight.style.opacity = '0.3';
         });

         window.addEventListener('touchstart', () => {
             cursorLight.style.display = 'none';
         }, { once: true });
    }
});
