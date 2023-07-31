import PointerObserver from './pointer-observer.js';
window.addEventListener('pointerdown', () => {
    console.log(PointerObserver.array());
    console.log(PointerObserver.last());
});
window.addEventListener('pointermove', () => {
    console.log(PointerObserver.array());
    console.log(PointerObserver.last());
});
window.addEventListener('pointerup', () => {
    console.log(PointerObserver.array());
    console.log(PointerObserver.last());
});
//# sourceMappingURL=index.js.map