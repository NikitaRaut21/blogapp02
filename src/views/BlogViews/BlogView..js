import { useParams } from "react-router-dom"
import blogs from "../../data/data"
import "./BlogView.css"

function BlogView() {
    const{id} = useParams()

    const selectedBlog=blogs.find((blogObject)=>blogObject.id===id)
    
  return (
    <div className="main">
      <h1 className="blog-t">{selectedBlog.title}</h1>
      <p className="author-name">
        <img src={selectedBlog.author.avatar} alt="author" className="author-avtar" height={"50px"}/>
       <img src={selectedBlog.imgURL}/>
        {selectedBlog.author.name}|{selectedBlog.date}
      </p>
      {selectedBlog.content}<br></br>
      {selectedBlog.price}
    </div>
  )
}

export default BlogView
