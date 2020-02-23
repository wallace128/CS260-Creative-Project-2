function onClick(e) {
  console.log('Running')
  e.preventDefault();

  // setup URL
  //let url = "https://www.potterapi.com/v1/" + key=apikey (when applicable) + hat + "?json";
  let url = "https://www.potterapi.com/v1/" + "sortingHat" + "?json";
  // call API
  fetch(url)
    .then(function(response) {
      console.log(response.status)
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Harry Potter API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      let results = ""
      if (json === 'Ravenclaw') {
        results += '<div> <font color="white"> <br><br><h1 class="margin-top"> Congratulations, you have been selected as a Ravenclaw! </h1> </div>'
        results += '<div class="container <div class="row <div class="col-sm">'
        results += '<h2> House History and Information </h2> <p> The founder was the medieval witch Rowena Ravenclaw </p> <p> The emblematic animal symbol is an eagle, and blue and bronze are its colours. </p> <p> The house ghost is the Grey Lady </p>'
        results += '<h3> Ravenclaw Emblem </h3> <img class="margin-top image" src="https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png" />'
        results += '<p>"Wit beyond measure is mans greatest treasure." —Rowena Ravenclaw</p>'
        results += '</div> <div class="col-sm">'
        results += '<h3> A Ravenclaws Characeristics & Famous Ravenclaws</h3>'
        results += '<p> Members of this house are characterised by their wit, learning, and wisdom </p>'
        results += '<p> Luna Lovegood, an eccentric girl who played a major role in the Battle of Hogwarts </p>'
        results += '<p> Professor Flitwick, a charms teacher at Hogwarts & well known deuling champion </p>  <br><hr>'
        results += '<h2> A riddle must be answered to enter... </h2>'
        results += '<h3><i>Where do vanished objects go?</i></h3><br><br></div></div></font></div>'
        document.getElementById('results').style.backgroundColor = "#00165e"
      }
      if (json === 'Slytherin') {
        results += '<div> <font color="white"> <br><br> <h1 class="margin-top"> Congratulations, you have been selected as a Slytherin! </h1> </div>'
        results += '<div class="container <div class="row <div class="col-sm">'
        results += '<h2> House History and Information </h2> <p> The founder was the medieval wizard Salazar Slytherin </p> <p> Slytherin corresponds roughly with the element of water due to serpents being commonly associated with the sea </p> <p> The patron ghost of the house is the Bloody Baron </p>'
        results += '<h3> Slytherin Emblem </h3> <img class="margin-top image" src="https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png" />'
        results += '<p>"We Slytherins are brave, yes, but not stupid. For instance, when given the choice, we will always choose to save our own necks." —Phineas Nigellus</p>'
        results += '</div> <div class="col-sm">'
        results += '<h3> A Slytherins Characeristics & Famous Slytherins</h3>'
        results += '<p> Members of this house are characterised by cunning, resourcefulness, and ambition </p>'
        results += '<p> Severus Snape, who Harry said was a "Slytherin and... probably the bravest man I ever knew" </p>'
        results += '<p> Regulus Black, who gave his life in an attempt to destroy one of the Horcruxes of Lord Voldemort </p>  <br><hr>'
        results += '<h2 Some Slytherins share a tendency towards deep, unrequited love. </h2>'
        results += '<br><br></div></div></div>'
        document.getElementById('results').style.backgroundColor = "#033807"
      }
      if (json === 'Gryffindor') {
        results += '<div> <font color="white"> <br><br> <h1 class="margin-top"> Congratulations, you have been selected as a Gryffindor! </h1> </div>'
        results += '<div class="container <div class="row <div class="col-sm">'
        results += '<h2> House History and Information </h2> <p> The founder was Godric Gryffindor </p> <p> The emblematic animal symbol is lion, and blue and bronze are its colours. </p> <p> Gryffindor corresponds roughly to the element of fire, and it is for this reason that the colours scarlet and gold were chosen to represent the house </p>'
        results += '<h3> Gryffindor Emblem </h3> <img class="margin-top image" src="https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png" />'
        results += '<p>"The House of Godric Gryffindor has commanded the respect of the wizarding world for nearly ten centuries." —Minerva McGonagall </p>'
        results += '</div> <div class="col-sm">'
        results += '<h3> A Gryffindors Characeristics & Famous Gryffindors</h3>'
        results += '<p> Members of this house are characterised by their courage, chivalry, and determination </p>'
        results += '<p> Harry Potter, one of the most famous wizards of modern times. Harry saved the wizarding world from Voldemort</p>'
        results += '<p> Headmaster Dumbledore, due to the fact that he had a keen mind and legendary power, Dumbledore became the only wizard that Voldemort ever feared. </p>  <br><hr>'
        results += '<h2> "You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart" —The Sorting Hat </h2>'
        results += '<br><br></div></div></font></div>'
        document.getElementById('results').style.backgroundColor = "#9c1203"
      }
      if (json === 'Hufflepuff') {
        results += '<div> <br><br> <h1 class="margin-top"> Congratulations, you have been selected as a Hufflepuff! </h1> </div>'
        results += '<div class="container <div class="row <div class="col-sm">'
        results += '<h2> House History and Information </h2> <p> The founder was the medieval witch Helga Hufflepuff </p> <p> Hufflepuff corresponds roughly to the element of earth </p> <p> The Head of Hufflepuff is Pomona Sprout and the Fat Friar is the Houses patron ghost </p>'
        results += '<h3> Ravenclaw Emblem </h3> <img class="margin-top image" src="https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png" />'
        results += "<p>“You might belong in Hufflepuff, Where they are just and loyal, And unafraid of toil.” —Unknown</p>"
        results += '</div> <div class="col-sm">'
        results += '<h3> A Hufflepuffs Characeristics & Famous Hufflepuffs</h3>'
        results += '<p> Members of this house are characterised by valuing hard work, dedication, patience, loyalty, and fair play </p>'
        results += '<p> Cedric Diggory - Prefect, Captain and Seeker for the Hufflepuff Quidditch team, Triwizard Champion </p>'
        results += '<p> Hufflepuff house is humble, down-to-earth, and enduring </p> <br><hr>'
        results += '<h2>“Hufflepuffs are particularly good finders!” -Cedric Diggory </h2>'
        results += '<br><br></div></div></font></div>'
        document.getElementById('results').style.backgroundColor = "#e3a000"
      }
      document.getElementById('results').innerHTML = results
      document.getElementById('favorite').reset();
    });
}

document.getElementById('yurawizard').addEventListener('click', onClick);

