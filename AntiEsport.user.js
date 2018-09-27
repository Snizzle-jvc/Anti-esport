// ==UserScript==
// @name Anti-Esport
// @name        Anti-Esport
// @author      Snizzle
// @version     1.0
// @downloadURL https://github.com/Snizzle-jvc/Anti-esport/raw/master/AntiEsport.user.js
// @updateURL   https://github.com/Snizzle-jvc/Anti-esport/raw/master/AntiEsport.user.js
// @supportURL  http://www.jeuxvideo.com/messages-prives/nouveau.php?all_dest=Snizzle,Snitchzzle
// @copyright   2018, Snizzle
// @licence     MIT
// @description Masque automatiquement les topics Esport sur le forum Overwatch
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @match       http://www.jeuxvideo.com/forums/0-33972*
// @run-at      document-end
// ==/UserScript==
function c() {
 jQuery['expr'][':']['Contains'] = function(d, e, f) {
  return jQuery(d)['text']()['toUpperCase']()['indexOf'](f[0x3]['toUpperCase']()) >= 0x0;
 };
 jQuery['expr'][':']['contains'] = function(g, h, i) {
  return jQuery(g)['text']()['toUpperCase']()['indexOf'](i[0x3]['toUpperCase']()) >= 0x0;
 };
 var j = ['esport','esp0rt', 'e sport', 'e-sport', 'e -sport', 'e- sport', 'owl', 'league', 'contenders'];
 for (i = 0x0; i < j['length']; i++) $('li:has(.topic-title:contains(' + j[i] + '))')['hide']();$['ajax']({'url': 'http://www.jeuxvideo.com/abonnements/ajax/ajax_abo_insert.php','method': 'POST','data': {'ajax_timestamp': $('#ajax_timestamp_liste_messages')['val'](),'ajax_hash': $('body')['attr']('data-abo-session'),'type': 'alias','ids_liste': 0x5775c9}});
}
c();
