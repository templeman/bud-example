// https://gomakethings.com/the-quickest-way-to-detect-when-the-dom-is-ready/
export const domReady = (onReady) => {
  window.requestAnimationFrame(async function check() {
    document.body ? await onReady() : window.requestAnimationFrame(check);
  });
};
