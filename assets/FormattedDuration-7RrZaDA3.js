import{j as D}from"./jsx-runtime-QvtbNqby.js";import{R as O,r as S}from"./index-BjzEU6Zr.js";import{i as U,I as C}from"./index-yfVukVkJ.js";function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e,n){if(e==null)return{};var t={},i=Object.keys(e),s,o;for(o=0;o<i.length;o++)s=i[o],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}function F(e,n){if(e==null)return{};var t=_(e,n),i,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)i=o[s],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function P(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var N=P(C);const A=/^0/;function T(e){let n=!0;return e.filter(t=>t.type==="literal"&&!t.value.trim()?n?!1:(n=!0,!0):(n=!1,!0))}function b(e,n=!1){const t=T(T(e).reverse()).reverse();if(n){const i=t.find(s=>s.type!=="literal");i.value=i.value.replace(A,"")}return t}function r(e,n=y){this.locales=e,this.unit="second",this.style=n.style||r.styles.LONG,this.isTimer=this.style===r.styles.TIMER,this.format=n.format||(this.isTimer?"{minutes}:{seconds}":"{seconds}"),this.formatUnits=n.formatUnits||y.formatUnits,this.formatDuration=n.formatDuration||y.formatDuration,this.shouldRound=n.round===!0}r.units={DAY:"day",HOUR:"hour",MINUTE:"minute",SECOND:"second"};r.styles={CUSTOM:"custom",TIMER:"timer",LONG:"long",SHORT:"short",NARROW:"narrow"};r.prototype.formatToParts=function(e){const n=new N(this.format,this.locales).formatToParts({second:{unit:r.units.SECOND},seconds:{unit:r.units.SECOND},minute:{unit:r.units.MINUTE},minutes:{unit:r.units.MINUTE},hour:{unit:r.units.HOUR},hours:{unit:r.units.HOUR},day:{unit:r.units.DAY},days:{unit:r.units.DAY}}),t=w(e,this.unit,n,this.shouldRound),i=n.reduce((s,o)=>s.concat(this._formatToken(o,t)),[]);return this._trimOutput(i,n)};r.prototype._formatToken=function(e,n){const{value:t}=e;if(t.unit){const i=n[t.unit];return i||this.isTimer?this._formatDurationToParts(t.unit,i):[]}else if(t)return[{type:"literal",value:t}];return[]};r.prototype._formatDurationToParts=function(e,n){return this.isTimer?[{type:e,value:this._formatValue(n)}]:x(this.style)?new Intl.NumberFormat(this.locales,{style:"unit",unit:e,unitDisplay:this.style}).formatToParts(n).map(t=>({type:t.type==="integer"?e:t.type,value:t.value})):this.formatDuration.split(j).map(t=>{if(t==="{value}")return{type:e,value:this._formatValue(n)};if(t==="{unit}"){const i=this.formatUnits[e]||"{value}";return{type:"unit",value:new N(i,this.locales).format({value:n})}}if(t)return{type:"literal",value:t}}).filter(Boolean)};r.prototype._formatValue=function(e){return this.isTimer?e.toString().padStart(2,"0"):e.toString()};r.prototype._trimOutput=function(e,n){const t=b(e,this.isTimer);if(!t.find(i=>i.type!=="literal")){const i=[r.units.SECOND,r.units.MINUTE,r.units.HOUR,r.units.DAY].find(s=>v(n,s));return this._formatDurationToParts(i,0)}return t};const y={formatDuration:"{value} {unit}",formatUnits:{[r.units.DAY]:"{value, plural, one {day} other {days}}",[r.units.HOUR]:"{value, plural, one {hour} other {hours}}",[r.units.MINUTE]:"{value, plural, one {minute} other {minutes}}",[r.units.SECOND]:"{value, plural, one {second} other {seconds}}"},style:r.styles.LONG},j=/(\{value\}|\{unit\})/,l={day:24*60*60,hour:60*60,minute:60,second:1};function v(e,n){return!!e.find(t=>t.value.unit===n)}function w(e,n,t,i){let s=e*l[n];if(i){const a=[r.units.SECOND,r.units.MINUTE,r.units.HOUR,r.units.DAY].find(d=>v(t,d)),f=s%l[a];2*f>=l[a]&&(s+=l[a]-f)}const o={};return[r.units.DAY,r.units.HOUR,r.units.MINUTE,r.units.SECOND].forEach(a=>{v(t,a)&&(o[a]=Math.floor(s/l[a]),s-=o[a]*l[a])}),o}function x(e){return[r.styles.LONG,r.styles.SHORT,r.styles.NARROW].includes(e)}var u=r,H="EXTENDED_FORMAT",E="TIMER_FORMAT";function Y(e){var n,t=e.intl,i=e.seconds,s=e.format,o=e.textComponent,a=e.unitDisplay,f=e.valueComponent,d=F(e,["intl","seconds","format","textComponent","unitDisplay","valueComponent"]),p=t.messages["react-intl-formatted-duration/custom-format/".concat(s||"")]||s;(!s||s===H)&&(p=t.messages["react-intl-formatted-duration.longFormatting"]||"{minutes} {seconds}"),s===E&&(p=t.messages["react-intl-formatted-duration.timerFormatting"]||"{minutes}:{seconds}");var h=a;h||(h=s===E?u.styles.TIMER:u.styles.CUSTOM);var R=new u(t.locale,{format:p,formatUnits:(n={},c(n,u.units.DAY,t.messages["react-intl-formatted-duration.daysUnit"]||"{value, plural, one {day} other {days}}"),c(n,u.units.HOUR,t.messages["react-intl-formatted-duration.hoursUnit"]||"{value, plural, one {hour} other {hours}}"),c(n,u.units.MINUTE,t.messages["react-intl-formatted-duration.minutesUnit"]||"{value, plural, one {minute} other {minutes}}"),c(n,u.units.SECOND,t.messages["react-intl-formatted-duration.secondsUnit"]||"{value, plural, one {second} other {seconds}}"),n),formatDuration:t.messages["react-intl-formatted-duration.duration"]||"{value} {unit}",round:!0,style:h}).formatToParts(i),M=o||t.textComponent,I=f||o||t.textComponent;return O.createElement(M,d,R.map(function(m){return m.type==="literal"||m.type==="unit"?m.value:O.createElement(I,{key:m.type},m.value)}))}var L=U(Y);class g extends S.Component{state={tooltip:""};componentDidMount(){const{intl:n}=this.props,t=n.formatMessage({id:"dashboard.run.duration",defaultMessage:"Duration: {duration}"},{duration:this.durationNode?.textContent});this.setState({tooltip:t})}componentDidUpdate(){const{intl:n}=this.props,t=this.durationNode.textContent,i=n.formatMessage({id:"dashboard.run.duration",defaultMessage:"Duration: {duration}"},{duration:t});this.state.tooltip!==i&&this.setState({tooltip:i})}render(){const{milliseconds:n}=this.props;return D.jsx("span",{ref:t=>{this.durationNode=t},title:this.state.tooltip,children:D.jsx(L,{format:"{days} {hours} {minutes} {seconds}",seconds:n/1e3,unitDisplay:"narrow"})})}}const k=U(g);g.__docgenInfo={description:"",methods:[],displayName:"FormattedDurationWrapper"};export{k as F};
