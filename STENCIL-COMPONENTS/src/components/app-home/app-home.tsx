import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          <p>Página de presentación en la que iré implementando diferentes funcionalidades</p>


          <p1>Contacto : </p1>

          <a href="https://www.linkedin.com/in/mtxdevp/" target="_blank">linkedin.com/in/mtxdevp/</a>
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>TEST</button>
        </stencil-route-link>
      </div>
    );
  }
}
