//Example fetch 
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const url = 'https://api.codetabs.com/v1/proxy?quest=https://shibe.online/api/shibes?count=10'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let randoNum = Math.floor(Math.random()* 9 + 1)
        document.querySelector('img').src = data[0]
        //document.querySelector('h3').innerText.data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}
