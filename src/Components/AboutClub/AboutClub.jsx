import { Container, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './AboutClub.styles';


const AboutClub = () => {
  const styles = useStyles();

  return (
    <Container className={styles.main}>
      <Paper variant='elevation' elevation={5} className={styles.paperStyle}>
        <div className={styles.topDiv}>
          <Typography variant='h4' className={styles.title}>За клуба</Typography>
        </div>
        
        <p>Спортен Клуб СК.Червена звезда – София е учреден на 26.11.2002г. в град София.</p>
        <p>За Председател и Секретар съответно бяха избрани Пламен Гълъбов и Микулаш Фурнаджиев.</p>
        <p>Завършили Национална Спортна Академия „Васил Левски” гр.София Клуб СК.червена звезда – София е вписан в националния регистър на лицензираните спортни организации и членуващите в тях спортни клубове под №1-074-008 / 30.03.2004, като член на "Българска
            Федерация по Хокей Лед". Целитe на клуба са да развива и пополизира хокея на лед и ин-лаин хокея на територията на София.</p>
        <p>
        </p>
        <p>Със създаването на спортен клуб СК “Червена Звезда-София” се цели последователно и устойчиво развитие на комплекс от социални, управленски, методически, материално-технически, маркетингови и финансови условия за перспективно изграждане на надеждна система,
            която да повиши интереса и желанието на децата да се занимават активно с хокей на лед и ин-лайн хокей, на територията на град София.</p>
        <p>Целта на този процес е чрез прилагане на съвременни ефективни форми и средства , тренировки , състезания и турнири по хокей на лед и ин-лайн хокей да се постигне :</p>
        <ul>
            <li>подобряването на здравето, физическото развитие и дееспособността на децата .</li>
            <li>разработване на целеви програми за насочени към по голяма част от децата чрез подходящи условия и форми за системни занимания по хокей на лед и ин – лайн хокей.</li>
            <li>по нататъшно утвърждаване на хокейната игра като средство за отдих,развлечение, емоционално преживяване и пълноценно използване на свободното време.</li>
            <li>възходящо издигане на спортно-техническото равнище на децата в представителния отбор на СК”Червена Звезда-София” с оглед постигане на високи спортни резултати, на регионално равнище.</li>
        </ul>
        <p>
        </p>
        <p>Това извежда на преден план необходимостта от тясно взаимодействие на СК” Червена Звезда-София”с Министерството на младежта и спорта, Българска Федерация по Хокей на Лед, областните и общински администрации, Българския олимпийски комитет, българските
            спортни федерации, спортните или обединени спортни клубове и други не правителствени организации.</p>
        <p>
        </p>
        <p>Осъществяването на дейноста СК” Червена Звезда-София” цели да осигури условия за системни спортни занимания на децата и младите хора , които да изградят у тях уважение към здравето и живота, силен характер, воля за победа, чувство за отговорност и умения
            за работа в екип. Изграждането на тези личностни качества са предпоставка за пълноценната им реализация в обществото.</p>
        <ul>
            <li>разширяване обхвата на деца в обучение и практикуване на хокейната игра.</li>
            <li>създаване маркетингова система (в т.ч. реализация на услуги, реклама и др.) осигуряващи необходимите финансови постъпления.</li>
            <li>обезпечаване и координиране усилията на СК” Червена Звезда-София”с държавни, общински и частни организации, за изграждане, подържане, реконструкция и модернизация на спортните съоръжения за обучение, тренировъчна и спортно състезателна дейност.</li>
        </ul>
        <p>
        </p>
        <p>Треньорите в хокей клуб СК.червена звезда – София</p>
        <p>В хокей клуб СК.червена звезда – София , залагаме на специалисти завършили висше спортно образование,който да се занимават професионално със спортистите в клуба.</p>
        <p>Пламен Гълъбов - Завършил Национална Спортна Академия</p>
        <p>Микулаш Фурнаджиев - Завършил Национална Спортна Академ</p>
      </Paper>
    </Container>
  )
}

export default AboutClub;