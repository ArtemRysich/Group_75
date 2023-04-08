import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { onClose } from './close';

function createModal({ description, img, name, price }) {
  const instance = basicLightbox.create(
    `<div class="modal">
<img src="${img}" alt="${name}" width="500">
<h2>${name}</h2>
<h3>${price}</h3>
<p>${description}</p>
</div>`,
    {
      handler: null,
      onShow(instance){
        this.handler = onClose.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose(){
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  console.log(instance);
  instance.show();
}
export { createModal };
