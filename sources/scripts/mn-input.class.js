class MnPassword extends window.MnInput {
  constructor(self) {
    self = super(self)
    const input = this.querySelector('input')
    input.setAttribute('type', 'password')
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('tabindex', '-1')
    this.appendChild(button)

    input.addEventListener('blur', () => {
      input.setAttribute('type', 'password')
      this.classList.remove('password-visible')
    })

    button.addEventListener('mousedown', event => {
      event.preventDefault()
    })

    button.addEventListener('click', () => {
      const toggledType = input.getAttribute('type') === 'password'
        ? 'text'
        : 'password'
      input.setAttribute('type', toggledType)
      this.classList.toggle('password-visible')
      this.focus()
    })
    return self
  }
}

window.customElements.define('mn-password', MnPassword)
