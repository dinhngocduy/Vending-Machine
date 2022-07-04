import { User } from './user';

export interface GetMessagesRes {
  attachments: [];
  createdAt: string;
  id: string;
  message: string;
  messageStatus: string;
  messageType: string;
  parent: GetMessagesRes;
  reaction: null;
  status: string;
  user: User;
  text: string;
  // parent: GetMessagesRes
}