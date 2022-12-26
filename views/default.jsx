//React import
const React = require('react')
//Adding default view for layout
function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">New Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <div>
                    {/*BONUS ADDING FOOTER */}
                    <footer className="footer">
                        <b>GOOD EAT'S</b>
                    </footer>
                </div>
            </body>
        </html>
    )
}
//Exporting Def function
module.exports = Def
