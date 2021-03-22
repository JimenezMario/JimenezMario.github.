class MiFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = /* html */
      `Copyright &copy; 2Jimenez Escamilla mario Emmanuel 2021.`;
  }
}
customElements.define("mi-footer", MiFooter);
