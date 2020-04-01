window.addEventListener('load', () => {
	function Parallax (container, rate) {
		this.offset = container.offsetTop;
		this.rate = rate;
		this.img = container.querySelector('.parallax-img');
	}

	Parallax.prototype.scroll = function () {
		if(pageYOffset + outerHeight < this.offset)
			return
		this.img.style.top = (pageYOffset-this.offset)*this.rate + 'px';
	}

	const containers = document.querySelectorAll('.parallax-container');
	const parallaxes = Array.prototype.map.call(containers, (container) => {
		return new Parallax(container, 0.9);
	});

	window.addEventListener('scroll', () => {
		parallaxes.forEach((parallax) => {
			parallax.scroll();
		});
	});
});