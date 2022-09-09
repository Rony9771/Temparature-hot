console.log('clicked')

const apiKey = `a9f05162382ea1f9ac2b92c69f4d786f`;

const loadTemparature = city =>{
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  fetch(url)
  .then (res => res.json())
  .then (data =>displayTemp(data))
}

const displayTemp = data=>{
  console.log(data)
  innerTextById('tempshow',data.main.temp);
  innerTextById('condition',data.weather[0].main)
  //showTemp.innerText = data.main.temp;
}

const innerTextById = (id,text) =>{
  const showTemp = document.getElementById(id)
  showTemp.innerText = text;

}

    document.getElementById('search-city').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value;
    //set city
    document.getElementById('city').innerText = city;
    loadTemparature(city);

    
    })

loadTemparature('Dhaka');