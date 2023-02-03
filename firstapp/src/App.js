import React from 'react';
import './App.css';
import Hero from './components/hero';


const herous = [
  { name: "Geralt", url: "https://games.mail.ru/hotbox/content_files/article/2022/12/14/69d15f1573aa4ff8bd29e1846592e322.jpg", city: "Блавикен", about: "Ведьмак из Школы Волка, профессиональный охотник на монстров, один из лучших фехтовальщиков Севера", friend: "Эскель" },
  { name: "Yennefer", url: "https://i.playground.ru/p/lZN5MwMNWI8GpFWNLP-3ZA.jpeg", city: "Венгерберг", about: "возлюбленная Геральта из Ривии, талантливая и могущественная чародейка, фактически приёмная мать Цириллы. Входила в состав последнего Совета Чародеев, позднее — в Ложу Чародеек." },
  { name: "Ciri", url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/10/Witcher-Ciri-5.jpg", city: "Острова Скеллиге", about: "Дочь цинтрийской принцессы Паветты и князя Дани, внучка Калантэ и Рёгнера из Эббинга, королей Цинтры, дитя Старшей Крови, потомок Лары Доррен аэп Шиадаль и Крегеннана из Леды" },
  { name: "Triss", url: "https://geekhero.ru/wp-content/uploads/2015/07/maxresdefault.jpg", city: "Марибор", about: "чародейка и целительница, один из самых молодых, но вместе с тем самых талантливых магов Севера. Имеет близкие отношения с Геральтом, является подругой Йеннифэр, Цири и ведьмаков из Каэр Морхена." }
]


class HeroApp extends React.Component {
  render() {
    return (
      <div className='HeroApp'>{
        herous.map((hero) =>
          <Hero name={hero.name} url={hero.url} city={hero.city} about={hero.about} friend={hero.friend}></Hero>
        )
      }
      </div>
    );

  }
}

export default HeroApp;
