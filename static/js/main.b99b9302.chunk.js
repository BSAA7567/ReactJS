(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},36:function(e,t,a){e.exports=a(50)},41:function(e,t,a){},42:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(25),r=a.n(o),c=(a(41),a(26)),i=a.n(c),u=(a(42),a(12)),s=a(5),m=a(32),d=a(14),h=a(15),p=a(17),E=a(16),v=a(51),f=a(52),g=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({text:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.text&&n.setState({list:[{value:n.state.text}].concat(Object(m.a)(n.state.list)),text:""})},n.handleRemove=function(e){n.state.list.splice(e.target.id,1),n.setState({list:n.state.list})},n.state={list:[],text:""},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(v.a,{onSubmit:this.handleSubmit},l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Label,null,"Todo List"),l.a.createElement(v.a.Control,{type:"text",placeholder:"Write down things to do",onChange:this.handleInput,value:this.state.text}))),l.a.createElement(f.a,null,this.state.list.map((function(t,a){return l.a.createElement(f.a.Item,{action:!0,id:a,onClick:e.handleRemove,variant:"primary"},t.value)}))))}}]),a}(n.Component),b=a(27),S=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleOnChange=function(e){n.setState({name:e.target.value})},n.state={name:""},console.log("Constructor Method \ud638\ucd9c"),n}return Object(h.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("sholudComponetUpdate \ud638\ucd9c"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate \ud638\ucd9c"),null}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate \ud638\ucd9c")}},{key:"render",value:function(){return console.log("render \ud638\ucd9c"),l.a.createElement("div",null,l.a.createElement(b.a,{placeholder:"write something",onChange:this.handleOnChange}),l.a.createElement("h1",{className:"pt-3"},"Rendering Text : ",this.state.name))}}],[{key:"getDerivedStateFromProps",value:function(e,t){console.log("getDerivedStateFromProps \ud638\ucd9c")}}]),a}(n.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement("h",null,"404"),l.a.createElement("p",null,"page not found"))};var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/todo"},"Todo List")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/life"},"Lifecycle API")))),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"}),l.a.createElement(s.a,{path:"/todo"},l.a.createElement(g,null)),l.a.createElement(s.a,{path:"/life"},l.a.createElement(S,null)),l.a.createElement(s.a,{path:"*"},l.a.createElement(k,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.b99b9302.chunk.js.map