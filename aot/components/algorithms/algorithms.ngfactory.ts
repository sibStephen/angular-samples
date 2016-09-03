/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/algorithms/algorithms';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/insertion-sort/insertion-sort';
import * as import11 from '../insertion-sort/insertion-sort.ngfactory';
var renderType_Algorithms_Host:import0.RenderComponentType = (null as any);
class _View_Algorithms_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Algorithms_0_4:import3.Algorithms;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Algorithms_Host0,renderType_Algorithms_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('algorithms',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Algorithms0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Algorithms_0_4 = new import3.Algorithms();
    this._appEl_0.initComponent(this._Algorithms_0_4,[],compView_0);
    compView_0.create(this._Algorithms_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Algorithms) && (0 === requestNodeIndex))) { return this._Algorithms_0_4; }
    return notFoundResult;
  }
}
function viewFactory_Algorithms_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Algorithms_Host === (null as any))) { (renderType_Algorithms_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_Algorithms_Host0(viewUtils,parentInjector,declarationEl);
}
export const AlgorithmsNgFactory:import9.ComponentFactory<import3.Algorithms> = new import9.ComponentFactory<import3.Algorithms>('algorithms',viewFactory_Algorithms_Host0,import3.Algorithms);
const styles_Algorithms:any[] = [];
var renderType_Algorithms:import0.RenderComponentType = (null as any);
class _View_Algorithms0 extends import1.AppView<import3.Algorithms> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _InsertionSort_6_4:import10.InsertionSort;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _text_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Algorithms0,renderType_Algorithms,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Insertion Sort Demo',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Watch the list get sorted as the algorithm traverses the list',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_6 = this.renderer.createElement(parentRenderNode,'insertion-sort',(null as any));
    this._appEl_6 = new import2.AppElement(6,(null as any),this,this._el_6);
    var compView_6:any = import11.viewFactory_InsertionSort0(this.viewUtils,this.injector(6),this._appEl_6);
    this._InsertionSort_6_4 = new import10.InsertionSort();
    this._appEl_6.initComponent(this._InsertionSort_6_4,[],compView_6);
    compView_6.create(this._InsertionSort_6_4,[],(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_8 = this.renderer.createElement(parentRenderNode,'h4',(null as any));
    this._el_9 = this.renderer.createElement(this._el_8,'a',(null as any));
    this.renderer.setElementAttribute(this._el_9,'href','http://www.syntaxsuccess.com/viewarticle/timeouts-and-timerwrapper-in-angular-2.0');
    this._text_10 = this.renderer.createText(this._el_9,'Read more here',(null as any));
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.InsertionSort) && (6 === requestNodeIndex))) { return this._InsertionSort_6_4; }
    return notFoundResult;
  }
}
export function viewFactory_Algorithms0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Algorithms> {
  if ((renderType_Algorithms === (null as any))) { (renderType_Algorithms = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/algorithms/algorithms.html',0,import8.ViewEncapsulation.None,styles_Algorithms,{})); }
  return new _View_Algorithms0(viewUtils,parentInjector,declarationEl);
}