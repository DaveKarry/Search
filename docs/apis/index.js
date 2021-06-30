

module.exports = {
    paths:{
        '/api/city':{
            get:{
                tags: ['City'],
                description: "Get city list",
                operationId: 'getCityList',
                responses:{
                    '200':{
                        description:"CityList were obtained",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:'#/components/schemas/City'
                                }
                            },
                            'application/xml':{
                                schema:{
                                    $ref:'#/components/schemas/City'
                                }
                            }
                        }
                    }
                }
            },
            post:{
                tags:['City'],
                description: "Create new city",
                operationId: "createCity",
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/CreateCity'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "City created successfully"
                    },
                    '401':{
                        description: "Не авторизован"
                    }
                }
            }
        },
        '/api/city/{id}':{
            get:{
                tags:['City'],
                description: "Get one city by id",
                operationId: "getCityById",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single city id"
                    }
                ],
                responses:{
                    '200':{
                        description:"Запрос выполнен",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:"#/components/schemas/City"
                                }
                            }
                        }
                    }
                }
            }
        },
        '/api/user/registration':{
            post:{
                tags:['User'],
                description: "Create new user",
                operationId: "createUser",
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/CreateUser'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "Пользователь создан"
                    },
                    '401':{
                        description: "Не авторизован"
                    },
                    '400':{
                        description: "Запрос не выполнен"
                    }
                }
            }
        },
        '/api/user':{
            get:{
                tags:['User'],
                description: "list of users",
                operationId: "listUser",
                responses:{
                    '200':{
                        description:"UserList were obtained",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:'#/components/schemas/User'
                                }
                            },
                            'application/xml':{
                                schema:{
                                    $ref:'#/components/schemas/User'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/api/user/{id}':{
            get:{
                tags:['User'],
                description: "get one users",
                operationId: "getUser",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single user id"
                    }
                ],
                responses:{
                    '200':{
                        description:"Запрос выполнен",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:"#/components/schemas/User"
                                }
                            }
                        }
                    }
                }
            }
        },
        '/api/user/login':{
            post:{
                tags:['User'],
                description: "login user",
                operationId: "loginUser",
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/LoginUser'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "Пользователь создан"
                    },
                    '401':{
                        description: "Не авторизован"
                    },
                    '400':{
                        description: "Запрос не выполнен"
                    }
                }
            }
        },
        '/api/user/auth':{
            get:{
                tags:['User'],
                description: "Проверяет авторизацию пользователя",
                operationId: "authUser",
                parameters:[],
                responses:{
                    '200':{
                        description:"Запрос выполнен",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:"#/components/schemas/LoginUser"
                                }
                            }
                        }
                    }
                }
            }
        },
        '/api/user/ban/{id}':{
            put:{
                tags:['User'],
                description: "меняет статус пользователя c BAN на ACTIVE и обратно",
                operationId: "banUser",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single user id"
                    }
                ],
                responses:{
                    '200':{
                        description:"Запрос выполнен",
                    }
                }
            }
        },
        '/api/user/setModer/{id}':{
            post:{
                tags:['User'],
                description: "меняет роль пользователя c USER на MODERATOR и обратно",
                operationId: "setUserRole",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single user id"
                    }
                ],
                responses:{
                    '200':{
                        description:"Запрос выполнен",
                    }
                }
            }
        },
        '/api/event':{
            get:{
                tags: ['Event'],
                description: "Get event list",
                operationId: 'getEventList',
                responses:{
                    '200':{
                        description:"EventList were obtained",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:'#/components/schemas/Event'
                                }
                            },
                            'application/xml':{
                                schema:{
                                    $ref:'#/components/schemas/Event'
                                }
                            }
                        }
                    }
                }
            },
            post:{
                tags:['Event'],
                description: "Create new event",
                operationId: "createEvent",
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/CreateEvent'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "Event created successfully"
                    },
                    '401':{
                        description: "Не авторизован"
                    }
                }
            }
        },
        '/api/event/{id}':{
            get:{
                tags:['Event'],
                description: "Get one event by id",
                operationId: "getEventById",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single event id"
                    }
                ],
                responses:{
                    '200':{
                        description:"Запрос выполнен",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:"#/components/schemas/EventWithCity"
                                }
                            }
                        }
                    }
                }
            },
            delete:{
                tags:['Event'],
                description: "Убирает событие из списка активных",
                operationId: "deactivateEventById",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single event id"
                    }
                ],
                responses:{
                    '200':{
                        description:"Запрос выполнен",
                        content:{
                            'application/json':{
                                schema:{
                                    $ref:"#/components/schemas/Event"
                                }
                            }
                        }
                    }
                }
            },
            put: {
                tags:['Event'],
                description: "Обновляет событие",
                operationId: "updateEvent",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single event id"
                    }
                ],
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/CreateEvent'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description:"Запрос выполнен"
                    }
                }
            }
        },
        '/api/event/{id}/join':{
            post:{
                tags:['Event'],
                description: "залогиненый пользователь присоединяется к мероприятию на странице мероприятия ",
                operationId: "joinEvent",
                parameters:[
                    {
                        name:"id",
                        in:"path",
                        schema:{
                            type: 'integer'
                        },
                        required:true,
                        description: "A single event id"
                    }
                ],
                responses:{
                    '200':{
                        description: "user joined to event"
                    },
                    '401':{
                        description: "Не авторизован"
                    },
                    '404':{
                        description: "Не найдено событие"
                    },
                    '400':{
                        description: "Пользователь уже в событии"
                    }
                }
            }
        }
    }
}