import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          After spending my childhood in Vermont, I attended the University of
          Colorado and graduated with a degree in Physiology. While completing
          my degree, I landed a digital marketing position in the renewable
          energy industry and discovered a passion for web development and
          engineering. This passion lead me to enroll in a six month long,
          full-time, web development bootcamp in Austin, TX. At the end of the
          course, I was hired into the consulting industry and was deployed to
          Public Sector clients as a JavaScript developer for about three years
          before joining Slalom. Now, as part of the TE Software Engineering
          team, I'll focus on delivering a variety of web application solutions
          to commercial clients in the Austin area. Outside of work, I’m an avid
          skier and climber. Snow is hard to find in Texas so I spend a lot of
          time at Austin Bouldering Project.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
