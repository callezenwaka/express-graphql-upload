import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { Files, addFile } from "./resolvers";

export const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addFile: addFile,
  }
});


export const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    Files: Files,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});