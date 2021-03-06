/*
* Ideal Image Slider: Captions Extension v1.0.0
*
* By Gilbert Pellegrom
* http://gilbert.pellegrom.me
*
* Free to use and abuse under the MIT license.
* https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
*/

(function(IIS) {
	"use strict";

	IIS.Slider.prototype.addCaptions = function() {
		IIS._addClass(this._attributes.container, 'iis-has-captions');

		Array.prototype.forEach.call(this._attributes.slides, function(slide, i){
			var caption = document.createElement('div');
			IIS._addClass(caption, 'iis-caption');

			var captionContent = '';
			if(slide.getAttribute('title')){
				captionContent += '<div class="iis-caption-title">'+ slide.getAttribute('title') +'</div>';
			}
			if(slide.innerHTML){
				if(slide.innerHTML.substring(0,1) == '#' || slide.innerHTML.substring(0,1) == '.'){
					var external = document.querySelector(slide.innerHTML);
					if(external){
						captionContent += '<div class="iis-caption-content">'+ external.innerHTML +'</div>';
					}
				} else {
					captionContent += '<div class="iis-caption-content">'+ slide.innerHTML +'</div>';
				}
			}

			slide.innerHTML = '';
			if(captionContent){
				caption.innerHTML = captionContent;
				slide.appendChild(caption);
			}
		}.bind(this));
	};

	return IIS;

})(IdealImageSlider);
