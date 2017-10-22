import Vue from 'vue'
import Example02 from './Example02'

export default function(el) {
	new Vue({
		el: el,
		components: { Example02 },
		template: '<Example02/>'
	})
}
