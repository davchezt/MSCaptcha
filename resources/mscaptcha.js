$('document').ready(function() {
	$('form').on('click', '#mscaptcha-refresh', function () {
		$('.mscaptcha-loader').show();
		$('.img-mscaptcha').load(function () {
			$('.mscaptcha-loader').hide();
		}).attr('src', ET.webPath + '/mscaptcha');
		return false;
	});
});