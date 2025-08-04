import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dependable Elaborate Oryx</title>
        <meta property="og:title" content="Dependable Elaborate Oryx" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Let&apos;s get in touch</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Learn More</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">/services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">/</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">/contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Welcome to MapleNyx Consulting</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Our Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">/about</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Get to know us better</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Contact Us</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Empowering Your Business with Data
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              MapleNyx Consulting provides expert IT consulting services in Data
              Analytics, Data Engineering, Advanced Analytics, Murex Consulting,
              Digital Transformation, and more. Let us help you unlock the full
              potential of your data.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Specialized in AI and Deep Learning solutions
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Advanced Analytics</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Expertise in Murex Consulting services
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Data Engineering</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Tailored Data Warehouse and Data Lake design
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Murex Consulting</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to transform your business with cutting-edge IT solutions?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact MapleNyx Consulting today to discuss how our expertise in
              Data Analytics, AI, Digital Transformation, and more can help your
              business thrive.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Drive innovation and efficiency through digital technologies and
              strategies.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Leverage data to gain valuable insights and make informed business
              decisions.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Advanced Analytics</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Data Analytics</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Utilize AI and Deep Learning techniques to extract meaningful
              patterns from data.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Digital Transformation</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$49/mo</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get Started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Dashboard Development</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature text goes here</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature text goes here</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic Plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Customized Solutions</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">24/7 Support</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$29/mo</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Regular Updates</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Data Warehouse Design</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$5000/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Data Analytics</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$500/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              We start by understanding your business needs and goals to tailor
              our IT consulting services accordingly.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              We seamlessly integrate the proposed solutions into your existing
              systems ensuring a smooth transition and minimal disruption.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Customized Solutions</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Our team of experts will design customized solutions in Data
              Analytics, Data Engineering, AI, Murex Consulting, and more to
              meet your specific requirements.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Initial Consultation</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">
              Implementation &amp; Integration
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              We provide ongoing support and maintenance to ensure that your IT
              infrastructure remains optimized and up-to-date.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Continuous Support</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">AI Specialist</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Data Analyst</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Michael Lee</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              I highly recommend MapleNyx Consulting for anyone looking to
              implement AI solutions. They are professional and deliver results
              beyond expectations.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Emily Johnson</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Data Warehouse Architect</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              MapleNyx Consulting helped us streamline our data analytics
              process, resulting in significant cost savings and improved
              efficiency.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Digital Transformation Manager</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Great experience working with MapleNyx Consulting. Their expertise
              in data engineering is unmatched.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              MapleNyx Consulting played a crucial role in our digital
              transformation journey. Their insights and support were
              invaluable.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Working with MapleNyx Consulting on our data warehouse design was
              a game-changer. Their expertise and attention to detail are
              commendable.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Feel free to reach out to us for any inquiries or to discuss how
              MapleNyx Consulting can help your business with our IT consulting
              services.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">123 Main Street, City, Country</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              456 Business Avenue, Town, Country
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Branch Office</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Digital Transformation</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">
              Advanced Analytics (AI and Deep Learning)
            </span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Data Analytics</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Data Engineering</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Murex Consulting</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
