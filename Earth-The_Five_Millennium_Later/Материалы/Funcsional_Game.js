$(document).ready(function(){
 $('.spoiler_links').click(function(){
  $(this).parent().children('div.spoiler_body02').toggle('normal');
  return false;
 });
});

