function onClose(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

export { onClose };
