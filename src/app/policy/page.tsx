import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Thank you for using JobShop! This Privacy Policy explains how we
          collect, use, and disclose personal information when you use our job
          recruitment app (the Service).
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Information We Collect
        </h2>
        <p className="text-gray-600">
          <strong>Personal Information:</strong> When you register an account
          with us, we collect personal information such as your name, email
          address, phone number, and resume. We may also collect additional
          information you choose to provide, such as your education and work
          history.
        </p>
        <p className="text-gray-600">
          <strong>Usage Data:</strong> We collect information about how you use
          the Service, including your interactions with job postings, searches,
          and messages sent through the app.
        </p>
        <p className="text-gray-600">
          <strong>Device Information:</strong> We automatically collect device
          information such as your IP address, device type, operating system,
          and browser type.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Job Matching:</strong> To match you with relevant job
            opportunities based on your profile and preferences.
          </li>
          <li>
            <strong>Communication:</strong> To communicate with you about job
            opportunities, updates to the Service, and other relevant
            information.
          </li>
          <li>
            <strong>Improvement:</strong> To improve the Service and develop new
            features and functionalities.
          </li>
          <li>
            <strong>Analytics:</strong> To analyze usage trends and gather
            insights to improve the user experience.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Information Sharing and Disclosure
        </h2>
        <p className="text-gray-600">
          We may share your personal information in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>With Employers:</strong> We may share your profile and
            resume with employers who have posted job opportunities that match
            your qualifications and preferences.
          </li>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with third-party service providers who assist us in providing the
            Service, such as hosting providers, analytics providers, and
            customer support services.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information
            if required by law or in response to valid legal requests, such as
            subpoenas or court orders.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Data Security
        </h2>
        <p className="text-gray-600">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure,
          so we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Your Choices
        </h2>
        <p className="text-gray-600">
          You can access and update your account information at any time by
          logging into your account settings. You may also contact us to request
          the deletion of your account and personal information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          6. Changes to this Privacy Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time to reflect changes
          in our data practices or legal requirements. We will notify you of any
          material changes by posting the updated policy on our website or
          through other communication channels.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a
            href="mailto:jobshop@gmail.com"
            className="text-blue-600 hover:underline"
          >
            jobshop@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
