import{j as l}from"./jsx-runtime-QvtbNqby.js";import{L as u}from"./Log-CMTIu5Vq.js";import{L as f}from"./LogsToolbar-B8H1uOAH.js";import"./index-BjzEU6Zr.js";import"./usePrefix-CXWdRn9x.js";import"./Button-xjCpe_BM.js";import"./floating-ui.dom.mjs-PU7UL9dJ.js";import"./index-B22udTS1.js";import"./index-kGlasm3i.js";import"./index-Da0at1PC.js";import"./index-CjLpwf8N.js";import"./Tooltip-BJBVfZ_G.js";import"./events-OVwOsPzJ.js";import"./SkeletonText-pbC4hZL_.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./index-yfVukVkJ.js";import"./index-CfoIBI3E.js";import"./bucket-17-BNnKjYXl.js";import"./Icon-CpyVU44g.js";import"./bucket-5-BULz4hzg.js";import"./LogFormat-DErnYbCT.js";import"./DotSpinner-BSho4s4W.js";import"./bucket-10-CBZBeuBJ.js";import"./bucket-9-DvpuiSZR.js";const g=`
=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-git-source-skaffold-git-ml8j4 ===
{"level":"info","ts":1553865693.943092,"logger":"fallback-logger","caller":"git-init/main.go:100","msg":"Successfully cloned https://github.com/GoogleContainerTools/skaffold @ \\"master\\" in path \\"/workspace\\""}

=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-build-and-push ===
\x1B[36mINFO\x1B[0m[0000] Downloading base image golang:1.10.1-alpine3.7
2019/03/29 13:21:34 No matching credentials were found, falling back on anonymous
\x1B[36mINFO\x1B[0m[0001] Executing 0 build triggers
\x1B[36mINFO\x1B[0m[0001] Unpacking rootfs as cmd RUN go build -o /app . requires it.
\x1B[36mINFO\x1B[0m[0010] Taking snapshot of full filesystem...
\x1B[36mINFO\x1B[0m[0015] Using files from context: [/workspace/examples/microservices/leeroy-app/app.go]
\x1B[36mINFO\x1B[0m[0015] COPY app.go .
\x1B[36mINFO\x1B[0m[0015] Taking snapshot of files...
\x1B[36mINFO\x1B[0m[0015] RUN go build -o /app .
\x1B[36mINFO\x1B[0m[0015] cmd: /bin/sh
\x1B[36mINFO\x1B[0m[0015] args: [-c go build -o /app .]
\x1B[36mINFO\x1B[0m[0016] Taking snapshot of full filesystem...
\x1B[36mINFO\x1B[0m[0036] CMD ["./app"]
\x1B[36mINFO\x1B[0m[0036] COPY --from=builder /app .
\x1B[36mINFO\x1B[0m[0036] Taking snapshot of files...
error pushing image: failed to push to destination gcr.io/christiewilson-catfactory/leeroy-app:latest: Get https://gcr.io/v2/token?scope=repository%3Achristiewilson-catfactory%2Fleeroy-app%3Apush%2Cpull&scope=repository%3Alibrary%2Falpine%3Apull&service=gcr.io exit status 1

=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: nop ===
Build successful
\r\r
`,x=Array.from({length:6e4},(d,c)=>`Line ${c+1}
`).join(""),h=Array.from({length:700},(d,c)=>`Batch ${c+1}
${g}
`).join(""),W={component:u,decorators:[d=>l.jsx("div",{style:{width:"500px"},children:l.jsx(d,{})})],parameters:{themes:{themeOverride:"dark"}},title:"Log"},e={},o={args:{fetchLogs:()=>"partial logs",forcePolling:!0,stepStatus:{terminated:{reason:"Completed"}}}},s={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},t={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:1}}},name:"Completed: non-zero exit code"},r={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Error"}}}},a={args:{fetchLogs:()=>g,stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},n={args:{fetchLogs:()=>x,stepStatus:{terminated:{reason:"Completed",exitCode:0}}}},p={args:{fetchLogs:()=>h,stepStatus:{terminated:{reason:"Completed",exitCode:0}}},name:"performance test (<20,000 lines with ANSI)"},i={args:{fetchLogs:()=>"This step was skipped",stepStatus:{terminated:{reason:"Completed",exitCode:0},terminationReason:"Skipped"}}},m={args:{fetchLogs:()=>"A log message",stepStatus:{terminated:{reason:"Completed",exitCode:0}},toolbar:l.jsx(f,{name:"step_log_filename.txt",url:"/step/log/url"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'partial logs',
    forcePolling: true,
    stepStatus: {
      terminated: {
        reason: 'Completed'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 1
      }
    }
  },
  name: 'Completed: non-zero exit code'
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Error'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => ansiLog,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => long,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => performanceTest,
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    }
  },
  name: 'performance test (<20,000 lines with ANSI)'
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'This step was skipped',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      },
      terminationReason: 'Skipped'
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fetchLogs: () => 'A log message',
    stepStatus: {
      terminated: {
        reason: 'Completed',
        exitCode: 0
      }
    },
    toolbar: <LogsToolbar name="step_log_filename.txt" url="/step/log/url" />
  }
}`,...m.parameters?.docs?.source}}};const Y=["Loading","Pending","Completed","CompletedNonZero","Failed","ANSICodes","Windowed","Performance","Skipped","Toolbar"];export{a as ANSICodes,s as Completed,t as CompletedNonZero,r as Failed,e as Loading,o as Pending,p as Performance,i as Skipped,m as Toolbar,n as Windowed,Y as __namedExportsOrder,W as default};
