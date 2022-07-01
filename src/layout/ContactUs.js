import React, { lazy, Suspense, useState } from 'react'
import './ContactUs.scss'
import './ContactUsTablet.scss'
import './ContactUsMobile.scss'
import Dropdown from '../components/Dropdown/Dropdown'
import countries from '../shared/countries'

const Input = lazy(() => import('../components/Input/Input'))



export const ContactUs = () => {
    const [industry, setIndustry] = useState(null)



    const composeIndustryItems = () => {
        return countries.map(country => {
            return {
                label: country.name,
                value: country.code
            }
        })
    }

    return (
        <div className='contact-us'>
            <div className='background'></div>
            <h4>Contact us</h4>


            <div className='contact-info'>
                <div className='item'>
                    <p>Media enquiries:</p>
                    <a href="mailto:press@tuumplatform.com">press@tuumplatform.com</a>
                </div>
                <div className='item'>
                    <p>Career questions:</p>
                    <a href="mailto:careers@tuumplatform.com">careers@tuumplatform.com</a>
                </div>
            </div>

            <form>
                <Suspense fallback={null}>

                    <div className='split'>
                        <div className='field'>
                            <Input name="first-name" placeholder="First name" required type="text" />
                        </div>
                        <div className='field'>
                            <Input name="last-name" placeholder="Last name" type="text" />
                        </div>
                        <div className='field'>
                            <Input name="email" placeholder="Email" required type="text" />
                        </div>
                        <div className='field'>
                            <Input name="job-title" placeholder="Job title" type="text" />
                        </div>
                        <div className='spacer'></div>
                        <div className='field'>
                            <Input name="company-name" placeholder="Company name" required type="text" />
                        </div>
                        <div className='field'>
                            <Dropdown items={composeIndustryItems()} isCountries onChange={setIndustry} />
                        </div>

                    </div>

                </Suspense>
            </form>




        </div>
    )
}
