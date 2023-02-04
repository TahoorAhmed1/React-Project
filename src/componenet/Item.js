import React from 'react'

 const Item =(props)=>{







    let { tittle, decription ,imgUrl,url,author,date} = props
    return (
      <>
        <div className="card">
          <img src={!imgUrl ?"https://static.foxnews.com/foxnews.com/content/uploads/2022/12/arkansassiblings.png":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}...</h5>
            <p className="card-text mt-3"><small className="text-muted">Author : {!author ?"unKnown":author }</small></p>
            <p className="card-text"><small className="text-muted">Published Time : {new Date(date).toGMTString() }</small></p>
            <p className="card-text">{decription}...</p>

            <a href={url} className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>



      </>
    )
  
}

export default Item
