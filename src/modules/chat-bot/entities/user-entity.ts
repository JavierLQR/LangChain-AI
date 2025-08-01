import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ _id: false })
class RetrievedProduct {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  score: number
}

@Schema({
  timestamps: true,
  collation: {
    locale: 'en',
    strength: 2,
    normalization: true,
  },
  collection: 'chat_history_user',
})
export class ChatHistoryUserEntity extends Document {
  @Prop({ required: true, unique: true, type: String })
  sessionId: string

  @Prop({ required: true, type: String })
  userQuestion: string

  @Prop({ required: true, type: String })
  assistantResponse: string

  @Prop({ type: [RetrievedProduct], required: true })
  retrievedProducts: RetrievedProduct[]

  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  userId: string

  @Prop({ type: Boolean, default: false, required: true })
  isUser: boolean

  @Prop({ required: true, type: String })
  role: 'user' | 'assistant'

  @Prop()
  ip?: string

  @Prop({ type: [Number] })
  embeddingUsed?: number[]

  @Prop()
  messageId?: string

  @Prop()
  tokensUsed?: number

  @Prop()
  latencyMs?: number

  @Prop()
  modelName?: string

  @Prop()
  promptTemplate?: string
}

export const ChatHistoryUserSchema = SchemaFactory.createForClass(
  ChatHistoryUserEntity,
)
