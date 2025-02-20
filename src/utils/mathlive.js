export function renderMathInDocument() {
    window.addEventListener('DOMContentLoaded', () => {
        import('//unpkg.com/mathlive?module').then((mathlive) => {
            mathlive.renderMathInDocument();
        });
    });
}

