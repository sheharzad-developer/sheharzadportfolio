/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Typography, makeStyles, Box, Card, CardMedia, Container, Grid, Avatar, Img } from '@material-ui/core';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import NetsolLogo from '../../assets/NetsolLogo.png';
import SystemsLogo from '../../assets/system.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const style = makeStyles(theme => ({
    GridOne: {
        textAlign: 'center',
        width: '95%',
        margin: '0 auto',
    },
    BoxInside: {
        backgroundColor: 'white',
        border: '1px #868e96',
        boxShadow: '0 10px 30px -15px rgba(0,0,0,.2)',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        '&:hover': {
            boxShadow: '0 20px 30px -10px rgba(0,0,0,.2)'
        }
    },
    Text: {
        width: '100%',
    },
    BoxSecondInside: {
        backgroundColor: 'rgb(230, 246, 250)',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
    },
    BoxClassTypoText: {
        fontSize: '33px',
        alignSelf: 'center',
        marginBottom: '30px',
        color: 'black',
    },
    Circle: {
        width: '120px',
        height: '120px',
        margin: '0 auto',
        borderRadius: '50%',
        backgroundColor: 'white',
        marginTop: '-50px',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid rgb(134, 142, 150)'
    },
    NetsolLogoSize: {
        width: '60px',
        height: '60px',
        alignSelf: 'center',
    },
    ExperienceLists: {
        paddingTop: '20px'
    },
    BoxMargin: {
        margin:'10px',
        borderRadius:'12px',
        padding: '0 !important'
    }
}));


const GridClass = (props) => {
    const classes = style()
    return (
        <div className={classes.GridOne}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(3)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Item className={classes.BoxMargin}>
                                    <Box className={classes.BoxClass}>
                                        <div className={classes.BoxInside}>
                                            <div className={classes.BoxSecondInside}>
                                                <Typography className={classes.BoxClassTypoText}>Netsol Technologies</Typography>
                                            </div>
                                            <div className={classes.Circle}>
                                                <img className={classes.NetsolLogoSize} src={NetsolLogo} />
                                            </div>
                                            <div className={classes.ExperienceLists}>
                                                <ul style={{ textAlign: 'left', paddingLeft: '40px', paddingBottom: '20px' }}>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked on different landing pages using Bootstrap</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Design using Bootstrap and Javascript.</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Improving some languages like Javascript.</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked with developers to create and update WordPress sites.</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Web/UI Mobile Design using Bootstrap &
                                                        Javascript.</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Evaluated current UI and identified areas for improvement.</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Responsive Design in Templates”.</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Category list in WordPress”</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Working on QA with the Marketing team</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA and Confluence</li>
                                                    <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA tasks.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Box>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* <Grid item xs={4}>
                        <Box className={classes.BoxClass}>
                            <div className={classes.BoxInside}>
                                <div className={classes.BoxSecondInside}>
                                    <Typography className={classes.BoxClassTypoText}>Netsol Technologies</Typography>
                                </div>
                                <div className={classes.Circle}>
                                    <img className={classes.NetsolLogoSize} src={NetsolLogo} />
                                </div>
                                <div className={classes.ExperienceLists}>
                                    <ul style={{ textAlign: 'left', paddingLeft: '40px', paddingBottom: '20px' }}>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked on different landing pages using Bootstrap</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Design using Bootstrap and Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Improving some languages like Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked with developers to create and update WordPress sites.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Web/UI Mobile Design using Bootstrap &
                                            Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Evaluated current UI and identified areas for improvement.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Responsive Design in Templates”.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Category list in WordPress”</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Working on QA with the Marketing team</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA and Confluence</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA tasks.</li>
                                    </ul>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.BoxClass}>
                            <div className={classes.BoxInside}>
                                <div className={classes.BoxSecondInside}>
                                    <Typography className={classes.BoxClassTypoText}>Netsol Technologies</Typography>
                                </div>
                                <div className={classes.Circle}>
                                    <img className={classes.NetsolLogoSize} src={NetsolLogo} />
                                </div>
                                <div className={classes.ExperienceLists}>
                                    <ul style={{ textAlign: 'left', paddingLeft: '40px', paddingBottom: '20px' }}>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked on different landing pages using Bootstrap</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Design using Bootstrap and Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Improving some languages like Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked with developers to create and update WordPress sites.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Web/UI Mobile Design using Bootstrap &
                                            Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Evaluated current UI and identified areas for improvement.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Responsive Design in Templates”.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Category list in WordPress”</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Working on QA with the Marketing team</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA and Confluence</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA tasks.</li>
                                    </ul>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.BoxClass}>
                            <div className={classes.BoxInside}>
                                <div className={classes.BoxSecondInside}>
                                    <Typography className={classes.BoxClassTypoText}>Netsol Technologies</Typography>
                                </div>
                                <div className={classes.Circle}>
                                    <img className={classes.NetsolLogoSize} src={NetsolLogo} />
                                </div>
                                <div className={classes.ExperienceLists}>
                                    <ul style={{ textAlign: 'left', paddingLeft: '40px', paddingBottom: '20px' }}>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked on different landing pages using Bootstrap</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Design using Bootstrap and Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Improving some languages like Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Worked with developers to create and update WordPress sites.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developing UI Mobile Web/UI Mobile Design using Bootstrap &
                                            Javascript.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Evaluated current UI and identified areas for improvement.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Responsive Design in Templates”.</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Developed “Category list in WordPress”</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Working on QA with the Marketing team</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA and Confluence</li>
                                        <li style={{ color: '#60697c', listStyleType: 'square' }}>Experienced with JIRA tasks.</li>
                                    </ul>
                                </div>
                            </div>
                        </Box>
                    </Grid> */}
            {/* </Grid>
            </Box>*/}
        </div >
    )
}

export default GridClass;

