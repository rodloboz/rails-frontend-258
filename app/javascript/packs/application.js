console.log('Hello World from Webpacker')

// Absolute imports
import 'bootstrap';

// Relative imports
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { loadDynamicBannerText } from '../components/banner';

initUpdateNavbarOnScroll();
loadDynamicBannerText();
