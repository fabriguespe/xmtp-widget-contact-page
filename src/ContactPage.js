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
        domain="shanemac.eth"
        walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
        theme={"light"}
        deepLinkApps={deepLinkApps}
        size={"medium"}
      />
    </div>
  );
};

export default ContactPage;
