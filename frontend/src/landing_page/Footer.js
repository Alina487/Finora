import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/finora-logo.png"
              style={{ width: "130px" }}
            />
            <p className="text-muted">&copy; 2010 - 2026, Finora Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col d-flex flex-column" style={{fontSize:"16px", gap:"0.75rem"}}>
            <h5 className="">Company</h5>
            <a href="" className="text-decoration-none text-muted">About</a>            
            <a href="" className="text-decoration-none text-muted">Products</a>       
            <a href="" className="text-decoration-none text-muted">Pricing</a>           
            <a href="" className="text-decoration-none text-muted">Referral programme</a>           
            <a href="" className="text-decoration-none text-muted">Careers</a>            
            <a href="" className="text-decoration-none text-muted">Finora.tech</a>       
            <a href="" className="text-decoration-none text-muted">Press & media</a>           
            <a href="" className="text-decoration-none text-muted">Finora cares (CSR)</a>           
          </div>
          <div className="col d-flex flex-column" style={{fontSize:"16px", gap:"0.75rem"}}>
            <h5 className="">Support</h5>
            <a href="" className="text-decoration-none text-muted">Contact us</a>         
            <a href="" className="text-decoration-none text-muted">Support portal</a>          
            <a href="" className="text-decoration-none text-muted">Z-Connect blog</a>      
            <a href="" className="text-decoration-none text-muted">List of charges</a>      
            <a href="" className="text-decoration-none text-muted">Downloads and resources</a>
            <a href="" className="text-decoration-none text-muted">Bulletin</a>
            <a href="" className="text-decoration-none text-muted">Circular</a>
            <a href="" className="text-decoration-none text-muted">Downloads</a>
          </div>
          <div className="col d-flex flex-column" style={{fontSize:"16px", gap:"0.75rem"}}>
            <h5 className="">Account</h5>
            <a href="" className="text-decoration-none text-muted">Open an account</a>        
            <a href="" className="text-decoration-none text-muted">Fund transfer</a>
            <a href="" className="text-decoration-none text-muted">60 day challenge</a>
            <a href="" className="text-decoration-none text-muted">NRI demat account</a>
            <a href="" className="text-decoration-none text-muted">Commodity</a>
            <a href="" className="text-decoration-none text-muted">Dematerialisation</a>
            <a href="" className="text-decoration-none text-muted">Fund transfer</a>
            <a href="" className="text-decoration-none text-muted">MTF</a>    
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "12px"}}>
          <p>
            Finora Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Finora Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Finora Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@finora.com, for DP
            related to dp@finora.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Finora and
            offering such services, please create a ticket here.
          </p>
        </div>
        <div className="d-flex justify-content-center gap-4 mb-4" style={{ fontSize: "13px" }}>
            <a href='#' className="text-muted text-decoration-none">NSE</a>
            <a href='#' className="text-muted text-decoration-none">BSE</a>
            <a href='#' className="text-muted text-decoration-none">MCX</a>
            <a href='#' className="text-muted text-decoration-none">MSEI</a>
            <a href='#' className="text-muted text-decoration-none">Terms & conditions</a>
            <a href='#' className="text-muted text-decoration-none">Policies & procedures</a>
            <a href='#' className="text-muted text-decoration-none">Privacy policy</a>
            <a href='#' className="text-muted text-decoration-none">Disclosure</a>
            <a href='#' className="text-muted text-decoration-none">For investor's attention</a>
            <a href='#' className="text-muted text-decoration-none">Investor charter</a>
            <a href='#' className="text-muted text-decoration-none">Sitmap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
