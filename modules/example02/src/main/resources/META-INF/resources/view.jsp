<%@ include file="/init.jsp" %>
<div id="<portlet:namespace/>root"/>
<aui:script position="inline">
require('example02', function(example02) {
    example02.initialize('#<portlet:namespace/>root')
})
</aui:script>
