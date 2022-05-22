import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{ //um pouco mais antigo
    render(){
        return(

            <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,600&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />

            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )

    }
}