import "./Topbar.scss"
import EmailIcon from '@material-ui/icons/Email';

export default function Topbar({openmenu,setopenmenu}) {
    return (
        <div className={"topbar " + (openmenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Anshul</a>
                    <div className="itemcontainer">
                        <EmailIcon className="icon"/>
                        <span>anshulraj9823@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="resumebutton">
                        <a href="assets/Resume.pdf" target='_blank' className='btn-2'>Resume</a> 
                    </div>
                    <div className="hamburger" onClick={()=>setopenmenu(!openmenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>    
                        <span className="line3"></span>
                    </div> 
                </div>
            </div>
        </div>
    )
}
