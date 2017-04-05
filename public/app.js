(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("Hey, It's Rennie");

$(function () {

	$.preloadImages = function () {
		for (var i = 0; i < arguments.length; i++) {
			$("<img />").attr("src", arguments[i]);
		}
	};

	$.preloadImages("../../images/feast/feast-hover_2x.jpg", "../../images/drinksavvy/drinksavvy-hover_2x.png", "url(../../images/luxebox/luxebox-hover_2x.png", "url(../../images/fudster/fudster-hover_2x.png", "../../images/bookshare/bookshare-hover_2x.png", "../../images/ook/ook-hover_2x.jpg", "../../images/f451/f451-hover_2x.jpg", "../../images/pommies/pommies-hover_2x.jpg");

	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('#left').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 1000);
	});

	$('#right').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#works').offset().top
		}, 1000);
	});

	//All Project Links
	$('#works a').on('mouseover', function (event) {
		if ($(window).width() > 650) {
			$('.bgImage').css({
				"opacity": "1",
				"visibility": "visible"
			});
			$('#works div div').not(event.target.parentElement.parentElement).css('opacity', '0');
		};
	});
	$('#works a').on('mouseout', function () {
		if ($(window).width() > 650) {
			$('.bgImage').css({
				"opacity": "0",
				"visibility": "hidden" });
			$('#works div div').css('opacity', '1');
			$('.drinkSavvy a').css('color', 'black');
		};
	});

	//Individual Project Links
	$('.feast a').on('mouseover', function () {
		$('.bgImage').css("background-image", "url(../../images/feast/feast-hover_2x.jpg)");
	});

	$('.drinkSavvy a').on('mouseover', function () {
		$('.bgImage').css('background-image', "url(../../images/drinksavvy/drinksavvy-hover_2x.png)");
		if ($(window).width() > 650) {
			$('.drinkSavvy a').css('color', 'white');
		};
	});

	$('.luxeBox a').on('mouseover', function () {
		$('.bgImage').css('background-image', "url(../../images/luxebox/luxebox-hover_2x.png)");
	});

	$('.fudster a').on('mouseover', function () {
		$('.bgImage').css('background-image', "url(../../images/fudster/fudster-hover_2x.png)");
	});

	$('.bookShare a').on('mouseover', function () {
		$('.bgImage').css('background-image', "url(../../images/bookshare/bookshare-hover_2x.png)");
	});

	$('.ook a').on('mouseover', function () {
		$('.bgImage').css('background-image', "url(../../images/ook/ook-hover_2x.jpg)");
	});

	$('.f451 a').on('mouseover', function () {
		$('.bgImage').css('background-image', "url(../../images/f451/f451-hover_2x.jpg)");
	});

	$('.pommies a').on('mouseover', function () {
		$('.bgImage').css('background-image', "url(../../images/pommies/pommies-hover_2x.jpg)");
	});
});

},{}]},{},[1]);
