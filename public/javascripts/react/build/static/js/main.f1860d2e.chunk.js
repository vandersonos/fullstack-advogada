(this["webpackJsonpsite-taiane"]=this["webpackJsonpsite-taiane"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(9),r=t.n(o),i=(t(16),t(7)),c=(t(17),t(18),t(2)),s=t(3),m=t(5),d=t(4),u=t(6),p=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col s12 m12 l12 "},l.a.createElement("div",{id:this.props.id,className:"section scrollspy"},l.a.createElement("div",{className:"card-panel hoverable  lighten-5 z-depth-1 cartaoVisita"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 fotoCartao"},l.a.createElement("img",{src:"img/taiane_perfil.jpeg",alt:"",className:"circle responsive-img"})),l.a.createElement("div",{className:"col s12 m8 textoCartao"},l.a.createElement("span",{className:"nome"},"Taiane Martins Costa"),l.a.createElement("p",{className:"black-text intro-pessoal"},"Advogada Especialista em Direito Civil e Processo Civil, que atua na \xe1rea de Direito de Fam\xedlia. ",l.a.createElement("br",null),"Trabalha prestando suporte jur\xeddico e servi\xe7o de correspond\xeancia em Pelotas e regi\xe3o."))))))}}]),a}(l.a.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=[],a=!0,t=!1,n=void 0;try{for(var o,r=this.props.itens.entries()[Symbol.iterator]();!(a=(o=r.next()).done);a=!0){var c=o.value,s=Object(i.a)(c,2),m=s[0],d=s[1];e.push(l.a.createElement("li",{key:m,className:"collection-item"},d))}}catch(v){t=!0,n=v}finally{try{a||null==r.return||r.return()}finally{if(t)throw n}}var u=l.a.createElement("div",{className:"col s12 m7 l7 xl6 offset-xl1 "},l.a.createElement("h4",{className:"header"},this.props.titulo),l.a.createElement("ul",{className:"collection"},e)),p=l.a.createElement("div",{className:"col s12 m5 l5 xl4 card-image"},l.a.createElement("img",{src:this.props.img,alt:"",className:"responsive-img"}));return l.a.createElement("div",{className:"col s12 m12 l12 xl12 card-topico"},l.a.createElement("div",{id:this.props.id,className:"section scrollspy"},l.a.createElement("div",{className:"card hoverable grey lighten-5 z-depth-1"},"left"===this.props.alinhamento&&l.a.createElement("div",{className:"row card-topico-conteudo"},p,u),"left"!==this.props.alinhamento&&l.a.createElement("div",{className:"row card-topico-conteudo"},u,p),l.a.createElement("div",{className:"card-action"}))))}}]),a}(l.a.Component),h=t(10),E=t.n(h),f=t(1),g=t.n(f),N=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){E.a.AutoInit()}},{key:"escondeMenu",value:function(){return g()(".sidenav-overlay").trigger("click"),!1}},{key:"render",value:function(){var e=[],a=!0,t=!1,n=void 0;try{for(var o,r=this.props.artigos.entries()[Symbol.iterator]();!(a=(o=r.next()).done);a=!0){var c=o.value,s=Object(i.a)(c,2),m=s[0],d=s[1],u="#"+d.id;e.push(l.a.createElement("li",{key:m},l.a.createElement("a",{onClick:this.escondeMenu,href:u},d.titulo)))}}catch(p){t=!0,n=p}finally{try{a||null==r.return||r.return()}finally{if(t)throw n}}return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper container"},l.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{className:"left hide-on-med-and-down "},l.a.createElement("li",null,l.a.createElement("a",{onClick:this.escondeMenu,href:"#sobre"},"Sobre")),l.a.createElement("li",null,l.a.createElement("a",{onClick:this.escondeMenu,href:"#contato"},"Contato")),e))),l.a.createElement("ul",{className:"sidenav section table-of-contents",id:"mobile-demo"},e,l.a.createElement("li",null,l.a.createElement("a",{onClick:this.escondeMenu,href:"#sobre"},"Sobre")),l.a.createElement("li",null,l.a.createElement("a",{onClick:this.escondeMenu,href:"#contato"},"Contato"))))}}]),a}(l.a.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"enviarMensagemWhatsapp",value:function(e){this.validaForm();var a=encodeURIComponent("5553981119605"),t=encodeURIComponent(g()("#nome").val()),n=encodeURIComponent(g()("#telefone").val()),l="Nome: ".concat(t);l+=" Telefone: ".concat(n,", "),l+=encodeURIComponent(g()("#mensagem").val());var o="https://api.whatsapp.com/send?phone=".concat(a,"&text=").concat(l);window.open(o)}},{key:"enviarMensagemEmail",value:function(){window.open("https://www.messenger.com/t/taianemartinscosta")}},{key:"validaForm",value:function(){""===g()("#nome").val()&&alert("erro"),""===g()("#telefone").val()&&alert("erro"),""===g()("#mensagem").val()&&alert("erro")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{id:this.props.id,className:"section scrollspy"},l.a.createElement("div",{className:"card-panel grey lighten-5 z-depth-1"},l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s12 m6 form-contato"},l.a.createElement("div",{className:"col s12"},l.a.createElement("h5",{className:"valign-wrapper"},"Contato")),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("i",{className:"material-icons prefix"},"account_circle"),l.a.createElement("label",{htmlFor:"nome"},"Nome"),l.a.createElement("input",{id:"nome",type:"text",className:"validate"})),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("i",{className:"material-icons prefix"},"phone"),l.a.createElement("input",{id:"telefone",type:"tel",className:"validate"}),l.a.createElement("label",{htmlFor:"telefone"},"Telefone")),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("i",{className:"material-icons prefix"},"question_answer"),l.a.createElement("textarea",{id:"mensagem",className:"materialize-textarea"}),l.a.createElement("label",{htmlFor:"mensagem"},"Mensagem"))),l.a.createElement("div",{className:"form-contato-acoes col s12 m6"},l.a.createElement("div",{className:"col s12"},l.a.createElement("h6",{className:"valign-wrapper"},"Escolha abaixo a melhor forma de me contatar")),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("img",{src:"img/whatsapp.png",alt:"Icone do whatsapp"})),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(a){return e.enviarMensagemWhatsapp(a)}},"Enviar whatsapp",l.a.createElement("i",{className:"material-icons right hide-on-small-only"},"send"))))),l.a.createElement("div",{className:"col s12 form-title-pagina-facebook"},l.a.createElement("h6",{className:"valign-wrapper"},"Ou acesse minha p\xe1gina no facebook")),l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/taianemartinscosta/"},l.a.createElement("img",{src:"img/facebook.png",alt:"Icone do facebook"}))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/taianemartinscosta/"},l.a.createElement("button",{className:"btn waves-effect waves-light"},"Acessar p\xe1gina",l.a.createElement("i",{className:"material-icons right  hide-on-small-only"})))))))))))}}]),a}(l.a.Component);var w=function(){var e=[{titulo:"Div\xf3rcio",id:"divorcio",img:"img/divorcio.jpg",texto:"",itens:["Div\xf3rcio Judicial Litigioso","Div\xf3rcio Judicial Consensual","Dissoluc\u0327a\u0303o de Uni\xe3o Est\xe1vel","Anulac\u0327a\u0303o de Casamento"]},{id:"guarda",titulo:"Guarda",img:"img/guarda.jpg",texto:"",itens:["Guarda Provis\xf3ria","Regulamentac\u0327a\u0303o de Visitas","Busca e Apreensa\u0303o de crianc\u0327as e adolescentes","Alterac\u0327a\u0303o de Guarda"]},{id:"pensao",titulo:"Pens\xe3o Aliment\xedcia",img:"img/pensao-alimenticia.jpg",itens:["Proposic\u0327a\u0303o e/ou contestac\u0327a\u0303o","Investigac\u0327a\u0303o de paternidade","Negato\u0301ria de Paternidade","Execuc\u0327a\u0303o de Alimentos (pena de pris\xe3o/ penhora)"],texto:""},{id:"inventario",titulo:"Invent\xe1rio",img:"img/inventario.jpg",itens:["Abertura de testamento","Remoc\u0327a\u0303o de Inventariante","Habilitac\u0327a\u0303o de Herdeiros","Nulidade de Testamento"],texto:""}],a=[],t=!0,n=!1,o=void 0;try{for(var r,c=e.entries()[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var s=r.value,m=Object(i.a)(s,2),d=m[0],u=m[1];a.push(l.a.createElement(v,{key:d,id:u.id,alinhamento:"left",titulo:u.titulo,texto:u.texto,img:u.img,itens:u.itens}))}}catch(h){n=!0,o=h}finally{try{t||null==c.return||c.return()}finally{if(n)throw o}}return l.a.createElement("div",{className:"App "},l.a.createElement(N,{artigos:e}),l.a.createElement("div",{className:"container row"},l.a.createElement(p,{id:"sobre"}),a,l.a.createElement(b,{id:"contato"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.f1860d2e.chunk.js.map