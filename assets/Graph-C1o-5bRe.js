import{j as l}from"./jsx-runtime-QvtbNqby.js";import{R as p,r as S}from"./index-BjzEU6Zr.js";import{p as _,E as A}from"./path-C2yqBsjs.js";import{c as q}from"./index-CfoIBI3E.js";import{P as c}from"./index-kGlasm3i.js";import{c as x}from"./index-CjLpwf8N.js";import{b as B,d as I}from"./bucket-3-Dq7FRXBG.js";import{U as M}from"./bucket-17-BNnKjYXl.js";import{C as V,c as W}from"./bucket-2-C9DXCKPV.js";var F=["top","left","transform","className","children","innerRef"];function k(){return k=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},k.apply(this,arguments)}function U(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,s;for(s=0;s<r.length;s++)o=r[s],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function f(t){var e=t.top,n=e===void 0?0:e,r=t.left,o=r===void 0?0:r,s=t.transform,i=t.className,a=t.children,u=t.innerRef,m=U(t,F);return p.createElement("g",k({ref:u,className:x("visx-group",i),transform:s||"translate("+o+", "+n+")"},m),a)}f.propTypes={top:c.number,left:c.number,transform:c.string,className:c.string,children:c.node,innerRef:c.oneOfType([c.string,c.func,c.object])};function $(t){var e=t.links,n=e===void 0?[]:e,r=t.linkComponent,o=t.className;return p.createElement(p.Fragment,null,n.map(function(s,i){return p.createElement(f,{key:"network-link-"+i,className:x("visx-network-link",o)},p.createElement(r,{link:s}))}))}$.propTypes={links:c.array,className:c.string};var K=["r","fill"];function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},g.apply(this,arguments)}function Y(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,s;for(s=0;s<r.length;s++)o=r[s],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function y(t){var e=t.r,n=e===void 0?15:e,r=t.fill,o=r===void 0?"#21D4FD":r,s=Y(t,K);return p.createElement("circle",g({r:n,fill:o},s))}y.propTypes={cx:c.number,cy:c.number};function w(t){var e=t.nodes,n=e===void 0?[]:e,r=t.nodeComponent,o=r===void 0?y:r,s=t.className,i=t.x,a=i===void 0?function(d){return d?.x||0}:i,u=t.y,m=u===void 0?function(d){return d?.y||0}:u;return p.createElement(p.Fragment,null,n.map(function(d,h){return p.createElement(f,{key:"network-node-"+h,className:x("visx-network-node",s),left:a(d),top:m(d)},p.createElement(o,{node:d}))}))}w.propTypes={nodes:c.array,className:c.string,x:c.func,y:c.func};function H(t){var e=t.link;return e!=null&&e.source&&e.target?p.createElement("line",{x1:e.source.x,y1:e.source.y,x2:e.target.x,y2:e.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6}):null}function E(t){var e=t.graph,n=t.linkComponent,r=n===void 0?H:n,o=t.nodeComponent,s=o===void 0?y:o,i=t.top,a=t.left;return e?p.createElement(f,{top:i,left:a},p.createElement($,{links:e.links,linkComponent:r}),p.createElement(w,{nodes:e.nodes,nodeComponent:s})):null}E.propTypes={top:c.number,left:c.number};const O=t=>l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 100 100",...t,children:l.jsx("circle",{cx:"50",cy:"50",fill:"none",strokeWidth:"16",r:"32",strokeDasharray:"150.79644737231007 52.26548245743669",transform:"rotate(283.985 50 50)",children:l.jsx("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})});O.__docgenInfo={description:"",methods:[],displayName:"InlineLoading"};class v extends S.Component{handleClick=()=>{this.props.onClick(this.props.label)};handleClickStep=e=>{this.props.onClickStep(this.props.label,e)};render(){const{children:e,edges:n,height:r,id:o,isSelected:s,status:i,type:a,width:u,label:m=a}=this.props;let d;if(a==="Task"||i==="error"){switch(i){case"error":d=B;break;case"running":d=O;break;case"success":d=V;break;default:d=M}d=l.jsx(d,{className:"status-icon",x:"8",y:"5"})}const h=19;let C=m;if(m.length>h){const j=h-1,G=m.substring(0,Math.ceil(j/2)),R=m.substring(m.length-Math.floor(j/2));C=`${G}…${R}`}let N={textAnchor:"start",x:36,y:20};(a==="Start"||a==="End")&&(N={dominantBaseline:"middle",textAnchor:"middle",x:"50%",y:"50%"});const P={x:s?0:1,y:s?0:1,width:s?u:u-2,height:s?30:28},L=e?I:W,D=q(a,{expanded:e,collapsed:!e,selected:s});return l.jsx("svg",{height:r,width:u,viewBox:`0 0 ${u} ${r}`,"data-status":i,className:D,children:l.jsxs("g",{children:[l.jsx("rect",{width:u,height:r}),l.jsxs("g",{className:"label",onClick:this.handleClick,children:[l.jsx("title",{children:m}),a!=="Start"&&a!=="End"&&l.jsx("rect",{className:"label-hitbox",...P}),d,l.jsx("text",{...N,children:C}),a==="Task"&&l.jsx(L,{className:"chevron",x:u-28,y:"5"})]}),e&&l.jsx(b,{graph:{id:`${o}_subgraph`,children:e,edges:n},isSubGraph:!0,onClickStep:this.handleClickStep})]})})}}v.defaultProps={height:100,onClick:()=>{},onClickStep:()=>{},width:100};v.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleClickStep",docblock:null,modifiers:[],params:[{name:"stepName",optional:!1,type:null}],returns:null}],displayName:"Node",props:{height:{defaultValue:{value:"100",computed:!1},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},onClickStep:{defaultValue:{value:"() => {}",computed:!1},required:!1},width:{defaultValue:{value:"100",computed:!1},required:!1}}};const T=({link:t})=>{const e=t.sections[0],n=_(),{x:r,y:o}=e.startPoint,{x:s,y:i}=e.endPoint,a=.5;return n.moveTo(r,o),n.lineTo(r,o+(i-o)*a),n.lineTo(s,o+(i-o)*a),n.lineTo(s,i-1),l.jsx("path",{strokeWidth:1,fill:"none",strokeOpacity:1,d:n.toString()})};T.__docgenInfo={description:"",methods:[],displayName:"NodeLink"};class b extends S.Component{state={};componentDidMount(){this.layout()}componentDidUpdate(e){const{graph:n}=this.props,{graph:r}=e;n!==r&&this.layout()}layout=()=>{const{graph:e,isSubGraph:n}=this.props;new A({defaultLayoutOptions:{"org.eclipse.elk.algorithm":n?"org.eclipse.elk.box":"org.eclipse.elk.layered","org.eclipse.elk.direction":"DOWN","org.eclipse.elk.edgeRouting":"ORTHOGONAL","org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment":"BALANCED","org.eclipse.elk.layered.nodePlacement.strategy":"BRANDES_KOEPF","org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers":n?0:40,"org.eclipse.elk.padding":"[top=30,left=0,bottom=1,right=0]","org.eclipse.elk.separateConnectedComponents":!1,"org.eclipse.elk.spacing.nodeNode":n?0:40}}).layout(e).then(o=>{this.setState({links:o.edges,nodes:o.children,width:o.width,height:o.height})}).catch(console.error)};render(){const{isSubGraph:e,onClickStep:n,onClickTask:r}=this.props,{height:o,links:s,nodes:i,width:a}=this.state;return i?l.jsxs("svg",{className:"graph",height:o,width:a,viewBox:`0 0 ${a} ${o}`,preserveAspectRatio:"xMidYMin meet",children:[!e&&l.jsx("defs",{children:l.jsx("marker",{id:"edge-arrow",markerUnits:"userSpaceOnUse",markerWidth:"7.5",markerHeight:"8",orient:"auto",refY:"4",refX:"7",children:l.jsx("path",{d:"M0 0v8l7-4z"})})}),l.jsx(E,{graph:{links:s,nodes:i},nodeComponent:u=>l.jsx(v,{onClick:e?n:r,onClickStep:e?void 0:n,...u.node}),linkComponent:e?()=>null:T})]}):null}}b.defaultProps={isSubGraph:!1,onClickStep:()=>{},onClickTask:()=>{}};b.__docgenInfo={description:"",methods:[{name:"layout",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Graph",props:{isSubGraph:{defaultValue:{value:"false",computed:!1},required:!1},onClickStep:{defaultValue:{value:"() => {}",computed:!1},required:!1},onClickTask:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};export{b as G,v as N};
