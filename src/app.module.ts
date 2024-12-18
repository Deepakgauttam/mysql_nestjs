import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [UserModule, WebhookModule],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';

// @Module({
//   imports: [UserModule],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}