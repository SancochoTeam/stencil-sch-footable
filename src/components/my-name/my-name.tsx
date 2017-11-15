import { Component } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  render() {
    const header = [{key: 'H1',value: 'H1'},{key: 'H2',value: 'H2'},{key: 'H3',value: 'H3'},{key: 'H4',value: 'H4'},{key: 'H5',value: 'H5'},{key: 'H6',value: 'H6'},{key: 'H7',value: 'H7'},{key: 'H8',value: 'H8'},{key: 'H9',value: 'H9'},{key: 'H10',value: 'H10'}];
    const data = [
      {'H1': 'C1','H2': 'C2','H3': 'C3','H4': 'C4','H5': 'C5','H6': 'C6','H7': 'C7','H8': 'C8','H9': 'C9','H10': 'C10'},
      {'H1': 'C1','H2': 'C2','H3': 'C3','H4': 'C4','H5': 'C5','H6': 'C6','H7': 'C7','H8': 'C8','H9': 'C9','H10': 'C10'},
      {'H1': 'C1','H2': 'C2','H3': 'C3','H4': 'C4','H5': 'C5','H6': 'C6','H7': 'C7','H8': 'C8','H9': 'C9','H10': 'C10'}
    ]
    return (
        <stencil-sch-footable header={header} data={data}></stencil-sch-footable>
    );
  }
}
