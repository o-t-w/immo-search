import '../styles.scss';

export default function myApp({Component, pageProps}) {
    return <Component { ...pageProps }/>
}