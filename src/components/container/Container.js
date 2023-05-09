import './container.css'

import React from 'react'

const Container = () => {
    return (
        <div className="container">
            <div className="banner">
                <img
                    src="https://www.simplyrecipes.com/thmb/o-GeW4f0lWCd_bKsb1cwN_0Eek0=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRE_TopOfClass_LeadBanner_4000x1700_Ver1_R3-Final-308b6c18bd2e42e499e55062738c6e30.JPG"
                    alt="Lead Banner"
                />
            </div>
            <div className="card-wrapper">
                <div className="card-content">
                    <div className="card-title">Top of the Class</div>
                    <div className="card-description">
                        Let's celebrate our graduates and the community that supported them along the way.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
