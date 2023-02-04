import React,{useEffect} from 'react'
import { useState } from 'react'


import Item from './Item'
import Spnner from './Spnner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';





const News=(props) => {

 const [articles,setArtical] =useState([])
 const [loading,setLoading]=useState(false)
 const [page,setPage]=useState(1)
 const [totalResults,setResults]=useState(0)
 
 
 const  Capital = (value) => {
     return value.charAt(0).toUpperCase() + value.slice(1)
    }
    document.title = `${Capital(props.category)} - NewsDady`
    const UpdateNews=async()=>{
        props.progress(20)

       
        let url = `https://newsapi.org/v2/top-headlines?country=${props.countre}&category=${props.category}&apiKey=1993909c484b4e5a9324df608f41f9f8&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.progress(30)
        let parse = await data.json()
        setArtical(parse.articles)
        setResults( parse.totalResults)
        setLoading(false)
        props.progress(100)
        
        console.log(parse);
    

    }
   useEffect(()=>{
       UpdateNews()

   },[])



//   const   handelNext = async () => {
//    setPage(page+1)
//     UpdateNews()
//     }

//     const handelPreviou = async () => {
//         setPage(page-1)
//         UpdateNews()
        
        // }

   const fetchMore = async() => {
       let url = `https://newsapi.org/v2/top-headlines?country=${props.countre}&category=${props.category}&apiKey=1993909c484b4e5a9324df608f41f9f8&page=${page+1}&pageSize=${props.pageSize}` 
       setPage(page+1)
        let data = await fetch(url)
        let parse = await data.json()
        setArtical(articles.concat( parse.articles))
        setResults(parse.totalResults)

     
           

      };


   

 
   
        return (
            <>
                <div className='container'>
                    <h1 className='text-center my-4 mx-2'><b>Welcome to NewsDady Top-{Capital(props.category)} Hadlines</b></h1>
                  
 { loading && <Spnner/>}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMore}
                        hasMore={articles.length !== totalResults}
                        loader={ <Spnner/>}
                    >
                        <div className='row mx-4'>
                            {articles.map((element) => {
                                return <div className='col-md-3   my-4' key={element.url} >
                                    <Item tittle={element.title ? element.title.slice(0, 45) : ""} date={element.publishedAt} author={element.author} url={element.url} decription={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} ></Item>
                                </div>
                            })}


                   </div>
                    </InfiniteScroll>

                

            </div>

            </>
        )
    
}

News.defualtProps = {
    countre: "in",
    pageSize: 8,
    catigery: "gernal"
}

News.propTypes = {
    countre: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News