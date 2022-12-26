const React = require ('react')
const Def = require ('./default')

//Adding 404 page view
function error404 () {
return (
    <Def>
        <main>
            <h1>404 : PAGE NOT FOUND</h1>
            <div>
            <img src ="/images/error-404.gif" alt="error404" />
            </div>
            <p>Oops, sorry, we can't find this page!</p>
          
        </main>
    </Def>
)

}

//code to export from error404
module.exports = error404
