import {
  Box,
  Heading,
  VStack,
  HStack,
  IconButton,
  Icon,
  Spacer,
  List,
  ListItem,
  SimpleGrid,
  Link,
  Flex
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

import { ShowwcaseIcon } from '@/icons/index.js';
import siteConfig from '../../../../config/site.config';
import CopyrightNotice from './CopyrightNotice';

const Footer = () => {
  return (
    <footer>
      <Box id={'footer'} p={{ base: 10, md: 20 }} bg={'black'} color={'white'}>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          <VStack>
            <Heading>GDSC - LPU</Heading>
            <HStack spacing={2}>
              <Link href={siteConfig.urls.socials.twitter} isExternal>
                <IconButton
                  aria-label="twitter"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'twitter' }}
                  _active={{ bg: 'transparent', color: 'twitter' }}
                  _visited={{ bg: 'transparent', color: 'twitter' }}
                  icon={<Icon as={FaTwitter} w={6} h={6} />}
                />
              </Link>
              <Link href={siteConfig.urls.socials.linkedin} isExternal>
                <IconButton
                  aria-label="linkedin"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'linkedin' }}
                  _active={{ bg: 'transparent', color: 'linkedin' }}
                  _visited={{ bg: 'transparent', color: 'linkedin' }}
                  icon={<Icon as={FaLinkedin} w={6} h={6} />}
                />
              </Link>
              <Link href={siteConfig.urls.socials.github} isExternal>
                <IconButton
                  aria-label="github"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  _active={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  _visited={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  icon={<Icon as={FaGithub} w={6} h={6} />}
                />
              </Link>
              <Link href={siteConfig.urls.socials.instagram} isExternal>
                <IconButton
                  aria-label="instagram"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'brand.100' }}
                  _active={{ bg: 'transparent', color: 'brand.100' }}
                  _visited={{ bg: 'transparent', color: 'brand.100' }}
                  icon={<Icon as={FaInstagram} w={6} h={6} />}
                />
              </Link>
              <Link href={siteConfig.urls.socials.youtube} isExternal>
                <IconButton
                  aria-label="youtube"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'youtube' }}
                  _active={{ bg: 'transparent', color: 'youtube' }}
                  _visited={{ bg: 'transparent', color: 'youtube' }}
                  icon={<Icon as={FaYoutube} w={6} h={6} />}
                />
              </Link>
            </HStack>
          </VStack>

          <Spacer />

          <SimpleGrid columns={3} mt={{ base: 4, md: 0 }}>
            <VStack>
              <Heading
                size={'sm'}
                alignSelf={'flex-start'}
                whiteSpace={'nowrap'}
              >
                QUICK LINKS
              </Heading>
              <List
                fontSize={'small'}
                alignSelf={'flex-start'}
                whiteSpace={'nowrap'}
                spacing={1}
              >
                <ListItem>
                  <Link href={siteConfig.urls.about} isExternal>
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={siteConfig.urls.status} isExternal>
                    Status
                  </Link>
                </ListItem>
                {/* <ListItem>
                  <Link href={'/external-articles'}>External Articles</Link>
                </ListItem> */}

                <ListItem>
                  <Link href={siteConfig.urls.newsletter} isExternal>
                    Newsletter
                  </Link>
                </ListItem>
                {/* <ListItem>
                  <Link href={'/support-me'}>Support Me </Link>❤️
                </ListItem> */}
              </List>
            </VStack>

            <Spacer />

            <VStack>
              <Heading size={'sm'} alignSelf={'flex-start'}>
                LEGAL
              </Heading>
              <List fontSize={'small'} alignSelf={'flex-start'} spacing={1}>
                <ListItem>
                  <Link href={'https://policies.google.com/privacy'} isExternal>
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'/legal/cookie-policy'}>Cookie Policy</Link>
                </ListItem>
                <ListItem>
                  <Link href={'https://policies.google.com/terms'} isExternal>
                    Terms
                  </Link>
                </ListItem>
              </List>
            </VStack>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
      <CopyrightNotice />
    </footer>
  );
};

export default Footer;
