import{j as o}from"./jsx-runtime-QvtbNqby.js";import{c as f,i as g}from"./index-CfoIBI3E.js";import{a as c,b as t}from"./bucket-3-Dq7FRXBG.js";import{T as d}from"./bucket-16-CiwkPD5r.js";import{S as m}from"./Spinner-Dbwi84XW.js";import{U as C,a as w}from"./bucket-17-BNnKjYXl.js";import{a as h,C as F,b as S}from"./bucket-2-C9DXCKPV.js";import{a as R}from"./bucket-18-ByJs4WER.js";import{d as U}from"./constants-PT-Qtcqm.js";const x={inverse:{cancelled:c,error:c,pending:d,running:m,skipped:C,success:h,warning:R},normal:{cancelled:t,error:t,pending:d,running:m,skipped:w,success:F,warning:S}},N={cancelled:"tkn--status-icon--cancelled",error:"tkn--status-icon--error",pending:"tkn--status-icon--pending",running:"tkn--status-icon--running",success:"tkn--status-icon--success",warning:"tkn--status-icon--warning"},j={inverse:"tkn--status-icon--type-inverse",normal:"tkn--status-icon--type-normal"};function v({DefaultIcon:s,hasWarning:p,isCustomTask:u,reason:i,status:n,terminationReason:k,title:l,type:r="normal"}){let e;!n&&i===U||k==="Skipped"?e="skipped":!n&&!s||n==="Unknown"&&i==="Pending"?e="pending":n==="True"||n==="terminated"&&i==="Completed"?e=p?"warning":"success":n==="False"&&(i==="PipelineRunCancelled"||i==="Cancelled"||i==="TaskRunCancelled")?e="cancelled":n==="False"||n==="cancelled"||n==="terminated"||n==="Unknown"&&i==="PipelineRunCouldntCancel"?e="error":(g(i,n)||u&&n==="Unknown")&&(e="running");const a=x[r]?.[e]||s;return a?o.jsx(a,{className:f("tkn--status-icon",j[r],{[N[e]]:e}),size:20,children:l&&o.jsx("title",{children:l})}):null}v.__docgenInfo={description:"",methods:[],displayName:"StatusIcon",props:{type:{defaultValue:{value:"'normal'",computed:!1},required:!1}}};export{v as S};
