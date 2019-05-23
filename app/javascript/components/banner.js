import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const bannerText = document.getElementById('banner-typed-text');

  if (bannerText) {
    new Typed(bannerText, {
      strings: ["Change your life", "Learn to code"],
      typeSpeed: 50,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
