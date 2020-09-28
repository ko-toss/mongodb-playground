import 'styles/globals.css'
import { Provider } from 'react-redux';
import { reduxStore } from 'store';

export default function MyApp({ Component, pageProps }) {
  return <Provider store={reduxStore}>
    <Component {...pageProps} />
  </Provider>
}
