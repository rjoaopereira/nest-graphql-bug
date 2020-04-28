import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    a(input: string): [String]
  }
`;
const typeDefs = [query];

@Module({
  imports: [GraphQLModule.forRoot({
    typeDefs
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
