// function to open nav bar
function openNavToggle() {
  document.getElementById('nav-link').style.display="flex";
  document.getElementById('opennav-btn').style.display="none"
  document.getElementById('closenav-btn').style.display="block";
  }
  document.querySelector('#opennav').addEventListener('click', openNavToggle);

  // function to close nav bar

function closeNavToggle() {
  document.getElementById('nav-link').style.display="none";
  document.getElementById('opennav-btn').style.display="block"
  document.getElementById('closenav-btn').style.display="none";
  }
  document.querySelector('#closenav').addEventListener('click', closeNavToggle);

// function to open search bar

function openSearchToggle() {
  document.getElementById('nav-search').style.display="flex";
  document.getElementById('opensearch-btn').style.display="none"
  document.getElementById('closesearch-btn').style.display="block";
  }
  document.querySelector('#opensearch').addEventListener('click', openSearchToggle);

// function to close search bar  

function closeSearchToggle() {
  document.getElementById('nav-search').style.display="none";
  document.getElementById('opensearch-btn').style.display="block"
  document.getElementById('closesearch-btn').style.display="none";
  }
  document.querySelector('#closesearch').addEventListener('click', closeSearchToggle);