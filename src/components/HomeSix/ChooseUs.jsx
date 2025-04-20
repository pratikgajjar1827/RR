import React from 'react';
import { Link } from 'react-router-dom';
import ChooseUsImage from '../../assets/images/choose/choose-image.jpg'; 

function ChooseUs() {
    return (
        <>
        <section className="choose-area pt-130 pb-130">
            <div className="container">
                <div className="row g-5 g-xxl-0">
                    <div className="col-lg-6">
                        <div className="choose__image wow gsap__parallax">
                            <img src={ChooseUsImage} alt="image"/>
                            <div className="icon">
                                <svg width="184" height="193" viewBox="0 0 184 193" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_1349_5784)">
                                        <g clipPath="url(#clip0_1349_5784)">
                                            <path
                                                d="M181.289 66.0128C181.289 53.1854 167.591 33.2092 164.628 29.508C146.314 10.4951 122.026 0 96.1823 0C47.3627 0 6.84958 37.7723 0.0488281 86.7497C12.2581 73.2715 20.7426 60.7906 33.7612 57.1401C55.3293 51.1067 80.1521 62.413 107.501 90.704C107.792 91.0084 108.084 91.3129 108.424 91.6166L109.347 92.6305C117.071 102.568 128.535 108.247 140.776 108.247C163.122 108.247 181.289 89.2844 181.289 66.0128Z"
                                                fill="white" fillOpacity="0.49" />
                                        </g>
                                        <path
                                            d="M46.992 64.8975C20.8397 69.9218 7.49118 96.2995 4.08594 108.86C9.53433 138.169 35.959 195.949 98.0707 192.599C65.3804 185.9 66.7425 135.378 71.5098 110.954C56.7991 102.58 49.0352 76.7605 46.992 64.8975Z"
                                            fill="white" fillOpacity="0.49" />
                                        <path
                                            d="M80.203 121.827C98.2382 135.847 141.718 159.812 175.712 146.543C95.6201 216.883 78.6677 159.374 80.203 121.827Z"
                                            fill="white" fillOpacity="0.49" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_1349_5784" x="-20" y="-20" width="223.883"
                                            height="232.738" filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                                            <feComposite in2="SourceAlpha" operator="in"
                                                result="effect1_backgroundBlur_1349_5784" />
                                            <feBlend mode="normal" in="SourceGraphic"
                                                in2="effect1_backgroundBlur_1349_5784" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_1349_5784">
                                            <rect width="183.883" height="108.861" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-right">
                            <div className="section-header">
                                <h6>WHY CHOOSE US</h6>
                                <h2 className="wow splt-txt" data-splitting>We're building the future together—join us.
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">On the other
                                    hand, we denounce with righteous indignation and dislike men who are so
                                    beguiled and demoralized by the
                                    charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
                                    pain and trouble.</p>
                            </div>
                            <Link to="/page-about" className="btn-two mt-40 wow fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                        </div>
                    </div>
                </div>
                <div className="choose__wrp">
                    <div className="row g-4">
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="choose__item">
                                <div className="icon mb-20">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="50" height="50" fill="url(#pattern0_1095_35666)" />
                                        <defs>
                                            <pattern id="pattern0_1095_35666" patternContentUnits="objectBoundingBox"
                                                width="1" height="1">
                                                <use strokeWidth="#image0_1095_35666" transform="scale(0.0163934)" />
                                            </pattern>
                                            <image id="image0_1095_35666" width="61" height="61"
                                                strokeWidth="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="/page-about" className="hover-link-light">Global
                                            Growth</Link></h4>
                                    <p className="text">At vero eos et accusamus et iusto odio dignissimos duci</p>
                                </div>
                                <Link to="/page-about" className="arrow-btn mt-20"><i
                                        className="fa-thin fa-arrow-up-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="choose__item light">
                                <div className="icon mb-20">
                                    <svg width="69" height="50" viewBox="0 0 69 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="69" height="50" fill="url(#pattern0_1095_35651)" />
                                        <defs>
                                            <pattern id="pattern0_1095_35651" patternContentUnits="objectBoundingBox"
                                                width="1" height="1">
                                                <use strokeWidth="#image0_1095_35651"
                                                    transform="matrix(0.0135135 0 0 0.0186486 0 -0.00351351)" />
                                            </pattern>
                                            <image id="image0_1095_35651" width="74" height="54"
                                                strokeWidth="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA2CAYAAABgMA/LAAAAAXNSR0IArs4c6QAACcNJREFUaEPdm3+MHGUZx7/Pu3v0xJPe7c7MHhVjoxdQ+odV0yjQ0vY4bHsFEbCkVMCi+Itggv9o/PGXGmNiiPqHldCGACa2itAKtlQlxZaqKQ0JVjQqMRZzNrczs7N3x6U9r7vvY969mb3Z+bE7ezt7d/L+s5l33nln3s98n+d93uedJXS59BUKxiVSfpGAtYA4dXFFz56psTEn6rb5QuEWMO9Q56SkA2W7+KuodpddcUUuOzP7ABGvY6KXZ4n2TBeLZjeHQt3sPDc4uAZV+SKAAd99xmVGXDMxPn7Wf++8Zuxhwhf8dcT4cck27/fX6bo+VAWpPgd99WVkxAZnfPwv3RpP10DFQPLGMSYzYoMHK6fr3wfowehB8g8cy/qSOtc/OLhaVOUfA5C8y7oKqyug+g3jfYLxgk9JMwT+JoO+U4fBeB2ysp4yPQ8w+CtePYGfZYgMwKPzdfTdalY8LCqVFwF6h6/+Gwz+dr1PgsPA5rJpnklbWamDioIkwVsmLOtEv6ZtFCSOALjUHcgkgJW+ge53THOXOs7p+n6AdvoGPKFE5R6flyxHJ2z7uKZpmyWJY34zlITNE6b5pzRhpQoqwtwugDDimOYfvIfWNO2DksTzvkG7p+hRxyreB4C9ipxe2AfwpwIDnhAsR2zbftmr79cGN2VIHmVghVuXuhmmBqpf19cKkHqznuOe8ZQUfLM53XgSwMf99YLlVbZt/8Nfp2naVZLE3xqv5wOOZd0Z7LNf168XoF8D6PVgpamsVEAlUZKnkgHdeIyAeyLMomE2jJnd5i4j7HVM87OhF2AY14Kh1PqWtJXVMShXScpxe/5jhsEfKVuWmsIbSk7X9wKkzMsrvwdwne/4P1VBGxSKjGRlrgXfOXV8rXdMjIdLttkQTqhzrh886lPWhCRs6tRndQSqX9ffL0DHAbzNHUA7kJ5zLHNU+RdB8nDdwavZkJAF8Ha3z7rjzunGcwC2toQVNsOOYS0YlKskBeky98FDjruJuf3WscztAC6qNvEOHkHH3ZPTDQX1xrrS5szwc75JoHYql7IZLghUjJJuLFvWyQhz2wfQp+fr6YhjFRWkoFneAdDPGmt5h2NZvwi3NVSIsW2+nvc5lvWZYLsIBz8hwZsnLOuVYNtWx22DilDSNAhb/CFAvJLosGMVb/WU5D2cO7spyFrggW3Bcr1t238P1IeUxcATZcvc3S1ltQXKVZIKATzHPU2CRkrF4qnQWzeMR8Cov2Vm/LJsmx8LtsvnL38vRPU4A7rn59xfb5o3SVY3lkqlQJgA5HX9GQbd7DPDR1wzbLjNgGFcRwwVOrzVPVFmQRvLxeKfWymp7g+TNoxSEkkxXCqNnw70QeEQoKYkBanibxulJMlis2oTCCCXXFmJFLUYkAj4b5XF1gl7/HcKVES03QRW4SDAdb/XjhlK8HASn9US1FJA8lTXBqxsTi8cWiCsKQne2ApWU1BLCWkRYCmf1efepyWsWFDLAVI3YeXzg+tYSDUxJYIVCWo5QVousEKgIiBNkRQjac5uQcedeOYNp1PiHHxin5VUWQ2goiDFOLqIEAAHHcu8I0EIcEGyGPVmt6SQllpZdVApQFK7J9UWcVLcerAtXt2YDVspqwbq/wnSUimL8vn8e1hkXvKlSiYFyxv8qVbv4XKBZQlATzpWUZlbQ3EjbpVryrsnzkvwNpU3b0s6LRq7+XKVTfASdaUK+Jopy3oteOmAZhwkQn0JFbUVpq7JFQofhuTf+Hi8IViuo5xmPA/CDb710r+J6V/BGzFYqe/6QP1JAjWYmzrPzKtBeKev7TkChR4+DWgMvhLA5b6+zhLo9YjnVzkuf5JQNTlBIC9HX7+EId/l3+0BcJRyujHlo5fGs78Z+5hUinoVhDVvxtGlOKYzNKAVbiLiZ32dnhEsH6wgG5IkkXyIgA94bQn8tSpn1M5tQyEhrybGj3yVr5Gg+6tVasgedDoQIWSP8jUMvNvri1l+npEN5q+QIV7P4G/N35NPS858OfgMmQxnuMo/9IuHwaO1WS9vGPcw47Ha/kat1LaE7gpO97lc7jJksir9u9a9wXRMqkX1eSsz1LZUZq5tdKqlA1jB5F2VCDtKpnkw2GdEWvgVVCsbHcdRbsdfMu5Wmkou1kAQYXfJNJ+ox1FhWLUAMhQbLRNYiwqp9pr9ODuBFZMO7oayFh1SCFS0GSZWVmzUHWOGodx5AjNcEkiRoBYPFhq2rJYzpFhQyxDWkinJe4FNM5wd+Kw2zLClsroBKZvTjZ8DCM1uccpumTNfSlhDQ0MrnMkpFeN5O8OxIYC7Na82Rr11X1wIEMxV1UOAZubfEtRSmaGCVJqcPEqgTe4AmkJq3N7i06hWRyLipBAkZtpVtosHWvnIRKAWG9bQ0JDoBFIGGLYsazow+AVDaurMowj36/q9AvTo/LnoNMvAwMBKZHuO+ZY75xm8JerbhAGtsJOI9/v6PALiXjCG5+uiv0EIpVkILwlZ+xrvjVB0rhtPAbht3jnz7pJlPd5KSYmceVQnMT4rlAKOiODbcfDerdsyt24oacGg1IVhZeEpxzIbPjVU7dpRVk4r3Afivf6XQ+B7S5al1qANZWW+MJwRrBJ2c98nNFFSKGFH+KRauyVVUkegon1W9KI3SlnBzYVVq1ZdOjNbOQbChxoGwDjVe0l2+Ny5c+e9+nC+nE93U0kdg4pR1tOOZd4efFsRyrogWG63bfuFGqSLFbVru969bsb3WaGqOtnbk92iYLWppENEuKU+0AUqKRVQNfOac8Y/nV9gJ1aWymJsA+jrPkhuXc2e1GeIc4VwDMzfa6hDrJJ6cnrDRxucNARoZo6Jw4NmnXQGq95zBeCbHctSH6qqD/K3AqSCTZXrDpRmkBo+XUwF0ty7Sql0CKsimG637eIz/sfRtMJHJfHT88k/dXbxIaUKKqkZ6rreV2VSOz9+x50cFONUhngkEFAG14OpKSk1HxVy3E18VuzsNtdJctNrnA27Dil1RXnQIqLtw6he3IVMVsU+3uwGBm8n0FeTOHNmfohA6nqvnBQsRyUJFXHXP6dmpjuTrN3a9Tip+aiQsgzjLmL8xFfv/3dUbXZTjtsND5QDV/9YUCUYHpzo7cluU+GB6+DnZ0OgoU9m+kTZLqoZOPXSNVDRPitsYqqmnYAzZjZM3ScFSXcVlLpZ3jBu4zllqf/olUHY6Zim2ttvKMrJS2A/g25SJ5hxKEt8d0QWQP0rYQsYKvGm/jUxTYS7S6Z5KHUZ+TrsOihPMbOzs1f39fW9evbsWWVasUXTtCsvClGdNM1/Nmu3evXq3unp6TW9vb1/HRsbu9BNSKrv/wGaR6+2E+SCwgAAAABJRU5ErkJggg==" />
                                        </defs>
                                    </svg>

                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="/page-about" className="hover-link">Global Growth</Link>
                                    </h4>
                                    <p className="text">At vero eos et accusamus et iusto odio dignissimos duci</p>
                                </div>
                                <Link to="/page-about" className="arrow-btn mt-20"><i
                                        className="fa-thin fa-arrow-up-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="choose__item">
                                <div className="icon mb-20">
                                    <svg width="69" height="50" viewBox="0 0 69 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="69" height="50" fill="url(#pattern0_1095_35636)" />
                                        <defs>
                                            <pattern id="pattern0_1095_35636" patternContentUnits="objectBoundingBox"
                                                width="1" height="1">
                                                <use strokeWidth="#image0_1095_35636"
                                                    transform="matrix(0.0133333 0 0 0.0184 0 -0.1348)" />
                                            </pattern>
                                            <image id="image0_1095_35636" width="75" height="69"
                                                strokeWidth="data:image/png;base64,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" />
                                        </defs>
                                    </svg>

                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="/page-about" className="hover-link-light">Business
                                            Acumen</Link></h4>
                                    <p className="text">At vero eos et accusamus et iusto odio dignissimos duci</p>
                                </div>
                                <Link to="/page-about" className="arrow-btn mt-20"><i
                                        className="fa-thin fa-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default ChooseUs