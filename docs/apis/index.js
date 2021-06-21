

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
            }
        }
    }
}