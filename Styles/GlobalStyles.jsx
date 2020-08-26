import { createGlobalStyle } from 'styled-components';
import * as styles_var from './Variables'

const GlobalStyle = createGlobalStyle`
  
@media only screen and (min-device-width: ${styles_var.mobile}) {

/* 1 column grid */

html, body {
  font-family: 'Roboto Slab', serif;
  padding: 0;
  margin: 0;
  background-color: ${styles_var.pink_color};
  min-width: 320px;
}

body::-webkit-scrollbar {
  width: 0.5rem
}

body::-webkit-scrollbar-track {
  background: ${styles_var.pink_color};
}

body::-webkit-scrollbar-thumb {
  background: coral;
}

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#main-content {
  margin-top: 58.23px;
}

.hover-transition {
  transition-duration: 0.5s;
}

h1, h2, h3, h4, h5, h6, p, small {
  font-family: 'Roboto Slab', serif;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.5rem;
}

}

@media only screen and (min-device-width: ${styles_var.tablet}) {
    /* Tablet - 2 Column grid */
    
}

/* Another possible breakpoint here - at 992px */

@media only screen and (min-device-width: ${styles_var.desktop}) {
/* Desktop */
main {
  flex-direction: row;
}
}

`;

export default GlobalStyle