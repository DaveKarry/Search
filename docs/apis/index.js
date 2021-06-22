

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
                                    $ref:"#/components/schemas/Event"
                                }
                            }
                        }
                    }
                }
            }
        },


    }
}