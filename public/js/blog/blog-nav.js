const blogFeed = document.getElementById('blog-feed');
const url = window.location.href
const id = url.split('/')[url.split('/').length - 1];
function categoryNav(e){
  switch(e.target.value){
    case "Stay":
      window.location.assign(window.location.href.replace(/\/\d/, '/1'))
      break;
    case "Taste":
      window.location.assign(window.location.href.replace(/\/\d/, '/2'))
      break;
    case "Vibe":
      window.location.assign(window.location.href.replace(/\/\d/, '/3'))
      break;
    default:
      return;
  }
}

blogFeed.addEventListener('click', categoryNav);