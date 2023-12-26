import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import wait from 'src/utils/wait';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private qoutesService: QuotesService) {}

  @Get()
  findAll() {
    return this.qoutesService.findAll();
  }

  @Get('random')
  findRandom() {
    return this.qoutesService.findRandom();
  }

  @Get('author/:author')
  findOne(@Param('author') author: string) {
    return this.qoutesService.findByAuthor(author);
  }

  @Post()
  async create(@Body() createQuoteDto: CreateQuoteDto) {
    console.log(createQuoteDto);
    return this.qoutesService.create(createQuoteDto);
  }
}
