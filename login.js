function login(){
    var email=["alessandro.vieira@gmail.com","maria@gmail.com"]
    var senha=["123","12345"]
    for (var i=0; i<email.length; i++){
        if (email[i]== document.getElementById
            ("email_login").value && senha[i]==
            document.getElementById("senha_login").value){
                alert("Seja bem vindo(a)")
                document.getElementById("email_login").value=""
                document.getElementById("senha_login").value=""
                window.open("avaliar.html")
            }
    }
}