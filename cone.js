
 var firebaseConfig = {
    apiKey: "AIzaSyA6Q8odFmgnT3m4ah1QDfdM94h5Rk0TG2s",
    authDomain: "chat-b5cc7.firebaseapp.com",
    databaseURL: "https://chat-b5cc7.firebaseio.com",
    projectId: "chat-b5cc7",
    storageBucket: "",
    messagingSenderId: "322609146031",
    appId: "1:322609146031:web:577d7ea5ca67ea2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // var db = firebase.firestore();

 
var txtNombre=document.getElementById('nombre');
var txtMensaje=document.getElementById('mensaje');
var btnEnviar=document.getElementById('btnEnviar');
var chatList=document.getElementById('chatList');


btnEnviar.addEventListener("click", function(){

	var nombre =txtNombre.value;
	var mensaje=txtMensaje.value;
	//var html = "<li><b>"+nombre+":</b>"+mensaje+"</li>";
	//alert(nombre);

	//chatList.innerHTML +=html

firebase.database().ref('chat').push({
name: nombre,
message: mensaje

});
});


firebase.database().ref('chat')
.on('value',function(snapshot){
	var html ='';
	snapshot.forEach(function(e){
		var element=e.val();
		var nombre = element.name;
		var mensaje =element.message; 
		html +="<li><b>"+nombre+":</b>"+mensaje+"</li>";
	});

	chatList.innerHTML =html;
});




