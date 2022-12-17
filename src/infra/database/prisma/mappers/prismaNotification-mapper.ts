import { Notification } from '@app/entities/notification';

export class prismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      categoryId: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
