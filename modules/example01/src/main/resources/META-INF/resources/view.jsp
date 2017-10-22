<%@ include file="/init.jsp" %>

<div id="<portlet:namespace/>example01">
    <div class="form-group">
        <label>Please enter your name:</label>
        <input class="form-control" type="text" v-model="name">
    </div>
    <p>
        <b>Hello, {{ name }}</b>
    </p>
</div>

<aui:script require="vue">
new vue({
	el: '#<portlet:namespace/>example01',
    data: {
		name: 'User'
	}
})
</aui:script>
