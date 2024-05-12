
function Studentlist({students,favstudent,setfavstudent}){
    

    function choosefav(item){
        setfavstudent([...favstudent,item])
 
        
         }
      
      
    

    return(<div className="flex flex-col text-center mt-5 ">
        <h2 className=" text-3xl font-bold">Student list</h2>
       <ul>
        {students.map(function(item){
            return <li className="text-2xl">{item.id}.{item.name} <button key={item.name} onClick={()=>choosefav(item.name)} disabled={favstudent.includes(item.name)}  className="bg-black text-white border rounded-md p-1 ml-10">{favstudent.includes(item.name)?"Added":"Add to Favourite"}</button></li>
            
        })
            }</ul> 
        </div>
    )
}
export default Studentlist