export class GraphqlResolvers{
    public hello(){
        return {
            text: 'Vladimir',
            value: 123
        }
    }

    public findById(input:{userId:number}){
        const userId = input.userId;
        console.log(userId);

        if(userId < 25){
            const error:Error = new Error('userId less than miniminum.');            
            throw error;
        }

        return{
            id: userId,
            data: {
                name:'Vladimir',
                lastname: 'Pavković'
            }
        }
    }    
}