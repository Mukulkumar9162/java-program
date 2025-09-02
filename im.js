// import React, { useState, useEffect } from 'react';
// import { View, Text, Image } from 'react-native';

// const HomeScreen = () => {
//   const [weatherData, setWeatherData] = useState({});

//   useEffect(() => {
//     // Fetch weather data from API
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=London,UK&units=metric&appid=YOUR_API_KEY')
//    .then(response => response.json())
//  .then(data => setWeatherData(data));
//   }, []);

//   return (
//     <View>
//       <Text>Current Weather</Text>
//       <Image source={{ uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }} />
//       <Text>{weatherData.main.temp}°C</Text>
//     </View>
//   );
// };

// export default HomeScreen;
// let inp = document.querySelector('input')
// let btn = document.querySelector('button')
// let div = document.querySelector('div')

// btn.addEventListener('click', () =>{
// let searchText = inp.value

//         fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//             .then((res) => {
//                 return res.json()
//             }).then((data) => {
//                 console.log(data[0], "h")
               
//                     console.log(data[0], "heehee")
//                     let img = document.createElement('img')
//                     let h2 = document.createElement('h2')
//                     h2.innerText = data[0].show.name
//                     img.setAttribute('src',data[0].show.image.medium)

//                     div.append(img, h2)
//                 })
//             })
// let arr=(1,2,3,4,5,6,7
//     let [a,b,cs]=arr
//     console.log(a);
// )

// let obj={
//     id:1,
//     name:"mukul",
//     age:19
// }

// let {id}=Obj
// console.log(obj.id);


function sum(a,b,c,...num){
    console.log();

}
sum(5,34,54,8,9,5);

