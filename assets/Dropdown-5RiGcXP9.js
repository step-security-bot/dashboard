import{b as Ne,u as je,_ as g,s as Ce,f as De,h as Pe,c as Fe}from"./floating-ui.dom.mjs-PU7UL9dJ.js";import{R as l,r as m}from"./index-BjzEU6Zr.js";import{u as Q,L as _,a as Le,b as Re}from"./index-DVr8swhD.js";import{c as $}from"./index-CjLpwf8N.js";import{P as t}from"./index-kGlasm3i.js";import{m as ke}from"./mergeRefs-CTUecegF.js";import{d as G}from"./deprecate-GNGtdTso.js";import{u as Me}from"./usePrefix-CXWdRn9x.js";import{F as ze}from"./FormContext-IWjAIOZU.js";import{W as We,a as Be}from"./bucket-18-ByJs4WER.js";import{d as Ke}from"./bucket-2-C9DXCKPV.js";const{ItemMouseMove:qe,MenuMouseLeave:He}=Q.stateChangeTypes,J=i=>typeof i=="string"?i:typeof i=="number"?`${i}`:i!==null&&typeof i=="object"&&"label"in i&&typeof i.label=="string"?i.label:"",X=l.forwardRef((i,Y)=>{let{autoAlign:d=!1,className:Z,disabled:h=!1,direction:O="bottom",items:N,label:j,["aria-label"]:ee,ariaLabel:te,itemToString:u=J,itemToElement:C=null,renderSelectedItem:D,type:ne="default",size:I,onChange:P,id:oe,titleText:F="",hideLabel:le,helperText:T="",translateWithId:ie,light:L,invalid:r,invalidText:se,warn:w,warnText:re,initialSelectedItem:ae,selectedItem:R,downshiftProps:de,readOnly:E,slug:y,...ce}=i;const{refs:f,floatingStyles:k,middlewareData:pe}=Ne(d?{placement:O,strategy:"fixed",middleware:[Ce({apply(e){let{rects:o,elements:a}=e;Object.assign(a.floating.style,{width:`${o.reference.width}px`})}}),De(),Pe()],whileElementsMounted:Fe}:{});m.useEffect(()=>{if(d){const e={...k,visibility:pe.hide?.referenceHidden?"hidden":"visible"};Object.keys(e).forEach(o=>{f.floating.current&&(f.floating.current.style[o]=e[o])})}},[k,d,f.floating]);const n=Me(),{isFluid:v}=m.useContext(ze),M={items:N,itemToString:u,initialSelectedItem:ae,onSelectedItemChange:Te,stateReducer:fe,isItemDisabled(e,o){return e!==null&&typeof e=="object"&&"disabled"in e&&e.disabled===!0},onHighlightedIndexChange:e=>{let{highlightedIndex:o}=e;if(o>-1&&typeof window!==void 0){const s=document.querySelectorAll(`li.${n}--list-box__menu-item[role="option"]`)[o];s&&s.scrollIntoView({behavior:"smooth",block:"nearest"})}},...de},ue=je();function fe(e,o){const{changes:a,type:s}=o;switch(s){case qe:case He:return{...a,highlightedIndex:e.highlightedIndex}}return a}R!==void 0&&(M.selectedItem=R);const{isOpen:b,getToggleButtonProps:me,getLabelProps:be,getMenuProps:z,getItemProps:ge,selectedItem:c,highlightedIndex:he}=Q(M),p=ne==="inline",W=!r&&w,[we,ye]=m.useState(!1),xe=$(`${n}--dropdown`,{[`${n}--dropdown--invalid`]:r,[`${n}--dropdown--warning`]:W,[`${n}--dropdown--open`]:b,[`${n}--dropdown--inline`]:p,[`${n}--dropdown--disabled`]:h,[`${n}--dropdown--light`]:L,[`${n}--dropdown--readonly`]:E,[`${n}--dropdown--${I}`]:I,[`${n}--list-box--up`]:O==="top",[`${n}--autoalign`]:d}),_e=$(`${n}--label`,{[`${n}--label--disabled`]:h,[`${n}--visually-hidden`]:le}),$e=$(`${n}--form__helper-text`,{[`${n}--form__helper-text--disabled`]:h}),Ie=$(`${n}--dropdown__wrapper`,`${n}--list-box__wrapper`,Z,{[`${n}--dropdown__wrapper--inline`]:p,[`${n}--list-box__wrapper--inline`]:p,[`${n}--dropdown__wrapper--inline--invalid`]:p&&r,[`${n}--list-box__wrapper--inline--invalid`]:p&&r,[`${n}--list-box__wrapper--fluid--invalid`]:v&&r,[`${n}--list-box__wrapper--fluid--focus`]:v&&we&&!b,[`${n}--list-box__wrapper--slug`]:y}),B=T?`dropdown-helper-text-${ue}`:void 0,S=C,x=me({"aria-label":ee||te}),K=T&&!v?l.createElement("div",{id:B,className:$e},T):null;function Te(e){let{selectedItem:o}=e;P&&P({selectedItem:o??null})}const q=e=>{ye(e.type==="focus")},A=ke(x.ref,Y),[H,Ee]=m.useState();let[ve,U]=m.useState(!1);const Se=E?{onClick:e=>{e.preventDefault(),A.current!==void 0&&A.current.focus()},onKeyDown:e=>{["ArrowDown","ArrowUp"," ","Enter"].includes(e.key)&&e.preventDefault()}}:{onKeyDown:e=>{(e.code!=="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&U(!0),(ve&&e.code==="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&(H&&clearTimeout(H),Ee(setTimeout(()=>{U(!1)},3e3))),x.onKeyDown&&x.onKeyDown(e)}},Ae=m.useMemo(()=>z({ref:d?f.setFloating:null}),[d,z,f.setFloating]);let V;return y&&y.type?.displayName==="AILabel"&&(V=l.cloneElement(y,{size:"mini"})),l.createElement("div",g({className:Ie},ce),F&&l.createElement("label",g({className:_e},be()),F),l.createElement(_,{onFocus:q,onBlur:q,size:I,className:xe,invalid:r,invalidText:se,warn:w,warnText:re,light:L,isOpen:b,ref:d?f.setReference:null,id:oe},r&&l.createElement(We,{className:`${n}--list-box__invalid-icon`}),W&&l.createElement(Be,{className:`${n}--list-box__invalid-icon ${n}--list-box__invalid-icon--warning`}),l.createElement("button",g({type:"button",className:`${n}--list-box__field`,disabled:h,"aria-disabled":E?!0:void 0,"aria-describedby":!p&&!r&&!w&&K?B:void 0,title:c&&u!==void 0?u(c):J(j)},x,Se,{ref:A}),l.createElement("span",{className:`${n}--list-box__label`},c?D?D(c):u(c):j),l.createElement(_.MenuIcon,{isOpen:b,translateWithId:ie})),V,l.createElement(_.Menu,Ae,b&&N.map((e,o)=>{const a=e!==null&&typeof e=="object",s=ge({item:e,index:o});e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"id")&&(s.id=e.id);const Oe=a&&"text"in e&&C?e.text:u(e);return l.createElement(_.MenuItem,g({key:s.id,isActive:c===e,isHighlighted:he===o,title:Oe,disabled:s["aria-disabled"]},s),typeof e=="object"&&S!==void 0&&S!==null?l.createElement(S,g({key:s.id},e)):u(e),c===e&&l.createElement(Ke,{className:`${n}--list-box__menu-item__selected-icon`}))}))),!p&&!r&&!w&&K)});X.displayName="Dropdown";X.propTypes={"aria-label":t.string,ariaLabel:G(t.string),autoAlign:t.bool,className:t.string,direction:t.oneOf(["top","bottom"]),disabled:t.bool,downshiftProps:t.object,helperText:t.node,hideLabel:t.bool,id:t.string.isRequired,initialSelectedItem:t.oneOfType([t.object,t.string,t.number]),invalid:t.bool,invalidText:t.node,itemToElement:t.func,itemToString:t.func,items:t.array.isRequired,label:t.node.isRequired,light:G(t.bool),onChange:t.func,readOnly:t.bool,renderSelectedItem:t.func,selectedItem:t.oneOfType([t.object,t.string,t.number]),size:Le,slug:t.node,titleText:t.node.isRequired,translateWithId:t.func,type:Re,warn:t.bool,warnText:t.node};export{X as D};
