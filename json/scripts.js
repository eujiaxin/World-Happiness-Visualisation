function toggleScatterPlot(spId) {
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

}