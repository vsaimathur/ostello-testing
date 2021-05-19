import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AddIcon from "@material-ui/icons/Add";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1009&q=80"})`,
  },
};

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              fontSize: "44px",
              fontFamily: "Poppins",
              color: "#5e72eb",
            }}
          >
            Blog Heading Name
          </Paper>
        </Grid>
        {/* Grid1 */}
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper style={styles.paperContainer}></Paper>
        </Grid>
        <Grid item xs={3}></Grid>
        {/* Grid2 */}
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1" gutterBottom>
            <b>What is Lorem Ipsum? </b>
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <b>Where does it come from ?</b>
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Typography>
          <Typography variant="body2" gutterBottom>
            <br />
            <br />
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        {/* Grid3 */}
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <ThumbUpIcon
            color="primary"
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <AddIcon
            color="primary"
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
          <LinkedInIcon
            color="primary"
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
          <FacebookIcon
            color="primary"
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
          <WhatsAppIcon
            color="primary"
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
          <TwitterIcon
            color="primary"
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        {/* Grid3 */}
        <Grid item xs={3}></Grid>
        <Grid item xs={7}>
          <List className={classes.root}>
            <Divider component="li" variant="inset" />
            <li>
              <Typography
                className={classes.dividerInset}
                color="textSecondary"
                display="block"
                variant="caption"
              >
                Comments
              </Typography>
            </li>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Vacation"
                secondary="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters,"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Vacation"
                secondary="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters,"
              />
            </ListItem>
            <Divider component="li" variant="inset" />
          </List>
          <Button variant="contained" color="primary">
          <ChatBubbleOutlineIcon />
            Add Comments
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
