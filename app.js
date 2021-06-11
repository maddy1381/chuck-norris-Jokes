document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
     const number = document.querySelector('input[type="number"]').value;

     const xhr = new XMLHttpRequest();

     xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

     xhr.onload = function(){
          if(this.status === 200){
               const response = JSON.parse(this.responseText);//we get a json string if we don't use JSON.parse
               
               let output = '';
               if(response.type === 'success'){ // yaha par response object type ka hai to uska value me loop jayega differnt for other api's
                    response.value.forEach(function(joke){ //this joke is just the iterator the other one gets the value from the api coz its named as joke
                         output += `<li>${joke.joke}`
                    });
               }else{
                    output += '<li>Something went wrong</li>'//we append using +=
               }

               document.querySelector('.jokes').innerHTML = output;
          }
     }

     xhr.send();

     e.preventDefault();
}