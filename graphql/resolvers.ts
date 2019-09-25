export class GraphqlResolvers{
    public hello(){
        return {
            text: 'Vladimir',
            value: 123
        }
    }

    public findById(userId:number){
        console.log(userId);
        return{
            id: 123,
            data: {
                name:'Vladimir',
                lastname: 'Pavković'
            }
        }
    }    
}