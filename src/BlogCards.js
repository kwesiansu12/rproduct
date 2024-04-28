import React from 'react'

const BlogCard = (properties) =>{
    console.log(properties)

    return(
       /* <div className="Blogcard" key={item.id}>
        <h3 className="Text-color">Name : {item.team}</h3>
        <h2>Title:{item.position}</h2>
        */
       <div className='BlogCard'>
        <h3 className="Text-color">{properties.team}</h3>
        <h3 className="Text-color">{properties.position}</h3>
       </div>
    )
}

export default BlogCard;