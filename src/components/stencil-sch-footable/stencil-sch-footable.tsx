import { Component, Prop, State, Listen, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'stencil-sch-footable',
  styleUrl: 'stencil-sch-footable.scss'
})
export class StencilSchFootable {

  @Prop() header: {key: string, value: string}[] = [];
  @Prop() data: any[] = [];
  @Prop() minWidthCol: number = 200; 

  @State() showData: any[] = [];
  @State() showHeaders: {key: string, value: string}[] = [];
  @State() hideHeaders: {key: string, value: string}[] = [];
  @State() showHidenData: {[id: string]: boolean} = {};

  @Event() clickElement: EventEmitter;

  private column  : number; 
  private stopPropagation: boolean;
  private numRowVisib: number = 50; //number of visible rows

  componentWillLoad(){
    this.showData = [...this.data.splice(0,this.numRowVisib)];
    this.numRowVisib = (this.data.length < this.numRowVisib ) ? this.data.length : this.numRowVisib
    this.resiceScreen();
  }
  
  @Listen('window:scroll')  
  windowScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.numRowVisib < this.data.length){
      let newRows = this.data.slice(this.numRowVisib,this.numRowVisib + 5)
      this.showHidenData = newRows.reduce((acu, item, index) =>  Object.assign({},acu,{[index+this.numRowVisib]: true}), this.showHidenData);
      this.showData = [...this.showData, ...newRows]
      this.numRowVisib = this.numRowVisib + 5;
      console.log(this.numRowVisib)
    }
  }
  
  @Listen('window:resize')  
  resiceScreen = () => {
    this.column = this.calculateCol();
    //Col to hide
    this.hideHeaders = [...this.header];
    //Col to show
    this.showHeaders = this.hideHeaders.splice(0,this.column);
    this.showHidenData = this.showData.reduce((acu, item, index) =>  Object.assign({},acu,{[index]: true}), {});
  }
  
  calculateCol = () => {
    let col = Math.trunc((window.screen.width) / (this.minWidthCol))
    return (col === 0) ? 1 : col;
  };

  getWidthCol = () => ({width: `${100/this.column}%`})
  
  handleShowHideData = (index) => {
    this.showHidenData = Object.assign({},this.showHidenData,{[index]: !this.showHidenData[index]})
    this.stopPropagation = true;
  }
  handleClickElement = (index) => {
    (this.stopPropagation) ? this.stopPropagation = false : this.clickElement.emit(this.showData[index])
  }

  render() {

    let getHeaders = () => (
      this.showHeaders.map(item => <div class="column" style={this.getWidthCol()}>{item.value}</div>)
    );

    let getTableContent = () => (
      this.showData.map((rows,index) => (
        <div onClick={() => this.handleClickElement(index)} class="row">
            {getCol(rows)}
            <span onClick={() => this.handleShowHideData(index)} >{this.showHidenData[index] ? '+' : '-'}</span>
            <div class="contentDataHiden" hidden={this.showHidenData[index]}>
              {getDataHidenCol(rows)}
            </div>
        </div>
      ))
    );

    let getCol = (rows) => (
      this.showHeaders.map(item => 
        <div class="column" style={this.getWidthCol()}>
          {rows[item.key]}
        </div>
      )
    );

    let getDataHidenCol = (rows) => (
      this.hideHeaders.map(item => (<p>{item.value}:<i>{rows[item.key]}</i></p>))
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

  