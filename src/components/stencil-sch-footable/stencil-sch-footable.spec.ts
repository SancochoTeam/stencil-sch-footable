import { render } from '@stencil/core/testing';
import { StencilSchFootable } from './stencil-sch-footable';

describe('stencil-sch-footable', () => {
  it('should build', () => {
    expect(new StencilSchFootable()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [StencilSchFootable],
        html: '<stencil-sch-footable></stencil-sch-footable>'
      });
    });

    // it('should work without parameters', () => {
    //   expect(element.textContent).toEqual('Hello, my name is  ');
    // });

    // it('should work a first name', async () => {
    //   element.first = 'Peter';
    //   await flush(element);
    //   expect(element.textContent).toEqual('Hello, my name is Peter ');
    // });

    // it('should work with a last name', async () => {
    //   element.last = 'Parker';
    //   await flush(element);
    //   expect(element.textContent).toEqual('Hello, my name is  Parker');
    // });

    // it('should work with both a first and a list name', async () => {
    //   element.first = 'Peter'
    //   element.last = 'Parker';
    //   await flush(element);
    //   expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    // });
  });
});