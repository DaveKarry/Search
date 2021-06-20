
module.exports = {
    components:{
        schemas: {
            City:{
                type: 'object',
                properties:{
                    Id:{
                        type: 'integer',
                        description: 'Уникальный идентифкатор'
                    },
                    Name:{
                        type: 'string',
                        description: 'Название города',
                        required: true
                    },  
                    Description:{
                        type: 'string',
                        description: 'Описание города',
                        required: true
                    }  
                },
                example:{
                    Id: 6432,
                    Name: "Surgut",
                    Description: "Surgut District"
                }          
            },
            User:{
                type: 'object',
                properties:{
                    Id:{
                        type: 'integer',
                        description: 'Уникальный идентифкатор'
                    },
                    Uname:{
                        type: 'string',
                        description: "Имя пользователя",
                        required: true
                    },
                    Sname: {
                        type: 'string',
                        description: "Фамилия пользователя",
                        required: true
                    },
                    Tname:{
                        type: 'string',
                        description: "Отчество пользователя"
                    },
                    Email:{
                        type: 'string',
                        description: "Почта пользователя",
                        required: true
                    },
                    Number:{
                        type: 'string',
                        description: "Номер пользователя",
                        required: true
                    },
                    Password:{
                        type: 'string',
                        description: "Проль пользователя",
                        required: true
                    },
                    Role: {
                        type: 'string',
                        description: 'Роль пользователя: USER,ADMIN,MODER',
                    },
                    Status:{
                        type: 'string',
                        description: 'Статус пользователя: ACTIVE, BAN',
                    }
                },
                example:{
                    Id: 234,
                    Email: 'user123@gmail.com',
                    Number: '88005553535',
                    Password: '_User123',
                    Uname: 'Ivan',
                    Sname: 'Ivanov',
                    Tname: 'Ivanich',
                    Role: 'USER',
                    Status: 'BAN'
                }

            },
            Event:{
                type: 'object',
                properties:{
                    Id:{
                        type: 'integer',
                        description: 'Уникальный идентифкатор'
                    },
                    Name:{
                        type: 'string',
                        description: 'Название поиска',
                        required: true
                    },
                    Target:{
                        type: 'string',
                        description: 'Цель поиска, подробности о человеке',
                        required: true
                    },
                    Date:{
                        type: 'string',
                        pattern: 'YYYY-MM-DD',
                        description: 'Дата начала поиска',
                        required: true

                    },
                    Status:{
                        type: 'string',
                        description: 'Состояние поиска: ACTIVE, END'
                    },
                    Description:{
                        type: 'string',
                        description: 'Дополнительные факты/параметры поиска',
                        required: true
                    },
                    CityId:{
                        type: 'integer',
                        description: 'id города',
                        required: true
                    }
                },
                example:{
                    Id: 234,
                    Name: 'Поиск пр городе N',
                    Target: 'Девушка 26 лет, Мария Машина',
                    Date: '2021-10-03',
                    Status: 'ACTIVE',
                    Description: 'Потерялась в окрестностях леса, пока искала грибы',
                    CityId: 54
                }

            }
        }
    }
}
