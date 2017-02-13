

function rama() {
  console.log($.ajax({
    url: 'http://www.omdbapi.com/',
    type: 'PUT',
    data: 't=Family+Guy&r=json',
    success() { alert('PUT completed') },
  }))
}
