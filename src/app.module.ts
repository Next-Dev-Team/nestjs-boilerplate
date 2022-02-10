import { Module } from '@nestjs/common';

import { ConfigModule } from '@lib/config';
import { FirebaseAdminModule } from '@lib/firebase-admin';
import { GraphQLModule } from '@lib/graphql';
import { I18NextModule } from '@lib/i18next';
import { IORedisModule } from '@lib/ioredis';
import { JwtModule } from '@lib/jwt';
import { MongooseModule } from '@lib/mongoose';
import { MqttModule } from '@lib/mqtt';
import { RabbitMQModule } from '@lib/rabbitmq';
import { ScheduleModule } from '@lib/schedule';
import { SocketModule } from '@lib/socket';
import { TypeOrmModule } from '@lib/typeorm';

import { ApisModules } from './api/api.module';
import { AppController } from './app.controller';
import { GraphQLModules } from './graphql/graphql.module';
import { SocketProvidersModule } from './socket-provider/socket-provider.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    MongooseModule,
    TypeOrmModule,
    I18NextModule,
    GraphQLModule,
    ConfigModule,
    IORedisModule,
    ApisModules,
    JwtModule,
    GraphQLModules,
    SocketModule,
    SocketProvidersModule,
    // MediaStreamModule,
    FirebaseAdminModule,
    // HttpModule,
    MqttModule,
    RabbitMQModule,
    ScheduleModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
