import mongoose from 'mongoose';

// importing our model s/* o */ we can work with it.
import blog from './model/Blog.js';


// creating a connection to the mongodb atlas.// creating a connection.
mongoose.connect("mongodb+srv://eric-wg:g0pRt2BO2uPWtKh7@cluster0.tpit2ek.mongodb.net/")
// 
try{
    // creating instances of objects with our mode.

    // using the new key word.
    // const article = new blog({
        // title: 'log',
        // slug: 'first-of-first',
        // published: false,
        // author: 'Erick',
        // content: 'This is a test content, out',
        // tags: ['First blogs', 'Testing', 'tests'],
        // createdAt: Date.now(),
        // updatedAt: Date.now(),
        // comments: [{
            // user: 'Erick',
            // content: 'some awesome blog here',
            // votes: 300
            // }],
    // })

    
    // inserting our blog-post into the database.
    // we call the article and add the save method to insert it o outr db.

    // await article.save()
    // console.log(`Successfully added ${await blog.findOne({title:'log'})}`)

    // utilizing the create() method to create instances of data objects.
    
    
    
    // Updating fields.
    // article.title = 'new title'


}
catch{
    (e)=>{console.log(e)}
}


// Find a single blog post, you need to await the response otherwise you'll expose your data, including your atlas username and password.

// const firstArticle = await blog.findOne({})
// console.log(`Finding the fist article:\n${firstArticle}`)

// Finding documents by Id. ("6654925f539672aa33dfcbe4")
// const articleByID = await blog.findById("6654925f539672aa33dfcbe4")
// console.log(`Fetched by ID:\n${articleByID}`);


// Projecting Document fields [type slug author]. ("6654925f539672aa33dfcbe4")
// const articleProjection = await blog.findById("6654925f539672aa33dfcbe4", 'title slug author')
// console.log(`\nProjection of: \n${articleProjection}`);






// Finding and updating documents using the findOneAndUpdate() method.

// convention of reading and updating documents.
// model.findOneAndUpdate(query, update, options)
// query = filtering and finding specific data.
// update = updating specific fields / data.
// options = mandatory object that specifies an object containing a new key equating to a true value. (If not provided, the update will not execute.)



const query = {title: 'log'}
const update = {title: 'updated title'}
const options = {new:true}

const updatedArticle = await blog.findOneAndUpdate(query, update, options)
console.log(`Updated the article title from [${query.title}] to [${update.title}: ${updatedArticle}]`)

















