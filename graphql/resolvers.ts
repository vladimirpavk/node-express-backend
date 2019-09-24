export class GraphqlResolvers{
    public hello(){
        return {
            text: 'Vladimir',
            value: 123
        }
    }

    public findById(){
        return{
            id: 123,
            data: {
                name:'Vladimir',
                lastname: 'Pavković'
            }
        }
    }    
}