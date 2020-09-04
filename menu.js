$('.menuButton').click(function () {
    if ($('.menuButton').hasClass('noReady')) {
        $('.menuButtonLine1').addClass('menuButtonLine1Act');
        $('.menuButtonLine3').addClass('menuButtonLine3Act');
        $('.menuButtonLine2').addClass('menuButtonLine2Act');
		$('.phoneMenu').addClass('phoneMenuAct');
		$('.menuFilter').addClass('menuFilterAct');
        $('.menuButton').addClass('ready').removeClass('noReady');
    } else if ($('.menuButton').hasClass('ready')) {
        $('.menuButtonLine1').removeClass('menuButtonLine1Act');
        $('.menuButtonLine3').removeClass('menuButtonLine3Act');
        $('.menuButtonLine2').removeClass('menuButtonLine2Act');
		$('.phoneMenu').removeClass('phoneMenuAct');
		$('.menuFilter').removeClass('menuFilterAct');
        $('.menuButton').addClass('noReady').removeClass('ready');
    }
});



