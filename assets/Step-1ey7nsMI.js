import{j as n}from"./jsx-runtime-QvtbNqby.js";import{u as m}from"./index-yfVukVkJ.js";import{S as g}from"./StatusIcon-CbB-w7ji.js";import{P as k}from"./bucket-12-CMgbqDR8.js";function M({exitCode:d,id:l,onSelect:o,reason:s,selected:f,status:a,stepName:r="unknown",terminationReason:i}){const e=m();function u(t){t.preventDefault(),o(l)}function c(){return i==="Skipped"?e.formatMessage({id:"dashboard.taskRun.status.skipped",defaultMessage:"Skipped"}):a==="cancelled"||a==="terminated"&&(s==="TaskRunCancelled"||s==="TaskRunTimeout")?e.formatMessage({id:"dashboard.taskRun.status.cancelled",defaultMessage:"Cancelled"}):a==="running"?e.formatMessage({id:"dashboard.taskRun.status.running",defaultMessage:"Running"}):a==="terminated"?s==="Completed"?d!==0?e.formatMessage({id:"dashboard.taskRun.status.succeeded.warning",defaultMessage:"Completed with exit code {exitCode}"},{exitCode:d}):e.formatMessage({id:"dashboard.taskRun.status.succeeded",defaultMessage:"Completed"}):e.formatMessage({id:"dashboard.taskRun.status.failed",defaultMessage:"Failed"}):a==="waiting"?e.formatMessage({id:"dashboard.taskRun.status.waiting",defaultMessage:"Waiting"}):e.formatMessage({id:"dashboard.taskRun.status.notRun",defaultMessage:"Not run"})}const p=c();return n.jsx("li",{className:"tkn--step","data-status":a,"data-reason":s,"data-selected":f||void 0,"data-termination-reason":i,children:n.jsxs("span",{className:"tkn--step-link",tabIndex:"0",onClick:u,onKeyUp:t=>t.key==="Enter"&&u(t),role:"button",children:[n.jsx(g,{DefaultIcon:t=>n.jsx(k,{size:20,...t}),hasWarning:d!==0,reason:s,status:a,terminationReason:i,title:p,type:"inverse"}),n.jsx("span",{className:"tkn--step-name",title:r,children:r})]})})}M.__docgenInfo={description:"",methods:[],displayName:"Step",props:{stepName:{defaultValue:{value:"'unknown'",computed:!1},required:!1}}};export{M as S};
