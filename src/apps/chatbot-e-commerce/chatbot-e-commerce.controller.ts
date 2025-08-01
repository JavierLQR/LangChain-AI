import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common'
import { ChatbotECommerceService } from './chatbot-e-commerce.service'
import { ChatbotSessionsDto } from './dto/chatbot-sessions.dto'

@Controller({
  version: '1',
  path: 'chatbot-e-commerce',
})
export class ChatbotECommerceController {
  constructor(
    private readonly chatbotECommerceService: ChatbotECommerceService,
  ) {}

  @Get('create-index')
  @HttpCode(HttpStatus.CREATED)
  async createIndex(@Query('name') name: string) {
    return await this.chatbotECommerceService.createIndex(name)
  }

  @HttpCode(HttpStatus.OK)
  @Get('insert-data-in-index')
  insertAllProductsInIndex(@Query('name') name: string) {
    return this.chatbotECommerceService.insertAllProductsInIndex(name)
  }

  @HttpCode(HttpStatus.OK)
  @Post('chat-bot')
  chatBotEcommmerce(@Body() chatbotSessionsDto: ChatbotSessionsDto) {
    console.log({ chatbotSessionsDto })
    return this.chatbotECommerceService.chatBotEcommmerce(chatbotSessionsDto)
  }

  @HttpCode(HttpStatus.OK)
  @Get('chat-ecommerce-bot/find-chat-history')
  findChatHistory(@Query() findChatHistoryDto: ChatbotSessionsDto) {
    return this.chatbotECommerceService.findChatHistory(findChatHistoryDto)
  }
}
