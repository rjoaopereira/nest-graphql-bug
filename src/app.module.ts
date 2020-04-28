import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    translations(input: TranslationsInput): [Translations]
    applications(input: ApplicationsInput): Applications
    clientRequest(input: ClientRequestInput!): ClientRequest
    appSummary(input: AppSummaryInput!): AppSummary
    menu(tenantId: Int!, languages: [String]): Menu
    tenants: [Tenant]
    scopes(input: ApplicationTypeInput): [Scope]
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
