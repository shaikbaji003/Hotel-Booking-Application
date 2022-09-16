import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Baji Shaik</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                           
                                <a href='https://github.com/shaikbaji003'>
                                <DiGithubBadge className="connect text-dark" /></a>                         
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer