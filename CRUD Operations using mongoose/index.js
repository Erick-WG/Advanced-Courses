import mongoose from 'mongoose';

// importing our model s/* o */ we can work with it.
import blog from './model/Blog.js';


// creating a connection to the mongodb atlas.// creating a connection.
mongoose.connect("mongodb+srv://eric-wg:g0pRt2BO2uPWtKh7@cluster0.tpit2ek.mongodb.net/")
//
try{
    // creating instances of objects with our mode.

    // using the new key word.
    const article = new blog({
        title: 'log',
        slug: 'first-of-first',
        published: false,
        author: 'Erick',
        content: 'This is a test content, out',
        tags: ['First blogs', 'Testing', 'tests'],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        comments: [{
            user: 'Erick',
            content: 'some awesome blog here',
            votes: 300
            }],
    })

    const article2 = new blog({
        title: 'log',
        slug: 'first-of-first',
        published: false,
        author: 'Dave',
        content: 'This is a test content, out from Dave',
        tags: ['First blogs', 'Testing', 'tests'],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        comments: [{
            user: 'Erick',
            content: 'some awesome blog here',
            votes: 300
            }],
    })

    const article3 = new blog({
        title: 'log',
        slug: 'first-of-first',
        published: false,
        author: 'Dave',
        content: 'This is a test content, out from Dave',
        tags: ['First blogs', 'Testing', 'tests'],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        comments: [{
            user: 'Erick',
            content: 'some awesome blog here',
            votes: 300
            }],
    })
    // inserting our blog-post into the database.
    // we call the article and add the save method to insert it our db.

    await article.save()
    await article2.save()
    await article3.save()
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



// const query = {title: 'log'}
// const update = {title: 'updated title'}
// const options = {new:true}

// const updatedArticle = await blog.findOneAndUpdate(query, update, options)
// console.log(`Updated the article title from [${query.title}] to [${update.title}: ${updatedArticle}]`)



//! Deleting articles from the database.
/*

*Common Methods for Deleting Documents:

!deleteOne(): This method is used to delete a single document that matches the provided filter.

!deleteMany(): This method removes all documents that match the specified filter criteria.

!findOneAndDelete(): This combines finding a document and deleting it in one operation. It's useful when you want to retrieve the deleted document for confirmation purposes.

Todo: The arguments passed into each function for deleting documents in Mongoose vary slightly depending on the method used:

!1. deleteOne(filter):

*filter (Object): This is a required argument that defines the criteria for selecting the document to be deleted. It uses the same syntax as querying documents and can target specific fields and values within the blog post schema (e.g., { title: "Sample Post" }).

!2. deleteMany(filter):

*filter (Object): Similar to deleteOne, this is a required argument. It's a filter object that specifies which documents to delete based on shared characteristics. You can target multiple documents by defining conditions within the filter (e.g., { category: "electronics" } to delete all electronics blog posts).

!3. findOneAndDelete(filter, options = {}):

*filter (Object): This is a required argument, following the same structure as the previous filters. It defines the criteria for finding the document to be deleted (e.g., { _id: "user123" } to find and delete the blog post with that ID).

*options (Optional Object): This is an optional argument that allows you to configure the behavior of findOneAndDelete. While not commonly used for basic deletion, it can be useful in specific scenarios. 

*Here's an example option:
*projection: An object that specifies which fields to include or exclude in the returned deleted document (useful for reducing data transferred).

Todo: By understanding these arguments, you can effectively control which documents are targeted for deletion using Mongoose in your MongoDB operations.

*/

// Deleting data by filtering out by title and deleting all documents with that title.

const filter = {author: 'Jesse Hall'}
const filter1 = {author: 'Dave'}
const filter2 = {title: 'log'}

const deletedOne = await blog.deleteOne(filter)
console.log(deletedOne)

const deletedMany = await blog.deleteMany(filter1)
console.log(deletedMany)

const deleted = await blog.findOneAndDelete(filter2)
console.log(`Deleted the data related to the title ${filter2.title}:\n ${deleted}`)









