import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text4">Data Engineering</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Tailored Data Warehouse and Data Lake design
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text6">Murex Consulting</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text3">
                      Expertise in Murex Consulting services
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text2">Advanced Analytics</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text1">
                      Specialized in AI and Deep Learning solutions
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature1ImgAlt: 'Data Analytics',
  feature3Description: undefined,
  feature3Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1582721208866-79d0a87cc09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDI4NjczMHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1632560354926-21886c0e811c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDI4NjczMHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'AI and Deep Learning',
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1543330161-9639ecc037db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDI4NjczMHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgAlt: 'Murex Consulting',
  feature2Title: undefined,
}

Features24.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features24
