$(document).ready(function()
{
	$('.content').hide();
	$('.posts :first').removeClass('item').addClass('itemSelected');
	$(document).keypress(function(e)
	{
		switch(e.which)
		{
			case 106: next();
				break;
			case 107: prev();
				break;
			case 111: open();
				break;
		}
	});

	
	function next()
	{
		var c = $('.itemSelected')
		if ($(c).next().attr('class') == 'item')
		{
			$('.item .content').hide();
			$(c).removeClass('itemSelected').addClass('item');
			$(c).next().addClass('itemSelected');
			$('.itemSelected .content').show();
			$('html, body').animate({ scrollTop: $('.itemSelected').offset().top }, 'fast');
		}
	}

	function prev()
	{
		var c = $('.itemSelected')
		if ($(c).prev().attr('class') == 'item')
		{
			$('.item .content').hide();
			$(c).removeClass('itemSelected').addClass('item');
			$(c).prev().addClass('itemSelected');
			$('.itemSelected .content').show();
			$('html, body').animate({ scrollTop: $('.itemSelected').offset().top }, 'fast');
		}
	}
	
	function open()
	{
		var l = $('.itemSelected li a').attr('href');
		window.location = l;
	}
});
