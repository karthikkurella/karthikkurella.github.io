function validate()
{
    var username =document.getElementById("username");
    var password =document.getElementById("password");

    if(username =="admin" && password == "admin")
    {
        alert("login successful");
    }
    else{
        alert("login unsuccessful");
    }
    return false;
}