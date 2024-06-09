import React from 'react'

const Privacy = () => {
  return (
    <main className='flex justify-center my-3 mx-6'>
      <div className="flex flex-col justify-center">
        <h1 className='text-[24px] text-center font-extrabold'>PRIVACY POLICY</h1>
        <br />
        <p>SMTM Capital Pvt. Ltd. ("the company" or "we") is the owner of the website npstocks.com and the npstocks mobile application ("App" or "Services"). We are committed to your right to privacy and in keeping your personal and financial information secure. We encourage you to read this privacy statement to understand what types of personally identifiable information we collect and how we use this information. Failure to provide certain Personal Data may make it impossible for this Application to provide its services.</p>
        <br />
        <p className='font-bold text-lg'>What Information Do We Collect?</p>
        Personal information you directly provide to npstocks
        <ul className='list-disc ml-4'>
          <li>
            Personal contact information provided upon registration process of the app (Name, Email Address and Phone Number)
          </li>
          <li>
            Personal information provided while using the services (Avatar name, stocks in your watch-list, Portfolio and Investment Gameplay)
          </li>
          <li>
            Details of transaction for any payments made to access the services of the app.
          </li>
          <li>
            For error reports that you send us, we collect details of the error and other potential relevant information of your device (OS version and drivers)
          </li>
          <li>
            Details of the device on which you access the services (Device type, device id, operating system, network information)
          </li>
        </ul>
        <br />
        <p className='font-bold text-lg'>What do we do with the collected data?</p>
        <ul className='list-disc ml-4'>
          <li>User Authentication: Email address and phone numbers are used to verify the authentication of user at each login in</li>
          <li>User Personalization: Preferences, customization and activity inside the app are stored and retrieved to provide a personalized experience</li>
          <li>Notification: Push notifications, alerts and email communication such as newsletter, news, information about app are sent to personal information provided by user</li>
          <li>Analytics: app uses the information collected on its own to learn and analyse how npstocks is used. We use this information to make improvements to the app from data collected</li>
          <li>Collective Intelligence: We collect the information gathered from investment gameplay only to generate collective knowledge based on aggregated information. The collective intelligence so generated may be used to generate ideas/suggestions for you as well as other users of the application based on the aggregated analytics.</li>
        </ul>
        <br />
        <p className="font-bold text-lg">Third-Party services</p>
        <p>App uses Esewa and Himalyan Bank payment gateway as our third party payment solutions. We advise users to visit their relevant pages to learn more about privacy policy applicable to them</p>
        <br />
        <p className="font-bold text-lg">When do we share the information collected?</p>
        There are very few specific circumstances when your information is shared outside of the company, these circumstances include but are not limited to:
        <ul className="list-disc ml-4">
          <li>Service Providers: we employ third party services to send SMS, Push Notifications and Emails. The third parties have access to specific information only for the purpose of fulfilling tasks on our behalf</li>
          <li>Investment Game: We use you Avatar name in public materials should you win the Investment game</li>
          <li>Payment processors: When you conduct a transaction to use our services, we share relevant personal information with third party payment processors in order to process your payment</li>
          <li>Money Transfer: Should you win at investment game in the app, we will be required to process the transfer in accordance with the third party money transfer services requirements which might include name and account details to which monies will be transferred to</li>
        </ul>
        <p>In event that we undergo merger, acquisition, sale of a portion of our assets, Users personal information will, in most instances, be part of the assets transferred.</p>
        <br />
        <p className="font-bold text-lg">Notices</p>
        <ul className="list-disc ml-4">
          <li>The app does not knowingly collect information from children under the age of 13.</li>
          <li>Your personal information is retained for as long as necessary to fulfill the purposes outlined in this privacy policy.</li>
          <li>We use all reasonable means to safeguard data against unauthorized use and theft.</li>
          <li>We may at any time change this Privacy Policy to reflect any changes in our practices, service offerings, or market regulations.</li>
        </ul>
      </div>
    </main>
  )
}

export default Privacy