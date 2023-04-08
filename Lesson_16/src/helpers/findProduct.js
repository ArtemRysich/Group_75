import { instruments } from "../instruments";

function findProduct(elem) {
  const li = elem.closest('.js-card');
  const productId = Number(li.dataset.productId);
  return instruments.find(({ id }) => id === productId);
}
export {findProduct}