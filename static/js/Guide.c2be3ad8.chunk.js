(this.webpackJsonpreact_admin_template=this.webpackJsonpreact_admin_template||[]).push([[18],{1353:function(t,e,n){"use strict";n.r(e);n(83);var i=n(27),o=n(0),a=n.n(o),r=n(1163),s=n.n(r),c=(n(1164),n(472)),l=[{element:".ant-btn-primary",popover:{title:"\u6253\u5f00\u5f15\u5bfc",description:"\u6253\u5f00\u9875\u9762\u5f15\u5bfc",position:"bottom"}},{element:".hamburger-container",popover:{title:"Hamburger",description:"\u6253\u5f00/\u6536\u8d77\u5de6\u4fa7\u5bfc\u822a\u680f",position:"bottom"}},{element:".fullScreen-container",popover:{title:"Screenfull",description:"\u5168\u5c4f",position:"left"}},{element:".settings-container",popover:{title:"Settings",description:"\u7cfb\u7edf\u8bbe\u7f6e",position:"left"}}],p=new s.a({animate:!0,opacity:.75,doneBtnText:"\u5b8c\u6210",closeBtnText:"\u5173\u95ed",nextBtnText:"\u4e0b\u4e00\u6b65",prevBtnText:"\u4e0a\u4e00\u6b65"}),u=function(){p.defineSteps(l),p.start()};e.default=function(){return a.a.createElement("div",{className:"app-container"},a.a.createElement(c.a,{title:"\u65b0\u624b\u5f15\u5bfc",source:'\u5f15\u5bfc\u9875\u5bf9\u4e8e\u4e00\u4e9b\u7b2c\u4e00\u6b21\u8fdb\u5165\u9879\u76ee\u7684\u4eba\u5f88\u6709\u7528\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u4ecb\u7ecd\u4e0b\u9879\u76ee\u7684\u529f\u80fd\u3002\n                       \u672cDemo\u662f\u57fa\u4e8e<a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js</a>'}),a.a.createElement(i.a,{type:"primary",onClick:u},"\u6253\u5f00\u5f15\u5bfc"))}},472:function(t,e,n){"use strict";n(478);var i=n(477),o=n(42),a=n(43),r=n(45),s=n(44),c=n(0),l=n.n(c),p=function(){function t(e){Object(o.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(a.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),i=0;i<n.length;i++){var o=n[i];if(3===o.nodeType)e=e.concat(o.nodeValue.split(""));else if(1===o.nodeType){var a=[];a=this.convert(o,a),e.push({dom:o,val:a})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var i=n.dom.cloneNode();t.dom.appendChild(i),this.play({parent:t,dom:i,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),u=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){new p({source:this.source,output:this.output,delay:30}).start()}},{key:"render",value:function(){var t=this;return l.a.createElement(i.a,{hoverable:!0,bordered:!1,className:"card-item",title:this.props.title,style:{minHeight:this.props.height},id:this.props.id},l.a.createElement("div",{style:{display:"none"},ref:function(e){return t.source=e},dangerouslySetInnerHTML:{__html:this.props.source}}),l.a.createElement("div",{ref:function(e){return t.output=e}}))}}]),n}(l.a.Component);u.defaultProps={title:"\u4f55\u65f6\u4f7f\u7528",source:"",height:136};e.a=u}}]);