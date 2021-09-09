import React, { useEffect, useState } from "react";
import { Container } from '@material-ui/core';
import { useStyles } from "./NewsBox.styles";
import { BrowserView, MobileView } from "react-device-detect";

const tempNews = [
  {
    id: 1,
    date: '2021-03-12',
    title: 'Някакво заглавие',
    text: `Международната федерация по хокей на лед (IIHF) обяви, че хокеистите от НХЛ ще участват на олимпийските игри в Пекин през периода 4-20 февруари 2022 г. Изглежда е постигната договореност между IIHF, НХЛ и профсъюзът на играчите в НХЛ. Както е известно, звездите от Лигата участваха на олимпийските игри от 1998 до 2014 г., но управата на НХЛ отказа да пусне играчите за Олимпиадата в Пьончан през 2018 г. НХЛ от своя страна обяви, че си запазва правото да не допусне участие на играчите от Лигата на олимпийските игри в Пекин, ако ситуацията с разпространените на COVID-19 се влоши. 
    „Знам, че мога да говоря от името на всички хокейни фенове в света и с удоволствие да приветстваме решението за връщането на най-добрите хокеисти на олимпийските игри. Проведохме много конструктивни дебати. Положихме много усилия, за да приключат успешно. Искам да благодаря на всички заинтересувани страни за подкрепата“, заяви президентът на IIHF Рене Фазел.
    „Много добре разбираме с каква страст играчите от НХЛ жадуват да представят своите държави на олимпийските игри. Много се радваме, че успяхме да постигнем споразумение, което ще позволи отново да видим битките на най-добрите в света на олимпийско равнище“, заяви заместник-комисионерът на НХЛ Бил Дейли.`,
    photo: './images/temp1.jpg',
  },
  {
    id: 2,
    date: '2021-10-12',
    title: 'Пак Някакво заглавие',
    text: 'Нищо особено днес',
    photo: './images/temp2.jpg',
  },
  {
    id: 3,
    date: '2021-11-15',
    title: 'Още Някакво заглавие, но този път да мине на два реда',
    text: 'Нищо особено днес',
    photo: './images/temp3.jpg',
  },
  {
    id: 4,
    date: '2021-09-16',
    title: 'Отново Някакво заглавие',
    text: 'Нищо особено днес',
    photo: './images/temp4.jpg',
  },
  {
    id: 5,
    date: '2021-12-20',
    title: 'Какво да е заглавие',
    text: `Ръководството на НХЛ ще вземе решение за участието на играчите от Лигата на олимпийските игри в Пекин 2022 през тази седмица. Това обяви на профила си в социалните мрежи журналистът Джон Шенън, който е известен с връзките си сред хокейните среди в Северна Америка. За момента няма изявено предимство относно това дали НХЛ да пусне или да не пусне играчите си на Олимпиадата`,
    photo: './images/temp5.jpg',
  }
]


const NewsBox = ({type}) => {
  const styles = useStyles();
  const [currentNews, setCurrentNews] = useState(0);

  const activeNew = tempNews[currentNews];

  useEffect(() => {
    const checkForMessages = setInterval(() => {
      if (currentNews >= tempNews.length - 1) {
        setCurrentNews(0);
      } else {
        setCurrentNews(currentNews + 1)
      }
    }, 5000);

    return () => clearInterval(checkForMessages);
  }, [currentNews]);
  
  return (
    <>
      <BrowserView>
        <Container className={styles.main}>
          <span style={{position: 'relative', fontSize: 0}}>
            <img className={styles.imageStyle} src={tempNews[currentNews].photo} alt='hockey'/>
            <div className={styles.mainNew}>
              <div className={styles.mainNewContainer}>
                <div className={styles.mainDate}>
                {new Date(activeNew.date).toLocaleString('bg-BG', { day: '2-digit' })}
                  <div className={styles.mountDiv}>
                  {new Date(activeNew.date).toLocaleString('bg-BG', { month: 'long' })}
                  </div>
                </div>
                <div className={styles.textRight}>
                  <div className={styles.title}>{activeNew.title}</div>
                  <div className={styles.text}>{`${activeNew.text.slice(0, 145)} ...`}</div>
                </div>
                
              </div>
            </div>
            <div className={styles.arrows}>
              {
              tempNews.map((el, index) => (
                <div key={el.id} className={index === currentNews ? styles.marker : null}></div>
                ))
              }
            </div>
          </span>
          <div className={styles.rightSide}>
            {
              tempNews.map((el, index) => (
                <Container className={index === currentNews ? styles.smallNewsActive: styles.smallNews} key={el.id}>
                  <div style={{display: 'flex', flexDirection: 'column', height:'100%', justifyContent: 'space-between'}}>
                    <div>
                      <div className={index === currentNews ? styles.dateStyleActive : styles.dateStyle}>
                        {new Date(el.date).toLocaleString('bg-BG', {year: 'numeric', month: 'long', day: 'numeric'})}
                      </div>
                      <div className={styles.resumeStyle}>{el.title}</div>
                    </div>
                    {
                      currentNews === index || index === currentNews - 1
                      ? null
                      : <div className={styles.lineStyle}></div>
                    }
                  </div>
                </Container>
              ))
            }
          </div>
        </Container>
      </BrowserView>
      <MobileView>
        <div className={styles.mobileMain}>
          <div className={styles.smallDate}>
            <div className={styles.mainDateMobile}>
              {new Date(activeNew.date).toLocaleString('bg-BG', { day: '2-digit' })}
              <div className={styles.mountDivMobile}>
                {new Date(activeNew.date).toLocaleString('en-US', { month: 'short' })}
              </div>
            </div>
          </div>
          <div className={styles.newsBody}>
            <div className={styles.titleMobile}>{activeNew.title.slice(0, 50)}</div>
            <div className={styles.textMobile}>{`${activeNew.text.slice(0, 104)} ...`}</div>
          </div>
          <img className={styles.imageStyleMobile} src={tempNews[currentNews].photo} alt='hockey'/>
        </div>
      </MobileView>
    </>
  )
}

export default NewsBox;
