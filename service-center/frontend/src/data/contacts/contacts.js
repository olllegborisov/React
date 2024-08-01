import img1 from '../../images/contacts/item1.svg'
import img2 from '../../images/contacts/item2.svg'
import img3 from '../../images/contacts/item3.svg'


const contacts = [
    {
        image: img1,
        imageAlt: 'Точка на карте',
        title: 'Сервисные центры',
        text: 'Мы подберем Вам ближайший салон Yamaguchi, где можно сдать технику на диагностику.'
    },
    {
        image: img2,
        imageAlt: 'Часы',
        title: 'Время работы',
        text: 'Получить консультацию можно по телефону сервисного центра:',
        phone: '7 (800) 222-39-06',
        text2: 'Пн-пт: 9.00-18.00',
        text3: 'Сб: 9.00-17.00'
    },
    {
        image: img3,
        imageAlt: 'Обмен',
        title: 'Трейд-Ин',
        text: 'Для оценки Вашего оборудования и условий обмена обращайтесь по телефону',
        phone: '7 (800) 222-53-68',
        text2: 'Подробнее на странице Trade-In'
    },
]

export default contacts