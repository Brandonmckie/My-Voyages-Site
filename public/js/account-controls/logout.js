async function logout() {
  // destroys session
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  // routes to homepage
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);