import mongoose from 'mongoose';

// importing our model so we can work with it.
import blog from './module/Blog.js';


// creating a connection to the mongodb atlas.// creating a connection.
mongoose.connect("mongodb+srv://eric-wg:g0pRt2BO2uPWtKh7@cluster0.tpit2ek.mongodb.net/")

try{
    // creating instances of objects with our mode.
    // using the new key word then we utilize the create().
    /* const article = new blog({
        title: 'post',
        slug: 'great-content',
        published: false,
        author: 'Dave',
        content: 'This is a test content, out',
        tags: ['First blogs', 'Testing', 'tests'],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        comments: [{
            user: 'Dennis',
            content: 'awesome blog',
            votes: 350,
        }],
    });


    // Updating fields.
    // article.title = 'new title'


    // inserting our blog-post into the database.
    // we call the article and add the save method to insert it to our db.
    await article.save() */

    /* const d = await blog.deleteMany({author:'Dave'})
    console.log(d) */

}
catch{
    (e)=>{console.log(e)}
}




// Advanced indexing and querying methods in Mongoose.
// Aggregation pipelines (These allow us to provide the steps involved in refining our data).

const pipeline = [
    {$match: {author: 'Dave'}},
    {$unwind: '$comments'},
    {$match: {'comments.votes': {$gt: 500}}},
    {$sort: {'comments.votes': 1}},
    {
        $project: {
            title:1,
            author:1,
            userCommented: '$comments.user',
            famousComment: '$comments.content',
            votes: '$comments.votes'
        }
    }
    // Further stages for filtering, sorting, grouping, etc.
];



//   results from aggregation.
await blog.aggregate(pipeline)
.then(results => {
    console.log(results);
})
.catch(err => {
    console.error(err);
});









