import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
           <div>
               <h2>1:Difference between javascript and nodejs</h2>
               <p><b>Javascript</b> JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.
               <br />
               NodeJS helps us run JS outside the browser as well.
               <br />
               It lets us use JS on the server-side as well since it works on the server-side.
               </p>


               <p><b>Node.js</b>NodeJs is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.
               <br />
               We can only run JS on browsers.
               <br />
               It is utilised on the web page’s client-side.
                </p>
           </div>

           <div>
               <h2>2:When should you use nodejs and when should you use mongodb</h2>
               <p>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
           </div>

           <div>
               <h2>3:Differences between sql and nosql databases.</h2>
               <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
           </div>
        </div>
    );
};

export default Blogs;