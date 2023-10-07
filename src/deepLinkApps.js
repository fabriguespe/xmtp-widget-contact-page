//Alphabetical order
export const deepLinkApps = {
  Coinbase: {
    url: `https://go.cb-w.com/messaging?address={walletAddress}`,
    icon: "https://xmtp.link/images/icon-cbw.svg",
    device: ["All", "Android", "iOS"],
    name: "Coinbase Wallet",
  },
  Converse: {
    url: `https://converse.xyz/dm/{walletAddress}`,
    icon: "https://xmtp.link/images/icon-converse.webp",
    device: ["All", "Android", "iOS"],
    name: "Converse",
  } /*
  CustomApp: {
    url: `https://xmtp-react-widgets.vercel.app/link/{domain}`,
    icon: "https://xmtp.chat/favicon.ico",
    device: ["All"],
    name: "Custom App",
  },*/,

  Orb: {
    url: `https://www.orb.ac/@cryptocornerstore`,
    icon: "https://www.orb.ac/favicon.ico",
    device: ["All"],
    name: "Orb",
  },
  Hey: {
    url: `https://hey.xyz/`,
    icon: "https://hey.xyz/favicon-32x32.png",
    device: ["All", "Android", "iOS"],
    name: "Hey",
  },
  xmtp: {
    url: `https://xmtp.chat/dm/{walletAddress}`,
    icon: "https://xmtp.chat/favicon.ico",
    device: ["All", "Desktop"],
    name: "xmtp",
  },
};
