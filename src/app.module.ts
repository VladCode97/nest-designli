import { Module } from '@nestjs/common';
import { JsonTransformerModule } from './json-transformer/json-transformer.module';
import { EmailJsonExtractorModule } from './email-json-extractor/email-json-extractor.module';

@Module({
  imports: [JsonTransformerModule, EmailJsonExtractorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
