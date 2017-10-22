<%@ include file="/init.jsp" %>
<div id="<portlet:namespace/>root"/>
<script>
require("example02", function(example02) {
    example02('#<portlet:namespace/>root')
})
</script>
