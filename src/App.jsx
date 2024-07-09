import { useState } from 'react'


function App() {

    const profileValue = {
      name:"suriya",
      age:"42",
      address:"chennai",
      followers:'80.4K',
      likes:'803K',
      photos:'1.4K'
    }
    return (
    <>
      <Profile {...profileValue} />
    </>
)
}
function Profile ({name, age, address, followers, likes, photos}){
 

  return(
    <>
    <div style={{width:'300px', borderBottom:'1px solid # D5D4D4'}}>
      {/* top */}
      <div style={{backgroundColor:'#3AD1D7', height:'110px', display:'flex', justifyContent:'center'}}>
        <div>
          <img style={{borderRadius:'37px', width:'75px', height:'75px', marginTop:'75px', objectFit:'cover'}} id="profile_img"src="https://th.bing.com/th/id/OIP.MR6o14pDY640zksr-9T_DAHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7" alt="img-not-available" />
        </div>
      </div>


      {/* middle */}
      <div>

        <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
        <p style={{fontSize:'16px', fontWeight:'bold', color:'#565555'}}>{name}</p> 
        <p  style={{fontSize:'15px',marginTop:'18px', marginLeft:'4px', fontWeight:'600', color:'#8E8E8E'}}>{age}</p>
        </div>

        <div style={{display:'flex', justifyContent:'center', borderBottom:'1px solid #D5D4D4'}}>
        <p style={{color:'#8E8E8E', marginTop: '-10px'}}>{address}</p>
        </div>
        
      </div>


      {/* bottom */}
      <div style={{display: 'flex', justifyContent:'space-around'}}>
          
           <div>
        <p style={{fontSize:'16px', fontWeight:'700', color:'#565555', marginLeft:'2px'}}>{followers}</p>
        <p style={{fontSize:'12px', fontWeight:'500', color:'#BEB9B9', marginTop:'-7px'}}>Followers</p>
        </div>

           <div>
          <p  style={{fontSize:'16px', fontWeight:'700', color:'#565555', marginLeft:'2px'}}>{likes}</p>
          <p  style={{fontSize:'12px', fontWeight:'500', color:'#BEB9B9', marginTop:'-7px'}}>Likes</p>
        </div>

            <div>
          <p  style={{fontSize:'16px', fontWeight:'700', color:'#565555', marginLeft:'2px'}}>{photos}</p>
          <p  style={{fontSize:'12px', fontWeight:'500', color:'#BEB9B9', marginTop:'-7px'}}>Photos</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
