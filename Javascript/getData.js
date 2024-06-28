
window.onload = () => {  
    
let container = null;
    
    //let ProfileKid = {image: "", name: "kavaughn", email: "kavaughnirons@outlook.com", number: "216-512-5069", location: "3018 keswick rd 44120 cleveland ohio"};
    //let ProfileGuy = {image: "", name: "khrisarean", email: "khrisareanirons@outlook.com", number: "216-512-5069", location: "3018 keswick rd 44120 cleveland ohio"};


    let listen = (id, mysqlID, i) => {

        console.log($(id));
        console.log(i)


    window.document.children[0].children[1].children[3].children[i].children[2].children[0].addEventListener('click', (event) => {


            event.stopPropagation();
            console.log("loaded")
            $.ajax({
                url:"http://localhost:5000/delete"
                ,method: "post"
                ,dataType: 'json'
                ,data: {theID: mysqlID}
                ,success: (data) => {
                    console.log("success");
                }
            
            })
            location.reload();
            
           //console.log(container[0].children[0].children[2].children[0].setAttribute("onclick", "clicked"))

    })

 

   
    }

    let card = (profileArray) => {
       

        for(let i = 0; i < profileArray.length; i++){
            let id = "#delete"+i; 
            
             container = $(".theContainer").append("<div style='margin: auto; margin-top:30px; margin-bottom: 100px; border-radius:15px; background-image: linear-gradient(to bottom, #434343 0%, black 100%); height: 800px; width: 500px; z-index: -10;'><div style='height: 420px; width: 100%; text-align: center;'><h1 style='color: white; padding-top: 25px;'>Profile</h1><img src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg' style='padding: auto ; height: 300px; width: 300px;'></div><div style='height: 200px; width: 100%;'><h6 style='color: white; font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Name: "+profileArray[i].theName+"</h6><h6 style='color: white; font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Email: "+profileArray[i].Email+"</h6><h6 style='color: white;font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Phone Number: "+profileArray[i].phoneNumber+"</h6><h6 style='color: white;font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Location: "+profileArray[i].Location+"</h6></div> <div style='width: 100%; height: 50px; text-align: center'><input id="+id+" class='clickable' style='margin: auto; margin-top: 30px; background-color: white; width:200px; height: 50px;' type='submit' value='Delete'></div><div style='height: 300px; width: 100%'></div></div>");
            listen(id,profileArray[i].profile_id,i);
            
        }

    }


    console.log("here!");

    $.ajax({
        url: "http://localhost:5000/globNum",
        method: 'post',
        dataType: 'json', success: function(data){
            


            $.ajax({
                url:"http://localhost:5000/data"+data.glob,
                method: 'get', dataType: 'json', success: function(data){

                    $("#addData").on("click", function(){
    

                        profileData = {pathName: data.length, Image: $("#Image").val(),Name: $("#Name").val(),Email: $("#Email").val(),phoneNumber: $("#phoneNumber").val(),LocationAddress: $("#theLocation").val()}
                
                        $.ajax({
                            url: 'http://localhost:5000/create',
                            method: 'POST',
                            data: profileData, success: function(){
                                console.log("created!")
                            }
                         });

                         location.reload();
                
                
                    
                    })
                    
                    if(data.length === 0){
            
                        console.log("NOTHING");
                        $(".Nothing").css('display','block');
                        
                        }else{
                        
                      
        
                                $("#thebody").css("height", ((data.length - 1) * 1400) + "px");
        
                            
        
                            card(data);
      
                    
                        }
                    
                }

        
        
        
        })



            console.log(data);
        





        }
    })
    
  
    
    
    
    }