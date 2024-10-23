import{j as R}from"./jsx-runtime-QvtbNqby.js";import{r as _}from"./index-BjzEU6Zr.js";import{m as N,s as S,c as L,d as u,M as ne,e as I,I as se,f as p,g as T,h as F,j as k,E as P,k as ie,D as le,l as de,n as G,_ as ue,b as y,o as q,p as ce,q as me,r as pe,t as he,v as be,w as fe,P as ge,x as Te}from"./index-yfVukVkJ.js";function Re(e,t,a){if(a===void 0&&(a=Error),!e)throw new a(t)}N(function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.NumberFormat).bind.apply(e,L([void 0],t,!1)))},{strategy:S.variadic});N(function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.DateTimeFormat).bind.apply(e,L([void 0],t,!1)))},{strategy:S.variadic});N(function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.PluralRules).bind.apply(e,L([void 0],t,!1)))},{strategy:S.variadic});N(function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.Locale).bind.apply(e,L([void 0],t,!1)))},{strategy:S.variadic});N(function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.ListFormat).bind.apply(e,L([void 0],t,!1)))},{strategy:S.variadic});var j;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(j||(j={}));var M;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(M||(M={}));var V;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(V||(V={}));var w,B=!0;try{var Ee=ve("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");B=((w=Ee.exec("a"))===null||w===void 0?void 0:w[0])==="a"}catch{B=!1}function ve(e,t){return new RegExp(e,t)}function A(e,t){return Object.keys(e).reduce(function(a,r){return a[r]=u({timeZone:t},e[r]),a},{})}function X(e,t){var a=Object.keys(u(u({},e),t));return a.reduce(function(r,n){return r[n]=u(u({},e[n]||{}),t[n]||{}),r},{})}function H(e,t){if(!t)return e;var a=se.formats;return u(u(u({},a),e),{date:X(A(a.date,t),A(e.date||{},t)),time:X(A(a.time,t),A(e.time||{},t))})}var O=function(e,t,a,r,n){var o=e.locale,s=e.formats,i=e.messages,l=e.defaultLocale,c=e.defaultFormats,d=e.fallbackOnEmptyString,h=e.onError,b=e.timeZone,x=e.defaultRichTextElements;a===void 0&&(a={id:""});var U=a.id,f=a.defaultMessage;Re(!!U,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var g=String(U),m=i&&Object.prototype.hasOwnProperty.call(i,g)&&i[g];if(Array.isArray(m)&&m.length===1&&m[0].type===M.literal)return m[0].value;if(!r&&m&&typeof m=="string"&&!x)return m.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=u(u({},x),r||{}),s=H(s,b),c=H(c,b),!m){if(d===!1&&m==="")return m;if((!f||o&&o.toLowerCase()!==l.toLowerCase())&&h(new ne(a,o)),f)try{var E=t.getMessageFormat(f,l,c,n);return E.format(r)}catch(v){return h(new I('Error formatting default message for: "'.concat(g,'", rendering default message verbatim'),o,a,v)),typeof f=="string"?f:g}return g}try{var E=t.getMessageFormat(m,o,s,u({formatters:t},n||{}));return E.format(r)}catch(v){h(new I('Error formatting message: "'.concat(g,'", using ').concat(f?"default message":"id"," as fallback."),o,a,v))}if(f)try{var E=t.getMessageFormat(f,l,c,n);return E.format(r)}catch(v){h(new I('Error formatting the default message for: "'.concat(g,'", rendering message verbatim'),o,a,v))}return typeof m=="string"?m:typeof f=="string"?f:g},Q=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function C(e,t,a,r){var n=e.locale,o=e.formats,s=e.onError,i=e.timeZone;r===void 0&&(r={});var l=r.format,c=u(u({},i&&{timeZone:i}),l&&F(o,t,l,s)),d=T(r,Q,c);return t==="time"&&!d.hour&&!d.minute&&!d.second&&!d.timeStyle&&!d.dateStyle&&(d=u(u({},d),{hour:"numeric",minute:"numeric"})),a(n,d)}function ye(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],s=o===void 0?{}:o,i=typeof n=="string"?new Date(n||0):n;try{return C(e,"date",t,s).format(i)}catch(l){e.onError(new p("Error formatting date.",e.locale,l))}return String(i)}function Ne(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],s=o===void 0?{}:o,i=typeof n=="string"?new Date(n||0):n;try{return C(e,"time",t,s).format(i)}catch(l){e.onError(new p("Error formatting time.",e.locale,l))}return String(i)}function Se(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],s=a[2],i=s===void 0?{}:s,l=e.timeZone,c=e.locale,d=e.onError,h=T(i,Q,l?{timeZone:l}:{});try{return t(c,h).formatRange(n,o)}catch(b){d(new p("Error formatting date time range.",e.locale,b))}return String(n)}function Le(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],s=o===void 0?{}:o,i=typeof n=="string"?new Date(n||0):n;try{return C(e,"date",t,s).formatToParts(i)}catch(l){e.onError(new p("Error formatting date.",e.locale,l))}return[]}function Ae(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],s=o===void 0?{}:o,i=typeof n=="string"?new Date(n||0):n;try{return C(e,"time",t,s).formatToParts(i)}catch(l){e.onError(new p("Error formatting time.",e.locale,l))}return[]}var _e=["style","type","fallback","languageDisplay"];function ke(e,t,a,r){var n=e.locale,o=e.onError,s=Intl.DisplayNames;s||o(new k(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,P.MISSING_INTL_API));var i=T(r,_e);try{return t(n,i).of(a)}catch(l){o(new p("Error formatting display name.",n,l))}}var Pe=["type","style"],Z=Date.now();function Ce(e){return"".concat(Z,"_").concat(e,"_").concat(Z)}function Ie(e,t,a,r){r===void 0&&(r={});var n=Y(e,t,a,r).reduce(function(o,s){var i=s.value;return typeof i!="string"?o.push(i):typeof o[o.length-1]=="string"?o[o.length-1]+=i:o.push(i),o},[]);return n.length===1?n[0]:n.length===0?"":n}function Y(e,t,a,r){var n=e.locale,o=e.onError;r===void 0&&(r={});var s=Intl.ListFormat;s||o(new k(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,P.MISSING_INTL_API));var i=T(r,Pe);try{var l={},c=a.map(function(d,h){if(typeof d=="object"){var b=Ce(h);return l[b]=d,b}return String(d)});return t(n,i).formatToParts(c).map(function(d){return d.type==="literal"?d:u(u({},d),{value:l[d.value]||d.value})})}catch(d){o(new p("Error formatting list.",n,d))}return a}var we=["type"];function De(e,t,a,r){var n=e.locale,o=e.onError;r===void 0&&(r={}),Intl.PluralRules||o(new k(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,P.MISSING_INTL_API));var s=T(r,we);try{return t(n,s).select(a)}catch(i){o(new p("Error formatting plural.",n,i))}return"other"}var Me=["numeric","style"];function Oe(e,t,a){var r=e.locale,n=e.formats,o=e.onError;a===void 0&&(a={});var s=a.format,i=!!s&&F(n,"relative",s,o)||{},l=T(a,Me,i);return t(r,l)}function Fe(e,t,a,r,n){n===void 0&&(n={}),r||(r="second");var o=Intl.RelativeTimeFormat;o||e.onError(new k(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,P.MISSING_INTL_API));try{return Oe(e,t,n).format(a,r)}catch(s){e.onError(new p("Error formatting relative time.",e.locale,s))}return String(a)}var xe=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function J(e,t,a){var r=e.locale,n=e.formats,o=e.onError;a===void 0&&(a={});var s=a.format,i=s&&F(n,"number",s,o)||{},l=T(a,xe,i);return t(r,l)}function Ue(e,t,a,r){r===void 0&&(r={});try{return J(e,t,r).format(a)}catch(n){e.onError(new p("Error formatting number.",e.locale,n))}return String(a)}function Ge(e,t,a,r){r===void 0&&(r={});try{return J(e,t,r).formatToParts(a)}catch(n){e.onError(new p("Error formatting number.",e.locale,n))}return[]}function je(e){var t=e?e[Object.keys(e)[0]]:void 0;return typeof t=="string"}function Ve(e){e.onWarn&&e.defaultRichTextElements&&je(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Be(e,t){var a=ie(t),r=u(u({},le),e),n=r.locale,o=r.defaultLocale,s=r.onError;return n?!Intl.NumberFormat.supportedLocalesOf(n).length&&s?s(new G('Missing locale data for locale: "'.concat(n,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(n).length&&s&&s(new G('Missing locale data for locale: "'.concat(n,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(s&&s(new de('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),Ve(r),u(u({},r),{formatters:a,formatNumber:Ue.bind(null,r,a.getNumberFormat),formatNumberToParts:Ge.bind(null,r,a.getNumberFormat),formatRelativeTime:Fe.bind(null,r,a.getRelativeTimeFormat),formatDate:ye.bind(null,r,a.getDateTimeFormat),formatDateToParts:Le.bind(null,r,a.getDateTimeFormat),formatTime:Ne.bind(null,r,a.getDateTimeFormat),formatDateTimeRange:Se.bind(null,r,a.getDateTimeFormat),formatTimeToParts:Ae.bind(null,r,a.getDateTimeFormat),formatPlural:De.bind(null,r,a.getPluralRules),formatMessage:O.bind(null,r,a),$t:O.bind(null,r,a),formatList:Ie.bind(null,r,a.getListFormat),formatListToParts:Y.bind(null,r,a.getListFormat),formatDisplayName:ke.bind(null,r,a.getDisplayNames)})}function K(e){return e&&Object.keys(e).reduce(function(t,a){var r=e[a];return t[a]=ce(r)?me(r):r,t},{})}var $=function(e,t,a,r){for(var n=[],o=4;o<arguments.length;o++)n[o-4]=arguments[o];var s=K(r),i=O.apply(void 0,pe([e,t,a,s],n,!1));return Array.isArray(i)?_.Children.toArray(i):i},W=function(e,t){var a=e.defaultRichTextElements,r=ue(e,["defaultRichTextElements"]),n=K(a),o=Be(y(y(y({},q),r),{defaultRichTextElements:n}),t),s={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:n};return y(y({},o),{formatMessage:$.bind(null,s,o.formatters),$t:$.bind(null,s,o.formatters)})};function D(e){return{locale:e.locale,timeZone:e.timeZone,fallbackOnEmptyString:e.fallbackOnEmptyString,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,onWarn:e.onWarn,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}var Xe=function(e){he(t,e);function t(){var a=e!==null&&e.apply(this,arguments)||this;return a.cache=Te(),a.state={cache:a.cache,intl:W(D(a.props),a.cache),prevConfig:D(a.props)},a}return t.getDerivedStateFromProps=function(a,r){var n=r.prevConfig,o=r.cache,s=D(a);return be(n,s)?null:{intl:W(s,o),prevConfig:s}},t.prototype.render=function(){return fe(this.state.intl),_.createElement(ge,{value:this.state.intl},this.props.children)},t.displayName="IntlProvider",t.defaultProps=q,t}(_.PureComponent);const{useParameter:He,addons:Ze,useEffect:$e,useMemo:la}=__STORYBOOK_MODULE_PREVIEW_API__;var We=Object.defineProperty,ze=(e,t)=>{for(var a in t)We(e,a,{get:t[a],enumerable:!0})},qe={};ze(qe,{initializeThemeState:()=>te,pluckThemeFromContext:()=>ae,useThemeParameters:()=>re});var ee="themes",Qe=`storybook/${ee}`,Ye="theme",Je={},Ke={REGISTER_THEMES:`${Qe}/REGISTER_THEMES`};function ae({globals:e}){return e[Ye]||""}function re(){return He(ee,Je)}function te(e,t){Ze.getChannel().emit(Ke.REGISTER_THEMES,{defaultTheme:t,themes:e})}var ea="html",z=e=>e.split(" ").filter(Boolean),aa=({themes:e,defaultTheme:t,parentSelector:a=ea})=>(te(Object.keys(e),t),(r,n)=>{let{themeOverride:o}=re(),s=ae(n);return $e(()=>{let i=o||s||t,l=document.querySelector(a);if(!l)return;Object.entries(e).filter(([d])=>d!==i).forEach(([d,h])=>{let b=z(h);b.length>0&&l.classList.remove(...b)});let c=z(e[i]);c.length>0&&l.classList.add(...c)},[o,s]),r()});const ra={"carbon.listBoxMenuIcon.close.menu":"Close menu","carbon.listBoxMenuIcon.open.menu":"Open menu","carbon.listBoxSelection.clear.all":"Clear all selected items","carbon.listBoxSelection.clear.selection":"Clear selected item","carbon.table.all.collapse":"Collapse all rows","carbon.table.all.expand":"Expand all rows","carbon.table.all.select":"Select all rows","carbon.table.all.unselect":"Unselect all rows","carbon.table.batch.cancel":"Cancel","carbon.table.batch.item.selected":"1 item selected","carbon.table.batch.items.selected":"{totalSelected, plural, other {# items}} selected","carbon.table.batch.selectAll":"Select all ({totalCount})","carbon.table.row.collapse":"Collapse current row","carbon.table.row.expand":"Expand current row","carbon.table.row.select":"Select row","carbon.table.row.unselect":"Unselect row","dashboard.about.description":"Tekton is a powerful and flexible open-source framework for creating CI/CD systems, allowing developers to build, test, and deploy across cloud providers and on-premises systems.","dashboard.about.documentation":"Documentation and resources","dashboard.about.environmentDetails":"Environment details","dashboard.about.error":"Error getting data","dashboard.about.isReadOnly":"ReadOnly","dashboard.about.logoutURL":"LogoutURL","dashboard.about.missingProperties":"Could not find: {errorsFound}","dashboard.about.title":"About Tekton","dashboard.about.true":"True","dashboard.about.version":"Version","dashboard.actions.createButton":"Create","dashboard.actions.createRunButton":"Create {kind}","dashboard.actions.deleteButton":"Delete","dashboard.app.loadingConfigError":"Error loading configuration","dashboard.cancelCustomRun.body":"Are you sure you would like to stop CustomRun {name}?","dashboard.cancelCustomRun.heading":"Stop CustomRun","dashboard.cancelCustomRun.primaryText":"Stop CustomRun","dashboard.cancelPipelineRun.actionText":"Stop","dashboard.cancelPipelineRun.body":"Are you sure you would like to stop PipelineRun {name}?","dashboard.cancelPipelineRun.cancelled.description":"Interrupt any currently executing tasks and skip finally tasks","dashboard.cancelPipelineRun.cancelledRunFinally.description":"Interrupt any currently executing non-finally tasks, then execute finally tasks","dashboard.cancelPipelineRun.heading":"Stop PipelineRun","dashboard.cancelPipelineRun.primaryText":"Stop PipelineRun","dashboard.cancelPipelineRun.stoppedRunFinally.description":"Allow any currently executing tasks to complete but do not schedule any new non-finally tasks, then execute finally tasks","dashboard.cancelTaskRun.actionText":"Stop","dashboard.cancelTaskRun.body":"Are you sure you would like to stop TaskRun {name}?","dashboard.cancelTaskRun.heading":"Stop TaskRun","dashboard.cancelTaskRun.primaryText":"Stop TaskRun","dashboard.clipboard.copied":"Copied!","dashboard.clipboard.copyStatusMessage":"Copy status message to clipboard","dashboard.clusterTasks.errorLoading":"Error loading ClusterTasks","dashboard.clusterTasksDropdown.empty":"No ClusterTasks found","dashboard.clusterTasksDropdown.label":"Select ClusterTask","dashboard.clusterTriggerBinding.noParams":"No parameters found for this ClusterTriggerBinding.","dashboard.create.yamlModeButton":"YAML Mode","dashboard.createCustomRun.title":"Create CustomRun","dashboard.createPipelineRun.createError":"Error creating PipelineRun","dashboard.createPipelineRun.disabled":"Disabled","dashboard.createPipelineRun.enabled":"Enabled","dashboard.createPipelineRun.errorLoading":"Error retrieving Pipeline information","dashboard.createPipelineRun.invalidPipeline":"Pipeline cannot be empty","dashboard.createPipelineRun.serviceAccountHelperText":"Ensure the selected ServiceAccount (or the default if none selected) has permissions for creating PipelineRuns and for anything else your PipelineRun interacts with.","dashboard.createPipelineRun.status.pending":"Create PipelineRun in pending state","dashboard.createPipelineRun.title":"Create PipelineRun","dashboard.createResource.nameError":"Must consist of lower case alphanumeric characters, '-' or '.', start and end with an alphanumeric character, and be at most 63 characters","dashboard.createRun.invalidNamespace":"Namespace cannot be empty","dashboard.createRun.invalidParams":"Params cannot be empty","dashboard.createRun.label.invalidText":"Labels must follow the {0}kubernetes labels syntax{1}.","dashboard.createRun.labels.legendText":"Labels","dashboard.createRun.nodeSelector.legendText":"Node selector","dashboard.createRun.optional.legendText":"Optional values","dashboard.createRun.optional.timeouts":"Timeouts","dashboard.createRun.pipelineRunNameLabel":"PipelineRun name","dashboard.createRun.taskRunNameLabel":"TaskRun name","dashboard.createRun.timeoutLabel":"Timeout","dashboard.createRun.validationError":"Please fix the fields with errors, then resubmit","dashboard.createTaskRun.createError":"Error creating TaskRun","dashboard.createTaskRun.errorLoading":"Error retrieving Task information","dashboard.createTaskRun.invalidTask":"Task cannot be empty","dashboard.createTaskRun.serviceAccountHelperText":"Ensure the selected ServiceAccount (or the default if none selected) has permissions for creating TaskRuns and for anything else your TaskRun interacts with.","dashboard.createTaskRun.title":"Create TaskRun","dashboard.customRuns.error":"Error loading CustomRuns","dashboard.customTask.heading":"Custom Task","dashboard.deleteCustomRun.body":"Are you sure you would like to delete CustomRun {name}?","dashboard.deletePipelineRun.body":"Are you sure you would like to delete PipelineRun {name}?","dashboard.deleteResources.confirm":"Are you sure you want to delete these {kind}?","dashboard.deleteResources.heading":"Delete {kind}","dashboard.deleteTaskRun.body":"Are you sure you would like to delete TaskRun {name}?","dashboard.editAndRun.actionText":"Edit and run","dashboard.editor.create.title":"Create {kind}","dashboard.editor.createError":"Error creating {kind}","dashboard.editor.empty":"Editor cannot be empty","dashboard.editor.validationError":"Please fix errors, then resubmit","dashboard.emptyState.allNamespaces":"No matching {kind} found","dashboard.emptyState.clusterResource":"No matching {kind} found","dashboard.emptyState.selectedNamespace":"No matching {kind} found in namespace {selectedNamespace}","dashboard.error.title":"Error:","dashboard.errorBoundary.defaultError":"Something went wrong","dashboard.errorBoundary.pageError":"Error loading page","dashboard.errorPage.description":"An error occurred loading the page, please try again. If the error persists, contact an admin.","dashboard.errorPage.errorMessage":"Error message: {errorMessage}","dashboard.errorPage.title":"Oops… Something went wrong","dashboard.eventListener.namespaceSelector":"Namespace selector:","dashboard.eventListener.serviceAccount":"ServiceAccount:","dashboard.eventListener.serviceType":"Service type:","dashboard.extensions.title":"Extensions","dashboard.filter.all":"All","dashboard.filter.status.title":"Status:","dashboard.graph.pan":"Pan","dashboard.graph.select":"Select","dashboard.graph.zoomIn":"Zoom in","dashboard.graph.zoomOut":"Zoom out","dashboard.header.closeNavMenu":"Close menu","dashboard.header.logOut":"Log out","dashboard.header.openNavMenu":"Open menu","dashboard.home.title":"Home","dashboard.importResources.advanced.accordionText":"Advanced configuration for the Import PipelineRun","dashboard.importResources.heading":"Import resources from repository","dashboard.importResources.importApplyButton":"Import","dashboard.importResources.importerNamespace.helperText":"The namespace in which the PipelineRun fetching the repository and creating the resources will run","dashboard.importResources.method.helperText":"If any of the resources being imported use 'generateName' rather than 'name' in their metadata, select 'create' so they can be imported correctly.","dashboard.importResources.method.label":"Method","dashboard.importResources.path.helperText":"The path of the Tekton resources to import from the repository. Leave blank if the resources are at the top-level directory.","dashboard.importResources.path.labelText":"Repository path (optional)","dashboard.importResources.path.placeholder":"Enter repository path","dashboard.importResources.repo.helperText":"The location of the YAML definitions to be applied (Git URLs supported)","dashboard.importResources.repo.invalidText":"Please enter a valid Git URL","dashboard.importResources.repo.labelText":"Repository URL","dashboard.importResources.revision.helperText":"The git revision (branch, tag, commit SHA or ref) of the repository to clone. Leave blank to use the default branch.","dashboard.importResources.revision.labelText":"Revision (optional)","dashboard.importResources.revision.placeholder":"Enter revision","dashboard.importResources.serviceAccount.helperText":"The ServiceAccount that the PipelineRun applying resources will run under (from the namespace above). Ensure the selected ServiceAccount (or the default if none selected) has permissions for creating PipelineRuns and for anything else your PipelineRun interacts with, including any Tekton resources in the Git repository.","dashboard.importResources.targetNamespace.helperText":"The namespace in which the resources will be created","dashboard.importResources.targetNamespace.titleText":"Target namespace","dashboard.importResources.title":"Import resources","dashboard.importResources.triggeredNotification":"Triggered PipelineRun to import Tekton resources","dashboard.keyValueList.add":"Add","dashboard.keyValueList.remove":"Remove","dashboard.labelFilter.addFilterButton":"Add filter","dashboard.labelFilter.clearAll":"Clear all","dashboard.labelFilter.duplicate":"No duplicate filters allowed","dashboard.labelFilter.invalid":"Filters must be of the format labelKey:labelValue and contain accepted label characters","dashboard.labelFilter.invalidLength":"Filters must be of the format labelKey:labelValue and contain less than 64 characters","dashboard.labelFilter.searchPlaceholder":"Input a label filter of the format labelKey:labelValue","dashboard.labelFilter.syntaxMessage":"See the Kubernetes Label documentation for valid syntax","dashboard.lastUpdated":"Last updated {time}","dashboard.list.menu.tooltip":"Actions","dashboard.loading":"Loading…","dashboard.loading.config":"Loading configuration…","dashboard.loading.resource":"Loading {kind}…","dashboard.logo.alt":"Tekton logo","dashboard.logo.tooltip":"Meow","dashboard.logs.downloadButtonTooltip":"Download logs","dashboard.logs.launchButtonTooltip":"Open logs in a new window","dashboard.logs.maximize":"Maximize","dashboard.logs.pending":"Final logs pending","dashboard.logs.restore":"Return to default","dashboard.logs.scrollToBottom":"Scroll to end of logs","dashboard.logs.scrollToTop":"Scroll to start of logs","dashboard.logs.showTimestamps.label":"Show log timestamps","dashboard.metadata.dateCreated":"Date created:","dashboard.metadata.labels":"Labels:","dashboard.metadata.namespace":"Namespace:","dashboard.metadata.none":"None","dashboard.modal.cancelButton":"Cancel","dashboard.modal.close":"Close","dashboard.namespacesDropdown.allNamespaces":"All Namespaces","dashboard.namespacesDropdown.empty":"No Namespaces found","dashboard.namespacesDropdown.invalidText":"Please select a Namespace","dashboard.namespacesDropdown.label":"Select Namespace","dashboard.notFound.description":"We couldn’t find the page you were looking for, but here are some helpful links instead:","dashboard.notFound.title":"Oops… Page not found","dashboard.notification.clear":"Clear notification","dashboard.pagination.nextPage":"Next page","dashboard.pagination.pageSize":"Items per page:","dashboard.pagination.previousPage":"Previous page","dashboard.parameters.title":"Parameters","dashboard.pipelineRun.error":"Error loading PipelineRun","dashboard.pipelineRun.failed":"Cannot load PipelineRun","dashboard.pipelineRun.failedMessage":"Unable to load PipelineRun: {reason}","dashboard.pipelineRun.logEmpty":"No log available","dashboard.pipelineRun.logFailed":"Unable to fetch log","dashboard.pipelineRun.notFound":"PipelineRun not found","dashboard.pipelineRun.pipelineTaskName.firstAttempt":"{pipelineTaskName} (first attempt)","dashboard.pipelineRun.pipelineTaskName.retry":"{pipelineTaskName} (retry {retryNumber, number})","dashboard.pipelineRun.retries.view":"View retries","dashboard.pipelineRun.retries.viewFirstAttempt":"View first attempt","dashboard.pipelineRun.retries.viewLatestRetry":"View latest retry","dashboard.pipelineRun.retries.viewRetry":"View retry {retryNumber, number}","dashboard.pipelineRun.stepCompleted":"Step completed successfully","dashboard.pipelineRun.stepCompleted.exitCode":"Step completed with exit code {exitCode}","dashboard.pipelineRun.stepFailed":"Step failed","dashboard.pipelineRun.stepSkipped":"Step skipped","dashboard.pipelineRuns.error":"Error loading PipelineRuns","dashboard.pipelines.errorLoading":"Error loading Pipelines","dashboard.pipelines.v1Resources.label":"Use Tekton Pipelines API version v1","dashboard.pipelinesDropdown.empty.allNamespaces":"No Pipelines found","dashboard.pipelinesDropdown.empty.selectedNamespace":"No Pipelines found in the ''{namespace}'' namespace","dashboard.pipelinesDropdown.label":"Select Pipeline","dashboard.pod.events":"Events","dashboard.pod.resource":"Resource","dashboard.pod.resource.empty":"Waiting for Pod resource","dashboard.rerun.actionText":"Rerun","dashboard.rerun.error":"An error occurred when rerunning {runName}: check the dashboard logs for details. Status code: {statusCode}","dashboard.rerun.triggered":"Triggered rerun","dashboard.resource.apiVersion":"API version:","dashboard.resource.createdTime":"Created: {created}","dashboard.resource.detailsTab":"Details","dashboard.resource.kind":"Kind:","dashboard.resource.name":"Name:","dashboard.resource.overviewTab":"Overview","dashboard.resourceDetails.ariaLabel":"Resource details","dashboard.resourceDetails.description":"Description","dashboard.resourceDetails.errorloading":"Error loading resource","dashboard.resourceDetails.spec.description":"Description:","dashboard.resourceDetails.spec.displayName":"Display name:","dashboard.resourceList.errorLoading":"Error loading {type}","dashboard.resourceList.viewRuns":"View {kind} of {resource}","dashboard.run.duration":"Duration: {duration}","dashboard.run.duration.label":"Duration:","dashboard.run.rerunStatusMessage":"View status","dashboard.serviceAccountsDropdown.empty.allNamespaces":"No ServiceAccounts found","dashboard.serviceAccountsDropdown.empty.selectedNamespace":"No ServiceAccounts found in the ''{namespace}'' namespace","dashboard.serviceAccountsDropdown.label":"Select ServiceAccount","dashboard.settings.title":"Settings","dashboard.sideNav.kubernetesResources":"Kubernetes resources","dashboard.sideNav.tektonResources":"Tekton resources","dashboard.skipToContent":"Skip to main content","dashboard.startPipelineRun.actionText":"Start","dashboard.step.definitionNotAvailable":"Step definition not available","dashboard.tableHeader.createdTime":"Created","dashboard.tableHeader.default":"Default","dashboard.tableHeader.expression":"Expression","dashboard.tableHeader.key":"Key","dashboard.tableHeader.name":"Name","dashboard.tableHeader.pipeline":"Pipeline","dashboard.tableHeader.status":"Status","dashboard.tableHeader.task":"Task","dashboard.tableHeader.value":"Value","dashboard.taskRun.logs":"Logs","dashboard.taskRun.logs.skipped":"This step did not run as the task was skipped. See task status for more details.","dashboard.taskRun.params":"Parameters","dashboard.taskRun.results":"Results","dashboard.taskRun.status":"Status","dashboard.taskRun.status.cancelled":"Cancelled","dashboard.taskRun.status.failed":"Failed","dashboard.taskRun.status.notRun":"Not run","dashboard.taskRun.status.pending":"Pending","dashboard.taskRun.status.running":"Running","dashboard.taskRun.status.skipped":"Skipped","dashboard.taskRun.status.succeeded":"Completed","dashboard.taskRun.status.succeeded.warning":"Completed with exit code {exitCode}","dashboard.taskRun.status.waiting":"Waiting","dashboard.taskRunParams.name":"Name","dashboard.taskRunParams.value":"Value","dashboard.taskRuns.errorLoading":"Error loading TaskRuns","dashboard.tasks.errorLoading":"Error loading Tasks","dashboard.tasksDropdown.empty.allNamespaces":"No Tasks found","dashboard.tasksDropdown.empty.selectedNamespace":"No Tasks found in the ''{namespace}'' namespace","dashboard.tasksDropdown.label":"Select Task","dashboard.theme.dark":"Dark","dashboard.theme.label":"Theme","dashboard.theme.light":"Light","dashboard.theme.system":"System","dashboard.toggle.off":"Off","dashboard.toggle.on":"On","dashboard.tooltipDropdown.empty":"No items found","dashboard.trigger.noHeaders":"No headers found for this interceptor.","dashboard.trigger.noOverlays":"No overlays found for this interceptor.","dashboard.triggerBinding.noParams":"No parameters found for this TriggerBinding.","dashboard.triggerDetails.celInterceptorFilter":"Filter:","dashboard.triggerDetails.celInterceptorOverlays":"Overlays:","dashboard.triggerDetails.interceptorHeader":"Header:","dashboard.triggerDetails.interceptorName":"Name:","dashboard.triggerDetails.interceptorNamespace":"Namespace:","dashboard.triggerDetails.interceptorTitle":"{interceptorNumber}. ({interceptorType}) {interceptorName}","dashboard.triggerDetails.interceptors":"Interceptors:","dashboard.triggerDetails.triggerBindings":"TriggerBindings:","dashboard.triggerDetails.triggerTemplate":"TriggerTemplate:","dashboard.triggerDetails.webhookInterceptorSecret":"Secret:","dashboard.triggerDetails.webhookInterceptorSecretKey":"Key:","dashboard.triggerDetails.webhookInterceptorService":"Service:","dashboard.triggerTemplate.noParams":"No parameters found for this template.","dashboard.triggerTemplate.resourceTemplates":"Resource templates","react-intl-formatted-duration.daysUnit":"{value, plural, one {day} other {days}}","react-intl-formatted-duration.duration":"{value} {unit}","react-intl-formatted-duration.hoursUnit":"{value, plural, one {hour} other {hours}}","react-intl-formatted-duration.minutesUnit":"{value, plural, one {minute} other {minutes}}","react-intl-formatted-duration.secondsUnit":"{value, plural, one {second} other {seconds}}"};function oe({notes:e,story:t}){return R.jsxs(Xe,{locale:"en",defaultLocale:"en",messages:ra.en,children:[e&&R.jsx("p",{children:e}),R.jsx("div",{"data-floating-menu-container":!0,role:"main",children:R.jsx(_.StrictMode,{children:R.jsx(t,{})})})]})}oe.__docgenInfo={description:"",methods:[],displayName:"Container"};const ta={options:{storySort:{order:["Getting started","Components","Containers","*","Experimental"]}},backgrounds:{disable:!0,grid:{disable:!0,cellSize:16,opacity:.2,cellAmount:1,offsetX:0,offsetY:0}},controls:{hideNoControlsWarning:!0}},oa=[aa({themes:{light:"tkn--theme-light tkn--storybook-theme",dark:"tkn--theme-dark tkn--storybook-theme",system:"tkn--theme-system tkn--storybook-theme"},defaultTheme:"system"}),(e,t)=>R.jsx(oe,{notes:t.parameters.notes,path:t.args.path,route:t.args.route,story:e})],da={decorators:oa,parameters:ta};export{da as default};
