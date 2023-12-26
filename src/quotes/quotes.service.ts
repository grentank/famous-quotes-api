import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import wait from 'src/utils/wait';
import { QuoteT } from './types/quote';

@Injectable()
export class QuotesService {
  private readonly quotes: QuoteT[] = [];

  async create(quote: QuoteT) {
    const newQuote = await wait<QuoteT>(quote, 100);
    this.quotes.push(newQuote);
    return newQuote;
  }

  async findByAuthor(author: string) {
    const quotes = await wait<QuoteT[]>(
      this.quotes.filter((quote) => quote.author === author),
      100,
    );
    return quotes;
  }

  async findRandom() {
    // throw new HttpException('Some custom error', HttpStatus.FORBIDDEN);
    throw new HttpException({ hello: 'world' }, HttpStatus.FORBIDDEN, { cause: 'New cause' });
    const randomQuote = await wait<QuoteT>(
      this.quotes[Math.floor(Math.random() * this.quotes.length)],
      100,
    );
    return randomQuote;
  }

  async findAll() {
    const allQuotes = await wait<QuoteT[]>(this.quotes, 100);
    return allQuotes;
  }
}
