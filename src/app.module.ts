import { Module } from '@nestjs/common';

import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';


@Module({
  imports: [EnvConfigModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
