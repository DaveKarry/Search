

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
        }

    }
}