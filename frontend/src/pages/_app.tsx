import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '../app/components/AuthProvider';
import { NetworkErrorBoundary } from '../app/components/NetworkErrorBoundary';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NetworkErrorBoundary>
      <Head>
        <title>Noor</title>
        <meta name="description" content="AI-powered interview platform for candidates and employers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </NetworkErrorBoundary>
  );
};

export default App;
