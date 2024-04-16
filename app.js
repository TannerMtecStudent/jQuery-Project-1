/*
3) Go into app.js and select all the elements with the class of 'navItem'
4) On each of the navItem elements change the color to white.
5) Now select the element with the ID of 'nav'
6) Give that element a background color of #145
7) Select all the even list items
8) Change the background color to #ccc
9) Select all the odd list items
10) Change the background color to #aaa
11) Select the input tag
12) Change the value to be your first name
13) Push this code up to github and turn in the link to your repository in canvas
*/

$('.navItem').css('color', 'white');
$('#nav').css('background-color', '#145');
$('li:even').css('background-color', '#ccc');
$('li:odd').css('background-color', '#aaa');
$('input').val('Tanner')