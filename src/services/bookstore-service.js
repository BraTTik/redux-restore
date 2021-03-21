export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            image: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        },
        {
            id: 2, author: 'Michael T. Nygard', title: 'Release it!', price: 23, image: 'https://m.media-amazon.com/images/I/81NCOeT+shL._AC_UY436_FMwebp_QL65_.jpg'
        }
    ]
    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75){
                    reject(new Error('Something bad happened'))
                }else{
                    resolve(this.data)
                }
            }, 700)
        })
    }
}
