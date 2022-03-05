
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import React,{useState,useEffect} from "react";
import ListMember from './Components/ListMember';
import DetailPage from './Components/DetailPage';
function App() {
  const [products,setProducts]=useState([])
  const [infor,setInfor]=useState([])
  const [getAllData,setGetAllData]=useState([])
  const [getDetail,setGetDetail]=useState([])
  useEffect(()=>{
      fetch("http://127.0.0.1:1880/company")
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])



  useEffect(()=>{
    fetch("http://127.0.0.1:1880/user")
    .then(res=>res.json())
    .then(data=>setInfor(data))
},[])

useEffect(()=>{
  fetch("http://127.0.0.1:1880/user")
  .then(res=>res.json())
  .then(data=>setGetAllData(data))
},[])

const handleGetData=(id)=>{
    var newData=getAllData.filter((item,index)=>{
      return item.companyId===id
    })
    console.log(id)
    setInfor(newData)
    
}
const handleDetail=(id)=>{
    var newData=getAllData.filter((item,index)=>{
      return item.id===id
    })
    setGetDetail(newData)
    setInfor([])
}
const handleSearch=(value)=>{
        var newData=products.filter((item,index)=>{
              return item.name.includes(value)
        })
        setInfor(newData)
}
  return (
    <div>
        <Navigation products={products} handleGetData={handleGetData} handleSearch={handleSearch}/>
        <ListMember infor={infor} handleDl={handleDetail}/>
        <DetailPage getDetail={getDetail}/>
    </div>
  )
}

export default App;