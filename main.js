var acordion = document.getElementsByClassName('acordion');
var longuitud = acordion.length;
for(var i = 0; i < longuitud; i++)
 {
  acordion[i].addEventListener('click', function()
  {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight)
      {
        panel.style.maxHeight = null;
      }
      else
      {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
  })
 }