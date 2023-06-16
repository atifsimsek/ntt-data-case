import {
  Box,
  Typography,
  Stack,
  Input,
  Button,
  Container,
  Divider,
  useMediaQuery,
} from '@mui/material';
import logo from '/svg/footerLogo.svg';
import Image from 'mui-image';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import theme from '../../styles/theme';
import { footerStyles } from './footerStyles';

const Footer = () => {
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box component={'footer'} sx={footerStyles.mainContainer}>
      <Container>
        <Box sx={footerStyles.contentContainer}>
          <Box sx={footerStyles.logoContainer}>
            <Image src={logo} width={'175px'} height={'42px'} />
            {!mobile && (
              <Typography component="p" sx={footerStyles.description}>
                Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
                aliquam neque.
              </Typography>
            )}
            <Stack direction="row" bgcolor="white" marginTop="56px">
              <Input
                placeholder="Email"
                disableUnderline
                fullWidth
                sx={footerStyles.emailInput}
              />
              <Button sx={footerStyles.signUpButton}>Sign Up</Button>
            </Stack>
          </Box>

          {!mobile && (
            <Box sx={footerStyles.linksContainer}>
              {Array.from({ length: 3 }).map((item, index) => (
                <Box key={index} sx={footerStyles.linkColumn}>
                  <Typography sx={footerStyles.linkTitle} component={'h3'}>
                    Title
                  </Typography>
                  {!tablet &&
                    Array.from({ length: 4 }).map((item, index) => (
                      <Typography
                        key={index}
                        sx={footerStyles.linkSubtitle}
                        component={'p'}
                      >
                        SubTitle
                      </Typography>
                    ))}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Container>
      <Divider
        sx={{
          borderColor: '#D9D9D9',
          height: '2px',
          paddingTop: '25px',
        }}
      />
      <Container sx={{}}>
        <Stack direction={'row'} sx={footerStyles.contactContainer}>
          <Typography sx={footerStyles.contactText} color="white">
            contact@nttdata.com
          </Typography>
          <Typography sx={footerStyles.phoneNumber} color="white">
            +3 9876 765 444
          </Typography>

          {!mobile && (
            <Stack direction={'row'} sx={footerStyles.socialIconsContainer}>
              <InstagramIcon />
              <LinkedInIcon />
              <FacebookIcon />
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
