/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';


import {
  MyName as MyName
} from './components/my-name/my-name';

interface HTMLMyNameElement extends MyName, HTMLElement {
}
declare var HTMLMyNameElement: {
  prototype: HTMLMyNameElement;
  new (): HTMLMyNameElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "my-name": HTMLMyNameElement;
  }
  interface ElementTagNameMap {
      "my-name": HTMLMyNameElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "my-name": JSXElements.MyNameAttributes;
      }
  }
  namespace JSXElements {
      export interface MyNameAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}


import {
  StencilSchFootableRow as StencilSchFootableRow
} from './components/stencil-sch-footable-row/stencil-sch-footable-row';

interface HTMLStencilSchFootableRowElement extends StencilSchFootableRow, HTMLElement {
}
declare var HTMLStencilSchFootableRowElement: {
  prototype: HTMLStencilSchFootableRowElement;
  new (): HTMLStencilSchFootableRowElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-sch-footable-row": HTMLStencilSchFootableRowElement;
  }
  interface ElementTagNameMap {
      "stencil-sch-footable-row": HTMLStencilSchFootableRowElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-sch-footable-row": JSXElements.StencilSchFootableRowAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilSchFootableRowAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          row?: {},
          header?: any[]
      }
  }
}


import {
  StencilSchFootable as StencilSchFootable
} from './components/stencil-sch-footable/stencil-sch-footable';

interface HTMLStencilSchFootableElement extends StencilSchFootable, HTMLElement {
}
declare var HTMLStencilSchFootableElement: {
  prototype: HTMLStencilSchFootableElement;
  new (): HTMLStencilSchFootableElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-sch-footable": HTMLStencilSchFootableElement;
  }
  interface ElementTagNameMap {
      "stencil-sch-footable": HTMLStencilSchFootableElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-sch-footable": JSXElements.StencilSchFootableAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilSchFootableAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          header?: any[],
          data?: any[],
          minWidthCol?: number
      }
  }
}
