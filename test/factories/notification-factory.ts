import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova Solicitação de Amizade'),
    recipientId: 'recipient-2',
    ...override,
  });
}
