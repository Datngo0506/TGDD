var onloadCallbackcaptcha_260305178 = function () {
    var form = $('input[id="g-recaptcha-response_captcha_260305178"]').closest('form');
    var btn = $(form.find('.submit')[0]);
    btn.after("<div class='dcap'></div>");

    var loaded = false;
    var isBusy = false;
    btn.clone(false, false).unbind('click').on('click', function (e) {

        if (!isBusy) {
            isBusy = true;
            grecaptcha.execute('6LdjGgcaAAAAAJQ8ucRoMhdyKXlUxGdrEycRnACr', { 'action': 'SendFirstCp' }).then(function (token) {
                $('#g-recaptcha-response_captcha_260305178', form).val(token);
                loaded = true;
                isBusy = false;
                btn.click();
            });
        }
        return loaded;
    })
        .prependTo(form.find('.dcap')[0]).each(function () {
            btn.hide();
        });

}

(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WKQZL8');

var rooturl = '.thegioididong.com';

    window.dataLayer = window.dataLayer || [];

    dataLayer.push({ 'pageType': 'Home', 'pagePlatform': 'Web', 'pageStatus': 'Kinh doanh' })