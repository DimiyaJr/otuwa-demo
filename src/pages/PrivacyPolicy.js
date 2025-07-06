import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Privacy Policy</h2>

      <p>
        At OtuwaDeals.com, we value your privacy and are committed to protecting your personal information.
        This policy outlines how we collect, use, and safeguard your data when you visit our website.
      </p>

      <h5 className="mt-4">1. Information We Collect</h5>
      <ul>
        <li>Personal details (name, email, address, phone number)</li>
        <li>Purchase history and preferences</li>
        <li>Cookies and usage data</li>
      </ul>

      <h5 className="mt-4">2. How We Use Your Data</h5>
      <p>We use your information to:</p>
      <ul>
        <li>Process orders and payments</li>
        <li>Send order confirmations and delivery updates</li>
        <li>Provide customer support</li>
        <li>Improve our website and user experience</li>
      </ul>

      <h5 className="mt-4">3. Data Security</h5>
      <p>
        We implement industry-standard security measures to protect your information. All transactions
        are encrypted, and your data is stored securely on our servers.
      </p>

      <h5 className="mt-4">4. Third-Party Services</h5>
      <p>
        We do not sell your data. We may share limited information with trusted third-party services
        for payment processing and analytics, under strict confidentiality agreements.
      </p>

      <h5 className="mt-4">5. Contact Us</h5>
      <p>
        If you have any questions or concerns about your privacy, please contact us at:
        <br />
        Email: privacy@otuwadeals.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
