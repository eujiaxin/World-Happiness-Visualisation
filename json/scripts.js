function toggleScatterPlot(spId, icon) {
      var targetSP = document.getElementById(spId);
      var hideSP = document.getElementsByClassName('sp');
      // Hide other vis2 first
      for (i=0; i < hideSP.length; i++) {
            console.log(hideSP[i]);
            if (hideSP[i] != targetSP) {
                  hideSP[i].style.display = 'none';
            }
            else {
                  targetSP.style.display = 'flex';
            }

      }

      var targetIcon = document.getElementById(icon);
      var darkIcons = document.getElementsByClassName('factor-icon');
      // Hide other vis2 first
      for (i=0; i < darkIcons.length; i++) {
            if (darkIcons[i] != targetIcon) {
                  darkIcons[i].style.filter = 'grayscale(100%)';
            }
            else {
                  targetIcon.style.filter =  'grayscale(0%)';
                  targetIcon.style.filter =  'brightness(110%)';
            }

            

      }


}

$(document).ready(function() {
      $('.flourish-credit').remove();
      
});

