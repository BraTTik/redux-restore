export default class BookstoreService {
    getBooks = () => {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler'
            },
            {
                id: 2, author: 'Michael T. Nygard', title: 'Release it!'
            }
        ]
    }
}