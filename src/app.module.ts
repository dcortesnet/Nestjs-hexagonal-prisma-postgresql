import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({
  imports: [DomainModule, ApplicationModule, InfraestructureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
