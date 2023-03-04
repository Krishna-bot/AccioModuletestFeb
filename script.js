
function Blog(index, heading, text){
    this.index = index;
    this.heading = heading;
    this.text = text;
}

function Display(){

}

// add method to display prototype
Display.prototype.add = function(blog){
    console.log("Adding...Blog");
    let blogElements = document.getElementById('blog')
    let html =  
    ` <div class="row" id="blog">
    <div class="card mt-3" id="notes">
    <div class="card-body">
    <h5 class="card-title"> ${blog.heading}</h5>
    <p class="card-text">${blog.text}</p>
    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Edit Post</button>
    <button type="button" class="btn btn-danger" id="${blog.index + 1}" onclick="deleteBlog(this.id)">Delete Post</button>
    </div>
    </div>
    </div> `;
    blogElements.innerHTML += html; 
    console.log(blogElements);
}

//Clear Function
    // Display.prototype.clear = function(){
    // let form = document.getElementById('Modal');
    // form.reset();
    // }


//Add save button method
let addBtn = document.getElementById('addbtn');

addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let index = 1;
    let addText = document.getElementById('addtext').value;
    let addHeading = document.getElementById('addheading').value;

    let blog = new Blog(index,addHeading, addText)
   console.log(blog);
   
   let display = new Display();
   display.add(blog);
 //  display.clear();
})


