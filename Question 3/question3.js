// 3. 3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1




const container = document.getElementById("posts-container");


async function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
        const userPosts = data.filter(post => post.userId === 1);
        userPosts.forEach(post => {
            //creating the div for each posts
            const postDiv = document.createElement("div")
            postDiv.classList.add("posts")
            // creating an h2 title element
            const title = document.createElement("h2")
            title.classList.add("title")
            title.textContent = post.title;
            //creating the body element giving it a class name and getting the post.body info
            const body = document.createElement("p")
            body.classList.add("text-body")
            body.textContent = post.body;
            // just appending the children together
            postDiv.appendChild(title)
            postDiv.appendChild(body)
            container.appendChild(postDiv)
            
        });
    })
    .catch(error => console.error('Error:', error));    
}

getPosts()










