/** tab **/

class tab {
	constructor(selector){
		this.selector = selector;
		this.clickareas = document.querySelectorAll('#' + this.selector + ' > div');
		this.clickareas.forEach((clickarea) => {
			clickarea.addEventListener('click',() =>{
				var divclicked = document.getElementById(selector).getElementsByClassName('clicked');	
				for(var i=0; i < divclicked.length; i++) {
					divclicked[i].classList.remove('clicked');
				}	
				clickarea.classList.add('clicked');						
			});
		});
	};
};

var tab1 = new tab('tab-1');

var tab2 = new tab('tab-2');

/** modal **/

class modal {
	constructor(selector) {
		this.selector = selector;
		this.overlay = document.querySelector('.' + this.selector);
		this.modal = document.querySelector('.' + this.selector + ' > div');
		this.closeButton = document.querySelector('.' + this.selector + ' > div' +' > span');
		this.openButton = document.querySelector('#button-modal');

		this.closeButton.addEventListener('click', () => {
			this.overlay.classList.remove('active');
		});

		this.overlay.addEventListener('click', () => {
			if (event.target != this.modal) {
				this.overlay.classList.remove('active');
			}		
		});

		this.openButton.addEventListener('click', () => {
			this.overlay.classList.add('active');
		});

	};
};

var modal1 = new modal('overlay')