export const footerStyles = {
  mainContainer: {
    marginTop: '96px',
    height: { sm: '258px', md: '401px' },
    backgroundColor: '#0059BC',
  },
  contentContainer: {
    paddingTop: '62px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: { md: 'start', lg: 'space-between' },
  },
  logoContainer: {
    width: { sm: '275px', md: '344px', lg: '407px' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  description: {
    mt: '30px',
    fontWeight: 400,
    fontSize: '16px',
    color: 'white',
  },
  emailInput: {
    color: '#74777A',
    padding: '8px 16px',
  },
  signUpButton: {
    width: '100px',
    background: '#00254F',
    color: 'white',
    borderRadius: '0px',
  },
  linksContainer: {
    mt: { md: '0', lg: '50px' },
    display: 'flex',
    gap: { md: '12px', lg: '142px' },
    flexDirection: { md: 'column', lg: 'row' },
    ml: { md: '100px', lg: 'auto' },
  },
  linkColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    color: 'white',
  },
  linkTitle: {
    fontSize: '20px',
  },
  linkSubtitle: {
    fontSize: '16px',
    fontWeight: 300,
  },
  contactContainer: {
    paddingTop: '20px',
    height: '64px',
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactText: {
    fontSize: { sm: '12px', md: '20px' },
  },
  phoneNumber: {
    fontSize: { sm: '20px', lg: '20px' },
  },
  socialIconsContainer: {
    gap: '32px',
    direction: 'row',
    color: 'white',
  },
};
