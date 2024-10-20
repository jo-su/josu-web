import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Head from 'next/head';
import './global.css'
import PHProvider from '../../lib/posthog';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
        <PHProvider>
            <NextIntlClientProvider messages={messages}>
                <Head>
                    <title>Josu Garralda</title>
                    <link rel="icon" href="favicon/favicon-96x96.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <meta name="description" content="Josu Garralda | Computer Engineer."></meta>
                </Head>
                <body>
                    {children}
                </body>
            </NextIntlClientProvider>
        </PHProvider>
    </html>
  );
}