function setCookie(e,t,n){var i="";if(n){var o=new Date;o.setTime(o.getTime()+n*1e3),i="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+i+"; path=/"}
$(document).ready(function(){
	$(document).on('click','.ovo_url',function(e){
		e.preventDefault();
		var url = $(this).data('url'),target = $(this).data('target');
		setCookie('ovo_url',url.replace('/?token=',''),2592000)
		window.open(location.origin+url, target);
    });
})
