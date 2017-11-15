import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'stencil-sch-footable',
  styleUrl: 'stencil-sch-footable.scss'
})
export class StencilSchFootable {

  @Prop() header: {key: string, value: string}[] = [];
  @Prop() data: any[] = [];
  @Prop() minWidthCol: number = 300; 

  @State() showHeaders: {key: string, value: string}[] = [];
  @State() hideHeaders: {key: string, value: string}[] = [];
  @State() showHidenData: {[id: string]: boolean};

  private column  : number; 
  
  componentWillLoad(){
    this.column = this.calculateCol();
    //Col to hide
    this.hideHeaders = [...this.header];
    //Col to show
    this.showHeaders = this.hideHeaders.splice(0,this.column);
    this.showHidenData = this.data.reduce((acu, item, index) =>  Object.assign({},acu,{[index]: true}), {});
  }    
  
  calculateCol = () => Math.trunc((window.screen.width) / (this.minWidthCol));

  getWidthCol = () => ({width: `${100/this.column}%`})
  handleShowHideData = (index) => {
    this.showHidenData = Object.assign({},this.showHidenData,{[index]: !this.showHidenData[index]})
    console.log(index)
  }

  render() {

    let getHeaders = () => (
      this.showHeaders.map(item => <div class="column" style={this.getWidthCol()}>{item.value}</div>)
    );

    let getTableContent = () => (
      this.data.map((rows,index) => (
        <div onClick={() => this.handleShowHideData(index)} class="row">
            {getCol(rows, index)}
            <span>{this.showHidenData[index] ? '+' : '-'}</span>
        </div>
      ))
    );

    let getCol = (rows, index) => (
      this.showHeaders.map(item => 
        <div class="column" style={this.getWidthCol()}>
          {rows[item.key]}
          <div class="contentDataHiden" hidden={this.showHidenData[index]}>
            {getDataHidenCol(rows)}
          </div>
        </div>
      )
    );

    let getDataHidenCol = (rows) => (
      this.hideHeaders.map(item => (<p>{item.value}:{rows[item.key]}</p>))
    );

    return (
      <div id="table">
        <div id="header">
          {getHeaders()}
        </div>
        <div id="content">
          {getTableContent()}
        </div>
      </div>
    )
  }
}

  