import React from 'react';
import header from './header.module.css'
import shape from './Shape.svg'
import image from './Logo-Regular.svg'


import Card from "../Components/Card/Card";




const Header = () => {
    return (
        <div>
            <div className={header.wrap}>
                <div className={header.image}><img src={image} alt="Logo"/></div>

            </div>
            <div className={header.parfilter}><a href="#"><img className={header.iconfilter} src={shape} alt="Filter"/></a>
            <a className={header.somelink} href=""><span>Фильтры</span></a>
            </div>
            <Card about = {'Продавец-консультант (ТРЦ Дарынок, ТРЦ Рив Гош,ТРЦ Нью Вей, м. Дарница)'}
                  moneyfowork = {'10 000 - 15 000 ₴ '}
                  percent={'Ставка + процент от продаж'}
                  ua={'FISHKI.UA'}
                  city ={'Киев'}
                  fitcha={'Обеды в офис'}
                  fitcha2={'Гибкий график'}
                  fitcha3={'Компенсация спортзала'}
            />
            <Card
                about={'Фронт-енд разработчик (прс.Шевченко, Корпус № 1)'}
                moneyfowork = {'25 000 - 50 000 ₴'}
                percent ={'В зависимости от умений'}
                ua={'WEBIT.UA'}
                city = {'Cумы'}
                fitcha={'Чай и кофе'}
                fitcha2={'Английский'}
                fitcha3={'Карьерный рост'}
            />
            <Card
                about={'Веб дизайнер (ул.Маршакова, дом 12)'}
                moneyfowork = {'15 000 - 30 000 ₴'}
                percent ={'+ Система бонусов'}
                ua={'webstudio.com'}
                city = {'Чернигов'}
                fitcha={'Обед'}
                fitcha2={'Спортзал'}
                fitcha3={'Помощь ментора'}
            />
            <Card
                about={'Бек-енд разработчик (проспект Мира 22, здание 3)'}
                moneyfowork = {'20 000 - 60 000 ₴'}
                percent ={'Зависит от умений'}
                ua={'phpdevelopers.com'}
                city = {'Харьков'}
                fitcha={'Печенье и чай'}
                fitcha2={'Тренинги'}
                fitcha3={'Бесплатная йога'}
            />
            <Card
                about={'Мануальный тестировщик (ул.Соборная 14, дом 88)'}
                moneyfowork = {'20 000 - 35 000 ₴'}
                percent ={'Зависит от вашего скила'}
                ua={'qasupports.com.ua'}
                city = {'Сумы'}
                fitcha={'Обучение'}
                fitcha2={'Интернатура'}
                fitcha3={'Тренинги по развитию'}
            />
            <Card
                about={'Автотестировщик (Джава скрипт) (ул.Гетьмана Сагайдачного, дом 33)'}
                moneyfowork = {'40 000 - 80 000 ₴'}
                percent ={'Система наград и премий'}
                ua={'testersmamba.ua'}
                city = {'Винница'}
                fitcha={'Тренинги'}
                fitcha2={'Корпоративы'}
                fitcha3={'Компенсация курсов'}
            />
            <Card
                about={'Копи райтер (пер.Ломоносова, дом 156, корпус 2)'}
                moneyfowork = {'10 000 - 40 000 ₴'}
                percent ={'Зависит от кол-ва символов'}
                ua={'testersmamba.ua'}
                city = {'Львов'}
                fitcha={'Удаленно'}
                fitcha2={'Больничные'}
                fitcha3={'Система бонусов'}
            />
            <Card
                about={'Оператор колл центра (прс. Свободы, дом 15)'}
                moneyfowork = {'20 000 - 30 000 ₴'}
                percent ={'Зависит от Вас'}
                ua={'callmebaby.ua'}
                city = {'Кременчуг'}
                fitcha={'Удаленно'}
                fitcha2={'Тренинги'}
                fitcha3={'Карьерный рост'}
            />
            <Card
                about={'Арбитражник (ул.Институтская , здание 7)'}
                moneyfowork = {'30 000 - 60 000 ₴'}
                percent ={'Гибкая система бонусов и премий'}
                ua={'trafic.ua'}
                city = {'Запорожье'}
                fitcha={'Тренинги'}
                fitcha2={'Обучение'}
                fitcha3={'Система лояльности'}
            />
            <Card
                about={'Фул-стек программист (метро Лесная , здание 79, корпус 2)'}
                moneyfowork = {'50 000 - 100 000 ₴'}
                percent ={'В зависимости от Ваших навыков и умений'}
                ua={'gopit.com'}
                city = {'Полтава'}
                fitcha={'Обеды'}
                fitcha2={'Чай-кофе фри'}
                fitcha3={'Пейнтболл'}
            />









            `




        </div>
    );
};

export default Header;