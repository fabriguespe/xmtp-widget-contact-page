import React from "react";
import { ContactPage as ContactPageWidget } from "./ContactPage/index";
import { deepLinkApps } from "./deepLinkApps";

const styles = {
  HomePageWrapper: {
    textAlign: "center",
    height: "100%",
    minHeight: "100vh",
  },
};

const ContactPage = () => {
  return (
    <div style={styles.HomePageWrapper}>
      <ContactPageWidget
        domain="cryptocornerstore.eth"
        deepLinkApps={deepLinkApps}
      />
    </div>
  );
};

export default ContactPage;
