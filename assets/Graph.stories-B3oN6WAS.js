import{G as t}from"./Graph-C1o-5bRe.js";import"./jsx-runtime-QvtbNqby.js";import"./index-BjzEU6Zr.js";import"./path-C2yqBsjs.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CfoIBI3E.js";import"./index-kGlasm3i.js";import"./index-CjLpwf8N.js";import"./bucket-3-Dq7FRXBG.js";import"./Icon-CpyVU44g.js";import"./bucket-17-BNnKjYXl.js";import"./bucket-2-C9DXCKPV.js";const p="root",d="root",l=[{id:"skaffold-unit-tests-build-skaffold-web",source:"skaffold-unit-tests",sourcePort:"skaffold-unit-tests-p0",target:"build-skaffold-web",targetPort:"build-skaffold-web-p0"},{id:"skaffold-unit-tests-build-skaffold-app",source:"skaffold-unit-tests",sourcePort:"skaffold-unit-tests-p1",target:"build-skaffold-app",targetPort:"build-skaffold-app-p0"},{id:"build-skaffold-app-deploy-app",source:"build-skaffold-app",sourcePort:"build-skaffold-app-p1",target:"deploy-app",targetPort:"deploy-app-p0"},{id:"build-skaffold-web-deploy-web",source:"build-skaffold-web",sourcePort:"build-skaffold-web-p1",target:"deploy-web",targetPort:"deploy-web-p0"},{id:"Start-skaffold-unit-tests",source:"Start",sourcePort:"Start-pSourceSingleton",target:"skaffold-unit-tests",targetPort:"skaffold-unit-tests-p2"},{id:"deploy-app-End",source:"deploy-app",sourcePort:"deploy-app-p1",target:"End",targetPort:"End-pTargetSingleton"},{id:"deploy-web-End",source:"deploy-web",sourcePort:"deploy-web-p1",target:"End",targetPort:"End-pTargetSingleton"}],s=[{id:"skaffold-unit-tests",label:"skaffold-unit-tests",children:[{id:"__step__skaffold-unit-tests__run-tests",label:"run-tests",width:200,height:30,nChildren:2,nParents:1,type:"Step"}],edges:[],nParents:1,nChildren:2,status:"success",type:"Task",ports:[{id:"skaffold-unit-tests-p0"},{id:"skaffold-unit-tests-p1"},{id:"skaffold-unit-tests-p2"}]},{id:"build-skaffold-web",label:"build-skaffold-web",children:[{id:"__step__build-skaffold-web__build-and-push",label:"build-and-push",width:200,height:30,nChildren:1,nParents:1,type:"Step"}],edges:[],nParents:1,nChildren:1,status:"running",type:"Task",ports:[{id:"build-skaffold-web-p0"},{id:"build-skaffold-web-p1"}]},{id:"build-skaffold-app",label:"build-skaffold-app",children:[{id:"__step__build-skaffold-app__build-and-push",label:"build-and-push",width:200,height:30,nChildren:1,nParents:1,type:"Step"}],edges:[],nParents:1,nChildren:1,status:"error",type:"Task",ports:[{id:"build-skaffold-app-p0"},{id:"build-skaffold-app-p1"}]},{id:"deploy-app",label:"deploy-app",children:[{id:"__step__deploy-app__replace-image",label:"replace-image",width:200,height:30,nChildren:1,nParents:1,type:"Step"},{id:"__step__deploy-app__run-kubectl",label:"run-kubectl",width:200,height:30,nChildren:1,nParents:1,type:"Step"}],edges:[{id:"__step__deploy-app__replace-image-__step__deploy-app__run-kubectl",source:"__step__deploy-app__replace-image",sourcePort:"__step__deploy-app__replace-image-p0",target:"__step__deploy-app__run-kubectl",targetPort:"__step__deploy-app__run-kubectl-p0"}],nParents:1,nChildren:1,type:"Task",ports:[{id:"deploy-app-p0"},{id:"deploy-app-p1"}]},{id:"deploy-web",label:"deploy-web",children:[{id:"__step__deploy-web__replace-image",label:"replace-image",width:200,height:30,nChildren:1,nParents:1,type:"Step"},{id:"__step__deploy-web__run-kubectl",label:"run-kubectl",width:200,height:30,nChildren:1,nParents:1,type:"Step"}],edges:[{id:"__step__deploy-web__replace-image-__step__deploy-web__run-kubectl",source:"__step__deploy-web__replace-image",sourcePort:"__step__deploy-web__replace-image-p0",target:"__step__deploy-web__run-kubectl",targetPort:"__step__deploy-web__run-kubectl-p0"}],nParents:1,nChildren:1,type:"Task",ports:[{id:"deploy-web-p0"},{id:"deploy-web-p1"}]},{id:"Start",label:"Start",type:"Start",width:60,height:60,nChildren:1,nParents:0,ports:[{id:"Start-pSourceSingleton"}]},{id:"End",label:"End",type:"End",width:60,height:60,nChildren:0,nParents:2,ports:[{id:"End-pTargetSingleton"}]}],a=0,r=0,o={id:p,label:d,edges:l,children:s,nChildren:a,nParents:r},P={component:t,title:"legacy/Graph"},e={args:{graph:o}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    graph
  }
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,P as default};
