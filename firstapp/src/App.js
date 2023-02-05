import React from 'react';
import './App.css';
import Hero from './components/hero';
import HeroLogo from './components/logo';

const herous = [
  { name: "Geralt", url: "https://games.mail.ru/hotbox/content_files/article/2022/12/14/69d15f1573aa4ff8bd29e1846592e322.jpg", city: "Не известно", about: "Ведьмак из Школы Волка, профессиональный охотник на монстров, один из лучших фехтовальщиков Севера", friend: "Эскель" },
  { name: "Yennefer", url: "https://i.playground.ru/p/lZN5MwMNWI8GpFWNLP-3ZA.jpeg", city: "Венгерберг", about: "Возлюбленная Геральта из Ривии, талантливая и могущественная чародейка, фактически приёмная мать Цириллы. Входила в состав последнего Совета Чародеев, позднее — в Ложу Чародеек." },
  { name: "Ciri", url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/10/Witcher-Ciri-5.jpg", city: "Острова Скеллиге", about: "Дочь цинтрийской принцессы Паветты и князя Дани, внучка Калантэ и Рёгнера из Эббинга, королей Цинтры, дитя Старшей Крови, потомок Лары Доррен аэп Шиадаль и Крегеннана из Леды" },
  { name: "Triss", url: "https://geekhero.ru/wp-content/uploads/2015/07/maxresdefault.jpg", city: "Марибор", about: "Чародейка и целительница, один из самых молодых, но вместе с тем самых талантливых магов Севера. Имеет близкие отношения с Геральтом, является подругой Йеннифэр, Цири и ведьмаков из Каэр Морхена." },
  { name: "Vesemir", url: "https://dc-marvel.ru/wp-content/uploads/zagruzhennoe.jpg", city: "Каэр Морхен", about: "Сарейший, самый опытный и уважаемый ведьмак из Школы Волка, являвшийся её мастером и хранителем традиций Цеха.чародейка и целительница, один из самых молодых, но вместе с тем самых талантливых магов Севера. Имеет близкие", friend: "Геральд" },
  { name: "Eskel", url: "https://gwentguru.info/assets/images/guide/2018/eskel-title.jpg", city: "Ривия", about: "Ведьмак из Школы Волка и друг детства Геральта,опытный и искусный охотник на чудовищ, ничем не уступающий Геральту, однако он не снискал такую славу, как его коллега по цеху.", friend: "Геральд" },
  { name: "Meve", url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/02/Meve.jpg", city: "Лирия", about: "Также известная как Белая Королева,вдовствующая королева Лирии и Ривии.Известна среди правителей Северных королевств своей мудростью, женской интуицией и красотой" },
  { name: "Kaer Morhen", url: "https://letsplayers.ru/wp-content/uploads/2020/04/112678_8G7YpYqbGE_witcher3_2015_05_20_23_49_57_11.jpg", city: "Каррерас", about: "Чародейка, бывшая советница короля Темерии Фольтеста.", friend: "Трисс" }

]


class HeroApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroLogo></HeroLogo>
        <div className='HeroApp'>{
          herous.map((hero) =>
            <Hero name={hero.name} url={hero.url} city={hero.city} about={hero.about} friend={hero.friend}></Hero>
          )
        }
        </div>
      </React.Fragment>
    );

  }
}


export default HeroApp;
