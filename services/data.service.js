database= {
    1000: { acno: 1000, uname: "Risna", password: 1000, balance: 5000,transaction:[] },
    1001: { acno: 1001, uname: "Jo", password: 1001, balance: 5000,transaction:[] },
    1002: { acno: 1002, uname: "Noya", password: 1002, balance: 5000,transaction:[] }
  }

//   register definition
 
 const  register = (acno, password, uname)=>{

   

    if (acno in database) {

      return{
        statusCode:422,
        status:false,
        message:"alreay exist!!!please Log IN....."
      }
    }
    else {

      database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction:[]

      }
      console.log(database);
     
      
      return{
        statusCode:200,
        status:true,
        message:"Registered successfull !!!!"
      }
    }
  }


  // login definition
  const login=(acno, password) =>{
    
    if (acno in database) {

      if (password == database[acno]["password"]) {
        currentAcno=acno
        currentUname=database[acno]["uname"]
        
        return {
          statusCode:200,
          status:true,
          message:" successfull Log in !!!!",
          currentAcno,
          currentUname
        }

      }
      else {
        
        return {
          statusCode:422,
          status:false,
          message:"Incorrect Password"
          
        }
        
      }
    }
    else {
     
      return {
        statusCode:422,
        status:false,
        message:"User doesnot exist"
      }
    }

  }

   // deposite definition
  const deposite=(acno, password, amt)=> {

    var amount = parseInt(amt)

    
    if (acno in database) {

      if (password == database[acno]["password"]) {

        database[acno]["balance"]  += amount


        database[acno]["transaction"].push({
          amount:amount,
          type:"CREDIT"
        })
        // console.log(database);
     
        
        return {
          statusCode:200,
          status:true,
          message:amount+"successfully deposite....And new balance is"+ database[acno]["balance"]
        }
         

      }
      else {
        
        return  {
          statusCode:422,
          status:false,
          message:"Incorrect Password",
          
        }
      }


    }
    else {
   
      return  {
        statusCode:422,
        status:false,
        message:"user does not exist"
        
      }
    }
  }


  module.exports={
    register,
    login,
    deposite

  }