// async function editFormHandler(event) {
//   event.preventDefault();
  
//   const title = document.querySelector('input[name="post-title"]').value.trim();
//   const content = document.querySelector('textarea[name="post-content"]').value;

//   // gets post_id by last index in url
//   const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];
//   // updates the post
//   const response = await fetch(`/api/posts/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       content
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   // user taken to their dashboard where they can see their edited post
//   if (response.ok) {
//     document.location.replace('/dashboard/');
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);