function validate()
{
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    console.log(username);
    console.log(password);  
    if(username=="admin" && password=="admin")
    {
        alert("login successful");
    }
    else{
        alert("login unsuccessful");
    }
    return false;
}