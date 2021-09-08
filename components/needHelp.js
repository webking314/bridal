import {
  RiPhoneLine,
  RiChatSmile2Line,
  RiStore2Line,
  RiUser3Line,
  RiMailLine,
} from "react-icons/ri";

export default function NeedHelp() {
  return (
    <div className="help-section r-container">
      <div className="pink-circle" />
      <div className="blue-circle" />
      <div className="row m-0">
        <div className="col-md-4 col-12 title-panel p-0 pe-md-5 pb-md-0 pb-5">
          <h2>Need help completing your order?</h2>
          <p>Please contact our diamond specialists:</p>
        </div>
        <div className="col-md-4 col-12 p-0 ps-md-3 help-items">
          <div className="px-5 py-4 blue-text mb-4 text-uppercase">
            <RiPhoneLine className="me-4" />
            +31 (0) 203055 555
          </div>
          <div className="px-5 py-4 blue-text mb-4 text-uppercase">
            <RiChatSmile2Line className="me-4" />
            Live chat
          </div>
          <div className="px-5 py-4 blue-text mb-4 text-uppercase">
            <RiStore2Line className="me-4" />
            Find a showroom
          </div>
        </div>
        <div className="col-md-4 col-12 p-0 ps-md-3 help-items">
          <div className="px-5 py-4 blue-text mb-4 text-uppercase">
            <RiStore2Line className="me-4" />
            Online Consultation
          </div>
          <div className="px-5 py-4 blue-text mb-4 text-uppercase">
            <RiUser3Line className="me-4" />
            book an appointment
          </div>
          <div className="px-5 py-4 blue-text mb-4 text-uppercase">
            <RiMailLine className="me-4" />
            Send as a email
          </div>
        </div>
      </div>
    </div>
  );
}
