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
			var settings = $.extend({
				activeIndex: 2, //Active element index
				imageMaxWidth: 55, //Maximum height of the image
				imageMaxHeight: 100, //Maximum width of the image
				randomWidth: true, //Enable random mode
				randomInterval: [16, 40], //Maximum width of the image when hovering in percent (min, max)
				debug: false //Debug mode
			}, options);
			return this.each(function() {
				var initMethods = {
					init: function() {
						var $main = $(this);
						initMethods.prepareHoverfolio.apply($main);
						initMethods.buildHoverfolio.apply($main);
					},
					prepareHoverfolio: function(){
						var self = $(this);
						self.addClass('vl-hoverfolio');
						self.wrapInner('<div class="vl-hoverfolio-inner">');
						self.find('a').addClass('vl-hoverfolio-link');
						self.append('<div class="vl-hoverfolio-image"></div>');
					},
					buildHoverfolio: function(){
						var self = $(this),
							linkElement = self.find('a.vl-hoverfolio-link'),
							imageContainer = self.find('.vl-hoverfolio-image');
	
						linkElement.each(function(index){
							var el = $(this),
								imageSrc = el.data('hoverfolio-image-src'),
								style = 'max-height:'+settings.imageMaxHeight+'%;';
							if(settings.randomWidth){
								var randomValue = Math.floor(Math.random() * (settings.randomInterval[1] - settings.randomInterval[0] + 1)) + settings.randomInterval[0];
								style += 'max-width:'+randomValue+'%;';
							}else{
								style += 'max-width:'+settings.imageMaxWidth+'%;';
							}
							imageContainer.append('<img src="'+imageSrc+'" alt="" style="'+style+'">');
						});	
						var appendedImage = imageContainer.find('img');
							appendedImage.addClass('vl-hoverfolio-image-hide');
						if (typeof imagesLoaded !== 'undefined') {
							appendedImage.imagesLoaded(function(){
								appendedImage.eq(settings.activeIndex - 1).toggleClass('vl-hoverfolio-image-hide vl-hoverfolio-image-show');
							}).progress(function(instance, image) {
								var result = image.isLoaded ? 'loaded' : 'broken';
								settings.debug ? console.log('Image is ' + result + ' for ' + image.img.src) : '';
							});					
						}else{
							appendedImage.on('load', function() {
								appendedImage.eq(settings.activeIndex - 1).toggleClass('vl-hoverfolio-image-hide vl-hoverfolio-image-show');
							});						
						}
						linkElement.each(function(index){
							var el = $(this);
							el.on({
								mouseenter: function(){
									self.addClass('hovered');
									appendedImage.removeClass('vl-hoverfolio-image-show').addClass('vl-hoverfolio-image-hide');
									if (typeof imagesLoaded !== 'undefined') {
										appendedImage.imagesLoaded(function(){
											appendedImage.eq(index).removeClass('vl-hoverfolio-image-hide').addClass('vl-hoverfolio-image-show');
										}).progress(function(instance, image) {
											var result = image.isLoaded ? 'loaded' : 'broken';
											settings.debug ? console.log('Image is ' + result + ' for ' + image.img.src) : '';
										});					
									}else{
										appendedImage.on('load', function() {
											appendedImage.show();
										});						
									}
								},
								mouseleave: function(){
									self.removeClass('hovered');
								}
							});
						});
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