/*! 
Copyright (c) 2017 by VLThemes
Product: https://github.com/vlthemes/Hoverfolio
Author: https://github.com/vlthemes/
License: MIT https://opensource.org/licenses/MIT
*/

(function($) {
	"use strict";
	var methods = {
		init: function(options) {
			var $root = $(this);
			var hovered = null;
			var settings = $.extend({
				activeIndex: 4, //Active element index
				imageMaxWidth: 55, //Maximum height of the image
				imageMaxHeight: 100, //Maximum width of the image
				randomWidth: true, //Enable random mode
				randomInterval: [16, 40] //Maximum width of the image when hovering in percent (min, max)
			}, options);
			return this.each(function() {
				var initMethods = {
					init: function() {
						var $main = $(this);
						initMethods.prepareHoverfolio.apply($main);
						initMethods.buildHoverfolio.apply($main);
						if(settings.activeIndex > 0){
							initMethods.activeItem.apply($main);
						}
					},
					prepareHoverfolio: function(){
						var self = $(this);
						self.addClass('vl-hoverfolio');
						self.wrapInner('<div class="vl-hoverfolio-inner">');
						self.find('a').addClass('vl-hoverfolio-link');
						self.append('<div class="vl-hoverfolio-image"><img src="" alt=""></div>');
					},
					buildHoverfolio: function(){
						var self = $(this),
							linkElement = self.find('a.vl-hoverfolio-link'),
							image = self.find('.vl-hoverfolio-image img');
						linkElement.on('mouseenter', function(){
							self.addClass('hovered');
							var src = $(this).data('image');
							if(src != hovered){
								image.attr('src', src);
								if(true == settings.randomWidth){
									var randomWidth = Math.floor(Math.random() * (settings.randomInterval[1] - settings.randomInterval[0] + 1)) + settings.randomInterval[0];
									image.css('max-width', randomWidth + '%');
								}else{
									image.css({
										'max-width': settings.imageMaxWidth + '%',
										'max-height': settings.imageMaxHeight + '%'
									});
								}
								image.on('load', function() {
									image.stop().animate({
										opacity: 1
									}, 0);
								});
								hovered = src;
							}	
						});
						linkElement.on('mouseleave', function(){
							self.removeClass('hovered');
						});
					},
					activeItem: function(){
						var self = $(this),
							linkElement = self.find('a.vl-hoverfolio-link');
						linkElement.eq(settings.activeIndex - 1).trigger('mouseenter');
					}
				};
				initMethods.init.apply(this);
			});
		},
		destroy: function() {
			this.removeClass('vl-hoverfolio hovered');
			this.find('a').removeClass('vl-hoverfolio-link');
			this.find('.vl-hoverfolio-image').remove();
		}
	};
	$.fn.hoverfolio = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === "object" || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error("Method: " + method + " does not exists. jQuery.hoverfolio");
		}
	};
})(jQuery);