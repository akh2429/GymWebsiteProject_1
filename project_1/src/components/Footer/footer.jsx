import styled from "./footer.module.css";
import { BiDumbbell } from "react-icons/bi";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";
function Footer() {
  return (
    <div className={styled.footer}>
      <div className={styled.socialMedia}>
        <span className={styled.footerLogo}>
          <BiDumbbell />
        </span>
        <div></div>
        <h5>Lorem ipsum dolor sit amet consectet</h5>
        <div className={styled.socialMediaLogo}>
          <TiSocialTwitter />
          <TiSocialFacebook />
          <TiSocialInstagram />
        </div>
      </div>
      <div className={styled.links}>
        <ul>
          <b>Healthy Living</b>
          <li>Lorem </li>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <ul>
          <b>Services</b>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
        </ul>
        <ul>
          <b>Programs</b>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem ipsum </li>
        </ul>
      </div>
      <div className={styled.rights}>
        <strong>Copyright 2023 Chisel Fitness LLP</strong> | All Rights Reserved
        | Powered by- Function up
      </div>
    </div>
  );
}
export default Footer;
