import { Helmet } from "react-helmet-async";

const ANALYTICS_DOMAIN = import.meta.env.VITE_ANALYTICS_DOMAIN as string | undefined;

/** Renders nothing until VITE_ANALYTICS_DOMAIN is set. No cookies, no consent banner needed. */
const Analytics = () => {
  if (!ANALYTICS_DOMAIN) return null;

  return (
    <Helmet>
      <script
        defer
        data-domain={ANALYTICS_DOMAIN}
        src="https://plausible.io/js/script.js"
      />
    </Helmet>
  );
};

export default Analytics;
