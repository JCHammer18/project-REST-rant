
//Importing React and Def function
const React = require('react')
const Def = require('./default')
//Added link to places
//Activity Bonus Attempt
const router = require('./places')
//Adding home page view
function home() {
    return (
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                    {/*<Link to="/places">*/}
                    <a href='/places'>
                        <img src={"/images/Food-Sampler.jpg"} alt="Chia Fruit Shake" />
                    </a>
                    {/*<a href='/places'></a>*/}
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <link rel="stylesheet" href="style.css" />
                <a href='/places'>
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}
//code to export from home
module.exports = home