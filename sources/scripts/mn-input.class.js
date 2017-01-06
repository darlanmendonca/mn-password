class MnPassword extends window.MnInput {
  constructor(self) {
    self = super(self)
    this.querySelector('input').setAttribute('type', 'password')
    return self
  }
}

window.customElements.define('mn-password', MnPassword)
