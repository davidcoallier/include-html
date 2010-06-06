jQuery plugin include-html
=========================================================================


This jQuery plugin is there to help developers including remote HTML elements into their web pages. 

Using the plugin a developer will be able to either create an HTML file and include within a page. 

This works like templating engines that allow you to include a file. In PHP this would be <?php include(...); ?>, and in other languages it'd be another way of including a remote template/html source within a file.

**This plugin introduces a new non-self-closing html tag called `<include>`**

How to use it?
==============

First of all, the developer will need to include the plugin like such (Obviously after inserting the jquery source ;-))

Include the plugin in your code

    <script src="jquery.include.js" charset="utf-8" type="text/javascript"></script>

Then where you want to include your remote html, you'll need to use the following html tag. 

    <include src="/path/to/file/to/include.html"></include>
    
__Please note, this is not a self-closing tag. It is primordial to close it.__

Hope you enjoy.
