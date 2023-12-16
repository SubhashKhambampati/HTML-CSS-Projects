function loadPage(page) {
    fetch(`./About/${page}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementsByClassName('content').innerHTML = data;
      })
      .catch(error => console.error('Error loading page:', error));
  }
  

export default loadPage;