(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(() => {

    console.log("here!");
    
    let ProfileKid = {image: "", name: "kavaughn", email: "kavaughnirons@outlook.com", number: "216-512-5069", location: "3018 keswick rd 44120 cleveland ohio"};
    let ProfileGuy = {image: "", name: "khrisarean", email: "khrisareanirons@outlook.com", number: "216-512-5069", location: "3018 keswick rd 44120 cleveland ohio"};
    
    //let Profiles = [ProfileKid, ProfileGuy];
    let Profiles = [ProfileGuy,ProfileKid];
    let card = (profileArray) => {

        for(let i = 0; i < profileArray.length; i++){
            $(".theContainer").append("<div style='margin: auto; margin-top:30px; margin-bottom: 30px; border-radius:15px; background-image: linear-gradient(to bottom, #434343 0%, black 100%); height: 800px; width: 500px; z-index: -10;'><div style='height: 420px; width: 100%; text-align: center;'><h1 style='color: white; padding-top: 25px;'>Profile</h1><img src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg' style='padding: auto ; height: 300px; width: 300px;'></div><div style='height: 200px; width: 100%;'><h6 style='color: white; font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Name: "+profileArray[i].name+"</h6><h6 style='color: white; font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Email: "+profileArray[i].email+"</h6><h6 style='color: white;font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Phone Number: "+profileArray[i].number+"</h6><h6 style='color: white;font-size: 18px; margin-left: 98px; margin-bottom: 20px;'>Location: "+profileArray[i].location+"</h6></div> <form  style='width: 100%; text-align: center;' action='/action_page.php'><input style='margin-top: 30px; background-color: white; width:200px; height: 50px;' type='submit' value='Delete'></form></div>");

        }

    }
    
    if(Profiles.length === 0){
    
    
    $(".Nothing").css('display','block');
    
    }else{
    
        card(Profiles);


    }
    
    
    
    })
},{}]},{},[1]);
