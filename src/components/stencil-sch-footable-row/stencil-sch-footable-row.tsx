import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-sch-footable-row'
})
export class StencilSchFootableRow {
  
    @Prop() row: {};
    @Prop() header: any[] = [];

    render() {
      return (
        <div>
         <div class="row">
          {this.header.map(item => 
            <span>{this.row[item]}</span>
          )}
          </div>
        </div>
      );
    }
  }
  