(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),l=a(8),o=a(9),c=(a(28),a(2)),p=a(3),u=a(5),m=a(4),h=a(6),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input"},r.a.createElement("label",null,this.props.label),r.a.createElement("select",{name:this.props.name,value:this.props.selected,onChange:this.props.onChange},this.props.values.map(function(e){return r.a.createElement("option",{key:e.text,value:e.val},e.text)})))}}]),t}(r.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input"},r.a.createElement("label",null,this.props.label),r.a.createElement("input",{type:"text",name:this.props.name,value:this.props.value,onChange:this.props.onChange}))}}]),t}(r.a.Component),b="class",d="dungeon",f="wepAtk",E="bAtk",k="pbAtk",O="wepRarity",y="pierce",j="pmPierce",S="pmAtk",A="tDmg",C="bDmg",w="eDmg",D="mrDmg",x=[{val:"knight",text:"Knight"},{val:"wiz",text:"Wizard"},{val:"archer",text:"Archer"},{val:"thief",text:"Thief"},{val:"rune",text:"Runeblade"},{val:"zerk",text:"Berserker"},{val:"priest",text:"Priest"},{val:"hg",text:"Heavy Gunner"},{text:"Assassin",val:"sin"},{val:"sb",text:"Soul Binder"},{val:"striker",text:"Striker"}],R=[{val:"cdev",text:"Shadow Altar"},{val:"cmoc",text:"Moonlight Fortress"},{val:"cpap",text:"Ludibrium Clock Tower"},{val:"fd",text:"The Fire Dragon"},{val:"tdummy",text:"Training Dummy"}],T=[{val:"epic",text:"Epic"},{val:"legendary",text:"Legendary"}],P=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement(v,{label:"Class",name:b,selected:this.props.values[b],values:x,onChange:this.props.setStats}),r.a.createElement(v,{label:"Dungeon",name:d,selected:this.props.values[d],values:R,onChange:this.props.setStats})),r.a.createElement("fieldset",null,r.a.createElement(g,{label:"Weapon Attack",name:f,value:this.props.values[f],onChange:this.props.setStats}),r.a.createElement(g,{label:"Bonus Attack",name:E,value:this.props.values[E],onChange:this.props.setStats}),r.a.createElement(g,{label:"Pet Bonus Attack",name:k,value:this.props.values[k],onChange:this.props.setStats}),r.a.createElement(v,{label:"Weapon Rarity",name:O,selected:this.props.values[O],values:T,onChange:this.props.setStats})),r.a.createElement("fieldset",null,r.a.createElement(g,{label:"Pierce %",name:y,value:this.props.values[y],onChange:this.props.setStats}),r.a.createElement(g,{label:"Phys/Mag Pierce %",name:j,value:this.props.values[j],onChange:this.props.setStats}),r.a.createElement(g,{label:"Phys/Mag Attack",name:S,value:this.props.values[S],onChange:this.props.setStats}),r.a.createElement(g,{label:"Total Damage %",name:A,value:this.props.values[A],onChange:this.props.setStats}),r.a.createElement(g,{label:"Boss Damage %",name:C,value:this.props.values[C],onChange:this.props.setStats}),r.a.createElement(g,{label:"Elemental Damage %",name:w,value:this.props.values[w],onChange:this.props.setStats}),r.a.createElement(g,{label:"Melee/Ranged Damage %",name:D,value:this.props.values[D],onChange:this.props.setStats})))}}]),t}(r.a.Component),M=a(7),B="SET_PLAYER_STATS",z="SET_COMPARISON_PLAYER_STATS",_="SET_COMPARISON_ITEM_STATS",N=function(e){return e.playerStats},F=Object(o.b)(function(e){return{values:N(e)}},function(e){return{setStats:function(t){return e({type:B,changeEvent:t})}}})(P),L={boss:{fd:{name:"Pyrros Fard",def:681,pmResis:120,critEvasion:50,evasion:97,luck:0},cdev:{name:"Devorak",def:681,pmResis:249,critEvasion:50,evasion:98,luck:0},cmoc:{name:"Captain Moc",def:681,pmResis:249,critEvasion:50,evasion:98,luck:0},cpap:{name:"Papulatus",def:936,pmResis:249,critEvasion:50,evasion:101,luck:0},tdummy:{name:"Training Dummy",def:567,pmResis:90,critEvasion:50,evasion:87,luck:0}},petBonusAtkMultiplier:.4,bonusAtkCoefficient:{epic:{knight:2,wiz:2.75,archer:2.75,thief:2.25,rune:2.75,zerk:2.75,priest:2,hg:2.75,sin:2.25,sb:2.75,striker:2.75},legendary:{knight:4,wiz:5.5,archer:5.5,thief:4.5,rune:5.5,zerk:5.5,priest:4,hg:5.5,sin:4.5,sb:5.5,striker:5.5}},mainStatToPMAtk:{knight:.62,wiz:.56,archer:.62,thief:.62,rune:.62,zerk:.62,priest:.48,hg:.62,sin:.62},buffs:{sinCritBuffUptime:17/60}},W=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"results"},"Results:",r.a.createElement("div",null,"Your Damage: ",function(e){try{var t=L.bonusAtkCoefficient[e.wepRarity][e.class],a=e.tDmg+e.bDmg+e.eDmg+e.mrDmg,n=e.wepAtk+(e.bAtk+e.pbAtk*L.petBonusAtkMultiplier)*t,r=L.boss[e.dungeon].def,s=n*e.pmAtk*(1+a/100)/r*(1/Math.max(1-e.pierce/100,.7))*Math.min(1,(1500*(1+e.pmPierce/100)-L.boss[e.dungeon].pmResis)/1500);return Math.floor(s).toLocaleString("en")}catch(i){return console.error("getDamageDealt failed with error:",i),"ERROR"}}(this.props.playerStats)))}}]),t}(r.a.Component),I=Object(o.b)(function(e){return{playerStats:N(e)}})(W),Y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(I,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(10),G=function(e){return isNaN(e)?e:parseFloat(e)},H=Object(l.b)({comparisonStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object.assign({},{comparison:Object(M.a)({},e.comparison,{item:Object(M.a)({},e.comparison.item,Object(J.a)({},t.changeEvent.target.name,G(t.changeEvent.target.value)))})});case z:return Object.assign({},e,{comparison:Object(M.a)({},e.comparison,{player:Object(M.a)({},e.comparison.player,Object(J.a)({},t.changeEvent.target.name,G(t.changeEvent.target.value)))})});default:return e}},playerStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return console.log("updating state"),Object.assign({},e,Object(M.a)({},e.playerStats,Object(J.a)({},t.changeEvent.target.name,G(t.changeEvent.target.value))));default:return e}}}),K={playerStats:{class:"knight",dungeon:"cdev",wepAtk:2e3,bAtk:0,pbAtk:0,wepRarity:"epic",pierce:5,pmPierce:5,pmAtk:300,tDmg:0,bDmg:0,eDmg:0,mrDmg:0}},U=Object(l.c)(H,K);i.a.render(r.a.createElement(o.a,{store:U},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.20d8913b.chunk.js.map