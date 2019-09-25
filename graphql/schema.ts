import { buildSchema } from 'graphql';

export class GraphqlSchema{
    public getSchema(){
        return buildSchema(`           
            type ResponseData3{
                name: String!
                lastname: String!
            }

            type ResponseData2{
                id: Int!
                data: ResponseData3
            }

            type ResponseData{
                text: String!
                value: Int!
            }

            type RootQuery {
                hello: ResponseData,                
            }

            type MutationQuery{
                findById(userId:Int):ResponseData2!
            }

            schema {
                query: RootQuery
                mutation: MutationQuery
            }
        `);
    }
}