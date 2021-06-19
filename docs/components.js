
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

            }

        }
    }
}
