import { Component } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  render() {
    const header = ['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11'];
    const data = [
      {'H1': 'C1','H2': 'C2','H3': 'C3','H4': 'C4','H5': 'C5','H6': 'C6','H7': 'C7','H8': 'C8','H9': 'C9','H10': 'C10','H11': 'C11'},
      {'H1': 'C1','H2': 'C2','H3': 'C3','H4': 'C4','H5': 'C5','H6': 'C6','H7': 'C7','H8': 'C8','H9': 'C9','H10': 'C10','H11': 'C11'},
      {'H1': 'C1','H2': 'C2','H3': 'C3','H4': 'C4','H5': 'C5','H6': 'C6','H7': 'C7','H8': 'C8','H9': 'C9','H10': 'C10','H11': 'C11'}
    ]
    return (
        <stencil-sch-footable header={header} data={data}></stencil-sch-footable>
    );
  }
}
