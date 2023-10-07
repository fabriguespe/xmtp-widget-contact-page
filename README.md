# Contact Page Tutorial

This widget is a React component that displays a page based on its ENS or domain and shows different buttons for contacting through XMTP. This tutorial will guide you through the process of creating such a widget.

<div className="widget-container Link">
<ContactPage
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
/>
</div>

### Props

- `domain`: (Required) The ENS domain name of the person or company.
- `walletAddress`: (Required) The wallet address associated with the domain.
- `deepLinkApps`: (Optional) An object specifying the messaging apps supported. Default values are provided.

### Usage

```jsx
<ContactPage deepLinkApps={deepLinkApps} />
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js react-router-dom @ensdomains/ens-avatar@0.2.5
```

Copy paste the component into your project

Import the component into your project

```jsx
import { Link } from "./Link";
```

#### Deep Link Apps

In the `src/deepLinkApps.js` file, we have a `deepLinkApps` object that contains information about different messaging apps.

```jsx
//Alphabetical order
export const deepLinkApps = {
  xmtp: {
    url: `https://xmtp.chat/dm/{walletAddress}`,
    icon: "https://xmtp.chat/favicon.ico",
    device: ["Desktop"],
    name: "xmtp",
  },
  CustomApp: {
    url: `https://xmtp-react-widgets.vercel.app/link/{walletAddress}`,
    icon: "https://xmtp-react-widgets.vercel.app/link/favicon.ico",
    device: ["All"],
    name: "Custom App",
  },
};
```

**Props**

- `url`: The URL for direct messaging in the app. The `{walletAddress}` placeholder will be replaced with the actual wallet address.
- `name`: The descriptive name of the app.
- `icon`: The URL of the app's favicon.
- `device`: An array of operating systems where the app is available. "All" means the app is available on all operating systems.

**Usage**

- `defaultApp`: (Optional) If the widgets needs a default action you can specify it in this prop.If not is going to default to the first.

```jsx
<ContactPage
 /*Other props*/
defaultApp = "CustomApp";
deepLinkApps = { deepLinkApps };
/>
```
