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

const Footer = () => {
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Box
        sx={{
          marginTop: '96px',
          height: { sm: '258px', md: '401px' },
          backgroundColor: '#0059BC',
        }}
      >
        <Container>
          <Box
            sx={{
              paddingTop: '62px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: { md: 'start', lg: 'space-between' },
            }}
          >
            <Box
              sx={{
                width: { sm: '275px', md: '344px', lg: '407px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Image src={logo} width={'175px'} height={'42px'} />
              {!mobile && (
                <Typography
                  component="p"
                  sx={{
                    mt: '30px',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'white',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
                  aliquam neque.
                </Typography>
              )}
              <Stack direction="row" bgcolor="white" marginTop="56px">
                <Input
                  placeholder="Email"
                  disableUnderline
                  fullWidth
                  sx={{
                    color: '#74777A',
                    padding: '8px 16px',
                  }}
                />
                <Button
                  sx={{
                    width: '100px',
                    background: '#00254F',
                    color: 'white',
                    borderRadius: '0px',
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            </Box>

            {!mobile && (
              <Box
                sx={{
                  mt: { md: '0', lg: '50px' },
                  display: 'flex',
                  gap: { md: '12px', lg: '142px' },
                  flexDirection: { md: 'column', lg: 'row' },
                  ml: { md: '100px', lg: 'auto' },
                }}
              >
                {Array.from({ length: 3 }).map((item, index) => (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      color: 'white',
                    }}
                  >
                    <Typography sx={{ fontSize: '20px' }} component={'h3'}>
                      Title
                    </Typography>
                    {!tablet &&
                      Array.from({ length: 4 }).map((item, index) => (
                        <Typography
                          sx={{ fontSize: '16px', fontWeight: 300 }}
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
        <Container>
          <Stack
            paddingTop="20px"
            height="64px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: { sm: '12px', md: '20px' },
              }}
              color="white"
            >
              {' '}
              contact@nttdata.com{' '}
            </Typography>
            <Typography
              sx={{
                fontSize: { sm: '20px', lg: '20px' },
              }}
              color="white"
            >
              {' '}
              +3 9876 765 444{' '}
            </Typography>

            {!mobile && (
              <Stack gap={'32px'} direction="row" color="white">
                <InstagramIcon />
                <LinkedInIcon />
                <FacebookIcon />
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
