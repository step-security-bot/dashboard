import{_ as x}from"./floating-ui.dom.mjs-PU7UL9dJ.js";import{c as $}from"./index-CjLpwf8N.js";import{P as e}from"./index-kGlasm3i.js";import{R as i}from"./index-BjzEU6Zr.js";import{u as O}from"./usePrefix-CXWdRn9x.js";const o=["xs","sm","md","lg","xl","2xl"],r=["condensed","normal"],g=i.forwardRef(function(c,l){let{as:m="div",children:f,className:d,density:t,size:a,...u}=c;const s=O(),p=$(d,`${s}--layout`,{[`${s}--layout--size-${a}`]:a&&o.includes(a),[`${s}--layout--density-${t}`]:t&&r.includes(t)});return i.createElement(m,x({},u,{ref:l,className:p}),f)});g.propTypes={as:e.oneOfType([e.func,e.string,e.elementType]),children:e.node,className:e.string,density:e.oneOf(r),size:e.oneOf(o)};const h=i.forwardRef(function(c,l){let{as:m="div",children:f,className:d,density:t,size:a,...u}=c;const s=O(),p=$(d,Object.entries({size:a,density:t}).map(T=>{let[y,n]=T;return{[`${s}--layout-constraint--${y}__default-${n?.default}`]:n?.default,[`${s}--layout-constraint--${y}__min-${n?.min}`]:n?.min,[`${s}--layout-constraint--${y}__max-${n?.max}`]:n?.max}}));return i.createElement(m,x({},u,{ref:l,className:p}),f)});h.propTypes={as:e.oneOfType([e.func,e.string,e.elementType]),children:e.node,className:e.string,density:e.shape({min:e.oneOf(r),default:e.oneOf(r),max:e.oneOf(r)}),size:e.shape({min:e.oneOf(o),default:e.oneOf(o),max:e.oneOf(o)})};export{h as L};
