function Favstudentlist({favstudent,setfavstudent,students}){
    function removebut(removeid){
        var temparr=favstudent.filter(function(item){
   if (item === removeid){
    return false
   }
   else{
    return true
   }

   

        }
            
        )
setfavstudent(temparr)
    }

    return(
        <div className="flex flex-col text-center mt-5">
           <h2 className=" text-3xl font-bold">Favourite studentList</h2>
           <ul>
            {favstudent.map(function(item,index){
                return <li key={index+1} className="text-2xl" >{index+1}.{item}<button onClick={()=>removebut(item)} className="bg-red-500 text-white border rounded-md p-1 ml-10">Remove</button></li>
        
        })

            }
           </ul>

        </div>
    )
}
export default Favstudentlist