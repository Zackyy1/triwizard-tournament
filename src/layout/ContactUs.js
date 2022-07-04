import React, { lazy, Suspense, useEffect, useRef, useState } from "react"
import "./ContactUs.scss"
import "./ContactUsTablet.scss"
import "./ContactUsMobile.scss"

import Functions from "../shared/Functions"
import PopOver from "../components/PopOver/PopOver"

const CustomCheckbox = lazy(() => import("../components/CustomCheckbox/CustomCheckbox"))
const Link = lazy(() => import("../components/Link/Link"))
const Input = lazy(() => import("../components/Input/Input"))
const Dropdown = lazy(() => import("../components/Dropdown/Dropdown"))

const contactInfo = {
  pressEmail: 'press@tuumplatform.com',
  careerEmail: 'careers@tuumplatform.com'
}

export const ContactUs = () => {
  const [industry, setIndustry] = useState(null)
  const [country, setCountry] = useState(null)
  const [operatingGeography, setOperatingGeography] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [inquiry, setInquiry] = useState(null)
  const [email, setEmail] = useState(null)
  const [jobTitle, setJobTitle] = useState(null)
  const [company, setCompany] = useState(null)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [newsletter, setNewsletter] = useState(false)
  const [formDisabled, setFormDisabled] = useState(termsAccepted === true)
  const [formSent, setFormSent] = useState(false)

  const formRef = useRef(null)

  useEffect(() => {
    setFormDisabled(!termsAccepted)
  }, [termsAccepted])


  const handleSubmit = (event) => {
    event.preventDefault()
    const result = {
      'first-name': firstName,
      'last-name': lastName,
      'email': email,
      'job-title': jobTitle,
      company,
      industry,
      country,
      operatingGeography,
      inquiry,
      termsAccepted,
      newsletter
    }

    setFormSent(true)

    console.log('Sending this somewhere...\n\n', Functions.convertObjectIntoURLParameters(result, false, true))
  }

  return (
    <div className="contact-us" id="contactUs">

      <PopOver onCloseButtonClick={() => window.location.reload()} formRef={formRef} condition={formSent}>

        <div className="heading">All good!</div>
        <div className="text">
          <div>
            Thank you for your interest! You can close this form by pressing “&times;” on the top right corner.
          </div>
          <div>
            P.S. Check DevTools console!
          </div>
        </div>

      </PopOver>

      <Suspense fallback={null}>

        <div className="background"></div>
        <h4>Contact us</h4>

        <div className="contact-info">
          <div className="item">
            <p>Media enquiries:</p>
            <Link href={`mailto:${contactInfo.pressEmail}`} target={"_blank"}>
              {contactInfo.pressEmail}
            </Link>
          </div>
          <div className="item">
            <p>Career questions:</p>
            <Link href={`mailto:${contactInfo.careerEmail}`} target={"_blank"}>
              {contactInfo.careerEmail}
            </Link>
          </div>
        </div>

        <form ref={formRef} onSubmit={(event) => handleSubmit(event)}>
          <div className="split">
            <Input
              onChange={setFirstName}
              name="first-name"
              placeholder="First name"
              required
              type="text"
            />
            <Input onChange={setLastName} name="last-name" placeholder="Last name" type="text" />
            <Input onChange={setEmail} name="email" placeholder="Email" required type="email" />
            <Input onChange={setJobTitle} name="job-title" placeholder="Job title" type="text" />
            <div className="spacer"></div>
            <Input onChange={setCompany}
              name="company"
              placeholder="Company name"
              required
              type="text"
            />
            <Dropdown
              required
              name={"industry"}
              label={"Industry"}
              items={Functions.composeIndustryItems()}
              onChange={setIndustry}
            />
            <Dropdown
              required
              name={"country"}
              label={"Country"}
              items={Functions.composeCountryItems()}
              isCountries
              onChange={setCountry}
            />
            <Dropdown
              label={'Operating geography'}
              name={"operatingGeography"}
              items={Functions.composeGeographyItems()}
              onChange={setOperatingGeography}
            />
            <Input
              onChange={setInquiry}
              textarea
              name="inquiry"
              label={"What would you like to talk about?"}
            />

            <div className="checkboxes">
              <CustomCheckbox
                name={'termsAccepted'}
                required
                onChange={setTermsAccepted}
                label={
                  <>
                    By submitting this form I accept{" "}
                    <Link
                      target={"_blank"}
                      rel={"noreferrer"}
                      href="/privacy-policy/"
                    >
                      privacy policy and cookie policy
                    </Link>
                    .
                  </>
                }
              />
              <CustomCheckbox
                onChange={setNewsletter}
                name={'newsletter'}
                label={"I would like to receive your newsletter."}
              />
            </div>

            <button disabled={formDisabled} type="submit" aria-label="Submit form">Submit form</button>

          </div>
        </form>
      </Suspense>
    </div>
  )
}
