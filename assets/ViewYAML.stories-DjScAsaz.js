import{V as n}from"./ViewYAML-ReMqin4P.js";import"./jsx-runtime-QvtbNqby.js";import"./index-BjzEU6Zr.js";import"./index-kGlasm3i.js";import"./index-CfoIBI3E.js";import"./usePrefix-CXWdRn9x.js";const o="Pod",r="v1",s={name:"output-pipeline-run-first-create-file-ncjch-pod-9qvvg",namespace:"test",uid:"56ed9f01-e5a7-4342-8bee-d220bb7b947e",resourceVersion:"502940",creationTimestamp:"2021-08-25T13:31:58Z",labels:{"app.kubernetes.io/managed-by":"tekton-pipelines","tekton.dev/memberOf":"tasks","tekton.dev/pipeline":"output-pipeline","tekton.dev/pipelineRun":"output-pipeline-run","tekton.dev/pipelineTask":"first-create-file","tekton.dev/task":"create-file","tekton.dev/taskRun":"output-pipeline-run-first-create-file-ncjch"},annotations:{"pipeline.tekton.dev/release":"445b835","tekton.dev/ready":"READY"},ownerReferences:[{apiVersion:"tekton.dev/v1beta1",kind:"TaskRun",name:"output-pipeline-run-first-create-file-ncjch",uid:"3f3609d8-3f24-4916-b6d4-84533890834c",controller:!0,blockOwnerDeletion:!0}],managedFields:[{manager:"controller",operation:"Update",apiVersion:"v1",time:"2021-08-25T13:32:21Z",fieldsType:"FieldsV1",fieldsV1:{"f:metadata":{"f:annotations":{".":{},"f:pipeline.tekton.dev/release":{},"f:tekton.dev/ready":{}},"f:labels":{".":{},"f:app.kubernetes.io/managed-by":{},"f:tekton.dev/memberOf":{},"f:tekton.dev/pipeline":{},"f:tekton.dev/pipelineRun":{},"f:tekton.dev/pipelineTask":{},"f:tekton.dev/task":{},"f:tekton.dev/taskRun":{}},"f:ownerReferences":{".":{},'k:{"uid":"3f3609d8-3f24-4916-b6d4-84533890834c"}':{".":{},"f:apiVersion":{},"f:blockOwnerDeletion":{},"f:controller":{},"f:kind":{},"f:name":{},"f:uid":{}}}}}}]},i={volumes:[{name:"tekton-internal-workspace",emptyDir:{}},{name:"tekton-internal-home",emptyDir:{}},{name:"tekton-internal-downward",downwardAPI:{items:[{path:"ready",fieldRef:{apiVersion:"v1",fieldPath:"metadata.annotations['tekton.dev/ready']"}}],defaultMode:420}},{name:"tekton-creds-init-home-0",emptyDir:{medium:"Memory"}}],containers:[{name:"step-create-dir-workspace-l2jmh",image:"gcr.io/distroless/base@sha256:aa4fd987555ea10e1a4ec8765da8158b5ffdfef1e72da512c7ede509bc9966c4",command:["/tekton/tools/entrypoint"],args:["-wait_file","/tekton/downward/ready","-wait_file_content","-post_file","/tekton/tools/0","-termination_path","/tekton/termination","-step_metadata_dir","/tekton/steps/step-create-dir-workspace-l2jmh","-step_metadata_dir_link","/tekton/steps/0","-entrypoint","mkdir","--","-p","/workspace/output/workspace"],resources:{requests:{cpu:"0","ephemeral-storage":"0",memory:"0"}},volumeMounts:[{name:"tekton-internal-tools",mountPath:"/tekton/tools"},{name:"tekton-internal-downward",mountPath:"/tekton/downward"},{name:"tekton-creds-init-home-0",mountPath:"/tekton/creds"},{name:"tekton-internal-workspace",mountPath:"/workspace"},{name:"tekton-internal-home",mountPath:"/tekton/home"},{name:"tekton-internal-results",mountPath:"/tekton/results"},{name:"tekton-internal-steps",mountPath:"/tekton/steps"},{name:"default-token-ff64b",readOnly:!0,mountPath:"/var/run/secrets/kubernetes.io/serviceaccount"}],terminationMessagePath:"/tekton/termination",terminationMessagePolicy:"File",imagePullPolicy:"IfNotPresent"}],restartPolicy:"Never",terminationGracePeriodSeconds:30,dnsPolicy:"ClusterFirst",serviceAccountName:"default",serviceAccount:"default",nodeName:"tekton-dashboard-control-plane",securityContext:{},schedulerName:"default-scheduler",tolerations:[{key:"node.kubernetes.io/not-ready",operator:"Exists",effect:"NoExecute",tolerationSeconds:300},{key:"node.kubernetes.io/unreachable",operator:"Exists",effect:"NoExecute",tolerationSeconds:300}],priority:0,enableServiceLinks:!0,preemptionPolicy:"PreemptLowerPriority"},d={phase:"Succeeded",conditions:[{type:"Initialized",status:"True",lastProbeTime:null,lastTransitionTime:"2021-08-25T13:32:06Z",reason:"PodCompleted"},{type:"Ready",status:"False",lastProbeTime:null,lastTransitionTime:"2021-08-25T13:32:24Z",reason:"PodCompleted"},{type:"ContainersReady",status:"False",lastProbeTime:null,lastTransitionTime:"2021-08-25T13:32:24Z",reason:"PodCompleted"},{type:"PodScheduled",status:"True",lastProbeTime:null,lastTransitionTime:"2021-08-25T13:32:04Z"}],hostIP:"172.18.0.2",podIP:"10.244.0.18",podIPs:[{ip:"10.244.0.18"}],startTime:"2021-08-25T13:32:04Z",initContainerStatuses:[{name:"place-tools",state:{terminated:{exitCode:0,reason:"Completed",startedAt:"2021-08-25T13:32:05Z",finishedAt:"2021-08-25T13:32:05Z",containerID:"containerd://b1dba77f29809fa2dd4c5e5cb4483acdb8b80b7e30d269160c858c4e15454115"}},lastState:{},ready:!0,restartCount:0,image:"sha256:cdeb5f847b9b9ed4107f12b1d05e99060ea2e1b56298399d688efdf7ca93f990",imageID:"gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/entrypoint@sha256:c0ba474a711b98973bd909831f04531d273080177647fab7b30613f6591f1e4f",containerID:"containerd://b1dba77f29809fa2dd4c5e5cb4483acdb8b80b7e30d269160c858c4e15454115"}],containerStatuses:[{name:"step-create-dir-workspace-l2jmh",state:{terminated:{exitCode:0,reason:"Completed",message:'[{"key":"StartedAt","value":"2021-08-25T13:32:22.875Z","type":"InternalTektonResult"}]',startedAt:"2021-08-25T13:32:06Z",finishedAt:"2021-08-25T13:32:22Z",containerID:"containerd://6d68241511fec832a9e622d6dd4314f67df7a10cd3b7c869d128eede808f76cf"}},lastState:{},ready:!1,restartCount:0,image:"sha256:ac2afeee8f96767b2362a686e98503c9e1d1d24375be9896a0109b80e9cab631",imageID:"gcr.io/distroless/base@sha256:aa4fd987555ea10e1a4ec8765da8158b5ffdfef1e72da512c7ede509bc9966c4",containerID:"containerd://6d68241511fec832a9e622d6dd4314f67df7a10cd3b7c869d128eede808f76cf",started:!1}],qosClass:"BestEffort"},c={kind:o,apiVersion:r,metadata:s,spec:i,status:d},b={args:{dark:!0,enableSyntaxHighlighting:!1,resource:{apiVersion:"tekton.dev/v1alpha1",kind:"Resource",metadata:{creationTimestamp:"1995-11-08T00:00:00Z",generation:1,labels:{foo:"bar"},name:"resource-example",namespace:"tekton-pipelines",resourceVersion:"123456",uid:"1234567890987654321"},spec:{params:[{name:"parameter1",value:"valueParameter1"}]}}},component:n,parameters:{themes:{themeOverride:"dark"}},title:"ViewYAML"},e={},t={args:{enableSyntaxHighlighting:!0,resource:c}},a={args:{enableSyntaxHighlighting:!0,resource:[{metadata:{name:"event-one",namespace:"tekton-pipelines"}},{metadata:{name:"event-two",namespace:"tekton-pipelines"}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    enableSyntaxHighlighting: true,
    resource: pod
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    enableSyntaxHighlighting: true,
    resource: [{
      metadata: {
        name: 'event-one',
        namespace: 'tekton-pipelines'
      }
    }, {
      metadata: {
        name: 'event-two',
        namespace: 'tekton-pipelines'
      }
    }]
  }
}`,...a.parameters?.docs?.source}}};const h=["Default","SyntaxHighlighter","SyntaxHighlighterRootArray"];export{e as Default,t as SyntaxHighlighter,a as SyntaxHighlighterRootArray,h as __namedExportsOrder,b as default};
