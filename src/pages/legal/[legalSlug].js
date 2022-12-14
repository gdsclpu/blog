import { Box, Container } from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';

import { Analytics, SEO } from '@/utils/index.js';
import { BreadcrumbSchemaMarkup } from '@/schemaMarkup/index.js';
import { MarkdownRenderer } from '@/UIElements/markdownRenderer';
import siteConfig from '../../../config/site.config';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const Legal = ({ data, legalSlug }) => {
  return (
    <>
      <SEO
        title={siteConfig.seo.pages.cookie.title}
        description={siteConfig.seo.pages.cookie.description}
        image={siteConfig.seo.pages.cookie.image}
        altText={siteConfig.seo.pages.cookie.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/legal/${legalSlug}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/legal/${legalSlug}`}
      />
      <BreadcrumbSchemaMarkup
        items={[
          {
            position: 1,
            name: 'Home',
            item: process.env.NEXT_PUBLIC_SITE_URL
          },
          {
            position: 2,
            name: 'Cookie Policy',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/${legalSlug}`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <Container maxW={'4xl'} my={8}>
          {data && (
            <Box>
              <MarkdownRenderer content={data} />
            </Box>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const { legalSlug } = params;
  const fileDirectory = path.join(process.cwd(), `src/data/${legalSlug}.md`);
  const data = await fs.readFile(fileDirectory);

  return {
    props: {
      data: data.toString(),
      legalSlug: legalSlug
    }
  };
}

export async function getStaticPaths() {
  const paths = [
    { params: { legalSlug: 'cookie-policy' } },
    { params: { legalSlug: 'privacy-policy' } },
    { params: { legalSlug: 'terms-and-conditions' } }
  ];

  return {
    paths,
    fallback: false
  };
}

export default Legal;
