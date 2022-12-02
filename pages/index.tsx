import Head from 'next/head'
import { useRouter } from 'next/router';
import MainCard from '../components/MainCard'
import styles from '../styles/Home.module.css'
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
        <link rel="icon" href="/favicon-96x96.png" />
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
