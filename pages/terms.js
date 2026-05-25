export default function Terms() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Plus Jakarta Sans',sans-serif; background:#fff; color:#1a1535; -webkit-font-smoothing:antialiased; }
        nav { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(255,255,255,0.95); backdrop-filter:blur(12px); border-bottom:1px solid rgba(83,74,183,0.1); padding:0 40px; height:68px; display:flex; align-items:center; justify-content:space-between; }
        .nav-logo { display:flex; align-items:center; gap:10px; cursor:pointer; }
        .nav-logo-text { font-size:1.2rem; font-weight:800; color:#1a1535; }
        .nav-logo-text span { color:#7F77DD; }
        .container { max-width:800px; margin:0 auto; padding:100px 40px 80px; }
        h1 { font-size:2rem; font-weight:800; color:#1a1535; letter-spacing:-0.8px; margin-bottom:8px; }
        .updated { font-size:0.85rem; color:#94a3b8; margin-bottom:48px; }
        h2 { font-size:1.1rem; font-weight:700; color:#1a1535; margin:36px 0 12px; padding-top:8px; border-top:1px solid #f1f5f9; }
        h2:first-of-type { border-top:none; }
        p { font-size:0.95rem; color:#475569; line-height:1.8; margin-bottom:14px; }
        ul { margin:0 0 14px 20px; }
        li { font-size:0.95rem; color:#475569; line-height:1.8; margin-bottom:6px; }
        strong { color:#1a1535; font-weight:600; }
        .highlight { background:#f5f3ff; border-left:3px solid #534AB7; border-radius:0 8px 8px 0; padding:16px 20px; margin:20px 0; }
        .highlight p { margin:0; color:#534AB7; font-weight:500; }
        footer { background:#1a1535; padding:40px; text-align:center; margin-top:80px; }
        .footer-text { font-size:0.75rem; color:#3C3489; }
        @media (max-width:600px) { .container { padding:90px 20px 60px; } nav { padding:0 20px; } }
      `}</style>

      <nav>
        <div className="nav-logo" onClick={() => window.location.href='/'}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill="#EEEDFE"/>
            <rect x="7" y="12" width="2.5" height="8" rx="1.25" fill="#534AB7"/>
            <rect x="11" y="9" width="2.5" height="14" rx="1.25" fill="#534AB7"/>
            <rect x="15" y="6" width="2.5" height="20" rx="1.25" fill="#7F77DD"/>
            <rect x="19" y="9" width="2.5" height="14" rx="1.25" fill="#534AB7"/>
            <rect x="23" y="12" width="2.5" height="8" rx="1.25" fill="#534AB7"/>
          </svg>
          <div className="nav-logo-text">M<span>ash</span></div>
        </div>
        <button onClick={() => window.location.href='/'} style={{padding:'8px 18px', background:'none', border:'1.5px solid #534AB7', borderRadius:'8px', color:'#534AB7', fontSize:'0.875rem', fontWeight:'600', cursor:'pointer', fontFamily:'Plus Jakarta Sans,sans-serif'}}>← Back to Home</button>
      </nav>

      <div className="container">
        <h1>Terms and Conditions</h1>
        <div className="updated">Last updated: 25 May 2026 · KarnaConnect Pty Ltd ABN 84 924 272 443</div>

        <div className="highlight">
          <p>Please read these Terms and Conditions carefully before using Mash. By subscribing to or using Mash, you agree to be bound by these terms. If you do not agree, please do not use our service.</p>
        </div>

        <h2>1. About Mash and KarnaConnect</h2>
        <p>Mash is an AI-powered telephone receptionist service operated by <strong>KarnaConnect</strong> (ABN 84 924 272 443), a business based in South Lake, Western Australia 6164, Australia.</p>
        <p>Mash provides Australian businesses with an automated AI agent that answers inbound telephone calls, captures caller information, provides responses based on your configured settings, and delivers call summaries and transcripts via a web-based dashboard.</p>
        <p>For enquiries, contact us at <strong>info@karnaconnect.com.au</strong>.</p>

        <h2>2. Definitions</h2>
        <ul>
          <li><strong>"Service"</strong> means the Mash AI receptionist platform, dashboard, and all related features.</li>
          <li><strong>"Subscriber"</strong> or <strong>"you"</strong> means the business or individual who has subscribed to Mash.</li>
          <li><strong>"Caller"</strong> means any third party who calls your Mash-assigned telephone number.</li>
          <li><strong>"Agent"</strong> means the AI voice assistant configured for your business.</li>
          <li><strong>"Dashboard"</strong> means the Mash web portal at dashboard.mashai.com.au.</li>
          <li><strong>"Plan"</strong> means your chosen subscription tier (Basic, Standard, or Premium).</li>
        </ul>

        <h2>3. Eligibility and Account Registration</h2>
        <p>To use Mash you must:</p>
        <ul>
          <li>Be at least 18 years of age</li>
          <li>Be operating a legitimate business in Australia</li>
          <li>Provide accurate and complete information during onboarding</li>
          <li>Have authority to bind your business to these terms</li>
        </ul>
        <p>You are responsible for maintaining the confidentiality of your login credentials. Notify us immediately at info@karnaconnect.com.au if you suspect unauthorised access to your account.</p>

        <h2>4. Call Recording and Consent</h2>
        <div className="highlight">
          <p>⚠ Important: Under Australian law, all parties to a telephone conversation must be informed if the call is being recorded.</p>
        </div>
        <p>Mash records all inbound calls handled by your AI agent. By using Mash, you acknowledge and agree that:</p>
        <ul>
          <li>Your AI agent's greeting message will inform callers that their call may be recorded and handled by an AI assistant</li>
          <li>You are responsible for ensuring your agent greeting includes appropriate disclosure to callers</li>
          <li>You must not use Mash to record calls in a manner that violates the <strong>Telecommunications (Interception and Access) Act 1979</strong> or any applicable state or territory laws</li>
          <li>KarnaConnect is not liable for any breach of recording consent laws resulting from your failure to configure an appropriate greeting</li>
        </ul>
        <p>Call recordings, transcripts and summaries are stored securely and are accessible only to you via your dashboard. KarnaConnect staff may access call data for the purpose of technical support, service improvement, or as required by law.</p>

        <h2>5. Subscription Plans and Billing</h2>
        <p>Mash is offered on the following subscription plans:</p>
        <ul>
          <li><strong>Basic:</strong> $149/month AUD — includes 100 minutes, 24hr support response</li>
          <li><strong>Standard:</strong> $299/month AUD — includes 300 minutes, 12hr support response</li>
          <li><strong>Premium:</strong> $699/month AUD — includes 1,000 minutes, 4hr support response</li>
        </ul>
        <p>All prices are in Australian Dollars (AUD) and are inclusive of GST where applicable.</p>
        <p><strong>Billing cycle:</strong> Subscriptions are billed monthly on your billing anniversary date. Your first billing date is set at the time of subscription.</p>
        <p><strong>Overage charges:</strong> If you exceed your included minutes, overage charges apply at the rate specified in your plan. Overage charges will be billed at the end of your billing cycle.</p>
        <p><strong>Payment:</strong> Payment is processed securely via Stripe. By subscribing, you authorise KarnaConnect to charge your nominated payment method on a recurring monthly basis.</p>
        <p><strong>Failed payments:</strong> If a payment fails, your service may be suspended until payment is received. KarnaConnect will attempt to retry failed payments. After three failed attempts your subscription may be cancelled.</p>

        <h2>6. Free Trial</h2>
        <p>KarnaConnect may offer a 7-day free trial at its discretion. The following conditions apply:</p>
        <ul>
          <li>A valid payment method is required to start a free trial</li>
          <li>You will not be charged during the 7-day trial period</li>
          <li>If you do not cancel before the trial ends, your subscription will automatically commence and your payment method will be charged</li>
          <li>Each business is entitled to one free trial only</li>
          <li>KarnaConnect reserves the right to modify or discontinue the free trial offer at any time</li>
        </ul>

        <h2>7. Cancellation Policy</h2>
        <p>You may cancel your Mash subscription at any time. The following applies:</p>
        <ul>
          <li>Cancellations take effect at the end of your current billing period</li>
          <li>You will retain access to Mash until the end of your paid period</li>
          <li>No refunds are provided for partial months unless required by Australian Consumer Law</li>
          <li>To cancel, contact us at info@karnaconnect.com.au or manage your subscription via the Stripe customer portal</li>
        </ul>

        <h2>8. Refund Policy</h2>
        <p>Under the <strong>Australian Consumer Law</strong>, you are entitled to a refund if Mash has a major failure. A major failure includes:</p>
        <ul>
          <li>The service is not fit for the purpose described</li>
          <li>The service does not match the description provided</li>
          <li>The service has a significant defect that cannot be remedied</li>
        </ul>
        <p>For minor issues, KarnaConnect will first attempt to rectify the problem. Refund requests should be directed to info@karnaconnect.com.au with a description of the issue.</p>
        <p>Change of mind cancellations are not eligible for refunds outside the free trial period.</p>

        <h2>9. Fair Use and Acceptable Use</h2>
        <p>You agree not to use Mash to:</p>
        <ul>
          <li>Engage in fraudulent, deceptive, or illegal activities</li>
          <li>Harass, threaten, or harm any person</li>
          <li>Violate any applicable law or regulation</li>
          <li>Collect caller data without appropriate consent disclosures</li>
          <li>Impersonate another business or individual</li>
          <li>Use the service for purposes other than legitimate business communications</li>
          <li>Attempt to reverse engineer, hack, or disrupt the Mash platform</li>
          <li>Resell or sublicense the service without written permission from KarnaConnect</li>
        </ul>
        <p>KarnaConnect reserves the right to suspend or terminate your account immediately if you breach these acceptable use terms.</p>

        <h2>10. Privacy and Data Collection</h2>
        <p>KarnaConnect collects and processes the following data in connection with the Mash service:</p>
        <ul>
          <li><strong>Subscriber data:</strong> Business name, contact details, billing information</li>
          <li><strong>Call data:</strong> Caller phone numbers, call recordings, transcripts, AI-generated summaries, call duration and outcomes</li>
          <li><strong>Usage data:</strong> Dashboard activity, minutes used, login history</li>
        </ul>
        <p>KarnaConnect handles all personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles. We do not sell your data or your callers' data to third parties.</p>
        <p>Call data is stored on servers located in Australia. Data is retained for the duration of your subscription plus 12 months, after which it is securely deleted unless you request earlier deletion.</p>
        <p>For our full Privacy Policy, please contact info@karnaconnect.com.au.</p>

        <h2>11. Intellectual Property</h2>
        <p>All intellectual property in the Mash platform, including software, design, branding, and AI models, belongs to KarnaConnect or its licensors.</p>
        <p>You retain ownership of your business data, call recordings, and content provided during onboarding. By using Mash, you grant KarnaConnect a limited licence to use your data solely for the purpose of providing the service.</p>

        <h2>12. Service Availability and Uptime</h2>
        <p>KarnaConnect endeavours to maintain Mash service availability at all times. However, we do not guarantee uninterrupted service. Planned maintenance will be communicated in advance where possible.</p>
        <p>Mash relies on third-party services including VAPI, Twilio, and ElevenLabs. KarnaConnect is not liable for outages or disruptions caused by these third-party providers.</p>
        <p>In the event of a service outage, callers to your Mash number may not receive a response. KarnaConnect recommends maintaining an alternative contact method for business-critical communications.</p>

        <h2>13. Limitation of Liability</h2>
        <p>To the maximum extent permitted by Australian law, KarnaConnect's liability to you is limited to the amount you paid for the service in the 3 months preceding the claim.</p>
        <p>KarnaConnect is not liable for:</p>
        <ul>
          <li>Missed calls or lost business opportunities</li>
          <li>Errors or inaccuracies in AI-generated call summaries or transcripts</li>
          <li>Actions taken based on AI-generated content</li>
          <li>Third-party service outages</li>
          <li>Indirect, consequential, or special damages</li>
        </ul>
        <p>Nothing in these terms excludes rights under the Australian Consumer Law that cannot be excluded.</p>

        <h2>14. AI Disclaimer</h2>
        <p>Mash uses artificial intelligence to handle telephone calls. You acknowledge that:</p>
        <ul>
          <li>AI responses may not always be accurate, complete, or appropriate for every situation</li>
          <li>Mash is not a substitute for human judgement in critical business decisions</li>
          <li>Call summaries and transcripts are AI-generated and may contain errors</li>
          <li>You should review AI-generated content before acting on it</li>
          <li>KarnaConnect is not liable for decisions made based on AI-generated content</li>
        </ul>

        <h2>15. Modifications to the Service and Terms</h2>
        <p>KarnaConnect reserves the right to modify these Terms and Conditions at any time. We will notify you of material changes via email at least 14 days before they take effect.</p>
        <p>Continued use of Mash after changes take effect constitutes acceptance of the new terms. If you do not agree to the changes, you may cancel your subscription before the new terms take effect.</p>
        <p>KarnaConnect may also modify, update, or discontinue features of the Mash service at any time with reasonable notice.</p>

        <h2>16. Governing Law</h2>
        <p>These Terms and Conditions are governed by the laws of Western Australia, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Western Australia.</p>

        <h2>17. Dispute Resolution</h2>
        <p>If you have a complaint or dispute, please contact us first at info@karnaconnect.com.au. We will endeavour to resolve disputes within 14 business days.</p>
        <p>If we cannot resolve the dispute directly, either party may refer the matter to mediation before initiating legal proceedings.</p>

        <h2>18. Contact Information</h2>
        <p>For any questions regarding these Terms and Conditions:</p>
        <ul>
          <li><strong>Business:</strong> KarnaConnect</li>
          <li><strong>ABN:</strong> 84 924 272 443</li>
          <li><strong>Address:</strong> South Lake, Western Australia 6164</li>
          <li><strong>Email:</strong> info@karnaconnect.com.au</li>
        </ul>
      </div>

      <footer>
        <div className="footer-text">© 2026 Mash · A KarnaConnect product · ABN 84 924 272 443 · South Lake WA 6164</div>
      </footer>
    </>
  )
}
