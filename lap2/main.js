// test to fetch product

// function displayUsers(){
//   fetch('https://jsonplaceholder.typicode.com/users').then(function(user){
//     user.json().then(function(username){
//       for(var i=0;i<username.length;i++){
        
//         console.log(`username[${i}] => ${username[i].username}`);
//       }
//     })
//   }).catch(function(err){
//     console.log(err);
//   })
// }
// displayUsers()

// async function displayUsers(){
//   let users=await fetch("https://jsonplaceholder.typicode.com/posts?userId=userId")
// console.log(users);
//   let username=await users.json()
//   console.log(username);
//   for(var i=0;i<username.length;i++){
        
//             console.log(`username[${i}] => ${username[i].name}`);
//           }       
//   }

// displayUsers()

// task2

const tabsContainer = document.querySelector('.tabs');
const postsContainer = document.querySelector('.posts');


// user come from fetch i send user as a parameter in this function
function createTab(user) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = user.username;
  // after click i recieve function displayposts that had an user.id that show every post
  tab.addEventListener('click', () => displayPosts(user.id));
  tabsContainer.appendChild(tab);
}

function displayPosts(userId) {
  getPosts(userId).then(posts => {
    postsContainer.innerHTML = '';
    posts.forEach(post => {
      const postTitle = document.createElement('h3');
      postTitle.textContent = post.title;
      postsContainer.appendChild(postTitle);
    });
  }).catch(error => {
    console.error('Error fetching posts:', error);
  });
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => createTab(user));
    // if i show user i find 10 person array of objects i use function foreach to loop for each user in array
    //and send it for my first function with all data to show name of this user
    // console.log(users);
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });

async function getPosts(userId) {
// at fetch i select userid for each post
// after each click show posts
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

// // task 2
// const productsContainer = document.getElementById("products-container");

// // Async function to fetch products from the API and display them
// async function displayProducts() {
//   try {
//     const response = await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
//     const products = await response.json();
//     products.forEach(product => {
//       const productDiv = document.createElement("div");
//       productDiv.classList.add("product");

//       const productImage = document.createElement("img");
//       productImage.src = product.image;
//       productDiv.appendChild(productImage);

//       const productTitle = document.createElement("h2");
//       productTitle.textContent =product.name;
//       productDiv.appendChild(productTitle);

//       const productPrice = document.createElement("p");
//       productPrice.textContent = `$${product.price}`;
//       productDiv.appendChild(productPrice);

//       productsContainer.appendChild(productDiv);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// displayProducts();










