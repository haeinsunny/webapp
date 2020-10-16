<%@ page language='java' contentType='text/html; charset=UTF-8'
pageEncoding='UTF-8' %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ch05/post.jsp</title>
</head>

<body>
    <%
    request.setCharacterEncoding("UTF-8");
  String name= request.getParameter("name");
  String major= request.getParameter("major");
  String age= request.getParameter("age");
  String PW= request.getParameter("PW");
  String File= request.getParameter("attachfile");
  %>
    <h2>이름: <%=name%></h2>
    <h2>전공: <%=major%></h2>
    <h2>나이: <%=age%></h2>
    <h2>PW: <%=PW%></h2>
    <h2>File: <%=File%></h2>

</body>

</html>