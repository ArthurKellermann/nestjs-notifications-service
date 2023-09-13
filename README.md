# Notifications Service

Manage and send notifications efficiently with this microservice. Built using Clean Architecture and adhering to the SOLID principles, the service provides a robust foundation for any application requiring notification functionalities.

## Installation

1. Clone the repository:
```
git clone https://github.com/ArthurKellermann/nestjs-notifications-service.git
```

2. Navigate to the project directory:
```
cd notifications-service
```

3. Install the dependencies:
```
npm install
```

4. Set up and start your Kafka and SQLite databases.

5. Update the configuration in `.env` with the necessary details.

6. Run the service:
```
npm start
```

## Lessons Learned

- Implementing Clean Architecture in a Node.js environment requires a disciplined approach, especially when integrating different technologies.
  
- Kafka's streaming capabilities are powerful, especially for systems that require real-time notifications. Integrating it with Node and Nestjs was a learning experience.

- Prisma provides a seamless way to integrate SQLite, abstracting away many of the complexities.

- Adhering to SOLID principles makes the application scalable and maintainable, but also necessitates a deeper understanding of the design patterns involved.

## Tech Stack

- **Programming Language**: TypeScript
- **Backend Framework**: Node.js, Nestjs
- **Database**: Prisma (SQLite)
- **Messaging System**: Kafka
- **Testing**: Jest

## Running Tests

To run tests, run the following command:

```
npm run test
```

## API Reference

**Notifications Controller**: This controller handles all notification-related operations, such as creating, canceling, marking as read/unread, and retrieving notifications for a recipient.

Endpoints include:
- `POST /notifications` - Create a notification.
- `PATCH /notifications/:id/cancel` - Cancel a specific notification.
- `GET /notifications/count/from/:recipientId` - Get the count of notifications for a specific recipient.
- `GET /notifications/from/:recipientId` - Get notifications for a specific recipient.
- `PATCH /notifications/:id/read` - Mark a specific notification as read.
- `PATCH /notifications/:id/unread` - Mark a specific notification as unread.

## Features

- **Real-time Notifications**: Using Kafka's streaming capabilities, send and manage real-time notifications.
  
- **Recipient-based Retrieval**: Retrieve notifications based on the recipient, ensuring a personalized experience.
  
- **Notification Management**: Cancel, mark as read, or unread, ensuring flexibility in managing notifications.

## Contributing

Contributions are always welcome!

## License

MIT
