import Head from 'next/head'
import { useRouter } from 'next/router';
import MainCard from '../components/MainCard/MainCard'
import styles from '../styles/Home.module.scss'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LocalePicker from '../components/LocalePicker/LocalePicker';
import { ResourceStore } from 'i18next';

type Props = {
  // Add custom props here
}

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  
  return (
    <>
      <Head>
        <title>Josu Garralda</title>
        <link rel="icon" href="favicon/favicon-96x96.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Josu Garralda | Computer Engineer."></meta>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="60b6aa07-b7bb-4337-96c2-cd705bd7465b"></script>
      </Head>
      
      <div className={styles.container}>
        <LocalePicker/>
        <MainCard/>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? 'en', ['common', 'quickLinks', 'story']),
  },
})

export default Homepage;
