//import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCards';

function App() {
 /* const blogObj = {
    title:'New blog 1',
    description:'Content descirpo'
  }*/

  const BlogArr =[
    {
      id:1,
      team:'Chelsea',
      position:'11',
    },
    {
      id:2,
      team:'Bayern Munich',
      position:12
    },

    {
      id:3,
      team:'Napoli',
      position:14
    },


    
  ]
   
  const BlogCards = BlogArr.map((item,pos)=>{
    console.log(item)
 
  return (
  <BlogCard key={pos} team={item.team} position={item.position} id={item.id}/>
  )
})

  return(
    <div className='App'>
      <button >Hide Make</button>
      {BlogCards}
    </div>
  )
}

export default App;
