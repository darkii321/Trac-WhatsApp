const _0x569c0d=_0x411d;(function(_0x2928b,_0xe2f34f){const _0x2bb86c=_0x411d,_0x13f070=_0x2928b();while(!![]){try{const _0x5e13d1=parseInt(_0x2bb86c(0x100))/0x1*(parseInt(_0x2bb86c(0xdc))/0x2)+parseInt(_0x2bb86c(0x107))/0x3*(parseInt(_0x2bb86c(0xc7))/0x4)+-parseInt(_0x2bb86c(0xd4))/0x5+parseInt(_0x2bb86c(0xeb))/0x6+-parseInt(_0x2bb86c(0x10d))/0x7*(parseInt(_0x2bb86c(0xe9))/0x8)+parseInt(_0x2bb86c(0x10b))/0x9*(parseInt(_0x2bb86c(0xdd))/0xa)+-parseInt(_0x2bb86c(0xe4))/0xb;if(_0x5e13d1===_0xe2f34f)break;else _0x13f070['push'](_0x13f070['shift']());}catch(_0x4bbb0a){_0x13f070['push'](_0x13f070['shift']());}}}(_0x264e,0xa5c55));const http=require('http'),url=require(_0x569c0d(0xcd)),fs=require('fs'),imageURL=_0x569c0d(0x105),request=require(_0x569c0d(0xf5)),qrcode=require(_0x569c0d(0xe5)),SESSION_FILE_PATH=_0x569c0d(0xe7),spam=!![],checkToken=!![],chatBot=!![],chatBotURL=_0x569c0d(0xfd);function _0x411d(_0x4bcd52,_0x2cea6e){const _0x264e00=_0x264e();return _0x411d=function(_0x411dba,_0x2fb151){_0x411dba=_0x411dba-0xc7;let _0x16ec3e=_0x264e00[_0x411dba];return _0x16ec3e;},_0x411d(_0x4bcd52,_0x2cea6e);}let sessionData,sessao,sessobj;const {Client,LocalAuth}=require(_0x569c0d(0xdf)),client=new Client({'authStrategy':new LocalAuth()}),QRCode=require(_0x569c0d(0x101));estado=0x0;let autorizadosArquivo=fs[_0x569c0d(0xd3)](_0x569c0d(0xd0)),autorizados=JSON[_0x569c0d(0xe1)](autorizadosArquivo),token=JSON[_0x569c0d(0xe1)](fs['readFileSync'](_0x569c0d(0xd8)));function redirectChatBot(_0x448fb4,_0x77efe1,_0x16f0eb){const _0x25beef=_0x569c0d;try{request(chatBotURL+_0x25beef(0xee)+_0x448fb4+_0x25beef(0xd6)+_0x77efe1+_0x25beef(0xf3)+_0x16f0eb,function(_0x397e29,_0x24debf,_0x49522e){const _0x19a0af=_0x25beef;!_0x397e29&&_0x24debf[_0x19a0af(0xc8)]==0xc8?console[_0x19a0af(0xec)](_0x19a0af(0x10c)):console[_0x19a0af(0xec)](_0x19a0af(0xd5));});}catch(_0x49d1ad){console[_0x25beef(0xec)](_0x25beef(0x109));}}function checaToken(_0x353e43){const _0x12c8ca=_0x569c0d;return token[_0x12c8ca(0xed)]==_0x353e43?(console['log'](_0x353e43),!![]):![];}function checaAutorizados(_0x5c8376){const _0x1bdc6d=_0x569c0d;spam==!![]&&autorizaNumero(_0x5c8376);for(x=0x0;x<autorizados[_0x1bdc6d(0xde)];x++){if(autorizados[x][_0x1bdc6d(0xef)]===_0x5c8376)return autorizados[x];}return autorizados[0x0];}function _0x264e(){const _0x4ae9c2=['qrcode-terminal','\x20Autorizado\x20com\x20sucesso!','./session.json','Pronto\x20para\x20o\x20envio\x20de\x20Mensagens','8448lFpLnU','Número\x20','4567224oGCdYy','log','token','?timestamp=','numero','push','query','authenticated','&mensagem=','from','request','getTime','writeHead','generate','ready','Caminho\x20inválido','connection','writeFileSync','http://localhost/','\x20-\x20Tentativa\x20de\x20envio\x20com\x20token\x20inválido\x20via\x20GET','Número\x20não\x20autorizado,\x20informe\x20ao\x20seu\x20cliente\x20para\x20enviar\x20uma\x20mensagem\x20para\x20autorizar.','13CUjdfY','qrcode','image/png','0000000000','./qrcode.png','./img.jpg','message','475455GhcOZr','API\x20WhatsApp\x20Running\x20port\x208080','ERRO\x20AO\x20CHAMAR\x20API\x20CHAtBOT','sendMessage','10378413SytRPb','Encaminhado\x20a\x20API\x20do\x20ChatBot','3906cEryzB','error','\x20-\x20Tentativa\x20de\x20envio\x20com\x20token\x20inválido\x20via\x20POST','000000000000000','stringify','mensagem','remoteAddress','Nada\x20a\x20fazer','initialize','12LByXpW','statusCode','POST','qrcode.png','createServer','toString','url','00000000000','method','./autorizados.json','Aguardando\x20leitura\x20do\x20QRCode','toFile','readFileSync','2855755ixngXx','ChatBot\x20não\x20recebeu\x20a\x20mensagem','&origem=','\x20-\x20','./token.json','body','end','application/json','185926rmXQxI','10WYcadc','length','whatsapp-web.js','./recebidas.json','parse','destino','write','19348329UrCXvc'];_0x264e=function(){return _0x4ae9c2;};return _0x264e();}function autorizaNumero(_0x296722){const _0x2f861c=_0x569c0d;autorizados[_0x2f861c(0xf0)]({'numero':_0x296722});let _0x1ac386=JSON[_0x2f861c(0x111)](autorizados);fs[_0x2f861c(0xfc)](_0x2f861c(0xd0),_0x1ac386);}function persisteRecebidas(){const _0x11b83c=_0x569c0d;let _0x1e5a8e=JSON[_0x11b83c(0x111)](mensagens);fs[_0x11b83c(0xfc)]('./recebidas.json',_0x1e5a8e);}function mostraRecebidas(){const _0x4b5b71=_0x569c0d;return fs[_0x4b5b71(0xd3)](_0x4b5b71(0xe0))[_0x4b5b71(0xcc)]();}mensagens=[{'timestamp':_0x569c0d(0x110),'origem':_0x569c0d(0x103),'mensagem':'-1'}],client['on']('qr',_0x2220c4=>{const _0x1eef76=_0x569c0d;estado=0x0,console['log'](_0x1eef76(0xd1),_0x2220c4),qrcode[_0x1eef76(0xf8)](_0x2220c4,{'small':!![]}),QRCode[_0x1eef76(0xd2)](_0x1eef76(0xca),_0x2220c4);}),client['on'](_0x569c0d(0xf9),()=>{const _0x3e6aa0=_0x569c0d;estado=0x1,console[_0x3e6aa0(0xec)](_0x3e6aa0(0xe8));}),client['on'](_0x569c0d(0x106),_0x353816=>{const _0x3b1cf9=_0x569c0d;console['log']('teste\x20reescrita',_0x353816[_0x3b1cf9(0xf4)],'\x20-\x20',_0x353816[_0x3b1cf9(0xd9)]);let _0x545ad2=new Date();mensagens[_0x3b1cf9(0xf0)]({'timestamp':_0x545ad2[_0x3b1cf9(0xf6)](),'origem':_0x353816[_0x3b1cf9(0xf4)],'mensagem':_0x353816['body']}),persisteRecebidas(),chatBot&&redirectChatBot(_0x545ad2['getTime'](),_0x353816[_0x3b1cf9(0xf4)],_0x353816[_0x3b1cf9(0xd9)]),checaAutorizados(_0x353816['from'])[_0x3b1cf9(0xef)]==_0x3b1cf9(0xce)&&(console[_0x3b1cf9(0xec)](_0x3b1cf9(0xea)+_0x353816[_0x3b1cf9(0xf4)]+_0x3b1cf9(0xe6)),autorizaNumero(_0x353816[_0x3b1cf9(0xf4)]));}),client[_0x569c0d(0x115)](),client['on'](_0x569c0d(0xf2),_0x23666f=>{const _0x207a72=_0x569c0d;sessionData=_0x23666f,fs['writeFile'](SESSION_FILE_PATH,JSON[_0x207a72(0x111)](_0x23666f),function(_0x1ef6cf){const _0x25986c=_0x207a72;_0x1ef6cf&&console[_0x25986c(0x10e)](_0x1ef6cf);});});const server=http[_0x569c0d(0xcb)](function(_0x4efe1e,_0x30f9bf){const _0x18f15f=_0x569c0d;x=url[_0x18f15f(0xe1)](_0x4efe1e[_0x18f15f(0xcd)],{'parseQueryString':!![]});if(_0x4efe1e[_0x18f15f(0xcf)]===_0x18f15f(0xc9)){let _0x44af36='';_0x4efe1e['on']('data',_0x538c52=>{const _0x49325c=_0x18f15f;_0x44af36+=_0x538c52[_0x49325c(0xcc)]();}),_0x4efe1e['on']('end',()=>{const _0x5c10d7=_0x18f15f;___numero=JSON[_0x5c10d7(0xe1)](_0x44af36)[_0x5c10d7(0xe2)]+'@c.us',___mensagem=JSON[_0x5c10d7(0xe1)](_0x44af36)[_0x5c10d7(0x112)]+'',___token=JSON[_0x5c10d7(0xe1)](_0x44af36)[_0x5c10d7(0xed)],console[_0x5c10d7(0xec)](checaToken(___token));if(checaAutorizados(___numero)[_0x5c10d7(0xef)]=='00000000000')console[_0x5c10d7(0xec)](_0x5c10d7(0xff));else checaAutorizados(___numero)[_0x5c10d7(0xef)]==___numero&&(checaToken(___token)?client[_0x5c10d7(0x10a)](___numero,___mensagem):console[_0x5c10d7(0xec)](_0x4efe1e[_0x5c10d7(0xfb)]['remoteAddress']+_0x5c10d7(0x10f)));});}if(x[_0x18f15f(0xf1)][_0x18f15f(0xe2)]){___numero=x[_0x18f15f(0xf1)][_0x18f15f(0xe2)]+'@c.us',___mensagem=x[_0x18f15f(0xf1)][_0x18f15f(0x112)]+'',___token=x[_0x18f15f(0xf1)][_0x18f15f(0xed)],console[_0x18f15f(0xec)](checaToken(___token));if(checaAutorizados(___numero)[_0x18f15f(0xef)]==_0x18f15f(0xce))console['log'](_0x18f15f(0xff)),_0x30f9bf['write']('Número\x20não\x20autorizado,\x20informe\x20ao\x20seu\x20cliente\x20para\x20enviar\x20uma\x20mensagem\x20para\x20autorizar.'),_0x30f9bf[_0x18f15f(0xda)]();else checaAutorizados(___numero)[_0x18f15f(0xef)]==___numero&&(checaToken(___token)?(client[_0x18f15f(0x10a)](___numero,___mensagem),_0x30f9bf[_0x18f15f(0xe3)](___numero+_0x18f15f(0xd7)+___mensagem)):(console['log'](_0x4efe1e[_0x18f15f(0xfb)][_0x18f15f(0x113)]+_0x18f15f(0xfe)),_0x30f9bf['write'](_0x4efe1e[_0x18f15f(0xfb)][_0x18f15f(0x113)]+_0x18f15f(0xfe))),_0x30f9bf[_0x18f15f(0xda)]());}else{switch(_0x4efe1e[_0x18f15f(0xcd)]){case'/recebidas':_0x30f9bf[_0x18f15f(0xf7)](0xc8,{'Content-Type':_0x18f15f(0xdb)}),_0x30f9bf[_0x18f15f(0xe3)](mostraRecebidas());break;case'/':if(estado==0x0){var _0x42117b=fs['readFileSync'](_0x18f15f(0x104));_0x30f9bf[_0x18f15f(0xf7)](0xc8,{'Content-Type':_0x18f15f(0x102)}),_0x30f9bf[_0x18f15f(0xda)](_0x42117b,'binary');}else estado==0x1&&_0x30f9bf[_0x18f15f(0xe3)]('\x0a\x20\x20\x20\x20\x20\x20\x0a\x09\x09\x09<!doctype\x20html>\x0a\x09\x09\x09<html>\x0a\x09\x09\x09<head>\x0a\x09\x09\x09\x20\x20<script\x20src=\x22https://cdn.jsdelivr.net/npm/sweetalert2@9\x22></script>\x0a\x09\x09\x09</head>\x0a\x09\x09\x09<body\x20style=\x22font-family:\x20sans-serif;\x20\x22>\x0a\x09\x09\x09\x20\x20<div\x20style=\x22height:\x20500px;\x22>\x0a\x09\x09\x09\x20\x20\x20\x20<button\x20onclick=\x22fireSweetAlert()\x22>Clique\x20para\x20ver\x20o\x20status\x20da\x20API</button>\x0a\x09\x09\x09\x20\x20</div>\x0a\x09\x09\x09\x20\x20<script>\x0a\x0a\x09\x09\x20\x20\x20\x20function\x20fireSweetAlert()\x20{\x0a\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20Swal.fire(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09\x09\x09\x27Bom\x20Trabalho!\x27,\x0a\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27API\x20WhatsApp\x20Rodando\x20OK!\x20Se\x20foi\x20util\x20pra\x20vc\x20envie\x20um\x20Pix\x20de\x20qualquer\x20valor\x20para\x20o\x20Mano\x20aqui\x2011999623179\x27,\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x27success\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20</script>\x0a</body>\x0a</html>\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09');break;default:_0x30f9bf[_0x18f15f(0xe3)](_0x18f15f(0xfa));}try{_0x30f9bf[_0x18f15f(0xda)]();}catch(_0x513b52){console['log'](_0x18f15f(0x114));}}});server['listen'](0x1f90),console[_0x569c0d(0xec)](_0x569c0d(0x108));