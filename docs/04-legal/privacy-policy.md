---
title: Privacy Policy
description: "Learn how MovingBox collects, uses, and protects your data to maintain privacy and security"
---

::: note
Last updated: April 25, 2025
:::

MovingBox ("we," "our," or "us") is owned and operated by Mothersound LLC, a company registered in Illinois, USA. Our business address is 119 S Western Ave Unit 1 #291 Chicago, IL 60612. This Privacy Policy explains how we collect, use, and safeguard your information when you use our iOS application MovingBox (the "App").

## Information We Collect

::: details User-Provided Information
- Photos and images you take or upload
- Item descriptions and details
- Location names and labels
- Home inventory information
:::

::: details Automatically Collected Information
We use TelemetryDeck analytics and Sentry to collect anonymous usage and performance data about how you interact with our App. This includes:

**App Interaction Events:**
- App launch events
- Tab selection and navigation patterns
- Inventory management actions (adding/deleting items)
- Location and label management actions
- AI feature usage (camera and photo analysis)

**Performance Data:**
- App crashes and errors
- Performance metrics
- Technical diagnostics
:::

::: details AI Processing
We use OpenAI's Vision API to analyze photos for item recognition. When you use our AI features:
- Photos are securely transmitted to OpenAI for processing
- No personal photos are stored on OpenAI's servers
- Processing is done in real-time with immediate deletion after analysis
- All API calls are routed through our secure authentication layer
:::

## How We Use Your Information

<CardGroup :cols="2">
  <Card title="Core Functionality" icon="puzzle-piece">
    - To provide home inventory management services
    - To enable AI-powered item recognition
    - To organize and categorize your items
  </Card>
  <Card title="App Improvement" icon="chart-line">
    - To analyze app performance and user experience
    - To identify and fix technical issues
    - To develop new features based on usage patterns
  </Card>
  <Card title="Performance Monitoring" icon="gauge-high">
    - To identify and fix crashes and errors
    - To optimize app performance and stability
    - To prioritize technical improvements
  </Card>
  <Card title="User Support" icon="headset">
    - To assist with troubleshooting issues
    - To improve our support response
    - To maintain app quality and reliability
  </Card>
</CardGroup>

## Data Storage and Security

<div className="grid grid-cols-3 gap-4">
  <div className="col-span-2">
    <h3>Our Commitment to Security</h3>
    <p>
      MovingBox employs industry-standard security measures to protect your data. We regularly review our practices to ensure your information remains secure.
    </p>
    <h4>Storage Methods</h4>
    <ul>
      <li><strong>Local Storage</strong>: Your inventory data is primarily stored locally on your device</li>
      <li><strong>CloudKit</strong>: Premium users' data is backed up to CloudKit (iCloud)</li>
      <li><strong>Analytics Data</strong>: All analytics data collected through TelemetryDeck is anonymous</li>
      <li><strong>Crash Reports</strong>: Crash data collected through Sentry contains technical information but no personally identifiable information</li>
    </ul>
    <h4>Secure OpenAI Integration</h4>
    <p>
      We use a custom open source lambda function with JWT (JSON Web Token) authentication to securely authenticate your device to OpenAI:
    </p>
    <ul>
      <li>All communication between the app and OpenAI is secured using JWT authentication</li>
      <li>No API keys are stored in the app itself, enhancing security</li>
      <li>The lambda function acts as a secure intermediary between your device and OpenAI</li>
      <li>Our implementation is fully transparent and can be reviewed on <a href="https://github.com/camdenwebster/openai-lambda" target="_blank">GitHub</a></li>
    </ul>
  </div>
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
    <h4 className="font-bold">Data Encryption</h4>
    <p>All data transmissions between the app and our servers use SSL encryption. Premium users' iCloud data is protected by Apple's end-to-end encryption.</p>
  </div>
</div>

## Third-Party Services

<Steps>
  <Step title="TelemetryDeck">
    We use TelemetryDeck for anonymous analytics to improve the user experience. No personally identifiable information is collected.
  </Step>
  
  <Step title="Sentry">
    Sentry helps us monitor app performance and crashes to ensure stability. It collects technical diagnostic information but does not track personal user data or inventory content.
  </Step>
  
  <Step title="OpenAI">
    OpenAI's Vision API processes images for our AI item recognition feature. Images are processed in real-time and immediately deleted after analysis. All requests are authenticated through our secure JWT-based lambda function, ensuring your device is authorized to use the service without exposing API keys.
  </Step>
  
  <Step title="Apple CloudKit">
    Premium users' data is backed up using Apple's CloudKit framework, which provides secure storage in iCloud with Apple's privacy protections.
  </Step>
</Steps>

## Your Rights

::: details Access Your Data
You can access all of your inventory data directly through the app. Everything you've added to MovingBox is viewable and editable.
:::

::: details Delete Your Data
You can delete individual items or your entire inventory data at any time through the app settings.
:::

::: details Opt Out of Analytics
You can opt out of analytics collection in the app settings under Privacy preferences.
:::

::: details Data Portability
Premium users can export their data in standard formats (CSV, PDF) for portability.
:::

## Data Retention

::: warning
Once data is deleted, we may not be able to recover it. We recommend exporting your data before deleting your inventory.
:::

- Local data is retained until you delete it or uninstall the app
- Analytics data is retained for 12 months
- AI processing data is deleted immediately after analysis
- Crash reports are retained for 90 days

## Children's Privacy

::: note
Our App does not knowingly collect information from children under 13.
:::

If we learn that we have collected personal information from a child under 13, we will take immediate steps to delete that information.

## Changes to This Policy

We may update this Privacy Policy periodically. We will notify you of any changes by:
- Posting the new Privacy Policy on this page
- Updating the "Last updated" date at the top of this policy
- Sending an in-app notification for significant changes

## Contact Us

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
  <p className="font-bold mb-2">Questions about our Privacy Policy?</p>
  <ul>
    <li>Email: contact@movingbox.ai</li>
    <li>Website: <a href="https://MovingBox.ai">https://MovingBox.ai</a></li>
  </ul>
</div>

## Consent

By using MovingBox, you consent to our Privacy Policy and agree to its terms.