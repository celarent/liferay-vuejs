import Vue from 'vue'
import Example02 from './Example02'

function initialize(el) {
	new Vue({
		el: el,
		components: { Example02 },
		template: '<Example02/>'
	})
}

export { initialize }
