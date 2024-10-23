import{j as ze}from"./jsx-runtime-QvtbNqby.js";import{u as qe}from"./index-yfVukVkJ.js";import{u as T}from"./usePrefix-CXWdRn9x.js";import{_ as x,u as je,m as z,E as We,i as Ke,T as Ve}from"./floating-ui.dom.mjs-PU7UL9dJ.js";import{P as e}from"./index-kGlasm3i.js";import{R as t,r as g}from"./index-BjzEU6Zr.js";import{c as y}from"./index-CjLpwf8N.js";import{B as q}from"./Button-xjCpe_BM.js";import{d as Ge,T as ue}from"./deprecate-GNGtdTso.js";import{E as Ue}from"./bucket-6-CywArVTS.js";import{C as Xe}from"./bucket-2-C9DXCKPV.js";import{r as Je}from"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import{u as Qe,a as Ye,e as Ze,w as et}from"./index-55dkfs-I.js";import{d as tt}from"./index-Dc4QqC9m.js";import{u as nt}from"./Tooltip-BJBVfZ_G.js";import{I as at}from"./index-Da0at1PC.js";import{n as j}from"./noopFn-g4z370MD.js";import{c as ot}from"./events-OVwOsPzJ.js";import{C as st}from"./bucket-3-Dq7FRXBG.js";const W=t.forwardRef(function(o,s){let{children:d,className:i,stacked:p,...b}=o;const r=T(),u=y(i,`${r}--btn-set`,{[`${r}--btn-set--stacked`]:p});return t.createElement("div",x({},b,{className:u,ref:s}),d)});W.displayName="ButtonSet";W.propTypes={children:e.node,className:e.string,stacked:e.bool};const me=t.createContext(1),pe=["one","two","three"],rt=0,lt=pe.length-1,K=t.forwardRef(function(o,s){let{as:d="div",className:i,children:p,level:b,...r}=o;const u=t.useContext(me),m=b??u,h=T(),L=y(`${h}--layer-${pe[m]}`,i),c=Math.max(rt,Math.min(m+1,lt)),$=d;return t.createElement(me.Provider,{value:c},t.createElement($,x({ref:s},r,{className:L}),p))});K.displayName="Layer";K.propTypes={as:e.oneOfType([e.func,e.string,e.elementType]),children:e.node,className:e.string,level:e.oneOf([0,1,2])};const fe=K;function be(l){let{active:o=!0,className:s,withOverlay:d=!0,small:i=!1,description:p="loading",...b}=l;const r=T(),u=y(s,{[`${r}--loading`]:!0,[`${r}--loading--small`]:i,[`${r}--loading--stop`]:!o}),m=y({[`${r}--loading-overlay`]:!0,[`${r}--loading-overlay--stop`]:!o}),h=t.createElement("div",x({},b,{"aria-atomic":"true","aria-live":o?"assertive":"off",className:u}),t.createElement("svg",{className:`${r}--loading__svg`,viewBox:"0 0 100 100"},t.createElement("title",null,p),i?t.createElement("circle",{className:`${r}--loading__background`,cx:"50%",cy:"50%",r:"42"}):null,t.createElement("circle",{className:`${r}--loading__stroke`,cx:"50%",cy:"50%",r:i?"42":"44"})));return d?t.createElement("div",{className:m},h):h}be.propTypes={active:e.bool,className:e.string,description:e.string,id:Ge(e.string),small:e.bool,withOverlay:e.bool};const ye=l=>{let{className:o,status:s="active",iconDescription:d,description:i,onSuccess:p,successDelay:b=1500,...r}=l;const u=T(),m=y(`${u}--inline-loading`,o),h=()=>{let C=d||s;if(s==="error")return t.createElement(Ue,{className:`${u}--inline-loading--error`},t.createElement("title",null,C));if(s==="finished")return setTimeout(()=>{p&&p()},b),t.createElement(Xe,{className:`${u}--inline-loading__checkmark-container`},t.createElement("title",null,C));if(s==="inactive"||s==="active")return d||(C=s==="active"?"loading":"not loading"),t.createElement(be,{small:!0,description:C,withOverlay:!1,active:s==="active"})},L=t.createElement("div",{className:`${u}--inline-loading__text`},i),c=h(),$=c&&t.createElement("div",{className:`${u}--inline-loading__animation`},c);return t.createElement("div",x({className:m},r,{"aria-live":"assertive"}),$,i&&L)};ye.propTypes={className:e.string,description:e.node,iconDescription:e.string,onSuccess:e.func,status:e.oneOf(["inactive","active","finished","error"]),successDelay:e.number};function ge(l,o,s){l.classList.contains(o)===!s&&l.classList[s?"add":"remove"](o)}const it=["xs","sm","md","lg"],he=t.forwardRef(function(o,s){let{"aria-label":d,children:i,className:p,modalHeading:b="",modalLabel:r="",modalAriaLabel:u,passiveModal:m=!1,secondaryButtonText:h,primaryButtonText:L,open:c,onRequestClose:$=j,onRequestSubmit:C=j,onSecondarySubmit:M,primaryButtonDisabled:Ee=!1,danger:k,alert:V,secondaryButtons:S,selectorPrimaryFocus:G="[data-modal-primary-focus]",selectorsFloatingMenus:U,shouldSubmitOnEnter:ve,size:X,hasScrollingContent:J=!1,closeButtonLabel:Q="Close",preventCloseOnClickOutside:$e=!1,isFullWidth:Ne,launcherButtonRef:A,loadingStatus:_="inactive",loadingDescription:Ce,loadingIconDescription:Be,onLoadingSuccess:xe=j,slug:w,...Y}=o;const n=T(),I=g.useRef(null),Z=g.useRef(),B=g.useRef(null),N=g.useRef(null),ee=g.useRef(null),te=g.useRef(null),[ne,ae]=g.useState(!1),D=`modal-${je()}`,oe=`${n}--modal-header__label--${D}`,se=`${n}--modal-header__heading--${D}`,re=`${n}--modal-body--${D}`,P=`${n}--modal-close`,Le=y({[`${n}--btn--loading`]:_!=="inactive"}),H=_!=="inactive",R=Qe("enable-experimental-focus-wrap-without-sentinels");function Se(a){return!M&&a===Z.current||a.classList.contains(P)}function Te(a){a.stopPropagation(),c&&(z(a,We)&&$(a),z(a,Ke)&&ve&&!Se(a.target)&&C(a),R&&z(a,Ve)&&N.current&&Ye({containerNode:N.current,currentActiveNode:a.target,event:a}))}function ke(a){const f=a.target;a.stopPropagation(),!$e&&!Ze(f,U)&&N.current&&!N.current.contains(f)&&$(a)}function _e(a){let{target:f,relatedTarget:E}=a;if(c&&E&&f){const{current:v}=N,{current:O}=ee,{current:He}=te;et({bodyNode:v,startTrapNode:O,endTrapNode:He,currentActiveNode:E,oldActiveNode:f,selectorsFloatingMenus:U})}}const we=M||$,Ie=y(`${n}--modal`,{[`${n}--modal-tall`]:!m,"is-visible":c,[`${n}--modal--danger`]:k,[`${n}--modal--slug`]:w},p),Re=y(`${n}--modal-container`,{[`${n}--modal-container--${X}`]:X,[`${n}--modal-container--full-width`]:Ne}),Fe=y(`${n}--modal-content`,{[`${n}--modal-scroll-content`]:J||ne}),Oe=y(`${n}--modal-footer`,{[`${n}--modal-footer--three-button`]:Array.isArray(S)&&S.length===2}),le=a=>typeof a=="string"?a:void 0,Me=le(r),Ae=le(b),ie=Me||d||u||Ae,De=J||ne?{tabIndex:0,role:"region","aria-label":ie,"aria-labelledby":r?oe:se}:{},F={};V&&m&&(F.role="alert"),V&&!m&&(F.role="alertdialog",F["aria-describedby"]=re),g.useEffect(()=>()=>{ge(document.body,`${n}--body--with-modal-open`,!1)},[n]),g.useEffect(()=>{ge(document.body,`${n}--body--with-modal-open`,c??!1)},[c,n]),g.useEffect(()=>{!c&&A&&setTimeout(()=>{A?.current?.focus()})},[c,A]),g.useEffect(()=>{const a=E=>{const v=E||N.current,O=v?v.querySelector(k?`.${n}--btn--secondary`:G):null;return O||I&&I.current};c&&(E=>{const v=a(E);v!==null&&v.focus()})(N.current)},[c,G,k,n]),nt(()=>{B.current&&ae(B.current.scrollHeight>B.current.clientHeight);function a(){B.current&&ae(B.current.scrollHeight>B.current.clientHeight)}const f=tt(a,200);return window.addEventListener("resize",f),()=>{f.cancel(),window.removeEventListener("resize",f)}},[]);let ce;w&&w.type?.displayName==="AILabel"&&(ce=t.cloneElement(w,{size:"sm"}));const de=t.createElement("div",{className:`${n}--modal-close-button`},t.createElement(at,{className:P,label:Q,onClick:$,"aria-label":Q,align:"left",ref:I},t.createElement(st,{size:20,"aria-hidden":"true",tabIndex:"-1",className:`${P}__icon`}))),Pe=t.createElement("div",x({ref:N,role:"dialog"},F,{className:Re,"aria-label":ie,"aria-modal":"true",tabIndex:-1}),t.createElement("div",{className:`${n}--modal-header`},m&&de,r&&t.createElement(ue,{as:"h2",id:oe,className:`${n}--modal-header__label`},r),t.createElement(ue,{as:"h2",id:se,className:`${n}--modal-header__heading`},b),ce,!m&&de),t.createElement(fe,x({ref:B,id:re,className:Fe},De),i),!m&&t.createElement(W,{className:Oe,"aria-busy":H},Array.isArray(S)&&S.length<=2?S.map((a,f)=>{let{buttonText:E,onClick:v}=a;return t.createElement(q,{key:`${E}-${f}`,kind:"secondary",onClick:v},E)}):h&&t.createElement(q,{disabled:H,kind:"secondary",onClick:we,ref:Z},h),t.createElement(q,{className:Le,kind:k?"danger":"primary",disabled:H||Ee,onClick:C,ref:I},_==="inactive"?L:t.createElement(ye,{status:_,description:Ce,iconDescription:Be,className:`${n}--inline-loading--btn`,onSuccess:xe}))));return t.createElement(fe,x({},Y,{level:0,onKeyDown:Te,onClick:ot([Y?.onClick,ke]),onBlur:R?()=>{}:_e,className:Ie,role:"presentation",ref:s}),!R&&t.createElement("span",{ref:ee,tabIndex:0,role:"link",className:`${n}--visually-hidden`},"Focus sentinel"),Pe,!R&&t.createElement("span",{ref:te,tabIndex:0,role:"link",className:`${n}--visually-hidden`},"Focus sentinel"))});he.propTypes={alert:e.bool,"aria-label":Je("hasScrollingContent",e.string),children:e.node,className:e.string,closeButtonLabel:e.string,danger:e.bool,hasScrollingContent:e.bool,id:e.string,isFullWidth:e.bool,launcherButtonRef:e.oneOfType([e.func,e.shape({current:e.any})]),loadingDescription:e.string,loadingIconDescription:e.string,loadingStatus:e.oneOf(["inactive","active","finished","error"]),modalAriaLabel:e.string,modalHeading:e.node,modalLabel:e.node,onKeyDown:e.func,onLoadingSuccess:e.func,onRequestClose:e.func,onRequestSubmit:e.func,onSecondarySubmit:e.func,open:e.bool,passiveModal:e.bool,preventCloseOnClickOutside:e.bool,primaryButtonDisabled:e.bool,primaryButtonText:e.node,secondaryButtonText:e.node,secondaryButtons:(l,o,s)=>{if(l.secondaryButtons){if(!Array.isArray(l.secondaryButtons)||l.secondaryButtons.length!==2)return new Error(`${o} needs to be an array of two button config objects`);const d={buttonText:e.node,onClick:e.func};l[o].forEach(i=>{e.checkPropTypes(d,i,o,s)})}return null},selectorPrimaryFocus:e.string,selectorsFloatingMenus:e.arrayOf(e.string.isRequired),shouldSubmitOnEnter:e.bool,size:e.oneOf(it),slug:e.node};const ct=l=>{const o=qe();return ze.jsx(he,{closeButtonLabel:o.formatMessage({id:"dashboard.modal.close",defaultMessage:"Close"}),...l})};ct.__docgenInfo={description:"",methods:[],displayName:"Modal"};export{ct as M};
