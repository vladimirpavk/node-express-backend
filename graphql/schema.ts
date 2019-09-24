import { buildSchema } from 'graphql';

export class GraphqlSchema{
    public getSchema(){
        return buildSchema(`
            type ResponseData{
                text: String!
                value: Int!
            }

            type ResponseData3{
                name: String!
                lastname: String!
            }

            type ResponseData2{
                id: Int!
                data: ResponseData3
            }

            type RootQuery {
                hello: ResponseData,
                findById: ResponseData2
            }

            schema {
                query: RootQuery
            }
        `);
    }
}